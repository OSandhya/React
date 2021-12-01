import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Bookissued extends React.Component {
  state = {
    booksissued: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/api/viewbookissuedlist")
      .then((res) => {
        console.log(res);
        this.setState({ booksissued: res.data });
      })
      .catch((err) => console.log(err));
  }
  handleDelete = (Id) => {
    axios
      .delete(`http://localhost:8080/api/deleteissuedbook/${Id}`)
      .then((res) => {
        const booksissue = this.state.booksissued.filter((d) => d.issueId != Id);
        this.setState({ booksissued: booksissue });
      });
  };
  render() {
    return (
      <div className="container ">
       {this.props.login.loggedIn &&
                      this.props.login.role == "user" && (
        <Link to="/booksissued" >
        
        </Link>
                      )}
        <table className="table table-info table-striped">
          <thead>
            <tr>
              <th>issueId</th>
              <th>issueDate</th>
              <th>dueDate</th>
              <th>bookid</th>
              <th>userid</th>
              {this.props.login.loggedIn &&
                      this.props.login.role == "admin" && (
              <th >Action</th>
                      )}
              {/*  {this.props.login.loggedIn &&
                      this.props.login.role == "user" && (
              <th >Action</th>
                      )} */}
            </tr>
          </thead>
          <tbody>
            {this.state.booksissued.map((bookissued) => (
              <tr key={bookissued.issueId}>
                <td>{bookissued.issueId}</td>
                <td>{bookissued.issueDate}</td>
                <td>{bookissued.dueDate}</td>
                 <td>{bookissued.books.bookid}</td>
                <td>{bookissued.users.userid}</td> 
                
                <td>
                {this.props.login.loggedIn &&
                      this.props.login.role == "admin" && (
                    <input
                      type="button"
                      value="Delete"
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(bookissued.issueId)}
                    />
                 )}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

export default connect(mapStateToProps)(Bookissued);
