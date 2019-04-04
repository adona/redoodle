from django.db import models

# Create your models here.

class User(models.Model):
  first_name = models.CharField(max_length=20)
  last_name = models.CharField(max_length=20)
  email = models.EmailField()
  def __str__(self):
    return f"{self.first_name} {self.last_name} ({self.email})"

class Poll(models.Model):
  author = models.ForeignKey(User, on_delete=models.CASCADE)
  location = models.CharField(max_length=50)
  notes = models.CharField(max_length=1000)
  timezone = models.CharField(max_length=50)
  def __str__(self):
    times = list(map(str, self.polltime_set.all()))
    participants = list(map(str, self.participant_set.all()))

    poll_string = [
      f"Author: {self.author}",
      f"Notes: {self.notes}",
      "",
      "Times:"
    ] + times + [
      "",
      "Participants:"
    ] + participants
    
    poll_string = "\n".join(poll_string)
    return poll_string


class PollTime(models.Model):
  poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
  start = models.DateTimeField()
  end = models.DateTimeField()
  def __str__(self):
    return f"{self.start} - {self.end}"


class Participant(models.Model):
  poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
  name = models.CharField(max_length=50)
  def __str__(self):
    return f"{self.name}"


class Availability(models.Model):
  poll = models.ForeignKey(Poll, on_delete=models.CASCADE)
  participant = models.ForeignKey(Participant, on_delete=models.CASCADE)
  poll_time = models.ForeignKey(PollTime, on_delete=models.CASCADE)
  availability = models.CharField(max_length=1)
  def __str__(self):
    return f"{self.availability}"

