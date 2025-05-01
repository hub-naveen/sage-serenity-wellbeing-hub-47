
# HealthHub API Backend

This is a FastAPI backend template designed to complement the HealthHub frontend application.

## Setup Instructions

1. **Create a virtual environment**:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies**:
   ```
   pip install -r requirements.txt
   ```

3. **Environment Variables**:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=sqlite:///./healthhub.db
   SECRET_KEY=your_secret_key_here
   ```

4. **Initialize the database**:
   ```
   alembic revision --autogenerate -m "Initial migration"
   alembic upgrade head
   ```

5. **Start the API server**:
   ```
   python main.py
   ```
   The API will be available at http://localhost:8000

6. **API Documentation**:
   - Swagger UI: http://localhost:8000/docs
   - ReDoc: http://localhost:8000/redoc

## Project Structure

- **main.py**: Entry point of the application
- **models.py**: SQLAlchemy ORM models
- **schemas.py**: Pydantic schemas for request/response validation
- **database.py**: Database configuration and connection handling
- **routers/**: API route modules organized by functionality
  - **auth.py**: Authentication routes (login, signup, etc.)
  - **users.py**: User management
  - **health_records.py**: Health record management
  - **appointments.py**: Doctor appointment handling
  - **disease_predictor.py**: Disease prediction and risk assessment
  - **diet.py**: Diet planning and nutrition
  - **fitness.py**: Fitness tracking and workout plans
  - **risk_assessment.py**: Health risk analysis

## API Endpoints

The API provides endpoints for all the major functionality shown in the frontend:

- **Authentication**: User signup, login, logout
- **User Management**: Profile updates, role-based access
- **Health Records**: Create, read, update, delete personal health data
- **Appointments**: Schedule, manage, and track doctor appointments
- **Disease Prediction**: Analyze symptoms for potential diseases
- **Diet Planning**: Create meal plans, track nutrition, access recipes
- **Fitness Tracking**: Log exercises, generate workout plans
- **Risk Assessment**: Calculate health risks based on medical factors

## Security

This template implements:
- JWT-based authentication
- Password hashing
- Role-based access control
- Input validation

## Extending the API

To add new functionality:
1. Create new models in `models.py`
2. Define corresponding schemas in `schemas.py`
3. Add appropriate API routes in a new or existing router file
4. Include the router in `main.py`
