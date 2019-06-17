import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import {Form, Input, validators} from '../../../../../base/static/base/src/jsx/form.js';
import css from "../scss/registration.scss";

class RegistrationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page, 
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(newPage) {
    this.setState({
      page: newPage
    });
  }

  render() {
    return (
      <div id="login-container">
        <RegistrationTabs 
          page = {this.state.page} 
          handlePageChange = {this.handlePageChange}
        />
        <FormContainer page = {this.state.page} />
      </div>
    );
  }
}

class RegistrationTabs extends React.Component {
  render() {
    const tabnames = {
      "login": "Log in",
      "signup": "Sign up"
    };
    return (
      <div id='login-tabs'> 
        { Object.keys(tabnames).map(
          (page) =>
            <div
              key={page}
              className={this.props.page==page ? "selected": ""}
              onClick={(e) => this.props.handlePageChange(page)}
            > 
              {tabnames[page]} 
            </div>
        )}
      </div>
      );
  }
}

class FormContainer extends React.Component {
  render() {
    return(
      <div id="form-container">
        { this.props.page == "login" ? 
        // Login Form
        <Form
          id = "login-form"
          key = "login-form"
          submitURL = {loginURL}
          submitLabel = "Log in"
        >
          <Input
            name = "username"
            placeholder = "Email"
            required
            requiredMessage = "Please, enter email."
            validators = {[validators.validateEmail]}
          />
          <Input
            name = "password"
            type = "password"
            placeholder = "Password"
            required
            requiredMessage = "Please, enter password."
          />
        </Form> :
        // Signup form
        <Form
          id = "signup-form"
          key = "signup-form"
          submitURL = {signupURL}
          submitLabel = "Sign up"
        >
          <Input
            name = "first_name"
            placeholder = "First name"
            required
            requiredMessage = "Please, enter first name."
          />
          <Input
            name = "last_name"
            placeholder = "Last name"
            required
            requiredMessage = "Please, enter last name."
          />
          <Input
            name = "email"
            placeholder = "Email"
            required
            requiredMessage = "Please, enter email."
            validators = {[validators.validateEmail]}
          />
          <Input
            name = "password1"
            type = "password"
            placeholder = "Password"
            required
            requiredMessage = "Please, enter password."
            validators = {[validators.validatePassword]}
          />
          <Input
            name = "password2"
            type = "password"
            placeholder = "Confirm password"
            required
            requiredMessage = "Please, confirm password."
            validators = {[validators.validatePasswordMatch]}
            listenTo = {["password1"]}
          />
        </Form>
      }
     </div>
    );
  }
}

// Load parameters and render page

var page = $("body").attr("page");
var loginURL = $("body").attr("loginurl");
var signupURL = $("body").attr("signupurl");

ReactDOM.render(
  <RegistrationContainer page={page} />,
  $('#main')[0]
);
