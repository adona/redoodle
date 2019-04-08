from django.urls import path

from . import views

urlpatterns = [
    path('', views.participate_poll, name='participate-poll'),
    path('update-participant', views.update_participant, name='update-participant'),
    path('delete-participant', views.delete_participant, name='delete-participant'),
]
