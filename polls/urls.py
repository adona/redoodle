from django.urls import path, re_path

from . import views

urlpatterns = [
    path('dashboard/', views.Dashboard.as_view(), name='dashboard'),
    path('poll/<int:poll_id>/', views.ParticipatePoll.as_view(), name='participate-poll'),
    re_path(r'^create\/(?P<page>options\/|settings\/)?$', views.CreatePoll.as_view(), name='create-poll'),
]
