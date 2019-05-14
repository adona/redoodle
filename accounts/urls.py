from django.urls import path

from django.contrib.auth.views import LoginView, LogoutView
from accounts.views import SignupView
from accounts.forms import CustomAuthenticationForm

urlpatterns = [
  path('login/', LoginView.as_view(
      authentication_form=CustomAuthenticationForm, 
      redirect_authenticated_user=True,
    ), name='login'),
  path('signup/', SignupView.as_view(), name='signup'),
  path('logout/', LogoutView.as_view(), name='logout'),
]
