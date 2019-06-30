from rest_framework.views import APIView
from rest_framework.exceptions import APIException, ParseError, ValidationError, AuthenticationFailed
from rest_framework import status
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect, reverse
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
    user_data = json.dumps(UserSerializer(user).data)
    own_polls = set(Poll.objects.filter(author=user))
    invites = Invite.objects.filter(email=user.email)
    invited_polls = set(map(lambda invite: invite.poll, invites))
    polls_list = list(own_polls | invited_polls)  # TODO: Sort
    polls_list = json.dumps(PollSerializer(polls_list, many=True).data)
    return render(request, "polls/dashboard.html", {"user": user_data, "polls_list": polls_list})

class CreatePoll(APIView):
  @method_decorator(login_required)
  def get(self, request, page):
    if (page != None):
      return redirect('create-poll')
    return render(request, "polls/create_poll.html", {})

  def post(self, request, page):
    if request.user.is_anonymous: 
      raise AuthenticationFailed(detail="Must be logged in to create new poll.")
    poll_data = parseJSONRequest(request)
    serializer = PollSerializer(data=poll_data, context={"request": request})
    if serializer.is_valid(raise_exception=True):
      poll = serializer.save()
      return JsonResponse({"redirect": reverse('participate-poll', kwargs={"poll_id": poll.id})})

class ParticipatePoll(APIView):

  def get(self, request, poll_id):
    user = request.user
    if not user.is_anonymous:
      user_data = json.dumps(UserSerializer(user).data)
    else:
      user_data = None
    poll = Poll.objects.get(pk=poll_id)
    poll_data = json.dumps(PollSerializer(poll).data)
    return render(request, "polls/poll.html", {"user": user_data, "poll": poll_data})

  def post(self, request, poll_id):
    participant_data = parseJSONRequest(request)
    serializer = ParticipantSerializer(data=participant_data)
    if serializer.is_valid(raise_exception=True):
      serializer.save()
      return JsonResponse(serializer.data)

  def put(self, request, poll_id):
    participant_data = parseJSONRequest(request)
    participant = self.retrieveParticipant(participant_data)
    serializer = ParticipantSerializer(participant, data=participant_data)
    if serializer.is_valid(raise_exception=True):
      participant = serializer.save()
      return HttpResponse()

  def delete(self, request, poll_id):
    request_data = parseJSONRequest(request)
    participant = self.retrieveParticipant(request_data)
    participant.delete()
    return HttpResponse()

  def retrieveParticipant(self, request_data):
    if "id" not in request_data:
      raise ValidationError({"id": ["This field is required."]})
    id = request_data["id"]
    try:
      participant = Participant.objects.get(pk=id)
    except: 
      raise ValidationError({"id": ["No participant found for given ID"]})
    return participant


# Helper functions

def parseJSONRequest(request):
  try:
    data = request.data
  except: 
    raise ParseError("Request not valid JSON")
  return data
