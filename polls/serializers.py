from polls.models import *
from rest_framework import serializers

class AvailabilitySerializer(serializers.ModelSerializer):
  class Meta: 
    model = Availability
    fields = ("availability", )

class ParticipantSerializer(serializers.ModelSerializer):
  availability = AvailabilitySerializer(many=True)
  class Meta: 
    model = Participant
    fields = ("id", "name", "availability", )
    depth = 1

class PollTimeSerializer(serializers.ModelSerializer):
  class Meta: 
    model = PollTime
    fields = ("id", "start", "end", )

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = "__all__"

class PollSerializer(serializers.ModelSerializer):
  polltimes = PollTimeSerializer(many=True)
  participants = ParticipantSerializer(many=True)
  class Meta:
    model = Poll
    fields = "__all__"
    depth = 2
