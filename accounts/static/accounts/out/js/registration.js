var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegistrationContainer = function (_React$Component) {
  _inherits(RegistrationContainer, _React$Component);

  function RegistrationContainer(props) {
    _classCallCheck(this, RegistrationContainer);

    var _this = _possibleConstructorReturn(this, (RegistrationContainer.__proto__ || Object.getPrototypeOf(RegistrationContainer)).call(this, props));

    _this.state = {
      page: _this.props.page
    };
    _this.handlePageChange = _this.handlePageChange.bind(_this);
    return _this;
  }

  _createClass(RegistrationContainer, [{
    key: "handlePageChange",
    value: function handlePageChange(newPage) {
      this.setState({
        page: newPage
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "login-container" },
        React.createElement(RegistrationTabs, {
          page: this.state.page,
          handlePageChange: this.handlePageChange
        }),
        React.createElement(FormContainer, { page: this.state.page })
      );
    }
  }]);

  return RegistrationContainer;
}(React.Component);

var RegistrationTabs = function (_React$Component2) {
  _inherits(RegistrationTabs, _React$Component2);

  function RegistrationTabs() {
    _classCallCheck(this, RegistrationTabs);

    return _possibleConstructorReturn(this, (RegistrationTabs.__proto__ || Object.getPrototypeOf(RegistrationTabs)).apply(this, arguments));
  }

  _createClass(RegistrationTabs, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var tabnames = {
        "login": "Log in",
        "signup": "Sign up"
      };
      return React.createElement(
        "div",
        { id: "login-tabs" },
        Object.keys(tabnames).map(function (page) {
          return React.createElement(
            "div",
            {
              key: page,
              className: _this3.props.page == page ? "selected" : "",
              onClick: function onClick(e) {
                return _this3.props.handlePageChange(page);
              }
            },
            tabnames[page]
          );
        })
      );
    }
  }]);

  return RegistrationTabs;
}(React.Component);

var FormContainer = function (_React$Component3) {
  _inherits(FormContainer, _React$Component3);

  function FormContainer() {
    _classCallCheck(this, FormContainer);

    return _possibleConstructorReturn(this, (FormContainer.__proto__ || Object.getPrototypeOf(FormContainer)).apply(this, arguments));
  }

  _createClass(FormContainer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "form-container" },
        this.props.page == "login" ?
        // Login Form
        React.createElement(
          Form,
          {
            id: "login-form",
            key: "login-form"
          },
          React.createElement(Input, {
            name: "email",
            placeholder: "Email",
            required: true,
            requiredMessage: "Please, enter email.",
            validators: [validateEmail]
          }),
          React.createElement(Input, {
            name: "password",
            type: "password",
            placeholder: "Password",
            required: true,
            requiredMessage: "Please, enter password."
          })
        ) :
        // Signup form
        React.createElement(
          Form,
          {
            id: "signup-form",
            key: "signup-form"
          },
          React.createElement(Input, {
            name: "first_name",
            placeholder: "First name",
            required: true,
            requiredMessage: "Please, enter first name."
          }),
          React.createElement(Input, {
            name: "last_name",
            placeholder: "Last name",
            required: true,
            requiredMessage: "Please, enter last name."
          }),
          React.createElement(Input, {
            name: "email",
            placeholder: "Email",
            required: true,
            requiredMessage: "Please, enter email.",
            validators: [validateEmail]
          }),
          React.createElement(Input, {
            name: "password",
            type: "password",
            placeholder: "Password",
            required: true,
            requiredMessage: "Please, enter password.",
            validators: [validatePassword]
          }),
          React.createElement(Input, {
            name: "confirm",
            type: "password",
            placeholder: "Confirm password",
            required: true,
            requiredMessage: "Please, confirm password."
          })
        )
      );
    }
  }]);

  return FormContainer;
}(React.Component);

