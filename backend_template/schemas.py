"""
Pydantic schemas for request/response models
"""
from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
from models import UserRole

# Auth schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class UserBase(BaseModel):
    email: EmailStr
    name: Optional[str] = None
    role: Optional[UserRole] = UserRole.patient

class UserCreate(UserBase):
    password: str

class UserUpdate(BaseModel):
    name: Optional[str] = None
    profile_completed: Optional[bool] = None

class UserResponse(UserBase):
    id: int
    profile_completed: bool
    created_at: datetime
    
    class Config:
        orm_mode = True

# Health record schemas
class HealthRecordBase(BaseModel):
    record_type: str
    value: float
    unit: str
    notes: Optional[str] = None

class HealthRecordCreate(HealthRecordBase):
    pass

class HealthRecordUpdate(BaseModel):
    value: Optional[float] = None
    notes: Optional[str] = None

class HealthRecordResponse(HealthRecordBase):
    id: int
    user_id: int
    recorded_at: datetime
    
    class Config:
        orm_mode = True

# Appointment schemas
class AppointmentBase(BaseModel):
    doctor_id: int
    appointment_time: datetime
    appointment_type: str
    notes: Optional[str] = None

class AppointmentCreate(AppointmentBase):
    pass

class AppointmentUpdate(BaseModel):
    appointment_time: Optional[datetime] = None
    status: Optional[str] = None
    notes: Optional[str] = None

class AppointmentResponse(AppointmentBase):
    id: int
    patient_id: int
    status: str
    
    class Config:
        orm_mode = True

# Diet plan schemas
class DietPlanBase(BaseModel):
    plan_name: str
    daily_calories: int
    protein_grams: int
    carbs_grams: int
    fat_grams: int
    start_date: datetime
    end_date: Optional[datetime] = None

class DietPlanCreate(DietPlanBase):
    pass

class DietPlanResponse(DietPlanBase):
    id: int
    user_id: int
    
    class Config:
        orm_mode = True

# Meal schemas
class MealBase(BaseModel):
    name: str
    calories: int
    time_of_day: str

class MealCreate(MealBase):
    pass

class MealResponse(MealBase):
    id: int
    diet_plan_id: int
    
    class Config:
        orm_mode = True

# Disease risk schemas
class DiseaseRiskBase(BaseModel):
    disease_name: str
    risk_score: float
    factors: Dict[str, Any]

class DiseaseRiskResponse(DiseaseRiskBase):
    id: int
    user_id: int
    assessed_at: datetime
    
    class Config:
        orm_mode = True

# AI Chat Schemas
class AIChatMessageInput(BaseModel):
    message: str = Field(..., min_length=1, description="User message to the AI chat bot")

class AIChatMessageOutput(BaseModel):
    response: str = Field(..., description="AI chat bot response")
