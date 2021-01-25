import React, { Component } from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/static/logo.svg";
import "../assets/styles/BadgeNew.scss";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
class BadgeNew extends Component {
  // levantar el estado
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={logo} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
