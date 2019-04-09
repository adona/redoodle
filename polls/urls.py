from django.urls import path

from . import views

urlpatterns = [
    path('', views.ParticipatePoll.as_view(), name='participate-poll'),
]
