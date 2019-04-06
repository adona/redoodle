var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var PollContainer = function (_React$Component) {
  _inherits(PollContainer, _React$Component);

  function PollContainer() {
    _classCallCheck(this, PollContainer);

    return _possibleConstructorReturn(this, (PollContainer.__proto__ || Object.getPrototypeOf(PollContainer)).apply(this, arguments));
  }

  _createClass(PollContainer, [{
    key: "render",
    value: function render() {
      var poll = this.props.poll;
      return React.createElement(
        "div",
        { id: "poll-container" },
        React.createElement(PollHeader, {
          name: poll.name,
          author: poll.author }),
        React.createElement(PollMain, { poll: poll })
      );
    }
  }]);

  return PollContainer;
}(React.Component);

var PollHeader = function (_React$Component2) {
  _inherits(PollHeader, _React$Component2);

  function PollHeader() {
    _classCallCheck(this, PollHeader);

    return _possibleConstructorReturn(this, (PollHeader.__proto__ || Object.getPrototypeOf(PollHeader)).apply(this, arguments));
  }

  _createClass(PollHeader, [{
    key: "render",
    value: function render() {
      var author = this.props.author;
      return React.createElement(
        "div",
        { id: "poll-header" },
        React.createElement(
          "h1",
          null,
          this.props.name
        ),
        React.createElement(
          "p",
          null,
          author.first_name,
          " ",
          author.last_name,
          " \u2022 1h hours ago \u2022 Print"
        )
      );
    }
  }]);

  return PollHeader;
}(React.Component);

var PollMain = function (_React$Component3) {
  _inherits(PollMain, _React$Component3);

  function PollMain() {
    _classCallCheck(this, PollMain);

    return _possibleConstructorReturn(this, (PollMain.__proto__ || Object.getPrototypeOf(PollMain)).apply(this, arguments));
  }

  _createClass(PollMain, [{
    key: "render",
    value: function render() {
      var poll = this.props.poll;
      return React.createElement(
        "div",
        { id: "poll-main" },
        React.createElement(PollDetails, {
          location: poll.location,
          notes: poll.notes,
          timezone: poll.timezone
        }),
        React.createElement(PollParticipantsContainer, {
          polltimes: poll.polltimes,
          participants: poll.participants
        })
      );
    }
  }]);

  return PollMain;
}(React.Component);

var PollDetails = function (_React$Component4) {
  _inherits(PollDetails, _React$Component4);

  function PollDetails() {
    _classCallCheck(this, PollDetails);

    return _possibleConstructorReturn(this, (PollDetails.__proto__ || Object.getPrototypeOf(PollDetails)).apply(this, arguments));
  }

  _createClass(PollDetails, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "poll-details" },
        React.createElement(
          "p",
          null,
          " ",
          React.createElement("i", { className: "fas fa-map-marker-alt" }),
          " ",
          this.props.location,
          " "
        ),
        React.createElement(
          "p",
          null,
          " ",
          React.createElement("i", { className: "fas fa-align-left" }),
          " ",
          this.props.notes,
          " "
        ),
        React.createElement(
          "p",
          null,
          " ",
          React.createElement("i", { className: "far fa-clock" }),
          " All times displayed in ",
          React.createElement(
            "b",
            null,
            this.props.timezone
          ),
          " "
        )
      );
    }
  }]);

  return PollDetails;
}(React.Component);

