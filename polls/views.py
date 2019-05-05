from rest_framework.views import APIView
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
import json
from polls.models import *
from polls.serializers import *
from polls.exceptions import BadRequestException


# Create your views here.

class ParticipatePoll(APIView):

  def get(self, request):
    poll = Poll.objects.all()[0] # For now just use the 1st poll in the database
    poll = PollSerializer(poll).data
    poll = json.dumps(poll)
    return render(request, "polls/poll.html", {"poll": poll})

  def post(self, request):
    participant_data = self.parseJSONRequest(request)
    serializer = ParticipantSerializer(data=participant_data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return JsonResponse(serializer.data)

  def put(self, request):
    participant_data = self.parseJSONRequest(request)
    participant = self.retrieveParticipant(participant_data)
    serializer = ParticipantSerializer(participant, data=participant_data)
    if serializer.is_valid(raise_exception=True):
      participant = serializer.save()
      return HttpResponse()

  def delete(self, request):
    request_data = self.parseJSONRequest(request)
    participant = self.retrieveParticipant(request_data)
    participant.delete()
    return HttpResponse()

  def parseJSONRequest(self, request):
    try:
      data = json.loads(request.body)
    except: 
      raise BadRequestException("Request not valid JSON")
    return data

  def retrieveParticipant(self, request_data):
    if "id" not in request_data:
      raise BadRequestException("Request must include participant ID")
    id = request_data["id"]
    try:
      participant = Participant.objects.get(pk=id)
    except: 
      raise BadRequestException("No participant found with given ID")
    return participant
