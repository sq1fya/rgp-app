import React, { Component } from "react";
import PropTypes from "prop-types";

import "./StudentListItem.css";

class StudentListItem extends Component {
  static propTypes = {
    student: PropTypes.shape({
      name: PropTypes.string,
      surname: PropTypes.string
    })
  };

  render() {
    const student = this.props.student
    return (
      <p className="StudentListItem">
        {student.name} {student.surname}
      </p>
    );
  }
}

export default StudentListItem;
