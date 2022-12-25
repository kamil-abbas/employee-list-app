import React, { Component } from "react";
import Employee from "./components/Employee";
import "./App.css";
import "./components/Employees-container.css";
import "./components/Search-area.css";
import "./components/Filter-area.css";

export default class App extends Component {
  state = {
    data: [],
  };

  getData = () => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data });
      });
  };

  componentDidMount() {
    this.getData();
  }

  handleSearch = () => {
    let input = document.querySelector("input");
    const foundData = this.state.data.filter((employee) => {
      return employee.name == input.value;
    });
    this.setState({ data: foundData });
  };

  handleFilter = () => {
    let select = document.querySelector("select");
    const foundData = this.state.data.filter((employee) => {
      return employee.department == select.value;
    });
    this.setState({ data: foundData });
  };

  render() {
    console.log("render");
    return (
      <div className="app">
        <div className="search-area">
          <label>
            Please enter employee's name:
            <input type="text" />
          </label>
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div className="filter-area">
          <label>
            Show employees of
            <select onChange={this.handleFilter}>
              <option>Every</option>
              <option value="Management">Management</option>
              <option value="Security">Security</option>
              <option value="Recruitment">Recruitment</option>
            </select>
            department.
          </label>
        </div>

        <div className="employees-container">
          {this.state.data.map((employee) => (
            <Employee
              id={employee.id}
              name={employee.name}
              department={employee.department}
              role={employee.role}
            />
          ))}
        </div>
      </div>
    );
  }
}