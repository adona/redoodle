from django.urls import path

from . import views

urlpatterns = [
    path('dashboard', views.Dashboard.as_view(), name='dashboard'),
    path('poll/<int:poll_id>/', views.ParticipatePoll.as_view(), name='participate-poll'),
]
