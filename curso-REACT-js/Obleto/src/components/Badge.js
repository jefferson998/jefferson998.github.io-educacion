import React, { Component } from "react";
import logo from "../assets/static/logo.svg";
import "../assets/styles/Badge.scss";
import avatar from "../assets/static/myAvatar.svg";
class Badge extends Component {
  render() {
    return (
      <div className="badge">
        <div className="badge__Header">
          <img src={logo} alt="logo" />
        </div>
        <div className="badge__section--name">
          <img className="badge__avatar" src={avatar} alt="Avatar" />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="badge__section--info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.email}</div>
        </div>
        <div className="badge__footer">
          <h3>#NO PARAR DE APRENDER</h3>
        </div>
      </div>
    );
  }
}

export default Badge;
