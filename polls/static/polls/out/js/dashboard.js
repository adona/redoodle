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
/******/ 	return __webpack_require__(__webpack_require__.s = "./polls/static/polls/src/jsx/dashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./polls/static/polls/src/jsx/dashboard.js":
/*!*************************************************!*\
  !*** ./polls/static/polls/src/jsx/dashboard.js ***!
  \*************************************************/
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

var DashboardContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DashboardContainer, _React$Component);

  function DashboardContainer() {
    _classCallCheck(this, DashboardContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardContainer).apply(this, arguments));
  }

  _createClass(DashboardContainer, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "dashboard-container"
      }, React.createElement(DashboardHeader, null), React.createElement(DashboardMain, {
        pollsList: this.props.pollsList
      }));
    }
  }]);

  return DashboardContainer;
}(React.Component);

var DashboardHeader =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(DashboardHeader, _React$Component2);

  function DashboardHeader() {
    _classCallCheck(this, DashboardHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardHeader).apply(this, arguments));
  }

  _createClass(DashboardHeader, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "dashboard-header"
      }, React.createElement("div", {
        id: "header-nav"
      }, React.createElement("div", {
        id: "header-nav-left"
      }, React.createElement("div", {
        id: "logo"
      }, "ReDoodle")), React.createElement("div", {
        id: "header-nav-right"
      }, React.createElement(UserMenu, null), React.createElement(CreatePollButton, null))));
    }
  }]);

  return DashboardHeader;
}(React.Component);

var UserMenu =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(UserMenu, _React$Component3);

  function UserMenu() {
    _classCallCheck(this, UserMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(UserMenu).apply(this, arguments));
  }

  _createClass(UserMenu, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "user-menu"
      }, "Adona Iosif ", React.createElement("span", {
        id: "down-arrow"
      }, "\u2304"));
    }
  }]);

  return UserMenu;
}(React.Component);

var CreatePollButton =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(CreatePollButton, _React$Component4);

  function CreatePollButton() {
    _classCallCheck(this, CreatePollButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(CreatePollButton).apply(this, arguments));
  }

  _createClass(CreatePollButton, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "create-poll-button"
      }, "+ Create");
    }
  }]);

  return CreatePollButton;
}(React.Component);

var DashboardMain =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(DashboardMain, _React$Component5);

  function DashboardMain(props) {
    var _this;

    _classCallCheck(this, DashboardMain);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DashboardMain).call(this, props));
    _this.pollsFilters = [{
      "label": "All",
      "filter": function filter(poll) {
        return true;
      }
    }, {
      "label": "Sent",
      "filter": function filter(poll) {
        return poll.author.email == userEmail;
      }
    }, {
      "label": "Received",
      "filter": function filter(poll) {
        return poll.author.email != userEmail;
      }
    }];
    _this.state = {
      selectedPollsFilter: 0
    };
    _this.handlePollsFilterChange = _this.handlePollsFilterChange.bind(_assertThisInitialized(_this));
    return _this;
  }

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
      return React.createElement("div", {
        id: "dashboard-main"
      }, React.createElement(DashboardSidebar, {
        pollsFilterLabels: pollsFilterLabels,
        selectedPollsFilter: this.state.selectedPollsFilter,
        onPollsFilterChange: this.handlePollsFilterChange
      }), React.createElement(DashboardPollsListContainer, {
        filteredPollsList: filteredPollsList
      }));
    }
  }]);

  return DashboardMain;
}(React.Component);

var DashboardSidebar =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(DashboardSidebar, _React$Component6);

  function DashboardSidebar() {
    _classCallCheck(this, DashboardSidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardSidebar).apply(this, arguments));
  }

  _createClass(DashboardSidebar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var labels = this.props.pollsFilterLabels;
      var lis = [];

      var _loop = function _loop(idx) {
        lis.push(React.createElement("li", {
          key: idx,
          className: idx == _this2.props.selectedPollsFilter ? "selected" : "",
          onClick: function onClick(e) {
            return _this2.props.onPollsFilterChange(idx);
          }
        }, labels[idx]));
      };

      for (var idx = 0; idx < labels.length; idx++) {
        _loop(idx);
      }

      return React.createElement("div", {
        id: "dashboard-sidebar"
      }, React.createElement("div", {
        id: "sidebar-header"
      }, "Invitations"), React.createElement("ul", {
        id: "sidebar-filters"
      }, lis));
    }
  }]);

  return DashboardSidebar;
}(React.Component);