var PollParticipantsContainer = function (_React$Component5) {
  _inherits(PollParticipantsContainer, _React$Component5);

  function PollParticipantsContainer(props) {
    _classCallCheck(this, PollParticipantsContainer);

    var _this5 = _possibleConstructorReturn(this, (PollParticipantsContainer.__proto__ || Object.getPrototypeOf(PollParticipantsContainer)).call(this, props));

    _this5.state = {
      participants: _this5.props.participants,
      idxEditing: null,
      isNewParticipant: null
    };
    _this5.handleAddParticipant = _this5.handleAddParticipant.bind(_this5);
    _this5.handleStartEditing = _this5.handleStartEditing.bind(_this5);
    _this5.handleNameChange = _this5.handleNameChange.bind(_this5);
    _this5.handleAvailabilityChange = _this5.handleAvailabilityChange.bind(_this5);
    _this5.handleDeleteParticipant = _this5.handleDeleteParticipant.bind(_this5);
    _this5.handleStopEditing = _this5.handleStopEditing.bind(_this5);
    return _this5;
  }

  _createClass(PollParticipantsContainer, [{
    key: "handleAddParticipant",
    value: function handleAddParticipant() {
      var participants = this.state.participants;
      var newParticipant = {
        id: null,
        name: "",
        availability: this.props.polltimes.map(function (polltime) {
          return { availability: "N" };
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
    value: function handleNameChange(participantIdx, name) {
      var participants = this.state.participants;
      participants[participantIdx].name = name;
      this.setState({
        participants: participants
      });
    }
  }, {
    key: "handleAvailabilityChange",
    value: function handleAvailabilityChange(participantIdx, polltimeIdx, newAvailability) {
      var participants = this.state.participants;
      participants[participantIdx].availability[polltimeIdx] = { availability: newAvailability };
      this.setState({
        participants: participants
      });
    }
  }, {
    key: "handleDeleteParticipant",
    value: function handleDeleteParticipant(participantIdx) {
      var participants = this.state.participants;
      participants.splice(participantIdx, 1);
      this.setState({
        participants: participants,
        idxEditing: null
      });
    }
  }, {
    key: "handleStopEditing",
    value: function handleStopEditing() {}
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "poll-participants-container" },
        React.createElement(PollParticipantsTable, {
          polltimes: this.props.polltimes,
          participants: this.state.participants,
          onAddParticipant: this.handleAddParticipant,
          onStartEditing: this.handleStartEditing,
          idxEditing: this.state.idxEditing,
          onNameChange: this.handleNameChange,
          onAvailabilityChange: this.handleAvailabilityChange,
          onDeleteParticipant: this.handleDeleteParticipant
        }),
        this.state.idxEditing == null ? "" : React.createElement(PollSubmitButton, {
          idxEditing: this.state.idxEditing,
          isNewParticipant: this.state.isNewParticipant,
          participant: this.state.participants[this.state.idxEditing],
          onStopEditing: this.handleStopEditing
        })
      );
    }
  }]);

  return PollParticipantsContainer;
}(React.Component);

var PollParticipantsTable = function (_React$Component6) {
  _inherits(PollParticipantsTable, _React$Component6);

  function PollParticipantsTable() {
    _classCallCheck(this, PollParticipantsTable);

    return _possibleConstructorReturn(this, (PollParticipantsTable.__proto__ || Object.getPrototypeOf(PollParticipantsTable)).apply(this, arguments));
  }

  _createClass(PollParticipantsTable, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var isEditing = this.props.idxEditing != null;
      return React.createElement(
        "table",
        { id: "poll-participants-table" },
        React.createElement(PollTableHeader, { polltimes: this.props.polltimes }),
        React.createElement(
          "tbody",
          null,
          React.createElement(PollTableSummary, {
            polltimes: this.props.polltimes,
            participants: this.props.participants,
            isEditable: !isEditing,
            onAddParticipant: this.props.onAddParticipant
          }),
          this.props.participants.map(function (participant, idx) {
            return _this7.props.idxEditing != idx ? React.createElement(PollParticipantRow, {
              key: idx,
              idx: idx,
              participant: participant,
              isEditable: !isEditing,
              onStartEditing: _this7.props.onStartEditing
            }) : React.createElement(PollParticipantRowEditing, {
              key: idx,
              idx: idx,
              participant: participant,
              onNameChange: _this7.props.onNameChange,
              onAvailabilityChange: _this7.props.onAvailabilityChange,
              onDeleteParticipant: _this7.props.onDeleteParticipant
            });
          })
        )
      );
    }
  }]);

  return PollParticipantsTable;
}(React.Component);

var PollTableHeader = function (_React$Component7) {
  _inherits(PollTableHeader, _React$Component7);

  function PollTableHeader() {
    _classCallCheck(this, PollTableHeader);

    return _possibleConstructorReturn(this, (PollTableHeader.__proto__ || Object.getPrototypeOf(PollTableHeader)).apply(this, arguments));
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
        columns.push(React.createElement(
          "th",
          { key: idx },
          React.createElement(
            "span",
            { className: "poll-table-header-month" },
            MONTH_NAMES[start_time.getMonth()].slice(0, 3),
            " "
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { className: "poll-table-header-day" },
            start_time.getDate(),
            " "
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { className: "poll-table-header-weekday" },
            DAY_NAMES[start_time.getDay()].slice(0, 3)
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { className: "poll-table-header-time" },
            time_to_string(start_time)
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { className: "poll-table-header-time" },
            time_to_string(end_time)
          ),
          React.createElement("br", null)
        ));
      }
      return React.createElement(
        "thead",
        { id: "poll-table-header" },
        React.createElement(
          "tr",
          null,
          React.createElement("th", null),
          columns
        )
      );
    }
  }]);

  return PollTableHeader;
}(React.Component);

var PollTableSummary = function (_React$Component8) {
  _inherits(PollTableSummary, _React$Component8);

  function PollTableSummary() {
    _classCallCheck(this, PollTableSummary);

    return _possibleConstructorReturn(this, (PollTableSummary.__proto__ || Object.getPrototypeOf(PollTableSummary)).apply(this, arguments));
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
      }return React.createElement(
        "tr",
        { id: "poll-table-summary" },
        React.createElement(
          "td",
          null,
          React.createElement(
            "div",
            { id: "poll-participants-summary" },
            React.createElement(
              "div",
              { id: "poll-n-participants" },
              participants.length,
              " participants"
            ),
            !this.props.isEditable ? "" : React.createElement("div", {
              id: "poll-add-participant",
              className: "fas fa-plus",
              onClick: this.props.onAddParticipant
            })
          )
        ),
        polltimes.map(function (polltime, idx) {
          return React.createElement(
            "td",
            { key: idx },
            React.createElement(
              "div",
              { id: "poll-availability-summary", className: "fas fa-check" },
              totals[idx]
            )
          );
        })
      );
    }
  }]);

  return PollTableSummary;
}(React.Component);

