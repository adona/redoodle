from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from polls.models import *
from polls.serializers import *
import json


# Create your views here.

def participate_poll(request):
  poll = Poll.objects.get(pk=1) # For now use a hardcoded poll ID during development
  poll = PollSerializer(poll).data
  poll = json.dumps(poll)
  return render(request, "polls/poll.html", {"poll": poll})

class UpdateParticipant(APIView):
  def post(self, request):
    participant_data = json.loads(request.body)
    serializer = ParticipantSerializer(data=participant_data)
    if serializer.is_valid(raise_exception=True):
      poll = Poll.objects.get(pk=1)
      serializer.save(poll=poll)
      print("Participant created.")
      return Response(serializer.data, status=status.HTTP_200_OK)

  def put(self, request):
    participant_data = json.loads(request.body)
    participant = Participant.objects.get(pk=participant_data["id"])
    serializer = ParticipantSerializer(participant, data=participant_data)
    if serializer.is_valid(raise_exception=True):
      participant = serializer.save()
      print("Participant updated.")
      return Response(status=status.HTTP_200_OK)

  def delete(self, request):
    participant_id = json.loads(request.body)["id"]
    participant = Participant.objects.get(pk=participant_id)
    participant.delete()
    print("Participant deleted.")
    return Response(status=status.HTTP_200_OK)
