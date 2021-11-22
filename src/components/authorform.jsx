import axios from "axios";
import React, { Component } from "react";
class AuthorForm extends React.Component {
  state = {
    author: {
      firstName: "",
      lastName: "",
      email: "",
      contactno: "",
    },
  };

  handleChange = (event) => {
    const auth = { ...this.state.author };
    auth[event.target.name] = event.target.value;
    this.setState({ author: auth });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/addAuthor", this.state.author)
      .then((res) => {
        this.props.history.push("/author");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              FirstName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              value={this.state.author.firstName}
              name="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              LastName
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              value={this.state.author.lastName}
              name="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.author.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPh" className="form-label">
              ContactNo
            </label>
            <input
              type="tel"
              className="form-control"
              id="exampleInputPh"
              value={this.state.author.contactno}
              name="contactno"
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AuthorForm;