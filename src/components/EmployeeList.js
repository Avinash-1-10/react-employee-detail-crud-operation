import React, { useState } from "react";
import Employee from "./Employee";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      address: "123 Main St, Anytown USA",
      phone: "555-1234",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      address: "456 Oak Ave, Another City",
      phone: "555-5678",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bjohnson@example.com",
      address: "789 Elm St, Smalltown",
      phone: "555-9012",
    },
    {
      id: 4,
      name: "Samantha Lee",
      email: "slee@example.com",
      address: "321 Pine St, Ruralville",
      phone: "555-3456",
    },
    {
      id: 5,
      name: "Tom Wilson",
      email: "twilson@example.com",
      address: "654 Birch Ave, Suburbia",
      phone: "555-7890",
    },
  ]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <a
              href="#addEmployeeModal"
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </a>
          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <Employee employee={employee} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
