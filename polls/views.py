from django.shortcuts import render
from polls.models import Poll


# Create your views here.

def participate_poll(request):
  poll = Poll.objects.get(pk=1)
  print(poll)
  return render(request, "polls/poll.html", {})
