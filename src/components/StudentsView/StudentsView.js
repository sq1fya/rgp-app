import React, { Component } from "react";
import StudentList from '../StudentList'

import "./StudentsView.css";

class StudentsView extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/students.json")
      .then(response => response.json())
      .then(arrayOfStudents => this.setState({ students: arrayOfStudents }));
  }

  render() {
    return (
      <div className="StudentsView">
        <h1>Students</h1>

        <StudentList students={this.state.students}/>
      </div>
    );
  }
}

export default StudentsView;
