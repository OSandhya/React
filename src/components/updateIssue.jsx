import React, { Component } from "react";
import axios from "axios";

class UpdateIssue extends React.Component {
  state = {
    booksissued: {
        issueId: "",
        issueDate: "",
        dueDate: "",
       
      },
  };
  componentDidMount() {
    
    axios
      .get(
        `http://localhost:8080/lms/viewBookIssuedList/`
      )
      .then((res) => {
        const issue = { ...this.state.bookissued };
        issue.issueId = res.data.issueId;
        issue.issueDate = res.data.issueDate;
        issue.dueDate = res.data.dueDate;
       
        console.log(res.data);
        console.log(issue);
        this.setState({ bookissued: issue });
      })
      .catch((err) => console.log(err));
  }
  handleChange = (event) => {
    const issue = { ...this.state.bookissued };
    issue[event.target.name] = event.target.value;
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ bookissued: issue  });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const issue = {
      issueId: this.state.bookissued.issueId,
      issueDate: this.state.bookissued.issueDate,
      dueDate: this.state.bookissued.dueDate,
     
    };
    axios
      .put(
        `http://localhost:8080/lms/updateAuthor/${this.props.match.params.authorId}`,
        issue
      )
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
              type="number"
              className="form-control"
              id="exampleissueId"
              aria-describedby="emailHelp"
              value={this.state.bookissued.issueId}
              name="issueId"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              issueDateue
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleissueDate"
              value={this.state.bookissued.issueDate}
              name="issueDate"
              onChange={this.handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              dueDate
            </label>
            <input
              type="date"
              className="form-control"
              id="exampledueDate"
              aria-describedby="emailHelp"
              value={this.state.bookissued.dueDate}
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

export default UpdateIssue;