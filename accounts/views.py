from rest_framework.views import APIView
from rest_framework import status
from django.urls import reverse
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from accounts.forms import CustomAuthenticationForm, CustomUserCreationForm

# Create your views here.

class LoginView(APIView):
  def get(self, request):
    return render(request, "accounts/registration.html", {"page": "login"})

  def post(self, request):
    form = CustomAuthenticationForm(data=request.POST)
    if form.is_valid():
      email = form.cleaned_data.get("username")
      password = form.cleaned_data.get("password")
      user = authenticate(email=email, password=password)
      login(request, user)
      return JsonResponse({"redirect": reverse("dashboard")})
    else:
      reponse_status = status.HTTP_401_UNAUTHORIZED if "__all__" in form.errors else status.HTTP_400_BAD_REQUEST
      return JsonResponse(data=form.errors, status = reponse_status)

class SignupView(APIView):
  def get(self, request):
    return render(request, "accounts/registration.html", {"page": "signup"})

  def post(self, request):
    form = CustomUserCreationForm(data=request.POST)
    if form.is_valid():
      user = form.save()
      login(request, user)
      return JsonResponse({"redirect": reverse("dashboard")})
    else:
      return JsonResponse(data=form.errors, status = status.HTTP_400_BAD_REQUEST)
