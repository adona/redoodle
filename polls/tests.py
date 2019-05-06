from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.exceptions import ErrorDetail
from datetime import datetime
import pytz
import json
from polls.models import *
from polls.serializers import ParticipantSerializer

# Create your tests here.

def createTestPoll(self):
  self.test_npolltimes = 3
  self.test_nparticipants = 4
  self.test_author = User.objects.create(
    first_name="TestFirst", 
    last_name="TestLast", 
    email="TestEmail")
  self.test_poll = Poll.objects.create(
    name="TestPoll", 
    author=self.test_author, 
    location="TestLocation", 
    notes="TestNotes", 
    timezone="TestTimezone")
  timezone = pytz.timezone("America/New_York")
  self.test_polltimes = [
    PollTime.objects.create(
      poll=self.test_poll, 
      start=datetime(2018, 5, i+1, 20, 00, tzinfo=timezone), 
      end=datetime(2018, 5, i+1, 21, 00, tzinfo=timezone)) 
    for i in range(self.test_npolltimes)]
  self.test_participants = [
    Participant.objects.create(
      poll=self.test_poll, 
      name=f"Participant{i}")
    for i in range(self.test_nparticipants)]
  [[Availability.objects.create(
      participant=participant, 
      polltime=polltime, 
      availability="N") 
    for participant in self.test_participants]
      for polltime in self.test_polltimes]


class ParticipantSerializerTests(TestCase):
  def setUp(self):
    createTestPoll(self)

  def test_serialize_participant(self):
    participant = self.test_participants[0]
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
    new_participant_data = {
      "name": "New Participant",
      "availability": [
        {"polltime": polltime.id, "availability": "Y"} 
          for polltime in self.test_polltimes] 
    }
    expected_error = {'poll': [ErrorDetail(string='This field is required.', code='required')]}
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)
    
  def test_deserialize_missing_name(self):
    new_participant_data = {
      "poll": self.test_poll.id,
      "availability": [
        {"polltime": polltime.id, "availability": "Y"} 
          for polltime in self.test_polltimes] 
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
    participant = self.test_participants[0]
    updated_participant_data = {
      "id": participant.id,
      "poll": participant.poll.id-1, # Wrong poll ID
      "name": participant.name,
      "availability": [
        {"polltime": availability.polltime.id, "availability": availability.availability} 
          for availability in participant.availability.all()] 
    }
    expected_error = {'poll': [ErrorDetail(string='Poll incorrect (does not match poll currently associated with participant)', code='invalid')]}
    serializer = ParticipantSerializer(participant, data = updated_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)

  def test_validate_wrong_nr_polltimes(self):
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [{ "polltime": self.test_polltimes[0].id, "availability": "Y"}] # Only one polltime
    }
    expected_error = {'non_field_errors': [ErrorDetail(string='Participant availability contains incorrect number of poll times', code='invalid')]}
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)

  def test_validate_polltimes_wrong_order(self):
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [
        {"polltime": self.test_polltimes[i].id, "availability": "Y"}
          for i in list(range(1, self.test_npolltimes)) + [0]] # Move the 1st polltime at the end
    }
    expected_error = {'non_field_errors': [ErrorDetail(string='Participant availability contains the wrong poll times, or in the wrong order', code='invalid')]}
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertFalse(serializer.is_valid())
    self.assertEqual(serializer.errors, expected_error)

  def test_create_participant(self):
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [
        {"polltime": polltime.id, "availability": "Y"} 
          for polltime in self.test_polltimes] 
    }
    serializer = ParticipantSerializer(data = new_participant_data)
    self.assertTrue(serializer.is_valid())
    serializer.save()
    updated_participants = list(self.test_poll.participants.all())
    assert(len(updated_participants) == self.test_nparticipants+1)
    new_participant = updated_participants[-1]
    assert(new_participant.name == new_participant_data["name"])

  def test_update_participant(self):
    participant = self.test_participants[0]
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
    assert(len(updated_participants) == self.test_nparticipants)
    updated_participant = updated_participants[0]
    assert(updated_participant.name == updated_participant_data["name"])
    assert(updated_participant.availability.all()[0].availability == updated_participant_data["availability"][0]["availability"])


class ParticipatePollViewTests(TestCase):
  url = reverse('participate-poll')

  def setUp(self):
    createTestPoll(self)

  def test_post_request_not_json(self):
    test_data = "Not a JSON"
    expected_response = {"detail": "Request not valid JSON"}
    response = self.client.post(self.url, data=test_data, content_type="application/json")
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    self.assertEqual(json.loads(response.content), expected_response)

  def test_post_wrong_nr_polltimes(self):
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [{ "polltime": self.test_polltimes[0].id, "availability": "Y"}] # Only one polltime
    }
    expected_response = {"non_field_errors": ["Participant availability contains incorrect number of poll times"]}
    response = self.client.post(self.url, data=new_participant_data, content_type="application/json")
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    self.assertEqual(json.loads(response.content), expected_response)

  def test_post_polltimes_wrong_order(self):
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [
        {"polltime": self.test_polltimes[i].id, "availability": "Y"}
          for i in list(range(1, self.test_npolltimes)) + [0]] # Move the 1st polltime at the end
    }
    expected_response = {"non_field_errors": ["Participant availability contains the wrong poll times, or in the wrong order"]}
    response = self.client.post(self.url, data=new_participant_data, content_type="application/json")
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    self.assertEqual(json.loads(response.content), expected_response)

  def test_post_success(self):
    new_participant_data = {
      "poll": self.test_poll.id,
      "name": "New Participant",
      "availability": [
        {"polltime": polltime.id, "availability": "Y"} 
          for polltime in self.test_poll.polltimes.all()] 
    }
    response = self.client.post(self.url, data=new_participant_data, content_type="application/json")
    assert(response.status_code == status.HTTP_200_OK)
    updated_participants = list(self.test_poll.participants.all())
    assert(len(updated_participants) == self.test_nparticipants+1)
    new_participant = updated_participants[-1]
    assert(new_participant.name == new_participant_data["name"])

  def test_put_request_not_json(self):
    test_data = "Not a JSON"
    expected_response = {"detail": "Request not valid JSON"}
    response = self.client.put(self.url, data=test_data, content_type="application/json")
    self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
    self.assertEqual(json.loads(response.content), expected_response)
