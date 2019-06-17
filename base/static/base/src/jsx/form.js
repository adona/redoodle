import $ from "jquery";
import React from "react";
import './csrf.js';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.initializeState();
    this.onValueChange = this.onValueChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onServerSideErrors = this.onServerSideErrors.bind(this);
  }

  initializeState() {
    const children = this.getChildren();
    const fields = children.filter((child) => this.isField(child));
    var fieldsState = {};
    for (var field of fields)
      fieldsState[field.props.name] = {
        isRequired: field.props.required != undefined,
        validators: this.getValidators(field),
        listeners: [],
        isFirstEdit: true,
        value: "",
        isValid: null,
        error: null
      };
    for (var field of fields)
      if (field.props.listenTo != undefined)
        for (var listenTo of field.props.listenTo)
          fieldsState[listenTo].listeners.push(field.props.name);
    this.state = {
      fields: fieldsState,
      nonFieldErrors: null,
    };
    this.state.canSubmit = this.canSubmit();
  }

  getChildren() {
    var children = this.props.children;
    if (children == undefined) children = [];
    else if (!Array.isArray(children)) children = [children];
    return children;
  }

  isField(child) {
    return child.type == Input;
  }

  getValidators(field) {
    var formValidators = field.props.validators;
    if (formValidators == undefined) formValidators = [];
    if (field.props.required) {
      const validateRequired = validators.getValidateRequired(field.props.requiredMessage);
      formValidators.unshift(validateRequired);
    }
    return formValidators;
  }

  onValueChange(fieldName, value) {
    var state = this.state;
    var fieldsState = state.fields;
    fieldsState[fieldName].value = value;
    state.fields = fieldsState;
    state.nonFieldErrors = null;
    this.setState(state);

    if(!fieldsState[fieldName].isFirstEdit)
      this.validate(fieldName);
    
    for (var listener of fieldsState[fieldName].listeners)
      if(fieldsState[listener].value != "")
        this.validate(listener);
  }

  onBlur(fieldName) {
    var state = this.state;
    var fieldsState = state.fields;
    if (fieldsState[fieldName].isFirstEdit) {
      fieldsState[fieldName].isFirstEdit = false;
      state.fields = fieldsState;
      this.setState(state);  
      this.validate(fieldName);
    }
  }

  validate(fieldName) {
    var state = this.state;
    var fieldsState = state.fields;
    var validationResult = {isValid: true, error: null}; 
    for (var validator of fieldsState[fieldName].validators) {
      validationResult = validator(fieldsState[fieldName].value, fieldName, fieldsState);
      if (!validationResult.isValid)
        break;
    }
    fieldsState[fieldName].isValid = validationResult.isValid;
    fieldsState[fieldName].error = validationResult.error;
    state.fields = fieldsState;
    state.canSubmit = this.canSubmit();
    this.setState(state);
  }

  validateAll() {
    for (var fieldName of Object.keys(this.state.fields))
      this.validate(fieldName);
  }

  canSubmit() {
    const state = this.state;
    if (state.nonFieldErrors != null) return false;

    const fieldsState = state.fields;
    for (var field of Object.values(fieldsState))
      if (((field.isRequired) && (field.value == "")) || (field.error != null))
        return false;

    return true;
  }

  onSubmit(e) {
    e.preventDefault();

    this.validateAll();
    if (!this.state.canSubmit) return;

    var formValues = {};
    for (var fieldName of Object.keys(this.state.fields))
      formValues[fieldName] = this.state.fields[fieldName].value;
    $.post(this.props.submitURL, formValues)
      .done(function(response) {
        window.location.replace(response.redirect);
      })
      .fail(this.onServerSideErrors);
  }

  onServerSideErrors(response) {
    const clientErrorCodes = [400, 401];
    if (clientErrorCodes.includes(response.status)) {
      const errors = response.responseJSON;
      var state = this.state;
      var fieldsState = state.fields;
      for (var fieldName of Object.keys(errors)) 
        if(fieldName == "__all__") {
          state.nonFieldErrors = errors[fieldName]
        } else {
          fieldsState[fieldName].isValid = false;
          fieldsState[fieldName].error = errors[fieldName][0];
        }
      state.fields = fieldsState;
      state.canSubmit = false;
      this.setState(state);
    } else {
      // TODO: Handle server error codes (e.g. server is down)
    }
  }

  render() {
    const children = this.getChildren();
    const fieldsState = this.state.fields;
    return (
      <form 
        id={this.props.id}
        noValidate
        onSubmit={this.onSubmit}
      >
        {
          children.map((child, idx) => {
            return !this.isField(child) ? child : 
              React.cloneElement(child, {
                key: idx,
                value: fieldsState[child.props.name].value,
                isValid: fieldsState[child.props.name].isValid,
                error: fieldsState[child.props.name].error,
                onValueChange: this.onValueChange,
                onBlur: this.onBlur
              })
          })
        }
        {
          this.state.nonFieldErrors == null ? "" : 
            <div className="field-container">
              {
                this.state.nonFieldErrors.map((error, idx) => {
                  return <div className="errorlist" key={idx}> {error} </div>
                })
              }
            </div>
        }
        <Submit
          active = {this.state.canSubmit}
          label = {this.props.submitLabel}
        />
      </form>
    );
  }
}

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onValueChange(e) {
    this.props.onValueChange(this.props.name, e.currentTarget.value);
  }

  onBlur(e) {
    this.props.onBlur(this.props.name);
  }

  render() {
    return (
      <div 
        className="field-container"
        invalid={this.props.isValid==false ? "" : null}
      >
        <input 
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value} 
          onChange={this.onValueChange}
          onBlur={this.onBlur}
        />
        <div className="errorlist"> {this.props.error} </div>
      </div>
    );
  }
}

export class Submit extends React.Component {
  render() {
    return (
      <input
        id="submit-button"
        type="submit"
        active={this.props.active.toString()}
        value={this.props.label}
      />
    );
  }
}

export const validators = {
  getValidateRequired: function(errorMessage) {
    if (errorMessage == undefined) errorMessage = "Field is required.";
    return function(value) {
      const isValid = value != "";
      const error = isValid ? null : errorMessage;
      return {isValid: isValid, error: error};
    }
  },
  
  validateEmail: function(value) {
    // Regex from: https://emailregex.com/
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = re.test(value);
    const error = isValid ? null : "Invalid email. Try again, please.";
    return {isValid: isValid, error: error};
  },
  
  validatePassword: function(value) {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,.\/<>?;':"[\]{}!@#$%^&*()-=_+])[A-Za-z\d,.\/<>?;':"[\]{}!@#$%^&*()-=_+]{8,}$/;
    const isValid = re.test(value);
    const error = isValid ? null : "Invalid password. Password must be at least 8 characters long, and must contain at least one lowercase letter, one uppercase letter, one number, and one special character. Try again, please.";
    return {isValid: isValid, error: error};
  },
  
  validatePasswordMatch: function(value, fieldName, formState) {
    const secondvalue = fieldName == "password1" ? formState["confirm2"].value : formState["password1"].value;
    const isValid = (secondvalue == "") | (value == secondvalue);
    const error = isValid ? null : "Passwords do not match. Try again, please";
    return {isValid: isValid, error: error};
  },
}



