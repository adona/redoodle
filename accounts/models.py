from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
import json

# Create your models here.

class UserManager(BaseUserManager):
  def create_user(self, email, password, first_name, last_name):
    if not email:
      raise ValueError('Email address required.')
    if not password:
      raise ValueError('Password required.')
    user = self.model(
      email=self.normalize_email(email),
      first_name=first_name,
      last_name=last_name)
    user.set_password(password)
    user.save()
    return user

class User(AbstractBaseUser):
  email = models.EmailField(unique=True)
  first_name = models.CharField(max_length=30)
  last_name = models.CharField(max_length=30)
  USERNAME_FIELD="email"
  objects = UserManager()
  def __str__(self):
    return f"{self.first_name} {self.last_name} ({self.email})"
  def toJSON(self):
    return json.dumps({"first_name": self.first_name, "last_name": self.last_name, "email": self.email})
