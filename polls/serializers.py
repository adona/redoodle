from polls.models import *
from rest_framework import serializers

class AvailabilitySerializer(serializers.ModelSerializer):
  class Meta: 
    model = Availability
    fields = ("id", "polltime", "availability", )

class ParticipantSerializer(serializers.ModelSerializer):
  availability = AvailabilitySerializer(many=True)
  class Meta: 
    model = Participant
    fields = ("id", "name", "availability", )
    depth = 1
  
  def create(self, validated_data):
    # Create the participant
    validated_data.pop("availability")
    participant = Participant.objects.create(**validated_data)
    # Create their availability
    for availability_data in self.initial_data["availability"]:
      serializer = AvailabilitySerializer(data=availability_data)
      if serializer.is_valid(raise_exception=True):
        serializer.save(participant=participant)
    return participant

  def update(self, instance, validated_data):
    # Update the participant
    instance.name = validated_data.get("name", instance.name)
    instance.save()
    # Update their availability
    for availability_data in self.initial_data["availability"]:
      availability_instance = Availability.objects.get(pk=availability_data["id"])
      serializer = AvailabilitySerializer(availability_instance, data=availability_data)
      if serializer.is_valid(raise_exception=True):
        serializer.save()
    return instance

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
