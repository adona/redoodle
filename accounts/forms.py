from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.core.exceptions import NON_FIELD_ERRORS
from accounts.models import User
import re

class CustomAuthenticationForm(AuthenticationForm):
  username = forms.EmailField(error_messages={
      'required': 'Please, enter email.',
      'invalid': 'Invalid email. Try again, please.'
    })
  password = forms.CharField(error_messages={'required': 'Please, enter password.'})    
  error_messages = {
    "invalid_login": 'Incorrect email or password. Try again, please.'
  }

class CustomUserCreationForm(UserCreationForm):
  first_name = forms.CharField(error_messages={
    'required': 'Please, enter first name.',
    'max_length': 'First name must be at most 30 characters long. Try again, please.'
    })
  last_name = forms.CharField(error_messages={
    'required': 'Please, enter last name.',
    'max_length': 'Last name must be at most 30 characters long. Try again, please.'
    })
  email = forms.EmailField(error_messages={
      'required': 'Please, enter email.',
      'invalid': 'Invalid email. Try again, please.',
      'unique': 'Email is already in use. Try again, please.'
    })
  password1 = forms.CharField(error_messages={
    'required': 'Please, enter password.',
    'invalid': 'Invalid password. Password must be at least 8 characters long, and must contain at least one lowercase letter, one uppercase letter, one number, and one special character. Try again, please.'
    })
  password2 = forms.CharField(error_messages={
    'required': 'Please, confirm password.',
    'password_mismatch': 'Passwords do not match. Try again, please'
  })
  
  class Meta:
    model = User
    fields = ("first_name", "last_name", "email", "password1", "password2")  
  
  def clean_password1(self):
    pattern = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,.\/<>?;\':\"[\]{}!@#$%^&*()-=_+])[A-Za-z\d,.\/<>?;\':\"[\]{}!@#$%^&*()-=_+]{8,}$')
    errorCode = 'invalid'
    errorMessage = self.fields["password1"].error_messages[errorCode]
    value = self.cleaned_data['password1']
    isValid = pattern.match(value)
    if not(isValid):
      raise forms.ValidationError(errorMessage, code=errorCode)
    return value
