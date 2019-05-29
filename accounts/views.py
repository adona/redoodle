from rest_framework.views import APIView
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

# Create your views here.

class LoginView(APIView):
  def get(self, request):
    return render(request, "accounts/registration.html", {"page": "login"})
  # TODO: get method

class SignupView(APIView):
  def get(self, request):
    return render(request, "accounts/registration.html", {"page": "signup"})
  # TODO: get method
