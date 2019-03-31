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
        React.createElement(PollResponsesContainer, {
          poll: poll
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

var PollResponsesContainer = function (_React$Component5) {
  _inherits(PollResponsesContainer, _React$Component5);

  function PollResponsesContainer(props) {
    _classCallCheck(this, PollResponsesContainer);

    var _this5 = _possibleConstructorReturn(this, (PollResponsesContainer.__proto__ || Object.getPrototypeOf(PollResponsesContainer)).call(this, props));

    _this5.state = {
      respondents: props.poll.respondents,
      idxEditing: null
    };
    _this5.handleStartEditing = _this5.handleStartEditing.bind(_this5);
    _this5.handleNameChange = _this5.handleNameChange.bind(_this5);
    _this5.handleAvailabilityChange = _this5.handleAvailabilityChange.bind(_this5);
    _this5.handleStopEditing = _this5.handleStopEditing.bind(_this5);
    return _this5;
  }

  _createClass(PollResponsesContainer, [{
    key: "handleStartEditing",
    value: function handleStartEditing(idx) {
      this.setState({
        idxEditing: idx
      });
    }
  }, {
    key: "handleNameChange",
    value: function handleNameChange(respondentIdx, name) {
      var respondents = this.state.respondents;
      respondents[respondentIdx].name = name;
      this.setState({
        respondents: respondents
      });
    }
  }, {
    key: "handleAvailabilityChange",
    value: function handleAvailabilityChange(respondentIdx, dateIdx, newAvailability) {
      var respondents = this.state.respondents;
      respondents[respondentIdx].responses[dateIdx] = newAvailability;
      this.setState({
        respondents: respondents
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
        { id: "poll-responses-container" },
        React.createElement(PollResponsesTable, {
          times: poll.times,
          respondents: this.state.respondents,
          idxEditing: this.state.idxEditing,
          onStartEditing: this.handleStartEditing,
          onNameChange: this.handleNameChange,
          onAvailabilityChange: this.handleAvailabilityChange
        })
      );
    }
  }]);

  return PollResponsesContainer;
}(React.Component);

var PollResponsesTable = function (_React$Component6) {
  _inherits(PollResponsesTable, _React$Component6);

  function PollResponsesTable() {
    _classCallCheck(this, PollResponsesTable);

    return _possibleConstructorReturn(this, (PollResponsesTable.__proto__ || Object.getPrototypeOf(PollResponsesTable)).apply(this, arguments));
  }

  _createClass(PollResponsesTable, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var header_columns = this.props.times.map(function (time, idx) {
        return React.createElement(
          "th",
          { key: idx },
          React.createElement(
            "span",
            { className: "poll-header-month" },
            MONTH_NAMES[time.start.getMonth()].slice(0, 3),
            " "
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { className: "poll-header-day" },
            time.start.getDate(),
            " "
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { className: "poll-header-weekday" },
            DAY_NAMES[time.start.getDay()].slice(0, 3)
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { className: "poll-header-time" },
            time_to_string(time.start)
          ),
          React.createElement("br", null),
          React.createElement(
            "span",
            { className: "poll-header-time" },
            time_to_string(time.end)
          ),
          React.createElement("br", null)
        );
      });
      var rows = this.props.respondents.map(function (respondent, idx) {
        return _this7.props.idxEditing != idx ? React.createElement(PollResponseRow, {
          key: idx,
          idx: idx,
          respondent: respondent,
          onStartEditing: _this7.props.onStartEditing
        }) : React.createElement(PollResponseRowEditing, {
          key: idx,
          idx: idx,
          respondent: respondent,
          onNameChange: _this7.props.onNameChange,
          onAvailabilityChange: _this7.props.onAvailabilityChange
        });
      });

      return React.createElement(
        "table",
        { id: "poll-responses-table" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null),
            header_columns
          )
        ),
        React.createElement(
          "tbody",
          null,
          rows
        )
      );
    }
  }]);

  return PollResponsesTable;
}(React.Component);

