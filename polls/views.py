from rest_framework.views import APIView
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import json
from polls.models import *
from polls.serializers import *


# Create your views here.

class ParticipatePoll(APIView):

  def get(self, request):
    poll = Poll.objects.all()[0] # For now just use the 1st poll in the database
    poll = PollSerializer(poll).data
    poll = json.dumps(poll)
    return render(request, "polls/poll.html", {"poll": poll})

  def post(self, request):
    participant_data = json.loads(request.body)
    serializer = ParticipantSerializer(data=participant_data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return JsonResponse(serializer.data)

  def put(self, request):
    participant_data = json.loads(request.body)
    participant = Participant.objects.get(pk=participant_data["id"])
    serializer = ParticipantSerializer(participant, data=participant_data)
    if serializer.is_valid(raise_exception=True):
      participant = serializer.save()
      return HttpResponse()

  def delete(self, request):
    participant_id = json.loads(request.body)["id"]
    participant = Participant.objects.get(pk=participant_id)
    participant.delete()
    return HttpResponse()
