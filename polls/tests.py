from django.test import TestCase, RequestFactory
from django.urls import reverse
from django.db import IntegrityError
from rest_framework import status
from rest_framework.exceptions import ErrorDetail
from datetime import datetime
import pytz
import json
from polls.models import *
from accounts.models import *
from django.contrib.auth.models import AnonymousUser
from polls.serializers import * 

# Create your tests here.

def createTestAuthor():
  n = len(User.objects.all()) + 1
  author = User.objects.create_user(
    email=f"test{n}@email.com",
    password="password",
    first_name=f"TestFirst{n}", 
    last_name=f"TestLast{n}")
  return author

def createTestPoll():
  npolltimes = 3
  nparticipants = 4
  n = len(User.objects.all()) + 1
  author = createTestAuthor()
  poll = Poll.objects.create(
    name=f"TestPoll{n}", 
    author=author, 
    location=f"TestLocation{n}", 
    notes=f"TestNotes{n}", 
    timezone=f"TestTimezone{n}")
  timezone = pytz.timezone("America/New_York")
  polltimes = [
    PollTime.objects.create(
      poll=poll, 
      start=datetime(2018, 5, i+1, 20, 00, tzinfo=timezone), 
      end=datetime(2018, 5, i+1, 21, 00, tzinfo=timezone)) 
    for i in range(npolltimes)]
  participants = [
    Participant.objects.create(
      poll=poll, 
      name=f"Participant{i}")
    for i in range(nparticipants)]
  [[Availability.objects.create(
      participant=participant, 
      polltime=polltime, 
      availability="N") 
    for participant in participants]
      for polltime in polltimes]
  return poll

class UserModelTest(TestCase):
  def test_unique_email(self):
    with self.assertRaises(IntegrityError):
      User.objects.create_user(email="user@user.com", password="password", first_name="User1", last_name="User1")
      User.objects.create_user(email="user@user.com", password="password", first_name="User2", last_name="User2")

class ParticipantSerializerTests(TestCase):
  def setUp(self):
    self.test_poll = createTestPoll()

  def test_serialize_participant(self):
    participant = self.test_poll.participants.first()
    expected_participant_data = {
      "id": participant.id,
      "poll": participant.poll.id,
      "name": participant.name,
      "availability": [
        {"polltime": availability.polltime.id, "availability": availability.availability} 
          for availability in participant.availability.all()] 
    }
    serializer = ParticipantSerializer(participant)
    self.assertEqual(serializer.data, expected_participant_data)

  def test_deserialize_missing_poll(self):
    polltimes = self.test_poll.polltimes.all()
    new_participant_data = {
      "name": "New Participant",
      "availability": [
        {"polltime": polltime.id, "availability": "Y"} 
          for polltime in polltimes] 
    }
    expected_error = {'poll': [ErrorDetail(string='This field is required.', code='required')]}
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)
    
  def test_deserialize_missing_name(self):
    polltimes = self.test_poll.polltimes.all()
    new_participant_data = {
      "poll": self.test_poll.id,
      "availability": [
        {"polltime": polltime.id, "availability": "Y"} 
          for polltime in polltimes] 
    }
    expected_error = {'name': [ErrorDetail(string='This field is required.', code='required')]}
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)

  def test_deserialize_missing_availability(self):
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
    }
    expected_error = {'availability': [ErrorDetail(string='This field is required.', code='required')]}
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)

  def test_validate_update_wrong_poll(self):
    self.test_poll2 = createTestPoll()
    participant = self.test_poll.participants.first()
    updated_participant_data = {
      "id": participant.id,
      "poll": self.test_poll2.id, # Wrong poll ID
      "name": participant.name,
      "availability": [
        {"polltime": availability.polltime.id, "availability": availability.availability} 
          for availability in participant.availability.all()] 
    }
    expected_error = {'poll': [ErrorDetail(string='Provided poll does not match poll currently associated with participant', code='invalid')]}
    serializer = ParticipantSerializer(participant, data = updated_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)

  def test_validate_wrong_nr_polltimes(self):
    polltime = self.test_poll.polltimes.first()
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [{ "polltime": polltime.id, "availability": "Y"}] # Only one polltime
    }
    expected_error = {'availability': [ErrorDetail(string='Participant availability contains incorrect number of poll times', code='invalid')]}
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)

  def test_validate_polltimes_wrong_order(self):
    polltimes = self.test_poll.polltimes.all()
    npolltimes = len(polltimes)
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [
        {"polltime": polltimes[i].id, "availability": "Y"}
          for i in list(range(1, npolltimes)) + [0]] # Move the 1st polltime at the end
    }
    expected_error = {'availability': [ErrorDetail(string='Participant availability contains the wrong poll times, or in the wrong order', code='invalid')]}
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)

  def test_create_participant(self):
    nparticipants = len(self.test_poll.participants.all())
    polltimes = self.test_poll.polltimes.all()
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [
        {"polltime": polltime.id, "availability": "Y"} 
          for polltime in polltimes] 
    }
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertTrue(serializer.is_valid())
    serializer.save()
    updated_participants = list(self.test_poll.participants.all())
    assert(len(updated_participants) == nparticipants+1)
    new_participant = updated_participants[-1]
    assert(new_participant.name == new_participant_data["name"])

  def test_update_participant(self):
    participants = self.test_poll.participants.all() 
    nparticipants = len(participants)
    participant = participants[0]
    updated_participant_data = {
      "id": participant.id,
      "poll": participant.poll.id,
      "name": "Updated name",
      "availability": [
        {"polltime": availability.polltime.id, "availability": "Y"} 
          for availability in participant.availability.all()] 
    }
    serializer = ParticipantSerializer(participant, data = updated_participant_data)
    self.assertTrue(serializer.is_valid())
    serializer.save()
    updated_participants = list(self.test_poll.participants.all())
    assert(len(updated_participants) == nparticipants)
    updated_participant = updated_participants[0]
    assert(updated_participant.name == updated_participant_data["name"])
    assert(updated_participant.availability.first().availability == updated_participant_data["availability"][0]["availability"])

