from rest_framework.views import APIView
from rest_framework.exceptions import APIException, ParseError, ValidationError
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required 
from django.utils.decorators import method_decorator 
import json
from polls.models import *
from accounts.models import *
from polls.serializers import *


# Create your views here.

class Dashboard(APIView):
  @method_decorator(login_required)
  def get(self, request):
    user = request.user
    own_polls = set(Poll.objects.filter(author=user))
    invites = Invite.objects.filter(email=user.email)
    invited_polls = set(map(lambda invite: invite.poll, invites))
    polls_list = list(own_polls | invited_polls)  # TODO: Sort
    polls_list = PollSerializer(polls_list, many=True).data
    polls_list = json.dumps(polls_list)
    return render(request, "polls/dashboard.html", {"polls_list": polls_list, "email": user.email})

class ParticipatePoll(APIView):

  def get(self, request, poll_id):
    poll = Poll.objects.get(pk=poll_id)
    poll = PollSerializer(poll).data
    poll = json.dumps(poll)
    return render(request, "polls/poll.html", {"poll": poll})

  def post(self, request, poll_id):
    participant_data = self.parseJSONRequest(request)
    serializer = ParticipantSerializer(data=participant_data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return JsonResponse(serializer.data)

  def put(self, request, poll_id):
    participant_data = self.parseJSONRequest(request)
    participant = self.retrieveParticipant(participant_data)
    serializer = ParticipantSerializer(participant, data=participant_data)
    if serializer.is_valid(raise_exception=True):
      participant = serializer.save()
      return HttpResponse()

  def delete(self, request, poll_id):
    request_data = self.parseJSONRequest(request)
    participant = self.retrieveParticipant(request_data)
    participant.delete()
    return HttpResponse()

  def parseJSONRequest(self, request):
    try:
      data = request.data
    except: 
      raise ParseError("Request not valid JSON")
    return data

  def retrieveParticipant(self, request_data):
    if "id" not in request_data:
      raise ValidationError({"id": ["This field is required."]})
    id = request_data["id"]
    try:
      participant = Participant.objects.get(pk=id)
    except: 
      raise ValidationError({"id": ["No participant found for given ID"]})
    return participant
