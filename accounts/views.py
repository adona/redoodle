from rest_framework.views import APIView
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from accounts.forms import CustomUserCreationForm

# Create your views here.

class SignupView(APIView):
  def get(self, request):
    form = CustomUserCreationForm()
    return render(request, "registration/signup.html", {"form": form})

  def post(self, request):
    form = CustomUserCreationForm(request.POST)
    if form.is_valid():
      form.save()
      email = form.cleaned_data.get("email")
      password = form.cleaned_data.get("password1")
      user = authenticate(email=email, password=password)
      login(request, user)
      return redirect("dashboard")
    else:
      return render(request, "registration/signup.html", {"form": form})


