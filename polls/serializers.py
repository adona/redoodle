from polls.models import *
from rest_framework import serializers

class AvailabilitySerializer(serializers.ModelSerializer):
  availability = serializers.ChoiceField(choices=["Y", "M", "N"])
  class Meta: 
    model = Availability
    fields = ("polltime", "availability", )

class ParticipantSerializer(serializers.ModelSerializer):
  availability = AvailabilitySerializer(many=True)
  class Meta: 
    model = Participant
    fields = ("id", "poll", "name", "availability", )
  
  def validate_poll(self, value):
    """
    Check that, if updating a participant, the poll provided matches the poll currently associated with the participant
    (Participant updates are not allowed to change the associated poll)
    """
    if self.instance != None:
      if (self.instance.poll != value):
        raise serializers.ValidationError("Poll incorrect (does not match poll currently associated with participant)")
    return value
  def create(self, validated_data):
    validated_availability_list = validated_data.pop("availability")
    participant = Participant.objects.create(**validated_data)
    for validated_availability in validated_availability_list:
      Availability.objects.create(participant=participant, **validated_availability)
    return participant

  def update(self, instance, validated_data):
    instance.name = validated_data["name"]
    instance.save()
    for i, validated_availability in enumerate(validated_data["availability"]):
      availability_instance = instance.availability.all()[i]
      availability_instance.availability = validated_availability["availability"]
      availability_instance.save()
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
