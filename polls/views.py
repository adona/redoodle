from django.shortcuts import render
from polls.models import Poll


# Create your views here.

def participate_poll(request):
  return render(request, "polls/poll.html", {})
