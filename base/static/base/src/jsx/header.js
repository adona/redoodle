import $ from "jquery";
import React from "react";
import css from "../scss/header.scss";

var user = $("body").attr("user");
if (user != "Anonymous") user = JSON.parse(user);

export var PAGES = {
  dashboard: {description: "Dashboard"},
  logout: {description: "Log out"},
  create_poll: {description: "Create"},
}
for (var pageID in PAGES) 
  PAGES[pageID].url = $("body").attr(`url_${pageID}`);

export class MainHeader extends React.Component {
  render() {
    return(
      <div id="main-header">
        <div id="header-nav">
          <div id="header-nav-left">
            <a id="logo" href={PAGES.dashboard.url}>ReDoodle</a>
          </div> 
          <div id="header-nav-right">
            {/* TODO Handle case of user not logged in */}
            <UserMenu entries={this.props.entries} />
            { this.props.showCreatePollButton ? <CreatePollButton /> : "" }
          </div>
        </div>
      </div>
    )
  }
}

export class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    window.onclick = (evt) => {
      if (!evt.target.matches("#user-menu-button"))
        $("#user-menu-entries").removeClass("expanded");
    }
  }

  toggleExpand = () => $("#user-menu-entries").toggleClass("expanded");

  render() {
    return(
      <div id="user-menu">
        <button id="user-menu-button" onClick={this.toggleExpand}>
          {`${user.first_name} ${user.last_name}`}
          <span id="down-arrow">&#8964;</span>
        </button>
        <ul id="user-menu-entries">
          {this.props.entries.map((entry, idx) => (
              <li key={idx} className="user-menu-entry">
                <a href={PAGES[entry].url}>{PAGES[entry].description}</a>
              </li>
          ))}
        </ul>
      </div>
    )
  }
}

export class CreatePollButton extends React.Component {
  render() {
    return(
      <a id="create-poll-button" href={PAGES.create_poll.url}>
        + {PAGES.create_poll.description}
      </a>
    )
  }
}
