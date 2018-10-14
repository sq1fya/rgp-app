import React, { Component } from 'react'

class EmployeeView extends Component {

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
    const employeeId = parseInt(this.props.match.params.employeeId)
    return (
      <div>
        <h1>Employee page</h1>
        {
          this.state.employees.filter(
            employee => employee.id === employeeId
          ).map(
            employee => (
              <p key={employee.id}>
                  {employee.name} {employee.surname}
              </p>
            )
          )
        }
      </div>
    )
  }
}

export default EmployeeView