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
            validators = {[validatePasswordMatch]}
            listenTo = {["password"]}
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
    this.onValueChange = this.onValueChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  initializeState() {
    const children = this.getChildren();
    const fields = children.filter((child) => this.isField(child));
    var fieldsState = {};
    for (field of fields)
      fieldsState[field.props.name] = {
        validators: this.getValidators(field),
        listeners: [],
        isFirstEdit: true,
        value: "",
        isValid: null,
        error: null
      };
    for (field of fields)
      if (field.props.listenTo != undefined)
        for (listenTo of field.props.listenTo)
          fieldsState[listenTo].listeners.push(field.props.name);
    this.state = {fields: fieldsState};
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
    var validators = field.props.validators;
    if (validators == undefined) validators = [];
    if (field.props.required) {
      const validateRequired = getValidateRequired(field.props.requiredMessage);
      validators.unshift(validateRequired);
    }
    return validators;
  }

  onValueChange(fieldName, value) {
    var fieldsState = this.state.fields;
    fieldsState[fieldName].value = value;
    this.setState({fields: fieldsState});

    if(!fieldsState[fieldName].isFirstEdit)
      this.validate(fieldName);
    
    for(listener of fieldsState[fieldName].listeners)
      if(fieldsState[listener].value != "")
        this.validate(listener);
  }

  onBlur(fieldName) {
    var fieldsState = this.state.fields;
    if (fieldsState[fieldName].isFirstEdit) {
      fieldsState[fieldName].isFirstEdit = false;
      this.setState({fields: fieldsState});  
      this.validate(fieldName);
    }
  }

  validate(fieldName) {
    var fieldsState = this.state.fields;
    var validationResult = {isValid: true, error: null}; 
    for (var validator of fieldsState[fieldName].validators) {
      validationResult = validator(fieldsState[fieldName].value, fieldName, fieldsState);
      if (!validationResult.isValid)
        break;
    }
    fieldsState[fieldName].isValid = validationResult.isValid;
    fieldsState[fieldName].error = validationResult.error;
    this.setState({fields: fieldsState});
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
                value: fieldsState[child.props.name].value,
                isValid: fieldsState[child.props.name].isValid,
                error: fieldsState[child.props.name].error,
                onValueChange: this.onValueChange,
                onBlur: this.onBlur
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

function validatePasswordMatch(value, fieldName, formState) {
  const secondvalue = fieldName == "password" ? formState["confirm"].value : formState["password"].value;
  const isValid = (secondvalue == "") | (value == secondvalue);
  const error = isValid ? null : "Passwords do not match. Try again, please";
  return {isValid: isValid, error: error};
}

// Load parameters and render page

var page = $("body").attr("page");
ReactDOM.render(
  <RegistrationContainer page={page} />,
  $('#main')[0]
);