class PollSerializerTests(TestCase):
  def test_create_poll(self):
    new_poll_data = {
      'name': 'TestPoll1',
      'location': 'TestLocation1',
      'notes': 'TestNotes1',
      'timezone': 'TestTimezone1',
      'polltimes': [
        {'start': '2018-05-02T00:56:00Z', 'end': '2018-05-02T01:56:00Z'},
        {'start': '2018-05-03T00:56:00Z', 'end': '2018-05-03T01:56:00Z'},
        {'start': '2018-05-04T00:56:00Z', 'end': '2018-05-04T01:56:00Z'}],
    }
    author = createTestAuthor()
    request = RequestFactory().get("/")
    request.user = author
    serializer = PollSerializer(data = new_poll_data, context={"request": request})
    self.assertTrue(serializer.is_valid())
    poll = serializer.save()
    self.assertEqual(poll.name, new_poll_data["name"])

class ParticipatePollViewTests(TestCase):

  def setUp(self):
    self.test_poll = createTestPoll()
    self.url = reverse('participate-poll', args=[self.test_poll.id])

  def test_post_request_not_json(self):
    test_data = "Not a JSON"
    expected_response = {"detail": "Request not valid JSON"}
    response = self.client.post(self.url, data=test_data, content_type="application/json")
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    self.assertEqual(json.loads(response.content), expected_response)

  def test_post_wrong_nr_polltimes(self):
    polltime = self.test_poll.polltimes.first()
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [{ "polltime": polltime.id, "availability": "Y"}] # Only one polltime
    }
    expected_response = {'availability': [ErrorDetail(string='Participant availability contains incorrect number of poll times', code='invalid')]}
    response = self.client.post(self.url, data=new_participant_data, content_type="application/json")
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    self.assertEqual(json.loads(response.content), expected_response)

  def test_post_polltimes_wrong_order(self):
    polltimes = self.test_poll.polltimes.all()
    npolltimes = len(polltimes)
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [
        {"polltime": polltimes[i].id, "availability": "Y"}
          for i in list(range(1, npolltimes)) + [0]] # Move the 1st polltime at the end
    }
    expected_response = {'availability': [ErrorDetail(string='Participant availability contains the wrong poll times, or in the wrong order', code='invalid')]}
    response = self.client.post(self.url, data=new_participant_data, content_type="application/json")
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    self.assertEqual(json.loads(response.content), expected_response)

  def test_post_success(self):
    nparticipants = len(self.test_poll.participants.all())
    polltimes = self.test_poll.polltimes.all()
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [
        {"polltime": polltime.id, "availability": "Y"} 
          for polltime in polltimes] 
    }
    response = self.client.post(self.url, data=new_participant_data, content_type="application/json")
    assert(response.status_code == status.HTTP_200_OK)
    updated_participants = list(self.test_poll.participants.all())
    assert(len(updated_participants) == nparticipants+1)
    new_participant = updated_participants[-1]
    assert(new_participant.name == new_participant_data["name"])