var DashboardPollsListContainer =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(DashboardPollsListContainer, _React$Component7);

  function DashboardPollsListContainer() {
    _classCallCheck(this, DashboardPollsListContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardPollsListContainer).apply(this, arguments));
  }

  _createClass(DashboardPollsListContainer, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "dashboard-polls-list-container"
      }, React.createElement(DashboardSearchBar, null), React.createElement(DashboardPollsList, {
        filteredPollsList: this.props.filteredPollsList
      }));
    }
  }]);

  return DashboardPollsListContainer;
}(React.Component);

var DashboardSearchBar =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(DashboardSearchBar, _React$Component8);

  function DashboardSearchBar() {
    _classCallCheck(this, DashboardSearchBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardSearchBar).apply(this, arguments));
  }

  _createClass(DashboardSearchBar, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "dashboard-search-bar"
      });
    }
  }]);

  return DashboardSearchBar;
}(React.Component);

var DashboardPollsList =
/*#__PURE__*/
function (_React$Component9) {
  _inherits(DashboardPollsList, _React$Component9);

  function DashboardPollsList() {
    _classCallCheck(this, DashboardPollsList);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardPollsList).apply(this, arguments));
  }

  _createClass(DashboardPollsList, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "dashboard-polls-list"
      }, this.props.filteredPollsList.map(function (poll, idx) {
        return React.createElement(DashboardPollPreview, {
          key: idx,
          poll: poll
        });
      }));
    }
  }]);

  return DashboardPollsList;
}(React.Component);

var DashboardPollPreview =
/*#__PURE__*/
function (_React$Component10) {
  _inherits(DashboardPollPreview, _React$Component10);

  function DashboardPollPreview() {
    _classCallCheck(this, DashboardPollPreview);

    return _possibleConstructorReturn(this, _getPrototypeOf(DashboardPollPreview).apply(this, arguments));
  }

  _createClass(DashboardPollPreview, [{
    key: "render",
    value: function render() {
      var poll = this.props.poll;
      var pollURL = basePollURL.replace("0", poll.id);
      return React.createElement("div", {
        className: "dashboard-poll-preview"
      }, React.createElement("a", {
        href: pollURL
      }, React.createElement("div", {
        className: "poll-preview-icon"
      }, React.createElement("div", {
        className: "fas fa-user-circle"
      })), React.createElement("div", {
        className: "poll-preview-details"
      }, React.createElement("div", {
        className: "poll-preview-name"
      }, poll.name), React.createElement("div", {
        className: "poll-preview-n-options"
      }, React.createElement("div", {
        className: "icon far fa-calendar-alt"
      }), poll.polltimes.length, " options"), React.createElement("div", {
        className: "poll-preview-n-participants"
      }, React.createElement("div", {
        className: "icon fas fa-user-friends"
      }), poll.participants.length, " participants"))));
    }
  }]);

  return DashboardPollPreview;
}(React.Component); // Load parameters and render page


