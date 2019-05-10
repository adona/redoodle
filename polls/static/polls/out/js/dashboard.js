var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DashboardContainer = function (_React$Component) {
  _inherits(DashboardContainer, _React$Component);

  function DashboardContainer() {
    _classCallCheck(this, DashboardContainer);

    return _possibleConstructorReturn(this, (DashboardContainer.__proto__ || Object.getPrototypeOf(DashboardContainer)).apply(this, arguments));
  }

  _createClass(DashboardContainer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "dashboard-container" },
        React.createElement(DashboardHeader, null),
        React.createElement(DashboardMain, {
          pollsList: this.props.pollsList
        })
      );
    }
  }]);

  return DashboardContainer;
}(React.Component);

var DashboardHeader = function (_React$Component2) {
  _inherits(DashboardHeader, _React$Component2);

  function DashboardHeader() {
    _classCallCheck(this, DashboardHeader);

    return _possibleConstructorReturn(this, (DashboardHeader.__proto__ || Object.getPrototypeOf(DashboardHeader)).apply(this, arguments));
  }

  _createClass(DashboardHeader, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "dashboard-header" },
        React.createElement(
          "div",
          { id: "header-nav" },
          React.createElement(
            "div",
            { id: "header-nav-left" },
            React.createElement(
              "div",
              { id: "logo" },
              "ReDoodle"
            )
          ),
          React.createElement(
            "div",
            { id: "header-nav-right" },
            React.createElement(UserMenu, null),
            React.createElement(CreatePollButton, null)
          )
        )
      );
    }
  }]);

  return DashboardHeader;
}(React.Component);

var UserMenu = function (_React$Component3) {
  _inherits(UserMenu, _React$Component3);

  function UserMenu() {
    _classCallCheck(this, UserMenu);

    return _possibleConstructorReturn(this, (UserMenu.__proto__ || Object.getPrototypeOf(UserMenu)).apply(this, arguments));
  }

  _createClass(UserMenu, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "user-menu" },
        "Adona Iosif ",
        React.createElement(
          "span",
          { id: "down-arrow" },
          "\u2304"
        )
      );
    }
  }]);

  return UserMenu;
}(React.Component);

var CreatePollButton = function (_React$Component4) {
  _inherits(CreatePollButton, _React$Component4);

  function CreatePollButton() {
    _classCallCheck(this, CreatePollButton);

    return _possibleConstructorReturn(this, (CreatePollButton.__proto__ || Object.getPrototypeOf(CreatePollButton)).apply(this, arguments));
  }

  _createClass(CreatePollButton, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "create-poll-button" },
        "+ Create"
      );
    }
  }]);

  return CreatePollButton;
}(React.Component);

var DashboardMain = function (_React$Component5) {
  _inherits(DashboardMain, _React$Component5);

  function DashboardMain(props) {
    _classCallCheck(this, DashboardMain);

    var _this5 = _possibleConstructorReturn(this, (DashboardMain.__proto__ || Object.getPrototypeOf(DashboardMain)).call(this, props));

    _this5.pollsFilters = [{ "label": "All", "filter": function filter(poll) {
        return true;
      } }, { "label": "Sent", "filter": function filter(poll) {
        return true;
      } }, { "label": "Received", "filter": function filter(poll) {
        return false;
      } }];

    _this5.state = {
      selectedPollsFilter: 0
    };
    _this5.handlePollsFilterChange = _this5.handlePollsFilterChange.bind(_this5);
    return _this5;
  }
  // TODO 


  _createClass(DashboardMain, [{
    key: "handlePollsFilterChange",
    value: function handlePollsFilterChange(newSelection) {
      this.setState({
        selectedPollsFilter: newSelection
      });
    }
  }, {
    key: "render",
    value: function render() {
      var pollsFilterLabels = this.pollsFilters.map(function (filter) {
        return filter["label"];
      });
      var activeFilter = this.pollsFilters[this.state.selectedPollsFilter]["filter"];
      var filteredPollsList = this.props.pollsList.filter(activeFilter);
      return React.createElement(
        "div",
        { id: "dashboard-main" },
        React.createElement(DashboardSidebar, {
          pollsFilterLabels: pollsFilterLabels,
          selectedPollsFilter: this.state.selectedPollsFilter,
          onPollsFilterChange: this.handlePollsFilterChange
        }),
        React.createElement(DashboardPollsListContainer, {
          filteredPollsList: filteredPollsList
        })
      );
    }
  }]);

  return DashboardMain;
}(React.Component);

