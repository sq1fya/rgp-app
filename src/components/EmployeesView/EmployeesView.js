import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EmployeesView extends Component {

  state = {
    employees: []
  }

  componentDidMount() {
    fetch('/data/employees.json').then(
      response => response.json()
    ).then(
      arrayOfEmployees => this.setState({ employees: arrayOfEmployees })
    )
  }

  render() {
    return (
      <div>
        <h1>Employees</h1>
        {
          this.state.employees.map(
            employee => (
              <p key={employee.id}>
                <Link to={`/employees/${employee.id}`}>
                  {employee.name}
                </Link>
              </p>
            )
          )
        }
      </div>
    )
  }
}

export default EmployeesView