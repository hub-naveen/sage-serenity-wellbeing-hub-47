
"""
Database models for the HealthHub application
"""
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Float, DateTime, Table, Text, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime
import enum

Base = declarative_base()

class UserRole(str, enum.Enum):
    admin = "admin"
    doctor = "doctor"
    patient = "patient"

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    hashed_password = Column(String)
    role = Column(String, default=UserRole.patient)
    profile_completed = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    health_records = relationship("HealthRecord", back_populates="user")
    appointments = relationship("Appointment", back_populates="patient")
    doctor_appointments = relationship("Appointment", back_populates="doctor", foreign_keys="Appointment.doctor_id")

class HealthRecord(Base):
    __tablename__ = "health_records"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    record_type = Column(String)  # e.g., "blood_pressure", "heart_rate", "weight"
    value = Column(Float)
    unit = Column(String)  # e.g., "mmHg", "bpm", "kg"
    recorded_at = Column(DateTime, default=datetime.utcnow)
    notes = Column(Text, nullable=True)
    
    # Relationships
    user = relationship("User", back_populates="health_records")

class Appointment(Base):
    __tablename__ = "appointments"
    
    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("users.id"))
    doctor_id = Column(Integer, ForeignKey("users.id"))
    appointment_time = Column(DateTime)
    status = Column(String)  # "scheduled", "completed", "cancelled"
    appointment_type = Column(String)  # "consultation", "follow-up", "examination"
    notes = Column(Text, nullable=True)
    
    # Relationships
    patient = relationship("User", back_populates="appointments", foreign_keys=[patient_id])
    doctor = relationship("User", back_populates="doctor_appointments", foreign_keys=[doctor_id])

class DietPlan(Base):
    __tablename__ = "diet_plans"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    plan_name = Column(String)
    daily_calories = Column(Integer)
    protein_grams = Column(Integer)
    carbs_grams = Column(Integer)
    fat_grams = Column(Integer)
    start_date = Column(DateTime)
    end_date = Column(DateTime, nullable=True)
    
    # Relationships
    user = relationship("User")
    meals = relationship("Meal", back_populates="diet_plan")

class Meal(Base):
    __tablename__ = "meals"
    
    id = Column(Integer, primary_key=True, index=True)
    diet_plan_id = Column(Integer, ForeignKey("diet_plans.id"))
    name = Column(String)
    calories = Column(Integer)
    time_of_day = Column(String)  # "breakfast", "lunch", "dinner", "snack"
    
    # Relationships
    diet_plan = relationship("DietPlan", back_populates="meals")

class DiseaseRisk(Base):
    __tablename__ = "disease_risks"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    disease_name = Column(String)
    risk_score = Column(Float)  # 0-100
    factors = Column(Text)  # JSON string of risk factors
    assessed_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    user = relationship("User")
