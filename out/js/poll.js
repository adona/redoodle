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
          this.props.author,
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
          times: poll.times,
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

    var participants = _this5.props.participants;
    participants.forEach(function (p, idx) {
      return p.id = idx;
    }); // Add unique IDs
    _this5.state = {
      participants: _this5.props.participants,
      nextID: participants.length,
      idxEditing: null
    };
    _this5.handleAddParticipant = _this5.handleAddParticipant.bind(_this5);
    _this5.handleStartEditing = _this5.handleStartEditing.bind(_this5);
    _this5.handleNameChange = _this5.handleNameChange.bind(_this5);
    _this5.handleAvailabilityChange = _this5.handleAvailabilityChange.bind(_this5);
    _this5.handleStopEditing = _this5.handleStopEditing.bind(_this5);
    return _this5;
  }

  _createClass(PollParticipantsContainer, [{
    key: "handleAddParticipant",
    value: function handleAddParticipant() {
      var participants = this.state.participants;
      var newParticipant = {
        name: "",
        id: this.state.nextID,
        availability: this.props.times.map(function (time) {
          return "N";
        })
      };
      participants.unshift(newParticipant);
      this.setState({
        participants: participants,
        nextID: this.state.nextID + 1,
        idxEditing: 0
      });
    }
  }, {
    key: "handleStartEditing",
    value: function handleStartEditing(idx) {
      this.setState({
        idxEditing: idx
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
    value: function handleAvailabilityChange(participantIdx, dateIdx, newAvailability) {
      var participants = this.state.participants;
      participants[participantIdx].availability[dateIdx] = newAvailability;
      this.setState({
        participants: participants
      });
    }
  }, {
    key: "handleStopEditing",
    value: function handleStopEditing() {}
  }, {
    key: "render",
    value: function render() {
      var poll = this.props.poll;
      return React.createElement(
        "div",
        { id: "poll-participants-container" },
        React.createElement(PollParticipantsTable, {
          times: this.props.times,
          participants: this.state.participants,
          onAddParticipant: this.handleAddParticipant,
          idxEditing: this.state.idxEditing,
          onStartEditing: this.handleStartEditing,
          onNameChange: this.handleNameChange,
          onAvailabilityChange: this.handleAvailabilityChange
        })
      )
      // TODO: Add update button
      ;
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

      return React.createElement(
        "table",
        { id: "poll-participants-table" },
        React.createElement(PollTableHeader, { times: this.props.times }),
        React.createElement(
          "tbody",
          null,
          React.createElement(PollTableSummary, {
            participants: this.props.participants,
            times: this.props.times,
            onAddParticipant: this.props.onAddParticipant
          }),
          this.props.participants.map(function (participant, idx) {
            return _this7.props.idxEditing != idx ? React.createElement(PollParticipantRow, {
              key: participant.id,
              idx: idx,
              participant: participant,
              onStartEditing: _this7.props.onStartEditing
            }) : React.createElement(PollParticipantRowEditing, {
              key: participant.id,
              idx: idx,
              participant: participant,
              onNameChange: _this7.props.onNameChange,
              onAvailabilityChange: _this7.props.onAvailabilityChange
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
      return React.createElement(
        "thead",
        { id: "poll-table-header" },
        React.createElement(
          "tr",
          null,
          React.createElement("th", null),
          this.props.times.map(function (time, idx) {
            return React.createElement(
              "th",
              { key: idx },
              React.createElement(
                "span",
                { className: "poll-table-header-month" },
                MONTH_NAMES[time.start.getMonth()].slice(0, 3),
                " "
              ),
              React.createElement("br", null),
              React.createElement(
                "span",
                { className: "poll-table-header-day" },
                time.start.getDate(),
                " "
              ),
              React.createElement("br", null),
              React.createElement(
                "span",
                { className: "poll-table-header-weekday" },
                DAY_NAMES[time.start.getDay()].slice(0, 3)
              ),
              React.createElement("br", null),
              React.createElement(
                "span",
                { className: "poll-table-header-time" },
                time_to_string(time.start)
              ),
              React.createElement("br", null),
              React.createElement(
                "span",
                { className: "poll-table-header-time" },
                time_to_string(time.end)
              ),
              React.createElement("br", null)
            );
          })
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
      var participants = this.props.participants;
      var times = this.props.times;
      var totals = times.map(function (time, idx) {
        return sum(participants.map(function (p) {
          return p.availability[idx] != "N";
        }));
      });

      return React.createElement(
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
            React.createElement("div", {
              id: "poll-add-participant",
              className: "fas fa-plus",
              onClick: this.props.onAddParticipant
            })
          )
        ),
        times.map(function (time, idx) {
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
            React.createElement("div", { className: "poll-participant-edit fas fa-pen", onClick: this.handleStartEditing })
          )
        ),
        participant.availability.map(function (response, dateIdx) {
          return React.createElement(
            "td",
            {
              className: "poll-participant-availability",
              key: dateIdx,
              response: response },
            React.createElement("div", { className: symbol_from_availability(response) })
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
    value: function handleAvailabilityChange(dateIdx, e) {
      var participantIdx = this.props.idx;
      var previousAvailability = $(e.target).attr("response");
      var newAvailability = previousAvailability == "Y" ? "M" : previousAvailability == "M" ? "N" : "Y";
      this.props.onAvailabilityChange(participantIdx, dateIdx, newAvailability);
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
            React.createElement("div", { className: "poll-participant-delete fas fa-trash" }),
            React.createElement("input", {
              className: "poll-participant-name-input",
              ref: this.nameInput,
              type: "text",
              value: participant.name,
              onChange: this.handleNameChange
            })
          )
        ),
        participant.availability.map(function (response, dateIdx) {
          return React.createElement(
            "td",
            {
              className: "poll-participant-availability",
              key: dateIdx,
              response: response },
            React.createElement("input", {
              type: "checkbox",
              className: "poll-participant-availability-checkbox " + symbol_from_availability(response),
              response: response,
              onChange: function onChange(e) {
                return _this12.handleAvailabilityChange(dateIdx, e);
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

var POLL = {
  name: "GoT Marathon!!!",
  author: "Adona Iosif",
  location: "My place",
  notes: "Winter is finally here!",
  timezone: "America/New York",
  times: [{
    start: new Date(2019, 4, 2, 20, 0),
    end: new Date(2019, 4, 2, 23, 0)
  }, {
    start: new Date(2019, 4, 3, 20, 0),
    end: new Date(2019, 4, 3, 23, 0)
  }],
  participants: [{
    name: "Adona-Luiza Iosif",
    availability: ["Y", "Y"]
  }, {
    name: "Angi",
    availability: ["M", "Y"]
  }, {
    name: "Maria",
    availability: ["N", "N"]
  }]
};

ReactDOM.render(React.createElement(PollContainer, { poll: POLL }), $('#main')[0]);

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