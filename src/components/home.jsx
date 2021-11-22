import React, { Component } from "react";
import EmpTable from "./empTable.jsx";

class Home extends Component {
  state = {
    count: 0,
    employee: {
      empId: 1001,
      empName: "Ram",
      salary: 45000,
    },
    employees: [
      {
        empId: 1002,
        empName: "Sam",
        salary: 55000,
      },
      {
        empId: 1003,
        empName: "Ravi",
        salary: 45000,
      },
      {
        empId: 1004,
        empName: "Kavita",
        salary: 65000,
      },
      {
        empId: 1005,
        empName: "Geeta",
        salary: 25000,
      },
      {
        empId: 1006,
        empName: "Ramya",
        salary: 55000,
      },
    ],
  };
  render() {
    return (
      <div>
        <EmpTable
          employees={this.state.employees}
          count={this.state.count}
          employee={this.state.employee}
        />
      </div>
    );
  }
}

export default Home;