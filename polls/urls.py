from django.urls import path

from . import views

urlpatterns = [
    path('', views.participate_poll, name='participate-poll'),
]
