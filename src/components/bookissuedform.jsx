import axios from "axios";
import React, { Component } from "react";
class BookIssuedForm extends React.Component {
  state = {
    booksissued: {
      issueId: "",
      issueDate: "",
      dueDate: "",
     
    },
  };

  handleChange = (event) => {
    const bookissued = { ...this.state.booksissued };
    bookissued[event.target.name] = event.target.value;
    this.setState({ booksissued: bookissued });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/addIssuedbook", this.state.booksissued)
      .then((res) => {
        this.props.history.push("/bookissued");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              issueId
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleissueDate"
              
              value={this.state.booksissued.issueDate}
              name="issueDate"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              dueDate
            </label>
            <input
              type="date"
              className="form-control"
              id="exampledueDate"
              value={this.state.booksissued.dueDate}
              name="dueDate"
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

export default BookIssuedForm;