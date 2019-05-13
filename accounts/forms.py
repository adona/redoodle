from django import forms
from django.contrib.auth.forms import AuthenticationForm

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
