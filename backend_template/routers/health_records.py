
"""
Health records management routes for HealthHub API
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from database import get_db
import models
import schemas
from routers.auth import get_current_user

router = APIRouter(
    prefix="/health-records",
    tags=["health records"],
)

@router.post("/", response_model=schemas.HealthRecordResponse)
async def create_health_record(
    record: schemas.HealthRecordCreate,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    db_record = models.HealthRecord(
        user_id=current_user.id,
        record_type=record.record_type,
        value=record.value,
        unit=record.unit,
        notes=record.notes
    )
    
    db.add(db_record)
    db.commit()
    db.refresh(db_record)
    
    return db_record

@router.get("/", response_model=List[schemas.HealthRecordResponse])
async def get_health_records(
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db),
    skip: int = 0,
    limit: int = 100,
    record_type: str = None
):
    query = db.query(models.HealthRecord).filter(models.HealthRecord.user_id == current_user.id)
    
    if record_type:
        query = query.filter(models.HealthRecord.record_type == record_type)
    
    records = query.offset(skip).limit(limit).all()
    return records

@router.get("/{record_id}", response_model=schemas.HealthRecordResponse)
async def get_health_record(
    record_id: int,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    record = db.query(models.HealthRecord).filter(
        models.HealthRecord.id == record_id,
        models.HealthRecord.user_id == current_user.id
    ).first()
    
    if record is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Health record not found"
        )
    
    return record

@router.put("/{record_id}", response_model=schemas.HealthRecordResponse)
async def update_health_record(
    record_id: int,
    record_update: schemas.HealthRecordUpdate,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    db_record = db.query(models.HealthRecord).filter(
        models.HealthRecord.id == record_id,
        models.HealthRecord.user_id == current_user.id
    ).first()
    
    if db_record is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Health record not found"
        )
    
    # Update record fields
    for field, value in record_update.dict(exclude_unset=True).items():
        setattr(db_record, field, value)
    
    db.commit()
    db.refresh(db_record)
    
    return db_record

@router.delete("/{record_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_health_record(
    record_id: int,
    current_user: models.User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    db_record = db.query(models.HealthRecord).filter(
        models.HealthRecord.id == record_id,
        models.HealthRecord.user_id == current_user.id
    ).first()
    
    if db_record is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Health record not found"
        )
    
    db.delete(db_record)
    db.commit()
    
    return None
