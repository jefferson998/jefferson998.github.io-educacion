import React, { Component } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/static/logo.svg";
import "../assets/styles/BadgeNew.scss";
import Badge from "../components/Badge";
class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={logo} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Jefferson"
                lastName="Paz"
                jobTitle="Mechatronics Enginnering"
                email="pazjefferson11216"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
