from django.shortcuts import render
from polls.models import Poll
from polls.serializers import PollSerializer
import json


# Create your views here.

def participate_poll(request):
  poll = Poll.objects.get(pk=1)
  poll = PollSerializer(poll).data
  poll = json.dumps(poll)

  return render(request, "polls/poll.html", {"poll": poll})
