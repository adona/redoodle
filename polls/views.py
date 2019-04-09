from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework import status
from polls.models import *
from polls.serializers import *
import json


# Create your views here.

class ParticipatePoll(APIView):
  renderer_classes = (JSONRenderer, TemplateHTMLRenderer,)

  def get(self, request):
    poll = Poll.objects.all()[0] # For now just use the 1st poll in the database
    poll = PollSerializer(poll).data
    poll = json.dumps(poll)
    return Response({"poll": poll}, template_name="polls/poll.html")

  def post(self, request):
    participant_data = json.loads(request.body)
    serializer = ParticipantSerializer(data=participant_data)
    if serializer.is_valid(raise_exception=True):
      poll = Poll.objects.all()[0]
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
