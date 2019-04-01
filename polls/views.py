from django.shortcuts import render

# Create your views here.

def participate_poll(request):
  return render(request, "polls/poll.html", {})
