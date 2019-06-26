import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Form, Input, Submit} from '../../../../../base/static/base/src/jsx/form.js';
import WeekCalendar from './week_calendar.js';
import '../../../../../base/static/base/src/jsx/csrf.js';
import css from "../scss/create_poll.scss";


class CreatePollRouter extends React.Component {
  state = {
    poll: {
      name: "",
      location: "",
      notes: "",
      polltimes: []
    }
  };

  saveIntermediaryState = (formValues) => {
    var poll = { ... this.state.poll };
    Object.assign(poll, formValues);
    this.setState({poll: poll});
    return poll;
  }

  createNewPoll = (poll) => {
    // Pre-process poll object before sending to server:
    // - discarding internal use only fields (e.g. polltime internal IDs, which would clash with the database IDs)
    // - add timezone
    // - add empty participants list
    poll = { ... poll};
    for (var i=0; i<poll.polltimes.length; i++)
      poll.polltimes[i] = {
        start: poll.polltimes[i].start,
        end: poll.polltimes[i].end
      }
    poll.timezone = "America/New York"; // TODO
    poll.participants = [];
    
    $.ajax({
      url: "", 
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(poll)
    })
    .done((response) => {
      window.onbeforeunload = null;
      window.location.href = response.redirect;
    })
    .fail((response) => {
      // TODO: Handle failure case (at the very least alert the user, perhaps different responses depending on the error message)
      console.log("Failed to create new poll.");
      console.log(response.responseText);
    });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route 
            path="/create/" exact 
            render={props => 
              <TitlePage {...props} 
                poll={this.state.poll} 
                saveIntermediaryState={this.saveIntermediaryState}
              />}
          />
          <Route 
            path="/create/options/"
            render={props => 
              <OptionsPage {...props} 
                poll={this.state.poll} 
                saveIntermediaryState={this.saveIntermediaryState}
                createNewPoll={this.createNewPoll}
              />}
          />
          </Switch>
      </Router>
    );
  }
}

class TitlePage extends React.Component {
  handleSubmit = (formValues) => {
    this.props.saveIntermediaryState(formValues);
    this.props.history.push('/create/options/');
  }

  render() {
    return (
      <div id="title-page">
        <div className="header">
          <div className="step-nr">Step 1 of 4</div>
          <div className="prompt">What's the occasion?</div>
        </div>
        <Form
          id = "title-form"
          key = "title-form"
          formValues = {this.props.poll}
          submitLabel = "Continue"
          onSubmit = {this.handleSubmit}
        >
          <Input
            name = "name"
            placeholder = "Enter title"
            required
            requiredMessage = "Please, enter title."
          />
          <Input
            name = "location"
            placeholder = "Add location"
          />
          <Input
            name = "notes"
            placeholder = "Add note"
          />
        </Form>
      </div>
    );
  }
}

class OptionsPage extends React.Component {
  state = {
    calendarEvents: this.props.poll.polltimes,
  }
  nextID = Math.max(this.props.poll.polltimes)+1;

  handleAddEvent = (start, end) => {
    var calendarEvents = this.state.calendarEvents.slice();
    calendarEvents.push({
      id: this.nextID,
      title: this.props.poll.name,
      start: start,
      end: end
    });
    this.setState({calendarEvents: calendarEvents});
    this.nextID+=1;
  }

  handleUpdateEvent = (id, start, end) => {
    var calendarEvents = this.state.calendarEvents.slice();
    var eventIdx = calendarEvents.findIndex((e) => e.id == id);
    calendarEvents[eventIdx] = { ...calendarEvents[eventIdx], start: start, end: end };
    this.setState({calendarEvents: calendarEvents});
  }

  handleRemoveEvent = (id) => {
    var calendarEvents = this.state.calendarEvents.slice();
    var eventIdx = calendarEvents.findIndex((e) => e.id == id);
    calendarEvents.splice(eventIdx, 1);
    this.setState({calendarEvents: calendarEvents});
  }

  handleSubmit = (direction) => {
    const updatedPoll = this.props.saveIntermediaryState({polltimes: this.state.calendarEvents});
    if (direction == "continue")
      this.props.createNewPoll(updatedPoll);
    else 
    this.props.history.push('/create/');    
  }

  render() {
    return (
      <div id="options-page">
        <div className="header">
          <div className="step-nr">Step 2 of 4</div>
          <div className="prompt">What are the options?</div>
        </div>
        <WeekCalendar
          calendarEvents={this.state.calendarEvents}
          onAddEvent={this.handleAddEvent}
          onUpdateEvent={this.handleUpdateEvent}
          onRemoveEvent={this.handleRemoveEvent}
        />
        <div className="footer">
          <div className="container-previous">
            <Submit
              active={true}
              label="<"
              onClick = {() => this.handleSubmit('return')}
              />
          </div>
          <div className="container-next">
            <Submit 
              active={true}
              label="Continue"
              onClick = {() => this.handleSubmit('continue')}
              />
          </div>
        </div>
      </div>
    );
  }
}

class SettingsPage extends React.Component {
  render() {
    return (
      <div>
        Settings Page
      </div>
    );
  }
}

ReactDOM.render(
  <CreatePollRouter />,
  $('#main')[0]
);

window.onbeforeunload = function() { return ""; };