var DashboardSidebar = function (_React$Component6) {
  _inherits(DashboardSidebar, _React$Component6);

  function DashboardSidebar() {
    _classCallCheck(this, DashboardSidebar);

    return _possibleConstructorReturn(this, (DashboardSidebar.__proto__ || Object.getPrototypeOf(DashboardSidebar)).apply(this, arguments));
  }

  _createClass(DashboardSidebar, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var labels = this.props.pollsFilterLabels;
      var lis = [];

      var _loop = function _loop(idx) {
        lis.push(React.createElement(
          "li",
          {
            key: idx,
            className: idx == _this7.props.selectedPollsFilter ? "selected" : "",
            onClick: function onClick(e) {
              return _this7.props.onPollsFilterChange(idx);
            }
          },
          labels[idx]
        ));
      };

      for (var idx = 0; idx < labels.length; idx++) {
        _loop(idx);
      }return React.createElement(
        "div",
        { id: "dashboard-sidebar" },
        React.createElement(
          "div",
          { id: "sidebar-header" },
          "Invitations"
        ),
        React.createElement(
          "ul",
          { id: "sidebar-filters" },
          lis
        )
      );
    }
  }]);

  return DashboardSidebar;
}(React.Component);

var DashboardPollsListContainer = function (_React$Component7) {
  _inherits(DashboardPollsListContainer, _React$Component7);

  function DashboardPollsListContainer() {
    _classCallCheck(this, DashboardPollsListContainer);

    return _possibleConstructorReturn(this, (DashboardPollsListContainer.__proto__ || Object.getPrototypeOf(DashboardPollsListContainer)).apply(this, arguments));
  }

  _createClass(DashboardPollsListContainer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "dashboard-polls-list-container" },
        React.createElement(DashboardSearchBar, null),
        React.createElement(DashboardPollsList, {
          filteredPollsList: this.props.filteredPollsList
        })
      );
    }
  }]);

  return DashboardPollsListContainer;
}(React.Component);

var DashboardSearchBar = function (_React$Component8) {
  _inherits(DashboardSearchBar, _React$Component8);

  function DashboardSearchBar() {
    _classCallCheck(this, DashboardSearchBar);

    return _possibleConstructorReturn(this, (DashboardSearchBar.__proto__ || Object.getPrototypeOf(DashboardSearchBar)).apply(this, arguments));
  }

  _createClass(DashboardSearchBar, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { id: "dashboard-search-bar" });
    }
  }]);

  return DashboardSearchBar;
}(React.Component);

var DashboardPollsList = function (_React$Component9) {
  _inherits(DashboardPollsList, _React$Component9);

  function DashboardPollsList() {
    _classCallCheck(this, DashboardPollsList);

    return _possibleConstructorReturn(this, (DashboardPollsList.__proto__ || Object.getPrototypeOf(DashboardPollsList)).apply(this, arguments));
  }

  _createClass(DashboardPollsList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "dashboard-polls-list" },
        this.props.filteredPollsList.map(function (poll, idx) {
          return React.createElement(DashboardPollPreview, {
            key: idx,
            poll: poll
          });
        })
      );
    }
  }]);

  return DashboardPollsList;
}(React.Component);

var DashboardPollPreview = function (_React$Component10) {
  _inherits(DashboardPollPreview, _React$Component10);

  function DashboardPollPreview() {
    _classCallCheck(this, DashboardPollPreview);

    return _possibleConstructorReturn(this, (DashboardPollPreview.__proto__ || Object.getPrototypeOf(DashboardPollPreview)).apply(this, arguments));
  }

  _createClass(DashboardPollPreview, [{
    key: "render",
    value: function render() {
      var poll = this.props.poll;
      var poll_url = "/poll/participate/" + poll.id;
      return React.createElement(
        "div",
        { className: "dashboard-poll-preview" },
        React.createElement(
          "a",
          { href: poll_url },
          React.createElement(
            "div",
            { className: "poll-preview-icon" },
            React.createElement("div", { className: "fas fa-user-circle" })
          ),
          React.createElement(
            "div",
            { className: "poll-preview-details" },
            React.createElement(
              "div",
              { className: "poll-preview-name" },
              poll.name
            ),
            React.createElement(
              "div",
              { className: "poll-preview-n-options" },
              React.createElement("div", { className: "icon far fa-calendar-alt" }),
              poll.polltimes.length,
              " options"
            ),
            React.createElement(
              "div",
              { className: "poll-preview-n-participants" },
              React.createElement("div", { className: "icon fas fa-user-friends" }),
              poll.participants.length,
              " participants"
            )
          )
        )
      );
    }
  }]);

  return DashboardPollPreview;
}(React.Component);

// Load and render the polls list

var pollsList = $("#main").attr("polls_list");
pollsList = JSON.parse(pollsList);
console.log(pollsList);

ReactDOM.render(React.createElement(DashboardContainer, { pollsList: pollsList }), $('#main')[0]);