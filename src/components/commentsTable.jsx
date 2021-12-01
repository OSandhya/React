import React from "react";
const CommentsTable = (props) => {
  const { comments } = props;
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Post Id</th>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comments) => (
            <tr>
              <td>{comments.postId}</td>
              <td>{comments.id}</td>
              <td>{comments.name}</td>
              <td>{comments.email}</td>
              <td>{comments.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentsTable;