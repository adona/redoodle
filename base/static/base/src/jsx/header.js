import React from "react";
import css from "../scss/header.scss";

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
            <UserMenu 
              userName={`${this.props.user.first_name} ${this.props.user.last_name}`}
            />
            <CreatePollButton 
              createPollURL={this.props.createPollURL}
            />
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
        {this.props.userName} <span id="down-arrow">&#8964;</span>
      </div>
    )
  }
}

export class CreatePollButton extends React.Component {
  render() {
    return(
      <a id="create-poll-button" href={this.props.createPollURL}>
        + Create
      </a>
    )
  }
}
