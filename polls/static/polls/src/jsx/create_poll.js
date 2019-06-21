import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Form, Input, Submit} from '../../../../../base/static/base/src/jsx/form.js';
import WeekCalendar from './week_calendar.js';
import css from "../scss/create_poll.scss";


class CreatePollRouter extends React.Component {
  constructor(props) {
    super(props);
    var poll = {
      name: "",
      location: "",
      notes: "",
      polltimes: []
    };
    this.state = {poll: poll};
  }

  handleSubmitPage = (formValues) => {
    var poll = this.state.poll;
    Object.assign(poll, formValues);
    this.setState(poll);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route 
            path="/create/" exact 
            render={props => <TitlePage {...props} poll={this.state.poll} onSubmit={this.handleSubmitPage} />}
          />
          <Route 
            path="/create/options/"
            render={props => <OptionsPage {...props} poll={this.state.poll} onSubmit={this.handleSubmitPage} />}
          />
          <Route 
            path="/create/settings/"
            render={props => <SettingsPage {...props} poll={this.state.poll} onSubmit={this.handleSubmitPage} />}
          />
          </Switch>
      </Router>
    );
  }
}

class TitlePage extends React.Component {
  handleSubmit = (formValues) => {
    this.props.onSubmit(formValues);
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
    this.setState({
      calendarEvents: this.state.calendarEvents.concat({
        id: this.nextID,
        title: this.props.poll.name,
        start: start,
        end: end
      })
    })
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
            />
          </div>
          <div className="container-next">
            <Submit 
              active={true}
              label="Continue"
            />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount = () => {
    $(".container-previous .submit-button").on("click", () => {this.handleSubmit('previous');});
    $(".container-next .submit-button").on("click", () => {this.handleSubmit('next');});
  }

  handleSubmit = (toPage) => {
    this.props.onSubmit({polltimes: this.state.calendarEvents});
    const toURL = toPage == "previous" ? '/create/' : '/create/settings/'
    this.props.history.push(toURL);
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

