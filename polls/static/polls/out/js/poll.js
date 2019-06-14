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
/******/ 	return __webpack_require__(__webpack_require__.s = "./polls/static/polls/src/jsx/poll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./polls/static/polls/src/jsx/poll.js":
/*!********************************************!*\
  !*** ./polls/static/polls/src/jsx/poll.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var PollContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PollContainer, _React$Component);

  function PollContainer() {
    _classCallCheck(this, PollContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PollContainer).apply(this, arguments));
  }

  _createClass(PollContainer, [{
    key: "render",
    value: function render() {
      var poll = this.props.poll;
      return React.createElement("div", {
        id: "poll-container"
      }, React.createElement(PollHeader, {
        name: poll.name,
        author: poll.author
      }), React.createElement(PollMain, {
        poll: poll
      }));
    }
  }]);

  return PollContainer;
}(React.Component);

var PollHeader =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(PollHeader, _React$Component2);

  function PollHeader() {
    _classCallCheck(this, PollHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(PollHeader).apply(this, arguments));
  }

  _createClass(PollHeader, [{
    key: "render",
    value: function render() {
      var author = this.props.author;
      return React.createElement("div", {
        id: "poll-header"
      }, React.createElement("h1", null, this.props.name), React.createElement("p", null, author.first_name, " ", author.last_name, " \u2022 1h hours ago \u2022 Print"));
    }
  }]);

  return PollHeader;
}(React.Component);

var PollMain =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(PollMain, _React$Component3);

  function PollMain() {
    _classCallCheck(this, PollMain);

    return _possibleConstructorReturn(this, _getPrototypeOf(PollMain).apply(this, arguments));
  }

  _createClass(PollMain, [{
    key: "render",
    value: function render() {
      var poll = this.props.poll;
      return React.createElement("div", {
        id: "poll-main"
      }, React.createElement(PollDetails, {
        location: poll.location,
        notes: poll.notes,
        timezone: poll.timezone
      }), React.createElement(PollParticipantsContainer, {
        pollid: poll.id,
        polltimes: poll.polltimes,
        participants: poll.participants
      }));
    }
  }]);

  return PollMain;
}(React.Component);

var PollDetails =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(PollDetails, _React$Component4);

  function PollDetails() {
    _classCallCheck(this, PollDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(PollDetails).apply(this, arguments));
  }

  _createClass(PollDetails, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "poll-details"
      }, React.createElement("p", null, " ", React.createElement("i", {
        className: "fas fa-map-marker-alt"
      }), " ", this.props.location, " "), React.createElement("p", null, " ", React.createElement("i", {
        className: "fas fa-align-left"
      }), " ", this.props.notes, " "), React.createElement("p", null, " ", React.createElement("i", {
        className: "far fa-clock"
      }), " All times displayed in ", React.createElement("b", null, this.props.timezone), " "));
    }
  }]);

  return PollDetails;
}(React.Component);

var PollParticipantsContainer =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(PollParticipantsContainer, _React$Component5);

  function PollParticipantsContainer(props) {
    var _this;

    _classCallCheck(this, PollParticipantsContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PollParticipantsContainer).call(this, props));
    _this.state = {
      participants: _this.props.participants,
      idxEditing: null,
      isNewParticipant: null
    };
    _this.handleAddParticipant = _this.handleAddParticipant.bind(_assertThisInitialized(_this));
    _this.handleStartEditing = _this.handleStartEditing.bind(_assertThisInitialized(_this));
    _this.handleNameChange = _this.handleNameChange.bind(_assertThisInitialized(_this));
    _this.handleAvailabilityChange = _this.handleAvailabilityChange.bind(_assertThisInitialized(_this));
    _this.handleDeleteParticipant = _this.handleDeleteParticipant.bind(_assertThisInitialized(_this));
    _this.handleStopEditing = _this.handleStopEditing.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PollParticipantsContainer, [{
    key: "handleAddParticipant",
    value: function handleAddParticipant() {
      var participants = this.state.participants;
      var newParticipant = {
        poll: this.props.pollid,
        name: "",
        availability: this.props.polltimes.map(function (polltime) {
          return {
            polltime: polltime.id,
            availability: "N"
          };
        })
      };
      participants.unshift(newParticipant);
      this.setState({
        participants: participants,
        idxEditing: 0,
        isNewParticipant: true
      });
    }
  }, {
    key: "handleStartEditing",
    value: function handleStartEditing(participantIdx) {
      this.setState({
        idxEditing: participantIdx,
        isNewParticipant: false
      });
    }
  }, {
    key: "handleNameChange",
    value: function handleNameChange(participantIdx, newName) {
      var participants = this.state.participants;
      participants[participantIdx].name = newName;
      this.setState({
        participants: participants
      });
    }
  }, {
    key: "handleAvailabilityChange",
    value: function handleAvailabilityChange(participantIdx, polltimeIdx, newAvailability) {
      var participants = this.state.participants;
      participants[participantIdx].availability[polltimeIdx].availability = newAvailability;
      this.setState({
        participants: participants
      });
    }
  }, {
    key: "handleStopEditing",
    value: function handleStopEditing() {
      var _this2 = this;

      var participants = this.state.participants;
      var updatedParticipant = participants[this.state.idxEditing];
      var method = this.state.isNewParticipant ? "POST" : "PUT";
      $.ajax({
        url: "",
        type: method,
        contentType: "application/json",
        data: JSON.stringify(updatedParticipant)
      }).done(function (updatedParticipant) {
        if (_this2.state.isNewParticipant) participants[_this2.state.idxEditing] = updatedParticipant;

        _this2.setState({
          participants: participants,
          idxEditing: null,
          isNewParticipant: null
        });

        console.log("Participant updated.");
      }).fail(function (response) {
        // TODO: Handle failure case (at the very least alert the user, perhaps different responses depending on the error message)
        console.log("Failed to update participant.");
      });
    }
  }, {
    key: "handleDeleteParticipant",
    value: function handleDeleteParticipant(participantIdx) {
      var _this3 = this;

      var participants = this.state.participants;
      var deletedParticipant = participants[participantIdx];

      var deleteParticipant = function deleteParticipant() {
        participants.splice(participantIdx, 1);

        _this3.setState({
          participants: participants,
          idxEditing: null,
          isNewParticipant: null
        });

        console.log("Participant deleted.");
      };

      if (this.state.isNewParticipant) {
        deleteParticipant();
      } else {
        $.ajax({
          url: "",
          type: "DELETE",
          contentType: "application/json",
          data: JSON.stringify({
            id: deletedParticipant["id"]
          })
        }).done(deleteParticipant).fail(function () {
          // TODO: Handle failure case (at the very least alert the user, perhaps different responses depending on the error message)
          console.log("Failed to delete participant.");
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "poll-participants-container"
      }, React.createElement(PollParticipantsTable, {
        polltimes: this.props.polltimes,
        participants: this.state.participants,
        onAddParticipant: this.handleAddParticipant,
        onStartEditing: this.handleStartEditing,
        idxEditing: this.state.idxEditing,
        onNameChange: this.handleNameChange,
        onAvailabilityChange: this.handleAvailabilityChange,
        onDeleteParticipant: this.handleDeleteParticipant
      }), this.state.idxEditing == null ? "" : React.createElement(PollSubmitButton, {
        idxEditing: this.state.idxEditing,
        isNewParticipant: this.state.isNewParticipant,
        participant: this.state.participants[this.state.idxEditing],
        onStopEditing: this.handleStopEditing
      }));
    }
  }]);

  return PollParticipantsContainer;
}(React.Component);

var PollParticipantsTable =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(PollParticipantsTable, _React$Component6);

  function PollParticipantsTable() {
    _classCallCheck(this, PollParticipantsTable);

    return _possibleConstructorReturn(this, _getPrototypeOf(PollParticipantsTable).apply(this, arguments));
  }

  _createClass(PollParticipantsTable, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var isEditing = this.props.idxEditing != null;
      return React.createElement("table", {
        id: "poll-participants-table"
      }, React.createElement(PollTableHeader, {
        polltimes: this.props.polltimes
      }), React.createElement("tbody", null, React.createElement(PollTableSummary, {
        polltimes: this.props.polltimes,
        participants: this.props.participants,
        isEditable: !isEditing,
        onAddParticipant: this.props.onAddParticipant
      }), this.props.participants.map(function (participant, idx) {
        return _this4.props.idxEditing != idx ? React.createElement(PollParticipantRow, {
          key: idx,
          idx: idx,
          participant: participant,
          isEditable: !isEditing,
          onStartEditing: _this4.props.onStartEditing
        }) : React.createElement(PollParticipantRowEditing, {
          key: idx,
          idx: idx,
          participant: participant,
          onNameChange: _this4.props.onNameChange,
          onAvailabilityChange: _this4.props.onAvailabilityChange,
          onDeleteParticipant: _this4.props.onDeleteParticipant
        });
      })));
    }
  }]);

  return PollParticipantsTable;
}(React.Component);

var PollTableHeader =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(PollTableHeader, _React$Component7);

  function PollTableHeader() {
    _classCallCheck(this, PollTableHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(PollTableHeader).apply(this, arguments));
  }

  _createClass(PollTableHeader, [{
    key: "render",
    value: function render() {
      var polltimes = this.props.polltimes;
      var columns = [];

      for (var idx = 0; idx < polltimes.length; idx++) {
        var time = polltimes[idx];
        var start_time = new Date(time.start);
        var end_time = new Date(time.end);
        columns.push(React.createElement("th", {
          key: idx
        }, React.createElement("span", {
          className: "poll-table-header-month"
        }, MONTH_NAMES[start_time.getMonth()].slice(0, 3), " "), React.createElement("br", null), React.createElement("span", {
          className: "poll-table-header-day"
        }, start_time.getDate(), " "), React.createElement("br", null), React.createElement("span", {
          className: "poll-table-header-weekday"
        }, DAY_NAMES[start_time.getDay()].slice(0, 3)), React.createElement("br", null), React.createElement("span", {
          className: "poll-table-header-time"
        }, time_to_string(start_time)), React.createElement("br", null), React.createElement("span", {
          className: "poll-table-header-time"
        }, time_to_string(end_time)), React.createElement("br", null)));
      }

      return React.createElement("thead", {
        id: "poll-table-header"
      }, React.createElement("tr", null, React.createElement("th", null), columns));
    }
  }]);

  return PollTableHeader;
}(React.Component);

var PollTableSummary =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(PollTableSummary, _React$Component8);

  function PollTableSummary() {
    _classCallCheck(this, PollTableSummary);

    return _possibleConstructorReturn(this, _getPrototypeOf(PollTableSummary).apply(this, arguments));
  }

  _createClass(PollTableSummary, [{
    key: "render",
    value: function render() {
      var polltimes = this.props.polltimes;
      var participants = this.props.participants;
      var totals = [];

      for (var idx = 0; idx < polltimes.length; idx++) {
        totals[idx] = sum(participants.map(function (p) {
          return p.availability[idx].availability != "N";
        }));
      }

      return React.createElement("tr", {
        id: "poll-table-summary"
      }, React.createElement("td", null, React.createElement("div", {
        id: "poll-participants-summary"
      }, React.createElement("div", {
        id: "poll-n-participants"
      }, participants.length, " participants"), !this.props.isEditable ? "" : React.createElement("div", {
        id: "poll-add-participant",
        className: "fas fa-plus",
        onClick: this.props.onAddParticipant
      }))), polltimes.map(function (polltime, idx) {
        return React.createElement("td", {
          key: idx
        }, React.createElement("div", {
          id: "poll-availability-summary",
          className: "fas fa-check"
        }, totals[idx]));
      }));
    }
  }]);

  return PollTableSummary;
}(React.Component);

var PollParticipantRow =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(PollParticipantRow, _React$Component9);

  function PollParticipantRow(props) {
    var _this5;

    _classCallCheck(this, PollParticipantRow);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(PollParticipantRow).call(this, props));
    _this5.handleStartEditing = _this5.handleStartEditing.bind(_assertThisInitialized(_this5));
    return _this5;
  }

  _createClass(PollParticipantRow, [{
    key: "handleStartEditing",
    value: function handleStartEditing(e) {
      this.props.onStartEditing(this.props.idx);
    }
  }, {
    key: "render",
    value: function render() {
      var participant = this.props.participant;
      return React.createElement("tr", {
        className: "poll-participant-row",
        editing: "false"
      }, React.createElement("td", null, React.createElement("div", {
        className: "poll-participant-details"
      }, React.createElement("div", {
        className: "poll-participant-icon fas fa-user-circle"
      }), React.createElement("div", {
        className: "poll-participant-name"
      }, participant.name), !this.props.isEditable ? "" : React.createElement("div", {
        className: "poll-participant-edit fas fa-pen",
        onClick: this.handleStartEditing
      }))), participant.availability.map(function (response, idx) {
        return React.createElement("td", {
          className: "poll-participant-availability",
          key: idx,
          availability: response.availability
        }, React.createElement("div", {
          className: symbol_from_availability(response.availability)
        }));
      }));
    }
  }]);

  return PollParticipantRow;
}(React.Component);

var PollParticipantRowEditing =
/*#__PURE__*/
function (_React$Component10) {
  _inherits(PollParticipantRowEditing, _React$Component10);

  function PollParticipantRowEditing(props) {
    var _this6;

    _classCallCheck(this, PollParticipantRowEditing);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(PollParticipantRowEditing).call(this, props));
    _this6.handleNameChange = _this6.handleNameChange.bind(_assertThisInitialized(_this6));
    _this6.handleAvailabilityChange = _this6.handleAvailabilityChange.bind(_assertThisInitialized(_this6));
    _this6.handleDeleteParticipant = _this6.handleDeleteParticipant.bind(_assertThisInitialized(_this6));
    _this6.nameInput = React.createRef();
    return _this6;
  }

  _createClass(PollParticipantRowEditing, [{
    key: "handleNameChange",
    value: function handleNameChange(e) {
      var participantIdx = this.props.idx;
      var newName = e.target.value;
      this.props.onNameChange(participantIdx, newName);
    }
  }, {
    key: "handleAvailabilityChange",
    value: function handleAvailabilityChange(polltimeIdx, e) {
      var participantIdx = this.props.idx;
      var previousAvailability = $(e.target).attr("availability");
      var newAvailability = previousAvailability == "Y" ? "M" : previousAvailability == "M" ? "N" : "Y";
      this.props.onAvailabilityChange(participantIdx, polltimeIdx, newAvailability);
    }
  }, {
    key: "handleDeleteParticipant",
    value: function handleDeleteParticipant(e) {
      this.props.onDeleteParticipant(this.props.idx);
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var participant = this.props.participant;
      return React.createElement("tr", {
        className: "poll-participant-row",
        editing: "true"
      }, React.createElement("td", null, React.createElement("div", {
        className: "poll-participant-details"
      }, React.createElement("div", {
        className: "poll-participant-delete fas fa-trash",
        onClick: this.handleDeleteParticipant
      }), React.createElement("input", {
        className: "poll-participant-name-input",
        ref: this.nameInput,
        type: "text",
        value: participant.name,
        placeholder: "Enter your name",
        onChange: this.handleNameChange
      }))), participant.availability.map(function (response, polltimeIdx) {
        return React.createElement("td", {
          className: "poll-participant-availability",
          key: polltimeIdx
        }, React.createElement("input", {
          type: "checkbox",
          className: "poll-participant-availability-checkbox " + symbol_from_availability(response.availability),
          availability: response.availability,
          onChange: function onChange(e) {
            return _this7.handleAvailabilityChange(polltimeIdx, e);
          }
        }));
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.nameInput.current.focus();
    }
  }]);

  return PollParticipantRowEditing;
}(React.Component);

var PollSubmitButton =
/*#__PURE__*/
function (_React$Component11) {
  _inherits(PollSubmitButton, _React$Component11);

  function PollSubmitButton(props) {
    var _this8;

    _classCallCheck(this, PollSubmitButton);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(PollSubmitButton).call(this, props));
    _this8.handleSubmit = _this8.handleSubmit.bind(_assertThisInitialized(_this8));
    return _this8;
  }

  _createClass(PollSubmitButton, [{
    key: "isDisabled",
    value: function isDisabled() {
      return this.props.participant.name == "";
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      if (!this.isDisabled()) this.props.onStopEditing();
    }
  }, {
    key: "render",
    value: function render() {
      var participant = this.props.participant;
      var action = this.props.isNewParticipant ? "Send" : "Update";
      var cannotAttend = sum(participant.availability.map(function (a) {
        return a.availability != "N";
      })) == 0;
      var note = this.isDisabled() ? "Enter your name first" : cannotAttend ? "Cannot attend" : null;
      var hasNote = note != null; // TODO: Add cancel option

      return React.createElement("div", {
        id: "poll-submit-button",
        isdisabled: this.isDisabled().toString(),
        cannotattend: cannotAttend.toString(),
        hasnote: hasNote.toString(),
        onClick: this.handleSubmit
      }, React.createElement("div", {
        id: "poll-submit-action"
      }, action), React.createElement("div", {
        id: "poll-submit-note"
      }, note));
    }
  }]);

  return PollSubmitButton;
}(React.Component); // Helper functions


function time_to_string(date) {
  var hour = date.getHours();
  var minute = date.getMinutes();
  var period;

  if (hour < 12) {
    period = "am";
  } else {
    period = "pm";
    hour -= 12;
  }

  var time_string = hour + ":" + minute.toString().padStart(2, '0') + " " + period;
  return time_string;
}

function symbol_from_availability(availability) {
  if (availability == "Y") return "fas fa-check";
  if (availability == "M") return "fas fa-question";
  return "";
}

function sum(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
} // Load parameters and render page


var poll = $("body").attr("poll");
poll = JSON.parse(poll);
console.log(poll);
ReactDOM.render(React.createElement(PollContainer, {
  poll: poll
}), $('#main')[0]); // Example poll:
// poll = { 
//   id: 1,
//   name: "GoT Marathon!!!",
//   author: {
//     id: 1,
//     first_name: "Adona",
//     last_name: "Iosif",
//     email: "adona.iosif@gmail.com"
//   },
//   location: "My place",
//   notes: "Winter is finally here!",
//   timezone: "America/New York",
//   polltimes: [
//     { id: 1, start: "2019-05-02T20:00:00Z", end: "2019-05-02T23:00:00Z" },
//     { id: 2, start: "2019-05-03T20:00:00Z", end: "2019-05-03T23:00:00Z" }
//   ],
//   participants: [
//     {
//       id: 1, 
//       name: "Adona-Luiza Iosif", 
//       availability: [ {availability: "Y"}, {availability: "Y"} ]
//     },
//     {
//       id: 2, 
//       name: "Angi", 
//       availability: [ {availability: "M"}, {availability: "Y"} ]
//     },
//     {
//       id: 3, 
//       name: "Maria", 
//       availability: [ {availability: "N"}, {availability: "N"} ]
//     }
//   ]
// };

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcG9sbHMvc3RhdGljL3BvbGxzL3NyYy9qc3gvcG9sbC5qcyJdLCJuYW1lcyI6WyJNT05USF9OQU1FUyIsIkRBWV9OQU1FUyIsIlBvbGxDb250YWluZXIiLCJwb2xsIiwicHJvcHMiLCJuYW1lIiwiYXV0aG9yIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQb2xsSGVhZGVyIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIlBvbGxNYWluIiwibG9jYXRpb24iLCJub3RlcyIsInRpbWV6b25lIiwiaWQiLCJwb2xsdGltZXMiLCJwYXJ0aWNpcGFudHMiLCJQb2xsRGV0YWlscyIsIlBvbGxQYXJ0aWNpcGFudHNDb250YWluZXIiLCJzdGF0ZSIsImlkeEVkaXRpbmciLCJpc05ld1BhcnRpY2lwYW50IiwiaGFuZGxlQWRkUGFydGljaXBhbnQiLCJiaW5kIiwiaGFuZGxlU3RhcnRFZGl0aW5nIiwiaGFuZGxlTmFtZUNoYW5nZSIsImhhbmRsZUF2YWlsYWJpbGl0eUNoYW5nZSIsImhhbmRsZURlbGV0ZVBhcnRpY2lwYW50IiwiaGFuZGxlU3RvcEVkaXRpbmciLCJuZXdQYXJ0aWNpcGFudCIsInBvbGxpZCIsImF2YWlsYWJpbGl0eSIsIm1hcCIsInBvbGx0aW1lIiwidW5zaGlmdCIsInNldFN0YXRlIiwicGFydGljaXBhbnRJZHgiLCJuZXdOYW1lIiwicG9sbHRpbWVJZHgiLCJuZXdBdmFpbGFiaWxpdHkiLCJ1cGRhdGVkUGFydGljaXBhbnQiLCJtZXRob2QiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJjb250ZW50VHlwZSIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZG9uZSIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwicmVzcG9uc2UiLCJkZWxldGVkUGFydGljaXBhbnQiLCJkZWxldGVQYXJ0aWNpcGFudCIsInNwbGljZSIsIlBvbGxQYXJ0aWNpcGFudHNUYWJsZSIsImlzRWRpdGluZyIsIm9uQWRkUGFydGljaXBhbnQiLCJwYXJ0aWNpcGFudCIsImlkeCIsIm9uU3RhcnRFZGl0aW5nIiwib25OYW1lQ2hhbmdlIiwib25BdmFpbGFiaWxpdHlDaGFuZ2UiLCJvbkRlbGV0ZVBhcnRpY2lwYW50IiwiUG9sbFRhYmxlSGVhZGVyIiwiY29sdW1ucyIsImxlbmd0aCIsInRpbWUiLCJzdGFydF90aW1lIiwiRGF0ZSIsInN0YXJ0IiwiZW5kX3RpbWUiLCJlbmQiLCJwdXNoIiwiZ2V0TW9udGgiLCJzbGljZSIsImdldERhdGUiLCJnZXREYXkiLCJ0aW1lX3RvX3N0cmluZyIsIlBvbGxUYWJsZVN1bW1hcnkiLCJ0b3RhbHMiLCJzdW0iLCJwIiwiaXNFZGl0YWJsZSIsIlBvbGxQYXJ0aWNpcGFudFJvdyIsImUiLCJzeW1ib2xfZnJvbV9hdmFpbGFiaWxpdHkiLCJQb2xsUGFydGljaXBhbnRSb3dFZGl0aW5nIiwibmFtZUlucHV0IiwiY3JlYXRlUmVmIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2aW91c0F2YWlsYWJpbGl0eSIsImF0dHIiLCJjdXJyZW50IiwiZm9jdXMiLCJQb2xsU3VibWl0QnV0dG9uIiwiaGFuZGxlU3VibWl0IiwiaXNEaXNhYmxlZCIsIm9uU3RvcEVkaXRpbmciLCJhY3Rpb24iLCJjYW5ub3RBdHRlbmQiLCJhIiwibm90ZSIsImhhc05vdGUiLCJ0b1N0cmluZyIsImRhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwicGVyaW9kIiwidGltZV9zdHJpbmciLCJwYWRTdGFydCIsImFyciIsInJlZHVjZSIsImIiLCJwYXJzZSIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QVd2SCxJQUFYLENBQVA7QUFDQWtELE9BQU8sQ0FBQ0MsR0FBUixDQUFZbkQsSUFBWjtBQUVBd0gsUUFBUSxDQUFDQyxNQUFULENBQ0Usb0JBQUMsYUFBRDtBQUFlLE1BQUksRUFBRXpIO0FBQXJCLEVBREYsRUFFRXlDLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxDQUFYLENBRkYsRSxDQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSyIsImZpbGUiOiJwb2xsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wb2xscy9zdGF0aWMvcG9sbHMvc3JjL2pzeC9wb2xsLmpzXCIpO1xuIiwiY29uc3QgTU9OVEhfTkFNRVMgPSBbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLFxuICBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXG5dO1xuY29uc3QgREFZX05BTUVTID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XG5cbmNsYXNzIFBvbGxDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcG9sbCA9IHRoaXMucHJvcHMucG9sbDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cInBvbGwtY29udGFpbmVyXCI+XG4gICAgICAgIDxQb2xsSGVhZGVyXG4gICAgICAgICAgbmFtZSA9IHtwb2xsLm5hbWV9XG4gICAgICAgICAgYXV0aG9yID0ge3BvbGwuYXV0aG9yfS8+XG4gICAgICAgIDxQb2xsTWFpbiBwb2xsID0ge3BvbGx9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIFBvbGxIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXV0aG9yID0gdGhpcy5wcm9wcy5hdXRob3I7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJwb2xsLWhlYWRlclwiPlxuICAgICAgICA8aDE+e3RoaXMucHJvcHMubmFtZX08L2gxPlxuICAgICAgICA8cD57YXV0aG9yLmZpcnN0X25hbWV9IHthdXRob3IubGFzdF9uYW1lfSDigKIgMWggaG91cnMgYWdvIOKAoiBQcmludDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgUG9sbE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcG9sbCA9IHRoaXMucHJvcHMucG9sbDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cInBvbGwtbWFpblwiPlxuICAgICAgICA8UG9sbERldGFpbHMgXG4gICAgICAgICAgbG9jYXRpb24gPSB7cG9sbC5sb2NhdGlvbn1cbiAgICAgICAgICBub3RlcyA9IHtwb2xsLm5vdGVzfVxuICAgICAgICAgIHRpbWV6b25lID0ge3BvbGwudGltZXpvbmV9XG4gICAgICAgIC8+XG4gICAgICAgIDxQb2xsUGFydGljaXBhbnRzQ29udGFpbmVyXG4gICAgICAgICAgcG9sbGlkID0ge3BvbGwuaWR9XG4gICAgICAgICAgcG9sbHRpbWVzID0ge3BvbGwucG9sbHRpbWVzfVxuICAgICAgICAgIHBhcnRpY2lwYW50cyA9IHtwb2xsLnBhcnRpY2lwYW50c31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY2xhc3MgUG9sbERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJwb2xsLWRldGFpbHNcIj5cbiAgICAgICAgPHA+IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvaT4ge3RoaXMucHJvcHMubG9jYXRpb259IDwvcD5cbiAgICAgICAgPHA+IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hbGlnbi1sZWZ0XCI+PC9pPiB7dGhpcy5wcm9wcy5ub3Rlc30gPC9wPlxuICAgICAgICA8cD4gPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCI+PC9pPiBBbGwgdGltZXMgZGlzcGxheWVkIGluIDxiPnt0aGlzLnByb3BzLnRpbWV6b25lfTwvYj4gPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBQb2xsUGFydGljaXBhbnRzQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhcnRpY2lwYW50czogdGhpcy5wcm9wcy5wYXJ0aWNpcGFudHMsXG4gICAgICBpZHhFZGl0aW5nOiBudWxsLFxuICAgICAgaXNOZXdQYXJ0aWNpcGFudDogbnVsbFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVBZGRQYXJ0aWNpcGFudCA9IHRoaXMuaGFuZGxlQWRkUGFydGljaXBhbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN0YXJ0RWRpdGluZyA9IHRoaXMuaGFuZGxlU3RhcnRFZGl0aW5nLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBdmFpbGFiaWxpdHlDaGFuZ2UgPSB0aGlzLmhhbmRsZUF2YWlsYWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRGVsZXRlUGFydGljaXBhbnQgPSB0aGlzLmhhbmRsZURlbGV0ZVBhcnRpY2lwYW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdG9wRWRpdGluZyA9IHRoaXMuaGFuZGxlU3RvcEVkaXRpbmcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUFkZFBhcnRpY2lwYW50KCkge1xuICAgIHZhciBwYXJ0aWNpcGFudHMgPSB0aGlzLnN0YXRlLnBhcnRpY2lwYW50cztcbiAgICBjb25zdCBuZXdQYXJ0aWNpcGFudCA9IHtcbiAgICAgIHBvbGw6IHRoaXMucHJvcHMucG9sbGlkLFxuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGF2YWlsYWJpbGl0eTogdGhpcy5wcm9wcy5wb2xsdGltZXMubWFwKHBvbGx0aW1lID0+ICh7XG4gICAgICAgIHBvbGx0aW1lOiBwb2xsdGltZS5pZCxcbiAgICAgICAgYXZhaWxhYmlsaXR5OiBcIk5cIlxuICAgICAgfSkpXG4gICAgfTtcbiAgICBwYXJ0aWNpcGFudHMudW5zaGlmdChuZXdQYXJ0aWNpcGFudCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYXJ0aWNpcGFudHM6IHBhcnRpY2lwYW50cyxcbiAgICAgIGlkeEVkaXRpbmc6IDAsXG4gICAgICBpc05ld1BhcnRpY2lwYW50OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdGFydEVkaXRpbmcocGFydGljaXBhbnRJZHgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlkeEVkaXRpbmc6IHBhcnRpY2lwYW50SWR4LFxuICAgICAgaXNOZXdQYXJ0aWNpcGFudDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZU5hbWVDaGFuZ2UocGFydGljaXBhbnRJZHgsIG5ld05hbWUpIHtcbiAgICB2YXIgcGFydGljaXBhbnRzID0gdGhpcy5zdGF0ZS5wYXJ0aWNpcGFudHM7XG4gICAgcGFydGljaXBhbnRzW3BhcnRpY2lwYW50SWR4XS5uYW1lID0gbmV3TmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhcnRpY2lwYW50czogcGFydGljaXBhbnRzXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVBdmFpbGFiaWxpdHlDaGFuZ2UocGFydGljaXBhbnRJZHgsIHBvbGx0aW1lSWR4LCBuZXdBdmFpbGFiaWxpdHkpIHtcbiAgICB2YXIgcGFydGljaXBhbnRzID0gdGhpcy5zdGF0ZS5wYXJ0aWNpcGFudHM7XG4gICAgcGFydGljaXBhbnRzW3BhcnRpY2lwYW50SWR4XS5hdmFpbGFiaWxpdHlbcG9sbHRpbWVJZHhdLmF2YWlsYWJpbGl0eSA9IG5ld0F2YWlsYWJpbGl0eTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhcnRpY2lwYW50czogcGFydGljaXBhbnRzXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdG9wRWRpdGluZygpIHtcbiAgICB2YXIgcGFydGljaXBhbnRzID0gdGhpcy5zdGF0ZS5wYXJ0aWNpcGFudHM7XG4gICAgY29uc3QgdXBkYXRlZFBhcnRpY2lwYW50ID0gcGFydGljaXBhbnRzW3RoaXMuc3RhdGUuaWR4RWRpdGluZ107XG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5zdGF0ZS5pc05ld1BhcnRpY2lwYW50ID8gXCJQT1NUXCIgOiBcIlBVVFwiO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwiXCIsIFxuICAgICAgdHlwZTogbWV0aG9kLFxuICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFBhcnRpY2lwYW50KVxuICAgIH0pXG4gICAgLmRvbmUoKHVwZGF0ZWRQYXJ0aWNpcGFudCkgPT4ge1xuICAgICAgaWYodGhpcy5zdGF0ZS5pc05ld1BhcnRpY2lwYW50KVxuICAgICAgICBwYXJ0aWNpcGFudHNbdGhpcy5zdGF0ZS5pZHhFZGl0aW5nXSA9IHVwZGF0ZWRQYXJ0aWNpcGFudDtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwYXJ0aWNpcGFudHM6IHBhcnRpY2lwYW50cyxcbiAgICAgICAgaWR4RWRpdGluZzogbnVsbCxcbiAgICAgICAgaXNOZXdQYXJ0aWNpcGFudDogbnVsbFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlBhcnRpY2lwYW50IHVwZGF0ZWQuXCIpO1xuICAgIH0pXG4gICAgLmZhaWwoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyBUT0RPOiBIYW5kbGUgZmFpbHVyZSBjYXNlIChhdCB0aGUgdmVyeSBsZWFzdCBhbGVydCB0aGUgdXNlciwgcGVyaGFwcyBkaWZmZXJlbnQgcmVzcG9uc2VzIGRlcGVuZGluZyBvbiB0aGUgZXJyb3IgbWVzc2FnZSlcbiAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIHVwZGF0ZSBwYXJ0aWNpcGFudC5cIik7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEZWxldGVQYXJ0aWNpcGFudChwYXJ0aWNpcGFudElkeCkge1xuICAgIHZhciBwYXJ0aWNpcGFudHMgPSB0aGlzLnN0YXRlLnBhcnRpY2lwYW50cztcbiAgICB2YXIgZGVsZXRlZFBhcnRpY2lwYW50ID0gcGFydGljaXBhbnRzW3BhcnRpY2lwYW50SWR4XTtcbiAgICB2YXIgZGVsZXRlUGFydGljaXBhbnQgPSAoKSA9PiB7XG4gICAgICBwYXJ0aWNpcGFudHMuc3BsaWNlKHBhcnRpY2lwYW50SWR4LCAxKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwYXJ0aWNpcGFudHM6IHBhcnRpY2lwYW50cyxcbiAgICAgICAgaWR4RWRpdGluZzogbnVsbCxcbiAgICAgICAgaXNOZXdQYXJ0aWNpcGFudDogbnVsbFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlBhcnRpY2lwYW50IGRlbGV0ZWQuXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pc05ld1BhcnRpY2lwYW50KSB7XG4gICAgICBkZWxldGVQYXJ0aWNpcGFudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IFwiXCIsIFxuICAgICAgICB0eXBlOiBcIkRFTEVURVwiLCBcbiAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7aWQ6IGRlbGV0ZWRQYXJ0aWNpcGFudFtcImlkXCJdfSlcbiAgICAgIH0pXG4gICAgICAuZG9uZShkZWxldGVQYXJ0aWNpcGFudClcbiAgICAgIC5mYWlsKCgpID0+IHtcbiAgICAgICAgLy8gVE9ETzogSGFuZGxlIGZhaWx1cmUgY2FzZSAoYXQgdGhlIHZlcnkgbGVhc3QgYWxlcnQgdGhlIHVzZXIsIHBlcmhhcHMgZGlmZmVyZW50IHJlc3BvbnNlcyBkZXBlbmRpbmcgb24gdGhlIGVycm9yIG1lc3NhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIGRlbGV0ZSBwYXJ0aWNpcGFudC5cIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJwb2xsLXBhcnRpY2lwYW50cy1jb250YWluZXJcIj5cbiAgICAgICAgPFBvbGxQYXJ0aWNpcGFudHNUYWJsZSBcbiAgICAgICAgICBwb2xsdGltZXMgPSB7dGhpcy5wcm9wcy5wb2xsdGltZXN9IFxuICAgICAgICAgIHBhcnRpY2lwYW50cyA9IHt0aGlzLnN0YXRlLnBhcnRpY2lwYW50c31cbiAgICAgICAgICBvbkFkZFBhcnRpY2lwYW50ID0ge3RoaXMuaGFuZGxlQWRkUGFydGljaXBhbnR9XG4gICAgICAgICAgb25TdGFydEVkaXRpbmcgPSB7dGhpcy5oYW5kbGVTdGFydEVkaXRpbmd9XG4gICAgICAgICAgaWR4RWRpdGluZyA9IHt0aGlzLnN0YXRlLmlkeEVkaXRpbmd9XG4gICAgICAgICAgb25OYW1lQ2hhbmdlID0ge3RoaXMuaGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICBvbkF2YWlsYWJpbGl0eUNoYW5nZSA9IHt0aGlzLmhhbmRsZUF2YWlsYWJpbGl0eUNoYW5nZX1cbiAgICAgICAgICBvbkRlbGV0ZVBhcnRpY2lwYW50ID0ge3RoaXMuaGFuZGxlRGVsZXRlUGFydGljaXBhbnR9XG4gICAgICAgIC8+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS5pZHhFZGl0aW5nID09IG51bGwgPyBcIlwiIDogXG4gICAgICAgICAgPFBvbGxTdWJtaXRCdXR0b24gXG4gICAgICAgICAgICBpZHhFZGl0aW5nID0ge3RoaXMuc3RhdGUuaWR4RWRpdGluZ31cbiAgICAgICAgICAgIGlzTmV3UGFydGljaXBhbnQgPSB7dGhpcy5zdGF0ZS5pc05ld1BhcnRpY2lwYW50fVxuICAgICAgICAgICAgcGFydGljaXBhbnQgPSB7dGhpcy5zdGF0ZS5wYXJ0aWNpcGFudHNbdGhpcy5zdGF0ZS5pZHhFZGl0aW5nXX1cbiAgICAgICAgICAgIG9uU3RvcEVkaXRpbmcgPSB7dGhpcy5oYW5kbGVTdG9wRWRpdGluZ31cbiAgICAgICAgICAvPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgUG9sbFBhcnRpY2lwYW50c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlzRWRpdGluZyA9IHRoaXMucHJvcHMuaWR4RWRpdGluZyE9bnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIGlkPVwicG9sbC1wYXJ0aWNpcGFudHMtdGFibGVcIj5cbiAgICAgICAgPFBvbGxUYWJsZUhlYWRlciBwb2xsdGltZXM9e3RoaXMucHJvcHMucG9sbHRpbWVzfSAvPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPFBvbGxUYWJsZVN1bW1hcnkgXG4gICAgICAgICAgICBwb2xsdGltZXM9e3RoaXMucHJvcHMucG9sbHRpbWVzfVxuICAgICAgICAgICAgcGFydGljaXBhbnRzPXt0aGlzLnByb3BzLnBhcnRpY2lwYW50c31cbiAgICAgICAgICAgIGlzRWRpdGFibGU9eyFpc0VkaXRpbmd9XG4gICAgICAgICAgICBvbkFkZFBhcnRpY2lwYW50PXt0aGlzLnByb3BzLm9uQWRkUGFydGljaXBhbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5wYXJ0aWNpcGFudHMubWFwKFxuICAgICAgICAgICAgKHBhcnRpY2lwYW50LCBpZHgpID0+ICggdGhpcy5wcm9wcy5pZHhFZGl0aW5nIT1pZHggPyBcbiAgICAgICAgICAgICAgPFBvbGxQYXJ0aWNpcGFudFJvdyBcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XG4gICAgICAgICAgICAgICAgaXNFZGl0YWJsZT17IWlzRWRpdGluZ31cbiAgICAgICAgICAgICAgICBvblN0YXJ0RWRpdGluZyA9IHt0aGlzLnByb3BzLm9uU3RhcnRFZGl0aW5nfVxuICAgICAgICAgICAgICAvPiA6IFxuICAgICAgICAgICAgICA8UG9sbFBhcnRpY2lwYW50Um93RWRpdGluZyBcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBpZHg9e2lkeH1cbiAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudD17cGFydGljaXBhbnR9XG4gICAgICAgICAgICAgICAgb25OYW1lQ2hhbmdlID0ge3RoaXMucHJvcHMub25OYW1lQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQXZhaWxhYmlsaXR5Q2hhbmdlID0ge3RoaXMucHJvcHMub25BdmFpbGFiaWxpdHlDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25EZWxldGVQYXJ0aWNpcGFudCA9IHt0aGlzLnByb3BzLm9uRGVsZXRlUGFydGljaXBhbnR9XG4gICAgICAgICAgICAgIC8+KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBQb2xsVGFibGVIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcG9sbHRpbWVzID0gdGhpcy5wcm9wcy5wb2xsdGltZXM7XG4gICAgdmFyIGNvbHVtbnMgPSBbXTtcbiAgICBmb3IgKHZhciBpZHg9MDsgaWR4PHBvbGx0aW1lcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICBjb25zdCB0aW1lID0gcG9sbHRpbWVzW2lkeF07XG4gICAgICBjb25zdCBzdGFydF90aW1lID0gbmV3IERhdGUodGltZS5zdGFydCk7XG4gICAgICBjb25zdCBlbmRfdGltZSA9IG5ldyBEYXRlKHRpbWUuZW5kKTtcbiAgICAgIGNvbHVtbnMucHVzaChcbiAgICAgICAgPHRoIGtleSA9IHtpZHh9ID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9sbC10YWJsZS1oZWFkZXItbW9udGhcIj57IE1PTlRIX05BTUVTW3N0YXJ0X3RpbWUuZ2V0TW9udGgoKV0uc2xpY2UoMCwzKSB9IDwvc3Bhbj48YnIvPiBcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9sbC10YWJsZS1oZWFkZXItZGF5XCI+eyBzdGFydF90aW1lLmdldERhdGUoKSB9IDwvc3Bhbj48YnIvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwb2xsLXRhYmxlLWhlYWRlci13ZWVrZGF5XCI+eyBEQVlfTkFNRVNbc3RhcnRfdGltZS5nZXREYXkoKV0uc2xpY2UoMCwzKSB9PC9zcGFuPjxici8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBvbGwtdGFibGUtaGVhZGVyLXRpbWVcIj57IHRpbWVfdG9fc3RyaW5nKHN0YXJ0X3RpbWUpIH08L3NwYW4+PGJyLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicG9sbC10YWJsZS1oZWFkZXItdGltZVwiPnsgdGltZV90b19zdHJpbmcoZW5kX3RpbWUpIH08L3NwYW4+PGJyLz5cbiAgICAgIDwvdGg+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICA8dGhlYWQgaWQ9XCJwb2xsLXRhYmxlLWhlYWRlclwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoLz5cbiAgICAgICAgICB7Y29sdW1uc31cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgKTtcbiAgfVxufVxuXG5jbGFzcyBQb2xsVGFibGVTdW1tYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHBvbGx0aW1lcyA9IHRoaXMucHJvcHMucG9sbHRpbWVzO1xuICAgIGNvbnN0IHBhcnRpY2lwYW50cyA9IHRoaXMucHJvcHMucGFydGljaXBhbnRzO1xuICAgIHZhciB0b3RhbHMgPSBbXTtcbiAgICBmb3IgKHZhciBpZHg9MDsgaWR4PHBvbGx0aW1lcy5sZW5ndGg7IGlkeCsrKVxuICAgICAgdG90YWxzW2lkeF0gPSBzdW0ocGFydGljaXBhbnRzLm1hcChwID0+IHAuYXZhaWxhYmlsaXR5W2lkeF0uYXZhaWxhYmlsaXR5ICE9IFwiTlwiKSk7XG5cbiAgICByZXR1cm4oXG4gICAgICA8dHIgaWQ9XCJwb2xsLXRhYmxlLXN1bW1hcnlcIj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxkaXYgaWQ9XCJwb2xsLXBhcnRpY2lwYW50cy1zdW1tYXJ5XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicG9sbC1uLXBhcnRpY2lwYW50c1wiPntwYXJ0aWNpcGFudHMubGVuZ3RofSBwYXJ0aWNpcGFudHM8L2Rpdj5cbiAgICAgICAgICAgIHsgIXRoaXMucHJvcHMuaXNFZGl0YWJsZSA/IFwiXCIgOlxuICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGlkPVwicG9sbC1hZGQtcGFydGljaXBhbnRcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbkFkZFBhcnRpY2lwYW50fVxuICAgICAgICAgICAgICAvPiB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIHtcbiAgICAgICAgICBwb2xsdGltZXMubWFwKChwb2xsdGltZSwgaWR4KSA9PiBcbiAgICAgICAgICAgIDx0ZCBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb2xsLWF2YWlsYWJpbGl0eS1zdW1tYXJ5XCIgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAge3RvdGFsc1tpZHhdfVxuICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIFBvbGxQYXJ0aWNpcGFudFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlU3RhcnRFZGl0aW5nID0gdGhpcy5oYW5kbGVTdGFydEVkaXRpbmcuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN0YXJ0RWRpdGluZyhlKSB7XG4gICAgdGhpcy5wcm9wcy5vblN0YXJ0RWRpdGluZyh0aGlzLnByb3BzLmlkeCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGFydGljaXBhbnQgPSB0aGlzLnByb3BzLnBhcnRpY2lwYW50O1xuICAgIHJldHVybihcbiAgICAgIDx0ciBjbGFzc05hbWU9XCJwb2xsLXBhcnRpY2lwYW50LXJvd1wiIGVkaXRpbmc9XCJmYWxzZVwiPiBcbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1wYXJ0aWNpcGFudC1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtcGFydGljaXBhbnQtaWNvbiBmYXMgZmEtdXNlci1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1wYXJ0aWNpcGFudC1uYW1lXCI+e3BhcnRpY2lwYW50Lm5hbWV9PC9kaXY+XG4gICAgICAgICAgICB7ICF0aGlzLnByb3BzLmlzRWRpdGFibGUgPyBcIlwiIDpcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLXBhcnRpY2lwYW50LWVkaXQgZmFzIGZhLXBlblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3RhcnRFZGl0aW5nfT48L2Rpdj4gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgICB7XG4gICAgICAgICAgcGFydGljaXBhbnQuYXZhaWxhYmlsaXR5Lm1hcChcbiAgICAgICAgICAgIChyZXNwb25zZSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDx0ZCBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2xsLXBhcnRpY2lwYW50LWF2YWlsYWJpbGl0eVwiIFxuICAgICAgICAgICAgICAgIGtleT17aWR4fSBcbiAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHk9e3Jlc3BvbnNlLmF2YWlsYWJpbGl0eX0+XG4gICAgICAgICAgICAgICAgICB7PGRpdiBjbGFzc05hbWU9e3N5bWJvbF9mcm9tX2F2YWlsYWJpbGl0eShyZXNwb25zZS5hdmFpbGFiaWxpdHkpfT48L2Rpdj59XG4gICAgICAgICAgICAgIDwvdGQ+KSlcbiAgICAgICAgfVxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIFBvbGxQYXJ0aWNpcGFudFJvd0VkaXRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUF2YWlsYWJpbGl0eUNoYW5nZSA9IHRoaXMuaGFuZGxlQXZhaWxhYmlsaXR5Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEZWxldGVQYXJ0aWNpcGFudCA9IHRoaXMuaGFuZGxlRGVsZXRlUGFydGljaXBhbnQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm5hbWVJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgaGFuZGxlTmFtZUNoYW5nZShlKSB7XG4gICAgY29uc3QgcGFydGljaXBhbnRJZHggPSB0aGlzLnByb3BzLmlkeDtcbiAgICBjb25zdCBuZXdOYW1lID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5wcm9wcy5vbk5hbWVDaGFuZ2UocGFydGljaXBhbnRJZHgsIG5ld05hbWUpO1xuICB9XG5cbiAgaGFuZGxlQXZhaWxhYmlsaXR5Q2hhbmdlKHBvbGx0aW1lSWR4LCBlKSB7XG4gICAgY29uc3QgcGFydGljaXBhbnRJZHggPSB0aGlzLnByb3BzLmlkeDtcbiAgICBjb25zdCBwcmV2aW91c0F2YWlsYWJpbGl0eSA9ICQoZS50YXJnZXQpLmF0dHIoXCJhdmFpbGFiaWxpdHlcIik7XG4gICAgY29uc3QgbmV3QXZhaWxhYmlsaXR5ID0gcHJldmlvdXNBdmFpbGFiaWxpdHkgPT0gXCJZXCIgPyBcIk1cIiA6IChwcmV2aW91c0F2YWlsYWJpbGl0eSA9PSBcIk1cIiA/IFwiTlwiIDogXCJZXCIpO1xuICAgIHRoaXMucHJvcHMub25BdmFpbGFiaWxpdHlDaGFuZ2UocGFydGljaXBhbnRJZHgsIHBvbGx0aW1lSWR4LCBuZXdBdmFpbGFiaWxpdHkpO1xuICB9XG5cbiAgaGFuZGxlRGVsZXRlUGFydGljaXBhbnQoZSkge1xuICAgIHRoaXMucHJvcHMub25EZWxldGVQYXJ0aWNpcGFudCh0aGlzLnByb3BzLmlkeCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcGFydGljaXBhbnQgPSB0aGlzLnByb3BzLnBhcnRpY2lwYW50O1xuICAgIHJldHVybihcbiAgICAgIDx0ciBjbGFzc05hbWU9XCJwb2xsLXBhcnRpY2lwYW50LXJvd1wiIGVkaXRpbmc9XCJ0cnVlXCI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtcGFydGljaXBhbnQtZGV0YWlsc1wiPlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9sbC1wYXJ0aWNpcGFudC1kZWxldGUgZmFzIGZhLXRyYXNoXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVEZWxldGVQYXJ0aWNpcGFudH1cbiAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2xsLXBhcnRpY2lwYW50LW5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICByZWY9e3RoaXMubmFtZUlucHV0fVxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXJ0aWNpcGFudC5uYW1lfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgICB7XG4gICAgICAgICAgcGFydGljaXBhbnQuYXZhaWxhYmlsaXR5Lm1hcChcbiAgICAgICAgICAgIChyZXNwb25zZSwgcG9sbHRpbWVJZHgpID0+IChcbiAgICAgICAgICAgICAgPHRkIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvbGwtcGFydGljaXBhbnQtYXZhaWxhYmlsaXR5XCIgXG4gICAgICAgICAgICAgICAga2V5PXtwb2xsdGltZUlkeH0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInBvbGwtcGFydGljaXBhbnQtYXZhaWxhYmlsaXR5LWNoZWNrYm94IFwiICsgc3ltYm9sX2Zyb21fYXZhaWxhYmlsaXR5KHJlc3BvbnNlLmF2YWlsYWJpbGl0eSl9XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eT17cmVzcG9uc2UuYXZhaWxhYmlsaXR5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuaGFuZGxlQXZhaWxhYmlsaXR5Q2hhbmdlKHBvbGx0aW1lSWR4LCBlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L3RyPlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubmFtZUlucHV0LmN1cnJlbnQuZm9jdXMoKTtcbiAgfVxufVxuXG5jbGFzcyBQb2xsU3VibWl0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5wYXJ0aWNpcGFudC5uYW1lID09IFwiXCI7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGlmICghdGhpcy5pc0Rpc2FibGVkKCkpXG4gICAgICB0aGlzLnByb3BzLm9uU3RvcEVkaXRpbmcoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwYXJ0aWNpcGFudCA9IHRoaXMucHJvcHMucGFydGljaXBhbnQ7XG4gICAgY29uc3QgYWN0aW9uID0gdGhpcy5wcm9wcy5pc05ld1BhcnRpY2lwYW50ID8gXCJTZW5kXCIgOiBcIlVwZGF0ZVwiO1xuICAgIGNvbnN0IGNhbm5vdEF0dGVuZCA9IHN1bShwYXJ0aWNpcGFudC5hdmFpbGFiaWxpdHkubWFwKGEgPT4gYS5hdmFpbGFiaWxpdHkhPVwiTlwiKSkgPT0gMDtcbiAgICBjb25zdCBub3RlID0gdGhpcy5pc0Rpc2FibGVkKCkgPyBcIkVudGVyIHlvdXIgbmFtZSBmaXJzdFwiIDogKGNhbm5vdEF0dGVuZCA/IFwiQ2Fubm90IGF0dGVuZFwiIDogbnVsbCk7XG4gICAgY29uc3QgaGFzTm90ZSA9IG5vdGUgIT0gbnVsbDtcbiAgICAvLyBUT0RPOiBBZGQgY2FuY2VsIG9wdGlvblxuICAgIFxuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9XCJwb2xsLXN1Ym1pdC1idXR0b25cIiBcbiAgICAgICAgaXNkaXNhYmxlZD17dGhpcy5pc0Rpc2FibGVkKCkudG9TdHJpbmcoKX0gXG4gICAgICAgIGNhbm5vdGF0dGVuZD17Y2Fubm90QXR0ZW5kLnRvU3RyaW5nKCl9IFxuICAgICAgICBoYXNub3RlPXtoYXNOb3RlLnRvU3RyaW5nKCl9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBpZD1cInBvbGwtc3VibWl0LWFjdGlvblwiPnthY3Rpb259PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cInBvbGwtc3VibWl0LW5vdGVcIj57bm90ZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSGVscGVyIGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiB0aW1lX3RvX3N0cmluZyhkYXRlKSB7XG4gIHZhciBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xuICB2YXIgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCk7XG4gIHZhciBwZXJpb2Q7XG4gIGlmIChob3VyIDwgMTIpIHtcbiAgICBwZXJpb2QgPSBcImFtXCI7XG4gIH0gZWxzZSB7XG4gICAgcGVyaW9kID0gXCJwbVwiO1xuICAgIGhvdXIgLT0gMTI7XG4gIH1cbiAgY29uc3QgdGltZV9zdHJpbmcgPSBob3VyICsgXCI6XCIgKyBtaW51dGUudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpICsgXCIgXCIgKyBwZXJpb2Q7XG4gIHJldHVybiB0aW1lX3N0cmluZztcbn1cblxuZnVuY3Rpb24gc3ltYm9sX2Zyb21fYXZhaWxhYmlsaXR5KGF2YWlsYWJpbGl0eSkge1xuICBpZiAoYXZhaWxhYmlsaXR5PT1cIllcIilcbiAgICByZXR1cm4gXCJmYXMgZmEtY2hlY2tcIjtcbiAgaWYgKGF2YWlsYWJpbGl0eT09XCJNXCIpXG4gICAgcmV0dXJuIFwiZmFzIGZhLXF1ZXN0aW9uXCI7XG4gIHJldHVybiBcIlwiO1xufVxuXG5mdW5jdGlvbiBzdW0oYXJyKSB7XG4gIHJldHVybiBhcnIucmVkdWNlKChhLCBiKSA9PiBhK2IsIDApO1xufVxuXG4vLyBMb2FkIHBhcmFtZXRlcnMgYW5kIHJlbmRlciBwYWdlXG5cbnZhciBwb2xsID0gJChcImJvZHlcIikuYXR0cihcInBvbGxcIik7XG5wb2xsID0gSlNPTi5wYXJzZShwb2xsKTtcbmNvbnNvbGUubG9nKHBvbGwpO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQb2xsQ29udGFpbmVyIHBvbGw9e3BvbGx9IC8+LFxuICAkKCcjbWFpbicpWzBdXG4pO1xuXG4vLyBFeGFtcGxlIHBvbGw6XG4vLyBwb2xsID0geyBcbi8vICAgaWQ6IDEsXG4vLyAgIG5hbWU6IFwiR29UIE1hcmF0aG9uISEhXCIsXG4vLyAgIGF1dGhvcjoge1xuLy8gICAgIGlkOiAxLFxuLy8gICAgIGZpcnN0X25hbWU6IFwiQWRvbmFcIixcbi8vICAgICBsYXN0X25hbWU6IFwiSW9zaWZcIixcbi8vICAgICBlbWFpbDogXCJhZG9uYS5pb3NpZkBnbWFpbC5jb21cIlxuLy8gICB9LFxuLy8gICBsb2NhdGlvbjogXCJNeSBwbGFjZVwiLFxuLy8gICBub3RlczogXCJXaW50ZXIgaXMgZmluYWxseSBoZXJlIVwiLFxuLy8gICB0aW1lem9uZTogXCJBbWVyaWNhL05ldyBZb3JrXCIsXG4vLyAgIHBvbGx0aW1lczogW1xuLy8gICAgIHsgaWQ6IDEsIHN0YXJ0OiBcIjIwMTktMDUtMDJUMjA6MDA6MDBaXCIsIGVuZDogXCIyMDE5LTA1LTAyVDIzOjAwOjAwWlwiIH0sXG4vLyAgICAgeyBpZDogMiwgc3RhcnQ6IFwiMjAxOS0wNS0wM1QyMDowMDowMFpcIiwgZW5kOiBcIjIwMTktMDUtMDNUMjM6MDA6MDBaXCIgfVxuLy8gICBdLFxuLy8gICBwYXJ0aWNpcGFudHM6IFtcbi8vICAgICB7XG4vLyAgICAgICBpZDogMSwgXG4vLyAgICAgICBuYW1lOiBcIkFkb25hLUx1aXphIElvc2lmXCIsIFxuLy8gICAgICAgYXZhaWxhYmlsaXR5OiBbIHthdmFpbGFiaWxpdHk6IFwiWVwifSwge2F2YWlsYWJpbGl0eTogXCJZXCJ9IF1cbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIGlkOiAyLCBcbi8vICAgICAgIG5hbWU6IFwiQW5naVwiLCBcbi8vICAgICAgIGF2YWlsYWJpbGl0eTogWyB7YXZhaWxhYmlsaXR5OiBcIk1cIn0sIHthdmFpbGFiaWxpdHk6IFwiWVwifSBdXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBpZDogMywgXG4vLyAgICAgICBuYW1lOiBcIk1hcmlhXCIsIFxuLy8gICAgICAgYXZhaWxhYmlsaXR5OiBbIHthdmFpbGFiaWxpdHk6IFwiTlwifSwge2F2YWlsYWJpbGl0eTogXCJOXCJ9IF1cbi8vICAgICB9XG4vLyAgIF1cbi8vIH07XG4iXSwic291cmNlUm9vdCI6IiJ9