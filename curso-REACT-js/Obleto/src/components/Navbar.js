import React, { Component } from "react";
import logo from "../assets/static/logo.svg";
import "../assets/styles/Navbar.scss";
class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <a className="Navbar__brand" href="">
            <img className="Navbar__brand--logo" src={logo} alt="logo-p" />
            <span className="font-weight-light">Productos</span>
            <span className="font-weight-bold">Conocenos</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
