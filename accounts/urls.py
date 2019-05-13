from django.urls import path

from django.contrib.auth import views as auth_views
from . import forms

urlpatterns = [
  path('login/', auth_views.LoginView.as_view(
      authentication_form=forms.CustomAuthenticationForm, 
      redirect_authenticated_user=True,
    ), name='login'),
  path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]
