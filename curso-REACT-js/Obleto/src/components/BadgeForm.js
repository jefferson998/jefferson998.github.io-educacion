import React, { Component } from "react";

class BadgeForm extends Component {
  // state = {};
  // handleChange = (e) => {
  // console.log({
  //   name: e.target.name,
  //   value: e.target.value,
  // });
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };
  handleClick = (e) => {
    console.log("button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form was submitted");
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>New product</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name Product</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>
          <div className="form-group">
            <label>Jobtitle</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>
          <div className="form-group">
            <label>email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