var PollResponseRow = function (_React$Component7) {
  _inherits(PollResponseRow, _React$Component7);

  function PollResponseRow(props) {
    _classCallCheck(this, PollResponseRow);

    var _this8 = _possibleConstructorReturn(this, (PollResponseRow.__proto__ || Object.getPrototypeOf(PollResponseRow)).call(this, props));

    _this8.handleStartEditing = _this8.handleStartEditing.bind(_this8);
    return _this8;
  }

  _createClass(PollResponseRow, [{
    key: "handleStartEditing",
    value: function handleStartEditing(e) {
      this.props.onStartEditing(this.props.idx);
    }
  }, {
    key: "render",
    value: function render() {
      var respondent = this.props.respondent;
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          React.createElement(
            "div",
            null,
            React.createElement("div", { className: "poll-respondent-icon fas fa-user-circle" }),
            React.createElement(
              "div",
              { className: "poll-respondent-name" },
              respondent.name
            ),
            React.createElement("div", { className: "poll-edit-respondent fas fa-pen", onClick: this.handleStartEditing })
          )
        ),
        respondent.responses.map(function (response, dateIdx) {
          return React.createElement(
            "td",
            { key: dateIdx, response: response },
            React.createElement("div", { className: symbol_from_availability(response) })
          );
        })
      );
    }
  }]);

  return PollResponseRow;
}(React.Component);

var PollResponseRowEditing = function (_React$Component8) {
  _inherits(PollResponseRowEditing, _React$Component8);

  function PollResponseRowEditing(props) {
    _classCallCheck(this, PollResponseRowEditing);

    var _this9 = _possibleConstructorReturn(this, (PollResponseRowEditing.__proto__ || Object.getPrototypeOf(PollResponseRowEditing)).call(this, props));

    _this9.handleNameChange = _this9.handleNameChange.bind(_this9);
    _this9.handleAvailabilityChange = _this9.handleAvailabilityChange.bind(_this9);
    _this9.nameInput = React.createRef();
    return _this9;
  }

  _createClass(PollResponseRowEditing, [{
    key: "handleNameChange",
    value: function handleNameChange(e) {
      var respondentIdx = this.props.idx;
      var newName = e.target.value;
      this.props.onNameChange(respondentIdx, newName);
    }
  }, {
    key: "handleAvailabilityChange",
    value: function handleAvailabilityChange(dateIdx, e) {
      var respondentIdx = this.props.idx;
      var previousAvailability = $(e.target).attr("response");
      var newAvailability = previousAvailability == "Y" ? "M" : previousAvailability == "M" ? "N" : "Y";
      this.props.onAvailabilityChange(respondentIdx, dateIdx, newAvailability);
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var respondent = this.props.respondent;
      return React.createElement(
        "tr",
        { className: "row-editing" },
        React.createElement(
          "td",
          null,
          React.createElement(
            "div",
            null,
            React.createElement("div", { className: "poll-delete-respondent fas fa-trash" }),
            React.createElement("input", {
              className: "poll-respondent-name-editing",
              ref: this.nameInput,
              type: "text",
              value: respondent.name,
              onChange: this.handleNameChange
            })
          )
        ),
        respondent.responses.map(function (response, dateIdx) {
          return React.createElement(
            "td",
            { key: dateIdx, response: response },
            React.createElement("input", {
              type: "checkbox",
              response: response,
              className: symbol_from_availability(response),
              onChange: function onChange(e) {
                return _this10.handleAvailabilityChange(dateIdx, e);
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

  return PollResponseRowEditing;
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
  respondents: [{
    name: "Adona Iosif",
    responses: ["Y", "Y"]
  }, {
    name: "Angi",
    responses: ["M", "Y"]
  }, {
    name: "Maria",
    responses: ["N", "N"]
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