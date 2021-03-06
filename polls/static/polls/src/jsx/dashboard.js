import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import { MainHeader } from '../../../../../base/static/base/src/jsx/header.js';
import css from "../scss/dashboard.scss";

var pollsList = JSON.parse($("body").attr("polls_list"));
const URL_PARTICIPATE_POLL = $("body").attr("url_participate_poll");

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.pollsFilters = [
      {"label": "All", "filter": (poll) => true},
      {"label": "Sent", "filter": (poll) => poll.author.email == user.email},
      {"label": "Received", "filter": (poll) => poll.author.email != user.email}
    ];
    this.state = {
      selectedPollsFilter: 0
    };
    this.handlePollsFilterChange = this.handlePollsFilterChange.bind(this);
  }

  handlePollsFilterChange(newSelection) {
    this.setState({
      selectedPollsFilter: newSelection
    });
  }

  render() {
    const pollsFilterLabels = this.pollsFilters.map((filter) => filter["label"]);
    const activeFilter = this.pollsFilters[this.state.selectedPollsFilter]["filter"];
    const filteredPollsList = this.props.pollsList.filter(activeFilter);
    return(
      <div id="dashboard-container">
        <DashboardSidebar
          pollsFilterLabels={pollsFilterLabels}
          selectedPollsFilter={this.state.selectedPollsFilter}
          onPollsFilterChange={this.handlePollsFilterChange}
        />
        <DashboardPollsListContainer 
          filteredPollsList={filteredPollsList}
        />
      </div>
    )
  }
}

class DashboardSidebar extends React.Component {
  render() {
    const labels = this.props.pollsFilterLabels;
    var lis = [];
    for (var idx=0; idx<labels.length; idx++)
      lis.push(
        <li 
          key={idx}
          className={idx==this.props.selectedPollsFilter ? "selected" : ""}
          onClick={(e) => this.props.onPollsFilterChange(idx)}
        >
          {labels[idx]}
        </li>
      )
    return(
      <div id="dashboard-sidebar">
        <div id="sidebar-header">Invitations</div>
        <ul id="sidebar-filters">
          {lis}
        </ul>
      </div>
    )
  }
}

class DashboardPollsListContainer extends React.Component {
  render() {
    return(
      <div id="dashboard-polls-list-container">
        <DashboardSearchBar />
        <DashboardPollsList 
          filteredPollsList={this.props.filteredPollsList}
        />
      </div>
    )
  }
}

class DashboardSearchBar extends React.Component {
  render() {
    return(
      <div id="dashboard-search-bar">
        
      </div>
    )
  }
}

class DashboardPollsList extends React.Component {
  render() {
    return(
      <div id="dashboard-polls-list">
      {this.props.filteredPollsList.map(
        (poll, idx) => (
          <DashboardPollPreview 
            key={idx}
            poll={poll}
          />
        )
      )}
      </div>
    )
  }
}

class DashboardPollPreview extends React.Component {
  render() {
    const poll = this.props.poll;
    const pollURL = URL_PARTICIPATE_POLL.replace("0", poll.id);
    return(
      <div className="dashboard-poll-preview">
        <a href={pollURL}>
          <div className="poll-preview-icon">
            <div className="fas fa-user-circle"></div>
          </div>
          <div className="poll-preview-details">
            <div className="poll-preview-name">{poll.name}</div> 
            <div className="poll-preview-n-options"> 
              <div className="icon far fa-calendar-alt" />
              {poll.polltimes.length} options 
            </div>
            <div className="poll-preview-n-participants"> 
              <div className="icon fas fa-user-friends"></div>
              {poll.participants.length} participants 
            </div>
          </div>
        </a>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
    <MainHeader entries={["logout"]} showCreatePollButton/>,
    <DashboardContainer pollsList={pollsList}/>
  </div>,
  $('#main')[0]
);
