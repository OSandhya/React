import axios from "axios";
import React, { Component } from "react";

class AddIssuedBook extends React.Component {
  state = {
    bookissued: {
      issueId: "",
      issueDate: "",
      dueDate: "",
     
    },
  };
  handleChange = (event) => {
    const bookissued = { ...this.state.bookissued }; // copying student object
    bookissued[event.target.name] = event.target.value; // student[fullName] = "ab"
    //student.fullName = "ab";
    //student[fullName]="ab";
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ bookissued: bookissued });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const bookissued = {
     issueId: this.state.bookissued.issueId,
     issueDate: this.state.bookissued.issueDate,
     dueDate:this.state.bookissued.dueDate,
    };
    axios
      .post("http://localhost:8080/booksissued", bookissued)
      .then((res) => {
        this.props.history.push("/bookissued");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h3>Register Form</h3>
        <form onSubmit={this.handleSubmit} className="w-50 mx-auto border p-3">
          <div className="mb-3">
            <label for="exampleInput" className="form-label">
              issueId
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInput"
              value={this.state.student.issueId}
              name="issueId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInput" className="form-label">
             issueDate
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInput"
              
              value={this.state.bookissued.issueDate}
              name="issueDate"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInput" className="form-label">
              dueDate
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInput"
              
              value={this.state.bookissued.dueDate}
              name="dueDate"
              onChange={this.handleChange}
            />
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddIssuedBook;