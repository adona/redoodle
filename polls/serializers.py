from polls.models import *
from accounts.models import *
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
        raise serializers.ValidationError("Provided poll does not match poll currently associated with participant")
    return value

  def validate(self, data):
    """
    Check that the availability list contains one entry for each poll time, in the correct order
    """
    # NOTE: Doing this as object-level validation rather than validate_availability
    # because we need access to other object fields (namely polltimes) to do the validation
    availability = data["availability"]
    polltimes = data["poll"].polltimes.all()
    if len(availability) != len(polltimes):
      raise serializers.ValidationError({"availability": ["Participant availability contains incorrect number of poll times"]})
    for i in range(len(availability)):
      if availability[i]["polltime"] != polltimes[i]:
        raise serializers.ValidationError({"availability": ["Participant availability contains the wrong poll times, or in the wrong order"]})
    return data

  def create(self, validated_data):
    validated_availability_list = validated_data.pop("availability")
    participant = Participant.objects.create(**validated_data)
    for validated_availability in validated_availability_list:
      Availability.objects.create(participant=participant, **validated_availability)
    return participant

  def update(self, instance, validated_data):
    instance.name = validated_data.get("name", instance.name)
    instance.email = validated_data.get('email', instance.email)
    instance.save()
    availability_instance = list(instance.availability.all())
    validated_availability_data = validated_data["availability"]
    for i in range(len(validated_availability_data)):
      availability_instance[i].availability = validated_availability_data[i].get("availability", availability_instance[i].availability)
      availability_instance[i].save()
    return instance

class PollTimeSerializer(serializers.ModelSerializer):
  class Meta: 
    model = PollTime
    fields = ("id", "start", "end", )

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ("id", "first_name", "last_name", "email", )

class PollSerializer(serializers.ModelSerializer):
  author = UserSerializer(read_only=True, default=serializers.CurrentUserDefault())
  polltimes = PollTimeSerializer(many=True)
  participants = ParticipantSerializer(many=True)
  class Meta:
    model = Poll
    fields = "__all__"

  def create(self, validated_data):
    validated_polltimes = validated_data.pop("polltimes")
    validated_data.pop("participants")
    author = User.objects.get(pk=self.data["author"]["id"])
    poll = Poll.objects.create(**validated_data, author=author)
    for validated_polltime in validated_polltimes:
      PollTime.objects.create(poll=poll, **validated_polltime)
    return poll
