from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from accounts.models import User

class CustomAuthenticationForm(AuthenticationForm):
  username = forms.EmailField(label='username', 
    widget=forms.TextInput(attrs={'placeholder': 'Email'}),
    error_messages={
      'required': 'Please, enter email',
      'invalid': 'Invalid email. Please, try again'
    })
  password = forms.CharField(label="password",
    widget=forms.PasswordInput(attrs={'placeholder': 'Password'}),
    error_messages={'required': 'Please, enter password'})

class CustomUserCreationForm(UserCreationForm):
  first_name = forms.CharField(label="first_name", max_length=20,
    widget=forms.TextInput(attrs={'placeholder': 'First Name'}))
  last_name = forms.CharField(label="last_name", max_length=20,
    widget=forms.TextInput(attrs={'placeholder': 'Last Name'}))
  email = forms.EmailField(label="email",
    widget=forms.TextInput(attrs={'placeholder': 'Email'}))
  password1 = forms.CharField(label="password1",
    widget=forms.PasswordInput(attrs={'placeholder': 'Create password'}))
  password2 = forms.CharField(label="password2",
    widget=forms.PasswordInput(attrs={'placeholder': 'Verify password'}))
  class Meta:
    model = User
    fields = ("first_name", "last_name", "email", "password1", "password2")
