from django.db import models
from accounts.models import User

# Create your models here.

class Poll(models.Model):
  name = models.CharField(max_length=100)
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  location = models.CharField(max_length=50)
  notes = models.CharField(max_length=1000)
  timezone = models.CharField(max_length=50)
  def __str__(self):
    times = list(map(str, self.polltimes.all()))
    participants = list(map(str, self.participants.all()))
    # TODO: Include invites
    poll_string = [
      f"Name: {self.name}",
      f"Author: {self.author}",
      f"Location: {self.location}",
      f"Notes: {self.notes}",
      f"Timezone: {self.timezone}",
      "",
      "Times:"
    ] + times + [
      "",
      "Participants:"
    ] + participants
    poll_string = "\n".join(poll_string)
    return poll_string

class PollTime(models.Model):
  poll = models.ForeignKey(Poll, related_name="polltimes", on_delete=models.CASCADE)
  start = models.DateTimeField()
  end = models.DateTimeField()
  class Meta:
    ordering = ('start', 'end', )
  def __str__(self):
    return f"{self.start} - {self.end}"

class Invite(models.Model):
  poll = models.ForeignKey(Poll, related_name="invites", on_delete=models.CASCADE)
  email = models.EmailField()
  class Meta:
    unique_together = ["poll", "email"]
  def __str__(self):
    return f"{self.email}"

class Participant(models.Model):
  poll = models.ForeignKey(Poll, related_name="participants", on_delete=models.CASCADE)
  name = models.CharField(max_length=50)
  email = models.EmailField(blank=True)
  def __str__(self):
    availability = list(map(str,self.availability.all()))
    # TODO: Include email
    return f"{self.name}: {availability}"

class Availability(models.Model):
  participant = models.ForeignKey(Participant, related_name="availability", on_delete=models.CASCADE)
  polltime = models.ForeignKey(PollTime, on_delete=models.CASCADE)
  availability = models.CharField(max_length=1)
  class Meta:
    ordering = ('polltime', )
  def __str__(self):
    return f"{self.availability}"

