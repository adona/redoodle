from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, QueryDict
from django.shortcuts import render
from polls.models import *
from polls.serializers import *
import json
from pprint import pprint


# Create your views here.

def participate_poll(request):
  poll = Poll.objects.get(pk=1)
  poll = PollSerializer(poll).data
  poll = json.dumps(poll)

  return render(request, "polls/poll.html", {"poll": poll})

@csrf_exempt
def update_participant(request):
  participant_data = json.loads(request.body)
  if (participant_data["id"] == None):  # New participant
    poll = Poll.objects.get(pk=1)
    serializer = ParticipantSerializer(data=participant_data)
    if serializer.is_valid():
      serializer.save(poll=poll)
      print("Participant created.")
  else:
    participant = Participant.objects.get(pk=participant_data["id"])
    serializer = ParticipantSerializer(participant, data=participant_data)
    if serializer.is_valid():
      serializer.save()
      print("Participant updated.")
  return HttpResponse("")

@csrf_exempt
def delete_participant(request):
  participant_id = QueryDict(request.body)["participant_id"]
  participant = Participant.objects.get(pk=participant_id)
  participant.delete()
  print("Participant deleted.")
  return HttpResponse("")