var userEmail = $("body").attr("email");
var pollsList = $("body").attr("polls_list");
pollsList = JSON.parse(pollsList);
console.log(pollsList);
var basePollURL = $("body").attr("poll_url");
ReactDOM.render(React.createElement(DashboardContainer, {
  pollsList: pollsList
}), $('#main')[0]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcG9sbHMvc3RhdGljL3BvbGxzL3NyYy9qc3gvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZENvbnRhaW5lciIsInByb3BzIiwicG9sbHNMaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJEYXNoYm9hcmRIZWFkZXIiLCJVc2VyTWVudSIsIkNyZWF0ZVBvbGxCdXR0b24iLCJEYXNoYm9hcmRNYWluIiwicG9sbHNGaWx0ZXJzIiwicG9sbCIsImF1dGhvciIsImVtYWlsIiwidXNlckVtYWlsIiwic3RhdGUiLCJzZWxlY3RlZFBvbGxzRmlsdGVyIiwiaGFuZGxlUG9sbHNGaWx0ZXJDaGFuZ2UiLCJiaW5kIiwibmV3U2VsZWN0aW9uIiwic2V0U3RhdGUiLCJwb2xsc0ZpbHRlckxhYmVscyIsIm1hcCIsImZpbHRlciIsImFjdGl2ZUZpbHRlciIsImZpbHRlcmVkUG9sbHNMaXN0IiwiRGFzaGJvYXJkU2lkZWJhciIsImxhYmVscyIsImxpcyIsImlkeCIsInB1c2giLCJlIiwib25Qb2xsc0ZpbHRlckNoYW5nZSIsImxlbmd0aCIsIkRhc2hib2FyZFBvbGxzTGlzdENvbnRhaW5lciIsIkRhc2hib2FyZFNlYXJjaEJhciIsIkRhc2hib2FyZFBvbGxzTGlzdCIsIkRhc2hib2FyZFBvbGxQcmV2aWV3IiwicG9sbFVSTCIsImJhc2VQb2xsVVJMIiwicmVwbGFjZSIsImlkIiwibmFtZSIsInBvbGx0aW1lcyIsInBhcnRpY2lwYW50cyIsIiQiLCJhdHRyIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FB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QkFBUyxFQUFDO0FBQWYsU0FBb0MzQixJQUFJLENBQUMrQixJQUF6QyxDQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixRQURGLEVBRUcvQixJQUFJLENBQUNnQyxTQUFMLENBQWVWLE1BRmxCLGFBRkYsRUFNRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssaUJBQVMsRUFBQztBQUFmLFFBREYsRUFFR3RCLElBQUksQ0FBQ2lDLFlBQUwsQ0FBa0JYLE1BRnJCLGtCQU5GLENBSkYsQ0FERixDQURGO0FBb0JEOzs7O0VBeEJnQzdCLEtBQUssQ0FBQ0MsUyxHQTRCekM7OztBQUVBLElBQU1TLFNBQVMsR0FBRytCLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUMsSUFBVixDQUFlLE9BQWYsQ0FBbEI7QUFFQSxJQUFJM0MsU0FBUyxHQUFHMEMsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVQyxJQUFWLENBQWUsWUFBZixDQUFoQjtBQUNBM0MsU0FBUyxHQUFHNEMsSUFBSSxDQUFDQyxLQUFMLENBQVc3QyxTQUFYLENBQVo7QUFDQThDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZL0MsU0FBWjtBQUVBLElBQU1vQyxXQUFXLEdBQUdNLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUMsSUFBVixDQUFlLFVBQWYsQ0FBcEI7QUFFQUssUUFBUSxDQUFDQyxNQUFULENBQ0Usb0JBQUMsa0JBQUQ7QUFBb0IsV0FBUyxFQUFFakQ7QUFBL0IsRUFERixFQUVFMEMsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXLENBQVgsQ0FGRixFIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcG9sbHMvc3RhdGljL3BvbGxzL3NyYy9qc3gvZGFzaGJvYXJkLmpzXCIpO1xuIiwiY2xhc3MgRGFzaGJvYXJkQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9XCJkYXNoYm9hcmQtY29udGFpbmVyXCI+XG4gICAgICAgIDxEYXNoYm9hcmRIZWFkZXIgLz5cbiAgICAgICAgPERhc2hib2FyZE1haW5cbiAgICAgICAgICBwb2xsc0xpc3Q9e3RoaXMucHJvcHMucG9sbHNMaXN0fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIERhc2hib2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGlkPVwiZGFzaGJvYXJkLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyLW5hdlwiPlxuICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXItbmF2LWxlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvXCI+UmVEb29kbGU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgPGRpdiBpZD1cImhlYWRlci1uYXYtcmlnaHRcIj5cbiAgICAgICAgICAgIDxVc2VyTWVudSAvPlxuICAgICAgICAgICAgPENyZWF0ZVBvbGxCdXR0b24gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgVXNlck1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBpZD1cInVzZXItbWVudVwiPlxuICAgICAgICBBZG9uYSBJb3NpZiA8c3BhbiBpZD1cImRvd24tYXJyb3dcIj4mIzg5NjQ7PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIENyZWF0ZVBvbGxCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBpZD1cImNyZWF0ZS1wb2xsLWJ1dHRvblwiPlxuICAgICAgICArIENyZWF0ZVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNsYXNzIERhc2hib2FyZE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnBvbGxzRmlsdGVycyA9IFtcbiAgICAgIHtcImxhYmVsXCI6IFwiQWxsXCIsIFwiZmlsdGVyXCI6IChwb2xsKSA9PiB0cnVlfSxcbiAgICAgIHtcImxhYmVsXCI6IFwiU2VudFwiLCBcImZpbHRlclwiOiAocG9sbCkgPT4gcG9sbC5hdXRob3IuZW1haWwgPT0gdXNlckVtYWlsfSxcbiAgICAgIHtcImxhYmVsXCI6IFwiUmVjZWl2ZWRcIiwgXCJmaWx0ZXJcIjogKHBvbGwpID0+IHBvbGwuYXV0aG9yLmVtYWlsICE9IHVzZXJFbWFpbH1cbiAgICBdO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZFBvbGxzRmlsdGVyOiAwXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVBvbGxzRmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVQb2xsc0ZpbHRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlUG9sbHNGaWx0ZXJDaGFuZ2UobmV3U2VsZWN0aW9uKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZFBvbGxzRmlsdGVyOiBuZXdTZWxlY3Rpb25cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwb2xsc0ZpbHRlckxhYmVscyA9IHRoaXMucG9sbHNGaWx0ZXJzLm1hcCgoZmlsdGVyKSA9PiBmaWx0ZXJbXCJsYWJlbFwiXSk7XG4gICAgY29uc3QgYWN0aXZlRmlsdGVyID0gdGhpcy5wb2xsc0ZpbHRlcnNbdGhpcy5zdGF0ZS5zZWxlY3RlZFBvbGxzRmlsdGVyXVtcImZpbHRlclwiXTtcbiAgICBjb25zdCBmaWx0ZXJlZFBvbGxzTGlzdCA9IHRoaXMucHJvcHMucG9sbHNMaXN0LmZpbHRlcihhY3RpdmVGaWx0ZXIpO1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9XCJkYXNoYm9hcmQtbWFpblwiPlxuICAgICAgICA8RGFzaGJvYXJkU2lkZWJhclxuICAgICAgICAgIHBvbGxzRmlsdGVyTGFiZWxzPXtwb2xsc0ZpbHRlckxhYmVsc31cbiAgICAgICAgICBzZWxlY3RlZFBvbGxzRmlsdGVyPXt0aGlzLnN0YXRlLnNlbGVjdGVkUG9sbHNGaWx0ZXJ9XG4gICAgICAgICAgb25Qb2xsc0ZpbHRlckNoYW5nZT17dGhpcy5oYW5kbGVQb2xsc0ZpbHRlckNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPERhc2hib2FyZFBvbGxzTGlzdENvbnRhaW5lciBcbiAgICAgICAgICBmaWx0ZXJlZFBvbGxzTGlzdD17ZmlsdGVyZWRQb2xsc0xpc3R9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgRGFzaGJvYXJkU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLnByb3BzLnBvbGxzRmlsdGVyTGFiZWxzO1xuICAgIHZhciBsaXMgPSBbXTtcbiAgICBmb3IobGV0IGlkeD0wOyBpZHg8bGFiZWxzLmxlbmd0aDsgaWR4KyspXG4gICAgICBsaXMucHVzaChcbiAgICAgICAgPGxpIFxuICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgIGNsYXNzTmFtZT17aWR4PT10aGlzLnByb3BzLnNlbGVjdGVkUG9sbHNGaWx0ZXIgPyBcInNlbGVjdGVkXCIgOiBcIlwifVxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnByb3BzLm9uUG9sbHNGaWx0ZXJDaGFuZ2UoaWR4KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtsYWJlbHNbaWR4XX1cbiAgICAgICAgPC9saT5cbiAgICAgIClcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGlkPVwiZGFzaGJvYXJkLXNpZGViYXJcIj5cbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXItaGVhZGVyXCI+SW52aXRhdGlvbnM8L2Rpdj5cbiAgICAgICAgPHVsIGlkPVwic2lkZWJhci1maWx0ZXJzXCI+XG4gICAgICAgICAge2xpc31cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBEYXNoYm9hcmRQb2xsc0xpc3RDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBpZD1cImRhc2hib2FyZC1wb2xscy1saXN0LWNvbnRhaW5lclwiPlxuICAgICAgICA8RGFzaGJvYXJkU2VhcmNoQmFyIC8+XG4gICAgICAgIDxEYXNoYm9hcmRQb2xsc0xpc3QgXG4gICAgICAgICAgZmlsdGVyZWRQb2xsc0xpc3Q9e3RoaXMucHJvcHMuZmlsdGVyZWRQb2xsc0xpc3R9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY2xhc3MgRGFzaGJvYXJkU2VhcmNoQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXYgaWQ9XCJkYXNoYm9hcmQtc2VhcmNoLWJhclwiPlxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBEYXNoYm9hcmRQb2xsc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBpZD1cImRhc2hib2FyZC1wb2xscy1saXN0XCI+XG4gICAgICB7dGhpcy5wcm9wcy5maWx0ZXJlZFBvbGxzTGlzdC5tYXAoXG4gICAgICAgIChwb2xsLCBpZHgpID0+IChcbiAgICAgICAgICA8RGFzaGJvYXJkUG9sbFByZXZpZXcgXG4gICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgIHBvbGw9e3BvbGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jbGFzcyBEYXNoYm9hcmRQb2xsUHJldmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwb2xsID0gdGhpcy5wcm9wcy5wb2xsO1xuICAgIGNvbnN0IHBvbGxVUkwgPSBiYXNlUG9sbFVSTC5yZXBsYWNlKFwiMFwiLCBwb2xsLmlkKTtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1wb2xsLXByZXZpZXdcIj5cbiAgICAgICAgPGEgaHJlZj17cG9sbFVSTH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLXByZXZpZXctaWNvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1jaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtcHJldmlldy1kZXRhaWxzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtcHJldmlldy1uYW1lXCI+e3BvbGwubmFtZX08L2Rpdj4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtcHJldmlldy1uLW9wdGlvbnNcIj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBmYXIgZmEtY2FsZW5kYXItYWx0XCIgLz5cbiAgICAgICAgICAgICAge3BvbGwucG9sbHRpbWVzLmxlbmd0aH0gb3B0aW9ucyBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLXByZXZpZXctbi1wYXJ0aWNpcGFudHNcIj4gXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBmYXMgZmEtdXNlci1mcmllbmRzXCI+PC9kaXY+XG4gICAgICAgICAgICAgIHtwb2xsLnBhcnRpY2lwYW50cy5sZW5ndGh9IHBhcnRpY2lwYW50cyBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4vLyBMb2FkIHBhcmFtZXRlcnMgYW5kIHJlbmRlciBwYWdlXG5cbmNvbnN0IHVzZXJFbWFpbCA9ICQoXCJib2R5XCIpLmF0dHIoXCJlbWFpbFwiKTtcblxudmFyIHBvbGxzTGlzdCA9ICQoXCJib2R5XCIpLmF0dHIoXCJwb2xsc19saXN0XCIpO1xucG9sbHNMaXN0ID0gSlNPTi5wYXJzZShwb2xsc0xpc3QpO1xuY29uc29sZS5sb2cocG9sbHNMaXN0KTtcblxuY29uc3QgYmFzZVBvbGxVUkwgPSAkKFwiYm9keVwiKS5hdHRyKFwicG9sbF91cmxcIik7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPERhc2hib2FyZENvbnRhaW5lciBwb2xsc0xpc3Q9e3BvbGxzTGlzdH0vPixcbiAgJCgnI21haW4nKVswXVxuKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=