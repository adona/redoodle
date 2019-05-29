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
        >
          <Input
            name = "email"
            placeholder = "Email"
            required
            requiredMessage = "Please, enter email."
            validators = {[validateEmail]}
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
            validators = {[validateEmail]}
          />
          <Input
            name = "password"
            type = "password"
            placeholder = "Password"
            required
            requiredMessage = "Please, enter password."
            validators = {[validatePassword]}
          />
          <Input
            name = "confirm"
            type = "password"
            placeholder = "Confirm password"
            required
            requiredMessage = "Please, confirm password."
          />
        </Form>
      }
     </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.initializeState();
    this.getChildren = this.getChildren.bind(this);
    this.onValueUpdate = this.onValueUpdate.bind(this);
    this.onValidationUpdate = this.onValidationUpdate.bind(this);
  }

  getChildren() {
    var children = this.props.children;
    if (children == undefined) children = [];
    else if (!Array.isArray(children)) children = [children];
    return children;
  }

  isField(element) {
    return element.type == Input;
  }

  initializeState() {
    const children = this.getChildren();
    const fields = children.filter((child) => this.isField(child));
    const fieldNames = fields.map((field) => field.props.name);
    var fieldState = {};
    for (fieldName of fieldNames)
      fieldState[fieldName] = {
        value: "",
        isValid: null,
        error: null
      };
    this.state = {fields: fieldState};
  }

  onValueUpdate(fieldName, value) {
    var fieldState = this.state.fields;
    fieldState[fieldName].value = value;
    fieldState[fieldName].isValid = null; // Reset errors while field is being edited.
    fieldState[fieldName].error = null; 
    this.setState({fields: fieldState});
  }

  onValidationUpdate(fieldName, validationResult) {
    var fieldState = this.state.fields;
    fieldState[fieldName].isValid = validationResult.isValid;
    fieldState[fieldName].error = validationResult.error;
    this.setState({fields: fieldState});
  }

  render() {
    const children = this.getChildren();
    const fieldsState = this.state.fields;
    return (
      <form id={this.props.id} noValidate>
        {
          children.map((child, idx) => {
            return !this.isField(child) ? child : 
              React.cloneElement(child, {
                key: idx,
                ... fieldsState[child.props.name],
                onValueUpdate: this.onValueUpdate,
                onValidationUpdate: this.onValidationUpdate
              })
          })
        }
      </form>
    );
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.initializeValidators();
    this.state = {firstEdit: true};
    this.onValueUpdate = this.onValueUpdate.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.validate = this.validate.bind(this);
  }

  initializeValidators() {
    var validators = this.props.validators;
    if (validators == undefined) validators = [];
    if (this.props.required) {
      const validateRequired = getValidateRequired(this.props.requiredMessage);
      validators.unshift(validateRequired);
    }
    this.validators = validators;
  }

  onValueUpdate(e) {
    const value = e.currentTarget.value;
    this.props.onValueUpdate(this.props.name, value);
    if (!this.state.firstEdit)
      this.validate(value);
  }

  onBlur(e) {
    const value = e.currentTarget.value;
    if (this.state.firstEdit & (value != "")) {
      this.setState({firstEdit: false});
      this.validate(value);
    }
  }

  validate(value) {
    var validationResult = {isValid: true, error: null}; 
    for (var validator of this.validators) {
      validationResult = validator(value);
      if (!validationResult.isValid)
        break;
    }
    this.props.onValidationUpdate(this.props.name, validationResult);
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
          onChange={this.onValueUpdate}
          onBlur={this.onBlur}
        />
        <div className="errorlist"> {this.props.error} </div>
      </div>
    );
  }
}

// Validators

function getValidateRequired(errorMessage) {
  if (errorMessage == undefined) errorMessage = "Field is required.";
  return function(value) {
    const isValid = value != "";
    const error = isValid ? null : errorMessage;
    return {isValid: isValid, error: error};
  }
}

function validateEmail(value) {
  // Regex from: https://emailregex.com/
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = re.test(value);
  const error = isValid ? null : "Invalid email. Try again, please.";
  return {isValid: isValid, error: error};
}

function validatePassword(value) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,.\/<>?;':"[\]{}!@#$%^&*()-=_+])[A-Za-z\d,.\/<>?;':"[\]{}!@#$%^&*()-=_+]{8,}$/;
  const isValid = re.test(value);
  const error = isValid ? null : "Invalid password. Password must be at least 8 characters long, and must contain at least one lowercase letter, one uppercase letter, one number, and one special character. Try again, please.";
  return {isValid: isValid, error: error};
}


// Load parameters and render page

var page = $("body").attr("page");
ReactDOM.render(
  <RegistrationContainer page={page} />,
  $('#main')[0]
);
