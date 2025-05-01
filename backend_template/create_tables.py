"""
Script to create database tables
"""
from database import engine
import models

def main():
    print("Creating database tables...")
    models.Base.metadata.create_all(bind=engine)
    print("Database tables created successfully.")

if __name__ == "__main__":
    main() 