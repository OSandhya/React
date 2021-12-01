import axios from "axios";
import React, { Component } from "react";
import CommentsTable from "./commentsTable";
class Comments extends React.Component {
  state = {
    comments: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => this.setState({ comments: res.data }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <CommentsTable comments={this.state.comments} />
      </div>
    );
  }
}

export default Comments;