var PollParticipantRow = function (_React$Component9) {
  _inherits(PollParticipantRow, _React$Component9);

  function PollParticipantRow(props) {
    _classCallCheck(this, PollParticipantRow);

    var _this10 = _possibleConstructorReturn(this, (PollParticipantRow.__proto__ || Object.getPrototypeOf(PollParticipantRow)).call(this, props));

    _this10.handleStartEditing = _this10.handleStartEditing.bind(_this10);
    return _this10;
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
      return React.createElement(
        "tr",
        { className: "poll-participant-row", editing: "false" },
        React.createElement(
          "td",
          null,
          React.createElement(
            "div",
            { className: "poll-participant-details" },
            React.createElement("div", { className: "poll-participant-icon fas fa-user-circle" }),
            React.createElement(
              "div",
              { className: "poll-participant-name" },
              participant.name
            ),
            !this.props.isEditable ? "" : React.createElement("div", { className: "poll-participant-edit fas fa-pen", onClick: this.handleStartEditing })
          )
        ),
        participant.availability.map(function (response, idx) {
          return React.createElement(
            "td",
            {
              className: "poll-participant-availability",
              key: idx,
              availability: response.availability },
            React.createElement("div", { className: symbol_from_availability(response.availability) })
          );
        })
      );
    }
  }]);

  return PollParticipantRow;
}(React.Component);

var PollParticipantRowEditing = function (_React$Component10) {
  _inherits(PollParticipantRowEditing, _React$Component10);

  function PollParticipantRowEditing(props) {
    _classCallCheck(this, PollParticipantRowEditing);

    var _this11 = _possibleConstructorReturn(this, (PollParticipantRowEditing.__proto__ || Object.getPrototypeOf(PollParticipantRowEditing)).call(this, props));

    _this11.handleNameChange = _this11.handleNameChange.bind(_this11);
    _this11.handleAvailabilityChange = _this11.handleAvailabilityChange.bind(_this11);
    _this11.handleDeleteParticipant = _this11.handleDeleteParticipant.bind(_this11);
    _this11.nameInput = React.createRef();
    return _this11;
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
      var _this12 = this;

      var participant = this.props.participant;
      return React.createElement(
        "tr",
        { className: "poll-participant-row", editing: "true" },
        React.createElement(
          "td",
          null,
          React.createElement(
            "div",
            { className: "poll-participant-details" },
            React.createElement("div", {
              className: "poll-participant-delete fas fa-trash",
              onClick: this.handleDeleteParticipant
            }),
            React.createElement("input", {
              className: "poll-participant-name-input",
              ref: this.nameInput,
              type: "text",
              value: participant.name,
              placeholder: "Enter your name",
              onChange: this.handleNameChange
            })
          )
        ),
        participant.availability.map(function (response, polltimeIdx) {
          return React.createElement(
            "td",
            {
              className: "poll-participant-availability",
              key: polltimeIdx },
            React.createElement("input", {
              type: "checkbox",
              className: "poll-participant-availability-checkbox " + symbol_from_availability(response.availability),
              availability: response.availability,
              onChange: function onChange(e) {
                return _this12.handleAvailabilityChange(polltimeIdx, e);
              }
            })
          );
        })
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.nameInput.current.focus();
    }
  }]);

  return PollParticipantRowEditing;
}(React.Component);

var PollSubmitButton = function (_React$Component11) {
  _inherits(PollSubmitButton, _React$Component11);

  function PollSubmitButton(props) {
    _classCallCheck(this, PollSubmitButton);

    var _this13 = _possibleConstructorReturn(this, (PollSubmitButton.__proto__ || Object.getPrototypeOf(PollSubmitButton)).call(this, props));

    _this13.handleSubmit = _this13.handleSubmit.bind(_this13);
    return _this13;
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
      var hasNote = note != null;
      // TODO: Add cancel option

      return React.createElement(
        "div",
        { id: "poll-submit-button",
          isdisabled: this.isDisabled().toString(),
          cannotattend: cannotAttend.toString(),
          hasnote: hasNote.toString(),
          onClick: this.handleSubmit
        },
        React.createElement(
          "div",
          { id: "poll-submit-action" },
          action
        ),
        React.createElement(
          "div",
          { id: "poll-submit-note" },
          note
        )
      );
    }
  }]);

  return PollSubmitButton;
}(React.Component);

// Helper functions

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
}

// Load and render the poll

var poll = $("#main").attr("poll");
poll = JSON.parse(poll);
console.log(poll);

ReactDOM.render(React.createElement(PollContainer, { poll: poll }), $('#main')[0]);

// Example poll:
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