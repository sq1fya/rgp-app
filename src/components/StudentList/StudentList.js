import React, { Component } from "react";
import PropTypes from "prop-types";
import StudentListItem from '../StudentListItem/StudentListItem';

import "./StudentList.css";

/**
 * Komponent StudentList przyjmuje prop o nazwie `students`,
 * który musi być tablicą obiektów, z których każdy powinien
 * posiadać atrybuty:
 * - id: typu number
 * - name: typu string
 * - surname: typu string
 */
class StudentList extends Component {
  static propTypes = {
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number
      })
    )
  };

  render() {
    return (
      <ul className="StudentList">
        {this.props.students.map(student => (
          <StudentListItem key={student.id} student={student} />
        ))}
      </ul>
    );
  }
}

export default StudentList;
