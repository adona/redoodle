from django.urls import path

from . import views

urlpatterns = [
    path('poll/participate/<int:poll_id>/', views.ParticipatePoll.as_view(), name='participate-poll'),
]
