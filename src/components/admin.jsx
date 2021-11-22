import axios from 'axios';
import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Admin extends React.Component {
    state={
        admins:[],
    };
    componentDidMount() {
        axios
          .get("http://localhost:8080/api/admindetails")
          .then((res) => {
            console.log(res);
            this.setState({ admins: res.data });
          })
          .catch((err) => console.log(err));
      }
      render() {
        return (
          <div className="container">
            <Link
              to="/admins/add"
              className="btn btn-secondary btn-large mb-1 float-end"
            >
              Add
            </Link>
            <table className="table">
              <thead>
                <tr>
                  <th>admin_id</th>
                  <th>adminname</th>
                </tr>
              </thead>
              <tbody>
                {this.state.admins.map((admin) => (
                  <tr>
                    <td>{admin.adminId}</td>
                    <td>{admin.adminName}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }
 export default Admin;