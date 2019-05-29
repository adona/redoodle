from django.urls import path

from accounts.views import LoginView, SignupView
from django.contrib.auth.views import LogoutView

urlpatterns = [
  path('login/', LoginView.as_view(), name='login'),
  path('signup/', SignupView.as_view(), name='signup'),
  path('logout/', LogoutView.as_view(), name='logout'),
]
