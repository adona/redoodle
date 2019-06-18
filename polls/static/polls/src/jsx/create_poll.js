import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Form, Input} from '../../../../../base/static/base/src/jsx/form.js';
import css from "../scss/create_poll.scss";


class CreatePollRouter extends React.Component {
  constructor(props) {
    super(props);
    var poll = {
      name: "",
      location: "",
      notes: ""
    };
    this.state = {poll: poll};
    this.onSubmitTitlePage = this.onSubmitTitlePage.bind(this);
  }

  onSubmitTitlePage(formValues) {
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
            render={props => <TitlePage {...props} poll={this.state.poll} onSubmit={this.onSubmitTitlePage} />}
          />
          <Route 
            path="/create/options/"
            render={props => <OptionsPage {...props} poll={this.state.poll} onSubmit={this.onSubmitTitlePage} />}
          />
          <Route 
            path="/create/settings"
            render={props => <Settings {...props} poll={this.state.poll} onSubmit={this.onSubmitTitlePage} />}
          />
          </Switch>
      </Router>
    );
  }
}

class TitlePage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formValues) {
    this.props.onSubmit(formValues);
    this.props.history.push('/create/options/');
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="step-nr">Step 1 of 4</div>
          <div className="prompt">What's the occasion?</div>
        </div>
        <Form
          id = "title-form"
          key = "title-form"
          formValues = {this.props.poll}
          submitLabel = "Continue"
          onSubmit = {this.onSubmit}
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
  render() {
    return (
      <div>
        Options page
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

