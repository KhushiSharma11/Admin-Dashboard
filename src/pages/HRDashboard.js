import React, { useState } from "react";
import './HRDashboard.css';

function HRDashboard() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", position: "Labour", salary: 30000, task: "Task 1", attendance: "Present" },
    { id: 2, name: "Jane Smith", position: "Sales Manager", salary: 50000, task: "Task 2", attendance: "Absent" },
    { id: 3, name: "Alice Johnson", position: "HR", salary: 55000, task: "Task 3", attendance: "Present" },
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: "", position: "", salary: "", task: "", attendance: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editEmployeeId, setEditEmployeeId] = useState(null);

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const addEmployee = () => {
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    setNewEmployee({ name: "", position: "", salary: "", task: "", attendance: "" });
  };

  const editEmployee = (id) => {
    const employee = employees.find((emp) => emp.id === id);
    setNewEmployee(employee);
    setIsEditing(true);
    setEditEmployeeId(id);
  };

  const updateEmployee = () => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === editEmployeeId ? { ...emp, ...newEmployee } : emp
    );
    setEmployees(updatedEmployees);
    setNewEmployee({ name: "", position: "", salary: "", task: "", attendance: "" });
    setIsEditing(false);
    setEditEmployeeId(null);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="dashboard">
      <h2 className="title">HR DASHBOARD</h2>
      <div className="formContainer">
        <h3>{isEditing ? "Edit Employee" : "Add Employee"}</h3>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={newEmployee.name}
          onChange={handleChange}
          className="inputField"
        />
        <select
          name="position"
          value={newEmployee.position}
          onChange={handleChange}
          className="inputField"
        >
          <option value="">Select Position</option>
          <option value="Labour">Labour</option>
          <option value="HR">HR</option>
          <option value="Sales Manager">Sales Manager</option>
        </select>
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={newEmployee.salary}
          onChange={handleChange}
          className="inputField"
        />
        <input
          type="text"
          name="task"
          placeholder="Assigned Task"
          value={newEmployee.task}
          onChange={handleChange}
          className="inputField"
        />
        <select
          name="attendance"
          value={newEmployee.attendance}
          onChange={handleChange}
          className="inputField"
        >
          <option value="">Select Attendance</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <button className="button" onClick={isEditing ? updateEmployee : addEmployee}>
          {isEditing ? "Update Employee" : "Add Employee"}
        </button>
      </div>

      <div className="tableContainer">
        <h3>Employee Records</h3>
        <table className="employeeTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Task</th>
              <th>Attendance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.position}</td>
                <td>{employee.salary}</td>
                <td>{employee.task}</td>
                <td>{employee.attendance}</td>
                <td>
                  <button className="editButton" onClick={() => editEmployee(employee.id)}>
                    Edit
                  </button>
                  <button className="deleteButton" onClick={() => deleteEmployee(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HRDashboard;
