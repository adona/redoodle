/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./accounts/static/accounts/src/jsx/registration.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./accounts/static/accounts/src/jsx/registration.js":
/*!**********************************************************!*\
  !*** ./accounts/static/accounts/src/jsx/registration.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RegistrationContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RegistrationContainer, _React$Component);

  function RegistrationContainer(props) {
    var _this;

    _classCallCheck(this, RegistrationContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RegistrationContainer).call(this, props));
    _this.state = {
      page: _this.props.page
    };
    _this.handlePageChange = _this.handlePageChange.bind(_assertThisInitialized(_this));
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
      return React.createElement("div", {
        id: "login-container"
      }, React.createElement(RegistrationTabs, {
        page: this.state.page,
        handlePageChange: this.handlePageChange
      }), React.createElement(FormContainer, {
        page: this.state.page
      }));
    }
  }]);

  return RegistrationContainer;
}(React.Component);

var RegistrationTabs =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(RegistrationTabs, _React$Component2);

  function RegistrationTabs() {
    _classCallCheck(this, RegistrationTabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegistrationTabs).apply(this, arguments));
  }

  _createClass(RegistrationTabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var tabnames = {
        "login": "Log in",
        "signup": "Sign up"
      };
      return React.createElement("div", {
        id: "login-tabs"
      }, Object.keys(tabnames).map(function (page) {
        return React.createElement("div", {
          key: page,
          className: _this2.props.page == page ? "selected" : "",
          onClick: function onClick(e) {
            return _this2.props.handlePageChange(page);
          }
        }, tabnames[page]);
      }));
    }
  }]);

  return RegistrationTabs;
}(React.Component);

var FormContainer =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(FormContainer, _React$Component3);

  function FormContainer() {
    _classCallCheck(this, FormContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormContainer).apply(this, arguments));
  }

  _createClass(FormContainer, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "form-container"
      }, this.props.page == "login" ? // Login Form
      React.createElement(Form, {
        id: "login-form",
        key: "login-form",
        submitURL: loginURL,
        submitLabel: "Log in"
      }, React.createElement(Input, {
        name: "username",
        placeholder: "Email",
        required: true,
        requiredMessage: "Please, enter email.",
        validators: [validateEmail]
      }), React.createElement(Input, {
        name: "password",
        type: "password",
        placeholder: "Password",
        required: true,
        requiredMessage: "Please, enter password."
      })) : // Signup form
      React.createElement(Form, {
        id: "signup-form",
        key: "signup-form",
        submitURL: signupURL,
        submitLabel: "Sign up"
      }, React.createElement(Input, {
        name: "first_name",
        placeholder: "First name",
        required: true,
        requiredMessage: "Please, enter first name."
      }), React.createElement(Input, {
        name: "last_name",
        placeholder: "Last name",
        required: true,
        requiredMessage: "Please, enter last name."
      }), React.createElement(Input, {
        name: "email",
        placeholder: "Email",
        required: true,
        requiredMessage: "Please, enter email.",
        validators: [validateEmail]
      }), React.createElement(Input, {
        name: "password1",
        type: "password",
        placeholder: "Password",
        required: true,
        requiredMessage: "Please, enter password.",
        validators: [validatePassword]
      }), React.createElement(Input, {
        name: "password2",
        type: "password",
        placeholder: "Confirm password",
        required: true,
        requiredMessage: "Please, confirm password.",
        validators: [validatePasswordMatch],
        listenTo: ["password1"]
      })));
    }
  }]);

  return FormContainer;
}(React.Component);

var Form =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Form, _React$Component4);

  function Form(props) {
    var _this3;

    _classCallCheck(this, Form);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Form).call(this, props));

    _this3.initializeState();

    _this3.onValueChange = _this3.onValueChange.bind(_assertThisInitialized(_this3));
    _this3.onBlur = _this3.onBlur.bind(_assertThisInitialized(_this3));
    _this3.onSubmit = _this3.onSubmit.bind(_assertThisInitialized(_this3));
    _this3.onServerSideErrors = _this3.onServerSideErrors.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(Form, [{
    key: "initializeState",
    value: function initializeState() {
      var _this4 = this;

      var children = this.getChildren();
      var fields = children.filter(function (child) {
        return _this4.isField(child);
      });
      var fieldsState = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          field = _step.value;
          fieldsState[field.props.name] = {
            isRequired: field.props.required != undefined,
            validators: this.getValidators(field),
            listeners: [],
            isFirstEdit: true,
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
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          field = _step2.value;

          if (field.props.listenTo != undefined) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = field.props.listenTo[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                listenTo = _step3.value;
                fieldsState[listenTo].listeners.push(field.props.name);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      this.state = {
        fields: fieldsState,
        nonFieldErrors: null
      };
      this.state.canSubmit = this.canSubmit();
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var children = this.props.children;
      if (children == undefined) children = [];else if (!Array.isArray(children)) children = [children];
      return children;
    }
  }, {
    key: "isField",
    value: function isField(child) {
      return child.type == Input;
    }
  }, {
    key: "getValidators",
    value: function getValidators(field) {
      var validators = field.props.validators;
      if (validators == undefined) validators = [];

      if (field.props.required) {
        var validateRequired = getValidateRequired(field.props.requiredMessage);
        validators.unshift(validateRequired);
      }

      return validators;
    }
  }, {
    key: "onValueChange",
    value: function onValueChange(fieldName, value) {
      var state = this.state;
      var fieldsState = state.fields;
      fieldsState[fieldName].value = value;
      state.fields = fieldsState;
      state.nonFieldErrors = null;
      this.setState(state);
      if (!fieldsState[fieldName].isFirstEdit) this.validate(fieldName);
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = fieldsState[fieldName].listeners[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          listener = _step4.value;
          if (fieldsState[listener].value != "") this.validate(listener);
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(fieldName) {
      var state = this.state;
      var fieldsState = state.fields;

      if (fieldsState[fieldName].isFirstEdit) {
        fieldsState[fieldName].isFirstEdit = false;
        state.fields = fieldsState;
        this.setState(state);
        this.validate(fieldName);
      }
    }
  }, {
    key: "validate",
    value: function validate(fieldName) {
      var state = this.state;
      var fieldsState = state.fields;
      var validationResult = {
        isValid: true,
        error: null
      };
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = fieldsState[fieldName].validators[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var validator = _step5.value;
          validationResult = validator(fieldsState[fieldName].value, fieldName, fieldsState);
          if (!validationResult.isValid) break;
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      fieldsState[fieldName].isValid = validationResult.isValid;
      fieldsState[fieldName].error = validationResult.error;
      state.fields = fieldsState;
      state.canSubmit = this.canSubmit();
      this.setState(state);
    }
  }, {
    key: "validateAll",
    value: function validateAll() {
      for (var _i = 0, _Object$keys = Object.keys(this.state.fields); _i < _Object$keys.length; _i++) {
        fieldName = _Object$keys[_i];
        this.validate(fieldName);
      }
    }
  }, {
    key: "canSubmit",
    value: function canSubmit() {
      var state = this.state;
      if (state.nonFieldErrors != null) return false;
      var fieldsState = state.fields;

      for (var _i2 = 0, _Object$values = Object.values(fieldsState); _i2 < _Object$values.length; _i2++) {
        field = _Object$values[_i2];
        if (field.isRequired && field.value == "" || field.error != null) return false;
      }

      return true;
    }
  }, {
    key: "onSubmit",
    value: function onSubmit(e) {
      e.preventDefault();
      this.validateAll();
      if (!this.state.canSubmit) return;
      var formValues = {};

      for (var _i3 = 0, _Object$keys2 = Object.keys(this.state.fields); _i3 < _Object$keys2.length; _i3++) {
        fieldName = _Object$keys2[_i3];
        formValues[fieldName] = this.state.fields[fieldName].value;
      }

      $.post(this.props.submitURL, formValues).done(function (response) {
        window.location.replace(response.redirect);
      }).fail(this.onServerSideErrors);
    }
  }, {
    key: "onServerSideErrors",
    value: function onServerSideErrors(response) {
      var clientErrorCodes = [400, 401];

      if (clientErrorCodes.includes(response.status)) {
        var errors = response.responseJSON;
        var state = this.state;
        var fieldsState = state.fields;

        for (var _i4 = 0, _Object$keys3 = Object.keys(errors); _i4 < _Object$keys3.length; _i4++) {
          fieldName = _Object$keys3[_i4];

          if (fieldName == "__all__") {
            state.nonFieldErrors = errors[fieldName];
          } else {
            fieldsState[fieldName].isValid = false;
            fieldsState[fieldName].error = errors[fieldName][0];
          }
        }

        state.fields = fieldsState;
        state.canSubmit = false;
        this.setState(state);
      } else {// TODO: Handle server error codes (e.g. server is down)
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var children = this.getChildren();
      var fieldsState = this.state.fields;
      return React.createElement("form", {
        id: this.props.id,
        noValidate: true,
        onSubmit: this.onSubmit
      }, children.map(function (child, idx) {
        return !_this5.isField(child) ? child : React.cloneElement(child, {
          key: idx,
          value: fieldsState[child.props.name].value,
          isValid: fieldsState[child.props.name].isValid,
          error: fieldsState[child.props.name].error,
          onValueChange: _this5.onValueChange,
          onBlur: _this5.onBlur
        });
      }), this.state.nonFieldErrors == null ? "" : React.createElement("div", {
        className: "field-container"
      }, this.state.nonFieldErrors.map(function (error, idx) {
        return React.createElement("div", {
          className: "errorlist",
          key: idx
        }, " ", error, " ");
      })), React.createElement(Submit, {
        active: this.state.canSubmit,
        label: this.props.submitLabel
      }));
    }
  }]);

  return Form;
}(React.Component);

var Input =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Input, _React$Component5);

  function Input(props) {
    var _this6;

    _classCallCheck(this, Input);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
    _this6.onValueChange = _this6.onValueChange.bind(_assertThisInitialized(_this6));
    _this6.onBlur = _this6.onBlur.bind(_assertThisInitialized(_this6));
    return _this6;
  }

  _createClass(Input, [{
    key: "onValueChange",
    value: function onValueChange(e) {
      this.props.onValueChange(this.props.name, e.currentTarget.value);
    }
  }, {
    key: "onBlur",
    value: function onBlur(e) {
      this.props.onBlur(this.props.name);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "field-container",
        invalid: this.props.isValid == false ? "" : null
      }, React.createElement("input", {
        type: this.props.type,
        name: this.props.name,
        placeholder: this.props.placeholder,
        value: this.props.value,
        onChange: this.onValueChange,
        onBlur: this.onBlur
      }), React.createElement("div", {
        className: "errorlist"
      }, " ", this.props.error, " "));
    }
  }]);

  return Input;
}(React.Component);

var Submit =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(Submit, _React$Component6);

  function Submit() {
    _classCallCheck(this, Submit);

    return _possibleConstructorReturn(this, _getPrototypeOf(Submit).apply(this, arguments));
  }

  _createClass(Submit, [{
    key: "render",
    value: function render() {
      return React.createElement("input", {
        id: "submit-button",
        type: "submit",
        active: this.props.active.toString(),
        value: this.props.label
      });
    }
  }]);

  return Submit;
}(React.Component); // Validators


function getValidateRequired(errorMessage) {
  if (errorMessage == undefined) errorMessage = "Field is required.";
  return function (value) {
    var isValid = value != "";
    var error = isValid ? null : errorMessage;
    return {
      isValid: isValid,
      error: error
    };
  };
}

function validateEmail(value) {
  // Regex from: https://emailregex.com/
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValid = re.test(value);
  var error = isValid ? null : "Invalid email. Try again, please.";
  return {
    isValid: isValid,
    error: error
  };
}

function validatePassword(value) {
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[,.\/<>?;':"[\]{}!@#$%^&*()-=_+])[A-Za-z\d,.\/<>?;':"[\]{}!@#$%^&*()-=_+]{8,}$/;
  var isValid = re.test(value);
  var error = isValid ? null : "Invalid password. Password must be at least 8 characters long, and must contain at least one lowercase letter, one uppercase letter, one number, and one special character. Try again, please.";
  return {
    isValid: isValid,
    error: error
  };
}

function validatePasswordMatch(value, fieldName, formState) {
  var secondvalue = fieldName == "password1" ? formState["confirm2"].value : formState["password1"].value;
  var isValid = secondvalue == "" | value == secondvalue;
  var error = isValid ? null : "Passwords do not match. Try again, please";
  return {
    isValid: isValid,
    error: error
  };
} // Load parameters and render page


var page = $("body").attr("page");
var loginURL = $("body").attr("loginurl");
var signupURL = $("body").attr("signupurl");
ReactDOM.render(React.createElement(RegistrationContainer, {
  page: page
}), $('#main')[0]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYWNjb3VudHMvc3RhdGljL2FjY291bnRzL3NyYy9qc3gvcmVnaXN0cmF0aW9uLmpzIl0sIm5hbWVzIjpbIlJlZ2lzdHJhdGlvbkNvbnRhaW5lciIsInByb3BzIiwic3RhdGUiLCJwYWdlIiwiaGFuZGxlUGFnZUNoYW5nZSIsImJpbmQiLCJuZXdQYWdlIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlZ2lzdHJhdGlvblRhYnMiLCJ0YWJuYW1lcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJlIiwiRm9ybUNvbnRhaW5lciIsImxvZ2luVVJMIiwidmFsaWRhdGVFbWFpbCIsInNpZ251cFVSTCIsInZhbGlkYXRlUGFzc3dvcmQiLCJ2YWxpZGF0ZVBhc3N3b3JkTWF0Y2giLCJGb3JtIiwiaW5pdGlhbGl6ZVN0YXRlIiwib25WYWx1ZUNoYW5nZSIsIm9uQmx1ciIsIm9uU3VibWl0Iiwib25TZXJ2ZXJTaWRlRXJyb3JzIiwiY2hpbGRyZW4iLCJnZXRDaGlsZHJlbiIsImZpZWxkcyIsImZpbHRlciIsImNoaWxkIiwiaXNGaWVsZCIsImZpZWxkc1N0YXRlIiwiZmllbGQiLCJuYW1lIiwiaXNSZXF1aXJlZCIsInJlcXVpcmVkIiwidW5kZWZpbmVkIiwidmFsaWRhdG9ycyIsImdldFZhbGlkYXRvcnMiLCJsaXN0ZW5lcnMiLCJpc0ZpcnN0RWRpdCIsInZhbHVlIiwiaXNWYWxpZCIsImVycm9yIiwibGlzdGVuVG8iLCJwdXNoIiwibm9uRmllbGRFcnJvcnMiLCJjYW5TdWJtaXQiLCJBcnJheSIsImlzQXJyYXkiLCJ0eXBlIiwiSW5wdXQiLCJ2YWxpZGF0ZVJlcXVpcmVkIiwiZ2V0VmFsaWRhdGVSZXF1aXJlZCIsInJlcXVpcmVkTWVzc2FnZSIsInVuc2hpZnQiLCJmaWVsZE5hbWUiLCJ2YWxpZGF0ZSIsImxpc3RlbmVyIiwidmFsaWRhdGlvblJlc3VsdCIsInZhbGlkYXRvciIsInZhbHVlcyIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVBbGwiLCJmb3JtVmFsdWVzIiwiJCIsInBvc3QiLCJzdWJtaXRVUkwiLCJkb25lIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlcGxhY2UiLCJyZWRpcmVjdCIsImZhaWwiLCJjbGllbnRFcnJvckNvZGVzIiwiaW5jbHVkZXMiLCJzdGF0dXMiLCJlcnJvcnMiLCJyZXNwb25zZUpTT04iLCJpZCIsImlkeCIsImNsb25lRWxlbWVudCIsImtleSIsInN1Ym1pdExhYmVsIiwiY3VycmVudFRhcmdldCIsInBsYWNlaG9sZGVyIiwiU3VibWl0IiwiYWN0aXZlIiwidG9TdHJpbmciLCJsYWJlbCIsImVycm9yTWVzc2FnZSIsInJlIiwidGVzdCIsImZvcm1TdGF0ZSIsInNlY29uZHZhbHVlIiwiYXR0ciIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7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RUFBaEIsR0FBdUJ0RCxLQUFLLElBQUlzRCxXQUFoRDtBQUNBLE1BQU1wRCxLQUFLLEdBQUdELE9BQU8sR0FBRyxJQUFILEdBQVUsMkNBQS9CO0FBQ0EsU0FBTztBQUFDQSxXQUFPLEVBQUVBLE9BQVY7QUFBbUJDLFNBQUssRUFBRUE7QUFBMUIsR0FBUDtBQUNELEMsQ0FFRDs7O0FBRUEsSUFBSTNDLElBQUksR0FBR2lFLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVStCLElBQVYsQ0FBZSxNQUFmLENBQVg7QUFDQSxJQUFJbEYsUUFBUSxHQUFHbUQsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVK0IsSUFBVixDQUFlLFVBQWYsQ0FBZjtBQUNBLElBQUloRixTQUFTLEdBQUdpRCxDQUFDLENBQUMsTUFBRCxDQUFELENBQVUrQixJQUFWLENBQWUsV0FBZixDQUFoQjtBQUVBQyxRQUFRLENBQUNDLE1BQVQsQ0FDRSxvQkFBQyxxQkFBRDtBQUF1QixNQUFJLEVBQUVsRztBQUE3QixFQURGLEVBRUVpRSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcsQ0FBWCxDQUZGLEUiLCJmaWxlIjoicmVnaXN0cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hY2NvdW50cy9zdGF0aWMvYWNjb3VudHMvc3JjL2pzeC9yZWdpc3RyYXRpb24uanNcIik7XG4iLCJjbGFzcyBSZWdpc3RyYXRpb25Db250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFnZTogdGhpcy5wcm9wcy5wYWdlLCBcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlUGFnZUNoYW5nZSA9IHRoaXMuaGFuZGxlUGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlUGFnZUNoYW5nZShuZXdQYWdlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYWdlOiBuZXdQYWdlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJsb2dpbi1jb250YWluZXJcIj5cbiAgICAgICAgPFJlZ2lzdHJhdGlvblRhYnMgXG4gICAgICAgICAgcGFnZSA9IHt0aGlzLnN0YXRlLnBhZ2V9IFxuICAgICAgICAgIGhhbmRsZVBhZ2VDaGFuZ2UgPSB7dGhpcy5oYW5kbGVQYWdlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgICA8Rm9ybUNvbnRhaW5lciBwYWdlID0ge3RoaXMuc3RhdGUucGFnZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgUmVnaXN0cmF0aW9uVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0YWJuYW1lcyA9IHtcbiAgICAgIFwibG9naW5cIjogXCJMb2cgaW5cIixcbiAgICAgIFwic2lnbnVwXCI6IFwiU2lnbiB1cFwiXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD0nbG9naW4tdGFicyc+IFxuICAgICAgICB7IE9iamVjdC5rZXlzKHRhYm5hbWVzKS5tYXAoXG4gICAgICAgICAgKHBhZ2UpID0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnBhZ2U9PXBhZ2UgPyBcInNlbGVjdGVkXCI6IFwiXCJ9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLmhhbmRsZVBhZ2VDaGFuZ2UocGFnZSl9XG4gICAgICAgICAgICA+IFxuICAgICAgICAgICAgICB7dGFibmFtZXNbcGFnZV19IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn1cblxuY2xhc3MgRm9ybUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGlkPVwiZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgeyB0aGlzLnByb3BzLnBhZ2UgPT0gXCJsb2dpblwiID8gXG4gICAgICAgIC8vIExvZ2luIEZvcm1cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBpZCA9IFwibG9naW4tZm9ybVwiXG4gICAgICAgICAga2V5ID0gXCJsb2dpbi1mb3JtXCJcbiAgICAgICAgICBzdWJtaXRVUkwgPSB7bG9naW5VUkx9XG4gICAgICAgICAgc3VibWl0TGFiZWwgPSBcIkxvZyBpblwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWUgPSBcInVzZXJuYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJFbWFpbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVxdWlyZWRNZXNzYWdlID0gXCJQbGVhc2UsIGVudGVyIGVtYWlsLlwiXG4gICAgICAgICAgICB2YWxpZGF0b3JzID0ge1t2YWxpZGF0ZUVtYWlsXX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgbmFtZSA9IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdHlwZSA9IFwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByZXF1aXJlZE1lc3NhZ2UgPSBcIlBsZWFzZSwgZW50ZXIgcGFzc3dvcmQuXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0+IDpcbiAgICAgICAgLy8gU2lnbnVwIGZvcm1cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBpZCA9IFwic2lnbnVwLWZvcm1cIlxuICAgICAgICAgIGtleSA9IFwic2lnbnVwLWZvcm1cIlxuICAgICAgICAgIHN1Ym1pdFVSTCA9IHtzaWdudXBVUkx9XG4gICAgICAgICAgc3VibWl0TGFiZWwgPSBcIlNpZ24gdXBcIlxuICAgICAgICA+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBuYW1lID0gXCJmaXJzdF9uYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJGaXJzdCBuYW1lXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICByZXF1aXJlZE1lc3NhZ2UgPSBcIlBsZWFzZSwgZW50ZXIgZmlyc3QgbmFtZS5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBuYW1lID0gXCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkxhc3QgbmFtZVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVxdWlyZWRNZXNzYWdlID0gXCJQbGVhc2UsIGVudGVyIGxhc3QgbmFtZS5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICBuYW1lID0gXCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiRW1haWxcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHJlcXVpcmVkTWVzc2FnZSA9IFwiUGxlYXNlLCBlbnRlciBlbWFpbC5cIlxuICAgICAgICAgICAgdmFsaWRhdG9ycyA9IHtbdmFsaWRhdGVFbWFpbF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWUgPSBcInBhc3N3b3JkMVwiXG4gICAgICAgICAgICB0eXBlID0gXCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIHJlcXVpcmVkTWVzc2FnZSA9IFwiUGxlYXNlLCBlbnRlciBwYXNzd29yZC5cIlxuICAgICAgICAgICAgdmFsaWRhdG9ycyA9IHtbdmFsaWRhdGVQYXNzd29yZF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIG5hbWUgPSBcInBhc3N3b3JkMlwiXG4gICAgICAgICAgICB0eXBlID0gXCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiQ29uZmlybSBwYXNzd29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgcmVxdWlyZWRNZXNzYWdlID0gXCJQbGVhc2UsIGNvbmZpcm0gcGFzc3dvcmQuXCJcbiAgICAgICAgICAgIHZhbGlkYXRvcnMgPSB7W3ZhbGlkYXRlUGFzc3dvcmRNYXRjaF19XG4gICAgICAgICAgICBsaXN0ZW5UbyA9IHtbXCJwYXNzd29yZDFcIl19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgfVxuICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmluaXRpYWxpemVTdGF0ZSgpO1xuICAgIHRoaXMub25WYWx1ZUNoYW5nZSA9IHRoaXMub25WYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25CbHVyID0gdGhpcy5vbkJsdXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU3VibWl0ID0gdGhpcy5vblN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TZXJ2ZXJTaWRlRXJyb3JzID0gdGhpcy5vblNlcnZlclNpZGVFcnJvcnMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGluaXRpYWxpemVTdGF0ZSgpIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcbiAgICBjb25zdCBmaWVsZHMgPSBjaGlsZHJlbi5maWx0ZXIoKGNoaWxkKSA9PiB0aGlzLmlzRmllbGQoY2hpbGQpKTtcbiAgICB2YXIgZmllbGRzU3RhdGUgPSB7fTtcbiAgICBmb3IgKGZpZWxkIG9mIGZpZWxkcylcbiAgICAgIGZpZWxkc1N0YXRlW2ZpZWxkLnByb3BzLm5hbWVdID0ge1xuICAgICAgICBpc1JlcXVpcmVkOiBmaWVsZC5wcm9wcy5yZXF1aXJlZCAhPSB1bmRlZmluZWQsXG4gICAgICAgIHZhbGlkYXRvcnM6IHRoaXMuZ2V0VmFsaWRhdG9ycyhmaWVsZCksXG4gICAgICAgIGxpc3RlbmVyczogW10sXG4gICAgICAgIGlzRmlyc3RFZGl0OiB0cnVlLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgaXNWYWxpZDogbnVsbCxcbiAgICAgICAgZXJyb3I6IG51bGxcbiAgICAgIH07XG4gICAgZm9yIChmaWVsZCBvZiBmaWVsZHMpXG4gICAgICBpZiAoZmllbGQucHJvcHMubGlzdGVuVG8gIT0gdW5kZWZpbmVkKVxuICAgICAgICBmb3IgKGxpc3RlblRvIG9mIGZpZWxkLnByb3BzLmxpc3RlblRvKVxuICAgICAgICAgIGZpZWxkc1N0YXRlW2xpc3RlblRvXS5saXN0ZW5lcnMucHVzaChmaWVsZC5wcm9wcy5uYW1lKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmllbGRzOiBmaWVsZHNTdGF0ZSxcbiAgICAgIG5vbkZpZWxkRXJyb3JzOiBudWxsLFxuICAgIH07XG4gICAgdGhpcy5zdGF0ZS5jYW5TdWJtaXQgPSB0aGlzLmNhblN1Ym1pdCgpO1xuICB9XG5cbiAgZ2V0Q2hpbGRyZW4oKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICBpZiAoY2hpbGRyZW4gPT0gdW5kZWZpbmVkKSBjaGlsZHJlbiA9IFtdO1xuICAgIGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkgY2hpbGRyZW4gPSBbY2hpbGRyZW5dO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuXG4gIGlzRmllbGQoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQudHlwZSA9PSBJbnB1dDtcbiAgfVxuXG4gIGdldFZhbGlkYXRvcnMoZmllbGQpIHtcbiAgICB2YXIgdmFsaWRhdG9ycyA9IGZpZWxkLnByb3BzLnZhbGlkYXRvcnM7XG4gICAgaWYgKHZhbGlkYXRvcnMgPT0gdW5kZWZpbmVkKSB2YWxpZGF0b3JzID0gW107XG4gICAgaWYgKGZpZWxkLnByb3BzLnJlcXVpcmVkKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZVJlcXVpcmVkID0gZ2V0VmFsaWRhdGVSZXF1aXJlZChmaWVsZC5wcm9wcy5yZXF1aXJlZE1lc3NhZ2UpO1xuICAgICAgdmFsaWRhdG9ycy51bnNoaWZ0KHZhbGlkYXRlUmVxdWlyZWQpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRhdG9ycztcbiAgfVxuXG4gIG9uVmFsdWVDaGFuZ2UoZmllbGROYW1lLCB2YWx1ZSkge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGZpZWxkc1N0YXRlID0gc3RhdGUuZmllbGRzO1xuICAgIGZpZWxkc1N0YXRlW2ZpZWxkTmFtZV0udmFsdWUgPSB2YWx1ZTtcbiAgICBzdGF0ZS5maWVsZHMgPSBmaWVsZHNTdGF0ZTtcbiAgICBzdGF0ZS5ub25GaWVsZEVycm9ycyA9IG51bGw7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgICBpZighZmllbGRzU3RhdGVbZmllbGROYW1lXS5pc0ZpcnN0RWRpdClcbiAgICAgIHRoaXMudmFsaWRhdGUoZmllbGROYW1lKTtcbiAgICBcbiAgICBmb3IobGlzdGVuZXIgb2YgZmllbGRzU3RhdGVbZmllbGROYW1lXS5saXN0ZW5lcnMpXG4gICAgICBpZihmaWVsZHNTdGF0ZVtsaXN0ZW5lcl0udmFsdWUgIT0gXCJcIilcbiAgICAgICAgdGhpcy52YWxpZGF0ZShsaXN0ZW5lcik7XG4gIH1cblxuICBvbkJsdXIoZmllbGROYW1lKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICB2YXIgZmllbGRzU3RhdGUgPSBzdGF0ZS5maWVsZHM7XG4gICAgaWYgKGZpZWxkc1N0YXRlW2ZpZWxkTmFtZV0uaXNGaXJzdEVkaXQpIHtcbiAgICAgIGZpZWxkc1N0YXRlW2ZpZWxkTmFtZV0uaXNGaXJzdEVkaXQgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmZpZWxkcyA9IGZpZWxkc1N0YXRlO1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7ICBcbiAgICAgIHRoaXMudmFsaWRhdGUoZmllbGROYW1lKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShmaWVsZE5hbWUpIHtcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBmaWVsZHNTdGF0ZSA9IHN0YXRlLmZpZWxkcztcbiAgICB2YXIgdmFsaWRhdGlvblJlc3VsdCA9IHtpc1ZhbGlkOiB0cnVlLCBlcnJvcjogbnVsbH07IFxuICAgIGZvciAodmFyIHZhbGlkYXRvciBvZiBmaWVsZHNTdGF0ZVtmaWVsZE5hbWVdLnZhbGlkYXRvcnMpIHtcbiAgICAgIHZhbGlkYXRpb25SZXN1bHQgPSB2YWxpZGF0b3IoZmllbGRzU3RhdGVbZmllbGROYW1lXS52YWx1ZSwgZmllbGROYW1lLCBmaWVsZHNTdGF0ZSk7XG4gICAgICBpZiAoIXZhbGlkYXRpb25SZXN1bHQuaXNWYWxpZClcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGZpZWxkc1N0YXRlW2ZpZWxkTmFtZV0uaXNWYWxpZCA9IHZhbGlkYXRpb25SZXN1bHQuaXNWYWxpZDtcbiAgICBmaWVsZHNTdGF0ZVtmaWVsZE5hbWVdLmVycm9yID0gdmFsaWRhdGlvblJlc3VsdC5lcnJvcjtcbiAgICBzdGF0ZS5maWVsZHMgPSBmaWVsZHNTdGF0ZTtcbiAgICBzdGF0ZS5jYW5TdWJtaXQgPSB0aGlzLmNhblN1Ym1pdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgdmFsaWRhdGVBbGwoKSB7XG4gICAgZm9yIChmaWVsZE5hbWUgb2YgT2JqZWN0LmtleXModGhpcy5zdGF0ZS5maWVsZHMpKVxuICAgICAgdGhpcy52YWxpZGF0ZShmaWVsZE5hbWUpO1xuICB9XG5cbiAgY2FuU3VibWl0KCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoc3RhdGUubm9uRmllbGRFcnJvcnMgIT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgZmllbGRzU3RhdGUgPSBzdGF0ZS5maWVsZHM7XG4gICAgZm9yIChmaWVsZCBvZiBPYmplY3QudmFsdWVzKGZpZWxkc1N0YXRlKSlcbiAgICAgIGlmICgoKGZpZWxkLmlzUmVxdWlyZWQpICYmIChmaWVsZC52YWx1ZSA9PSBcIlwiKSkgfHwgKGZpZWxkLmVycm9yICE9IG51bGwpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0aGlzLnZhbGlkYXRlQWxsKCk7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmNhblN1Ym1pdCkgcmV0dXJuO1xuXG4gICAgdmFyIGZvcm1WYWx1ZXMgPSB7fTtcbiAgICBmb3IoZmllbGROYW1lIG9mIE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZmllbGRzKSlcbiAgICAgIGZvcm1WYWx1ZXNbZmllbGROYW1lXSA9IHRoaXMuc3RhdGUuZmllbGRzW2ZpZWxkTmFtZV0udmFsdWU7XG4gICAgJC5wb3N0KHRoaXMucHJvcHMuc3VibWl0VVJMLCBmb3JtVmFsdWVzKVxuICAgICAgLmRvbmUoZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocmVzcG9uc2UucmVkaXJlY3QpO1xuICAgICAgfSlcbiAgICAgIC5mYWlsKHRoaXMub25TZXJ2ZXJTaWRlRXJyb3JzKTtcbiAgfVxuXG4gIG9uU2VydmVyU2lkZUVycm9ycyhyZXNwb25zZSkge1xuICAgIGNvbnN0IGNsaWVudEVycm9yQ29kZXMgPSBbNDAwLCA0MDFdO1xuICAgIGlmIChjbGllbnRFcnJvckNvZGVzLmluY2x1ZGVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICAgIGNvbnN0IGVycm9ycyA9IHJlc3BvbnNlLnJlc3BvbnNlSlNPTjtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICB2YXIgZmllbGRzU3RhdGUgPSBzdGF0ZS5maWVsZHM7XG4gICAgICBmb3IoZmllbGROYW1lIG9mIE9iamVjdC5rZXlzKGVycm9ycykpIFxuICAgICAgICBpZihmaWVsZE5hbWUgPT0gXCJfX2FsbF9fXCIpIHtcbiAgICAgICAgICBzdGF0ZS5ub25GaWVsZEVycm9ycyA9IGVycm9yc1tmaWVsZE5hbWVdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGRzU3RhdGVbZmllbGROYW1lXS5pc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgZmllbGRzU3RhdGVbZmllbGROYW1lXS5lcnJvciA9IGVycm9yc1tmaWVsZE5hbWVdWzBdO1xuICAgICAgICB9XG4gICAgICBzdGF0ZS5maWVsZHMgPSBmaWVsZHNTdGF0ZTtcbiAgICAgIHN0YXRlLmNhblN1Ym1pdCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE86IEhhbmRsZSBzZXJ2ZXIgZXJyb3IgY29kZXMgKGUuZy4gc2VydmVyIGlzIGRvd24pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuICAgIGNvbnN0IGZpZWxkc1N0YXRlID0gdGhpcy5zdGF0ZS5maWVsZHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb3JtIFxuICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIGNoaWxkcmVuLm1hcCgoY2hpbGQsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzRmllbGQoY2hpbGQpID8gY2hpbGQgOiBcbiAgICAgICAgICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAga2V5OiBpZHgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkc1N0YXRlW2NoaWxkLnByb3BzLm5hbWVdLnZhbHVlLFxuICAgICAgICAgICAgICAgIGlzVmFsaWQ6IGZpZWxkc1N0YXRlW2NoaWxkLnByb3BzLm5hbWVdLmlzVmFsaWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZpZWxkc1N0YXRlW2NoaWxkLnByb3BzLm5hbWVdLmVycm9yLFxuICAgICAgICAgICAgICAgIG9uVmFsdWVDaGFuZ2U6IHRoaXMub25WYWx1ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBvbkJsdXI6IHRoaXMub25CbHVyXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5ub25GaWVsZEVycm9ycyA9PSBudWxsID8gXCJcIiA6IFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubm9uRmllbGRFcnJvcnMubWFwKChlcnJvciwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJlcnJvcmxpc3RcIiBrZXk9e2lkeH0+IHtlcnJvcn0gPC9kaXY+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPFN1Ym1pdFxuICAgICAgICAgIGFjdGl2ZSA9IHt0aGlzLnN0YXRlLmNhblN1Ym1pdH1cbiAgICAgICAgICBsYWJlbCA9IHt0aGlzLnByb3BzLnN1Ym1pdExhYmVsfVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UgPSB0aGlzLm9uVmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQmx1ciA9IHRoaXMub25CbHVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBvblZhbHVlQ2hhbmdlKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UodGhpcy5wcm9wcy5uYW1lLCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9XG5cbiAgb25CbHVyKGUpIHtcbiAgICB0aGlzLnByb3BzLm9uQmx1cih0aGlzLnByb3BzLm5hbWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IFxuICAgICAgICBjbGFzc05hbWU9XCJmaWVsZC1jb250YWluZXJcIlxuICAgICAgICBpbnZhbGlkPXt0aGlzLnByb3BzLmlzVmFsaWQ9PWZhbHNlID8gXCJcIiA6IG51bGx9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dCBcbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGV9XG4gICAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnZhbHVlfSBcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblZhbHVlQ2hhbmdlfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5vbkJsdXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JsaXN0XCI+IHt0aGlzLnByb3BzLmVycm9yfSA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgU3VibWl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9XCJzdWJtaXQtYnV0dG9uXCJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgIGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmUudG9TdHJpbmcoKX1cbiAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMubGFiZWx9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuLy8gVmFsaWRhdG9yc1xuXG5mdW5jdGlvbiBnZXRWYWxpZGF0ZVJlcXVpcmVkKGVycm9yTWVzc2FnZSkge1xuICBpZiAoZXJyb3JNZXNzYWdlID09IHVuZGVmaW5lZCkgZXJyb3JNZXNzYWdlID0gXCJGaWVsZCBpcyByZXF1aXJlZC5cIjtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgY29uc3QgaXNWYWxpZCA9IHZhbHVlICE9IFwiXCI7XG4gICAgY29uc3QgZXJyb3IgPSBpc1ZhbGlkID8gbnVsbCA6IGVycm9yTWVzc2FnZTtcbiAgICByZXR1cm4ge2lzVmFsaWQ6IGlzVmFsaWQsIGVycm9yOiBlcnJvcn07XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbCh2YWx1ZSkge1xuICAvLyBSZWdleCBmcm9tOiBodHRwczovL2VtYWlscmVnZXguY29tL1xuICBjb25zdCByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICBjb25zdCBpc1ZhbGlkID0gcmUudGVzdCh2YWx1ZSk7XG4gIGNvbnN0IGVycm9yID0gaXNWYWxpZCA/IG51bGwgOiBcIkludmFsaWQgZW1haWwuIFRyeSBhZ2FpbiwgcGxlYXNlLlwiO1xuICByZXR1cm4ge2lzVmFsaWQ6IGlzVmFsaWQsIGVycm9yOiBlcnJvcn07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQodmFsdWUpIHtcbiAgY29uc3QgcmUgPSAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlxcZCkoPz0uKlssLlxcLzw+PzsnOlwiW1xcXXt9IUAjJCVeJiooKS09XytdKVtBLVphLXpcXGQsLlxcLzw+PzsnOlwiW1xcXXt9IUAjJCVeJiooKS09XytdezgsfSQvO1xuICBjb25zdCBpc1ZhbGlkID0gcmUudGVzdCh2YWx1ZSk7XG4gIGNvbnN0IGVycm9yID0gaXNWYWxpZCA/IG51bGwgOiBcIkludmFsaWQgcGFzc3dvcmQuIFBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzIGxvbmcsIGFuZCBtdXN0IGNvbnRhaW4gYXQgbGVhc3Qgb25lIGxvd2VyY2FzZSBsZXR0ZXIsIG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgbnVtYmVyLCBhbmQgb25lIHNwZWNpYWwgY2hhcmFjdGVyLiBUcnkgYWdhaW4sIHBsZWFzZS5cIjtcbiAgcmV0dXJuIHtpc1ZhbGlkOiBpc1ZhbGlkLCBlcnJvcjogZXJyb3J9O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkTWF0Y2godmFsdWUsIGZpZWxkTmFtZSwgZm9ybVN0YXRlKSB7XG4gIGNvbnN0IHNlY29uZHZhbHVlID0gZmllbGROYW1lID09IFwicGFzc3dvcmQxXCIgPyBmb3JtU3RhdGVbXCJjb25maXJtMlwiXS52YWx1ZSA6IGZvcm1TdGF0ZVtcInBhc3N3b3JkMVwiXS52YWx1ZTtcbiAgY29uc3QgaXNWYWxpZCA9IChzZWNvbmR2YWx1ZSA9PSBcIlwiKSB8ICh2YWx1ZSA9PSBzZWNvbmR2YWx1ZSk7XG4gIGNvbnN0IGVycm9yID0gaXNWYWxpZCA/IG51bGwgOiBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2guIFRyeSBhZ2FpbiwgcGxlYXNlXCI7XG4gIHJldHVybiB7aXNWYWxpZDogaXNWYWxpZCwgZXJyb3I6IGVycm9yfTtcbn1cblxuLy8gTG9hZCBwYXJhbWV0ZXJzIGFuZCByZW5kZXIgcGFnZVxuXG52YXIgcGFnZSA9ICQoXCJib2R5XCIpLmF0dHIoXCJwYWdlXCIpO1xudmFyIGxvZ2luVVJMID0gJChcImJvZHlcIikuYXR0cihcImxvZ2ludXJsXCIpO1xudmFyIHNpZ251cFVSTCA9ICQoXCJib2R5XCIpLmF0dHIoXCJzaWdudXB1cmxcIik7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPFJlZ2lzdHJhdGlvbkNvbnRhaW5lciBwYWdlPXtwYWdlfSAvPixcbiAgJCgnI21haW4nKVswXVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=