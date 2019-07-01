import $ from "jquery";
import React from "react";
import css from "../scss/header.scss";

const USER = JSON.parse($("body").attr("user"));
const URL_CREATE_POLL = $("body").attr("url_create_poll");

export class MainHeader extends React.Component {
  render() {
    return(
      <div id="main-header">
        <div id="header-nav">
          <div id="header-nav-left">
            <div id="logo">ReDoodle</div>
          </div> 
          <div id="header-nav-right">
            {/* TODO Handle case of user not logged in */}
            <UserMenu />
            <CreatePollButton />
          </div>
        </div>
      </div>
    )
  }
}

export class UserMenu extends React.Component {
  render() {
    return(
      <div id="user-menu">
        {`${USER.first_name} ${USER.last_name}`}
        <span id="down-arrow">&#8964;</span>
      </div>
    )
  }
}

export class CreatePollButton extends React.Component {
  render() {
    return(
      <a id="create-poll-button" href={URL_CREATE_POLL}>
        + Create
      </a>
    )
  }
}
