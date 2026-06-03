from pydantic import BaseModel, UUID4
from typing import Optional
from datetime import datetime


class Task(BaseModel):
    title: str
    description: str
    status: str


class CreateTaskSchema(BaseModel):
    title: str
    category: str
    priority: str
    estimated_time: int
    due_date: datetime
    user_id: UUID4


class CompleteTaskSchema(BaseModel):
    focus_score: int
    distraction_count: int
    user_id: UUID4


class User(BaseModel):
    first_name: str
    last_name: str
    email: str
    mobile_number: str
    password: str


class LoginRequest(BaseModel):
    email: str
    password: str