var Form = function (_React$Component4) {
  _inherits(Form, _React$Component4);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this5 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this5.initializeState();
    _this5.getChildren = _this5.getChildren.bind(_this5);
    _this5.onValueUpdate = _this5.onValueUpdate.bind(_this5);
    _this5.onValidationUpdate = _this5.onValidationUpdate.bind(_this5);
    return _this5;
  }

  _createClass(Form, [{
    key: "getChildren",
    value: function getChildren() {
      var children = this.props.children;
      if (children == undefined) children = [];else if (!Array.isArray(children)) children = [children];
      return children;
    }
  }, {
    key: "isField",
    value: function isField(element) {
      return element.type == Input;
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      var _this6 = this;

      var children = this.getChildren();
      var fields = children.filter(function (child) {
        return _this6.isField(child);
      });
      var fieldNames = fields.map(function (field) {
        return field.props.name;
      });
      var fieldState = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fieldNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          fieldName = _step.value;

          fieldState[fieldName] = {
            value: "",
            isValid: null,
            error: null
          };
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.state = { fields: fieldState };
    }
  }, {
    key: "onValueUpdate",
    value: function onValueUpdate(fieldName, value) {
      var fieldState = this.state.fields;
      fieldState[fieldName].value = value;
      fieldState[fieldName].isValid = null; // Reset errors while field is being edited.
      fieldState[fieldName].error = null;
      this.setState({ fields: fieldState });
    }
  }, {
    key: "onValidationUpdate",
    value: function onValidationUpdate(fieldName, validationResult) {
      var fieldState = this.state.fields;
      fieldState[fieldName].isValid = validationResult.isValid;
      fieldState[fieldName].error = validationResult.error;
      this.setState({ fields: fieldState });
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var children = this.getChildren();
      var fieldsState = this.state.fields;
      return React.createElement(
        "form",
        { id: this.props.id, noValidate: true },
        children.map(function (child, idx) {
          return !_this7.isField(child) ? child : React.cloneElement(child, Object.assign({
            key: idx
          }, fieldsState[child.props.name], {
            onValueUpdate: _this7.onValueUpdate,
            onValidationUpdate: _this7.onValidationUpdate
          }));
        })
      );
    }
  }]);

  return Form;
}(React.Component);

var Input = function (_React$Component5) {
  _inherits(Input, _React$Component5);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this8 = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this8.initializeValidators();
    _this8.state = { firstEdit: true };
    _this8.onValueUpdate = _this8.onValueUpdate.bind(_this8);
    _this8.onBlur = _this8.onBlur.bind(_this8);
    _this8.validate = _this8.validate.bind(_this8);
    return _this8;
  }

  _createClass(Input, [{
    key: "initializeValidators",
    value: function initializeValidators() {
      var validators = this.props.validators;
      if (validators == undefined) validators = [];
      if (this.props.required) {
        var validateRequired = getValidateRequired(this.props.requiredMessage);
        validators.unshift(validateRequired);
      }
      this.validators = validators;
    }
  }, {
    key: "onValueUpdate",
    value: function onValueUpdate(e) {
      var value = e.currentTarget.value;
      this.props.onValueUpdate(this.props.name, value);
      if (this.state.firstEdit == false) this.validate(value);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      var value = e.currentTarget.value;
      this.validate(value);
      this.setState({ firstEdit: false });
    }
  }, {
    key: "validate",
    value: function validate(value) {
      var validationResult = { isValid: true, error: null };
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.validators[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var validator = _step2.value;

          validationResult = validator(value);
          if (!validationResult.isValid) break;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.props.onValidationUpdate(this.props.name, validationResult);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        {
          className: "field-container",
          invalid: this.props.isValid == false ? "" : null
        },
        React.createElement("input", {
          type: this.props.type,
          name: this.props.name,
          placeholder: this.props.placeholder,
          value: this.props.value,
          onChange: this.onValueUpdate,
          onBlur: this.onBlur
        }),
        React.createElement(
          "div",
          { className: "errorlist" },
          " ",
          this.props.error,
          " "
        )
      );
    }
  }]);

  return Input;
}(React.Component);

// Validators

function getValidateRequired(errorMessage) {
  if (errorMessage == undefined) errorMessage = "Field is required.";
  return function (value) {
    var isValid = value != "";
    var error = isValid ? null : errorMessage;
    return { isValid: isValid, error: error };
  };
}

function validateEmail(value) {
  // Regex from: https://emailregex.com/
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValid = re.test(value);
  var error = isValid ? null : "Invalid email. Try again, please.";
  return { isValid: isValid, error: error };
}

function validatePassword(value) {
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,.\/<>?;':"[\]{}!@#$%^&*()-=_+])[A-Za-z\d,.\/<>?;':"[\]{}!@#$%^&*()-=_+]{8,}$/;
  var isValid = re.test(value);
  var error = isValid ? null : "Invalid password. Password must be at least 8 characters long, and must contain at least one lowercase letter, one uppercase letter, one number, and one special character. Try again, please.";
  return { isValid: isValid, error: error };
}

// Load parameters and render page

var page = $("body").attr("page");
ReactDOM.render(React.createElement(RegistrationContainer, { page: page }), $('#main')[0]);