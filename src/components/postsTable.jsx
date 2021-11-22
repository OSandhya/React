import React from "react";
const PostsTable = (props) => {
  const { posts } = props;
  return (
    <div className="container">
      <input
        type="submit"
        value="Add"
        className="btn btn-primary float-end my-3"
      />
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Post Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <input
                  type="button"
                  value="Update"
                  className="btn btn-secondary"
                />
                <input
                  type="button"
                  value="Delete"
                  className="btn btn-outline-danger"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTable;