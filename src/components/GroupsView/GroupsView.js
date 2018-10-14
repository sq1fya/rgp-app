import React, { Component } from "react";

import "./GroupsView.css";

class GroupsView extends Component {
  state = {
    groups: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/groups.json")
      .then(response => response.json())
      .then(objectOfGroups =>
        this.setState({
          groups: Object.entries(objectOfGroups).map(([id, other]) => ({ id, ...other }))
        })
      );
  }

  render() {
    return (
      <div className="GroupsView">
        <h1>Groups</h1>
        <ul>
          {
            this.state.groups.map(
              group => (
                <li key={group.id}>{group.name}</li>
              )
            )
          }
          </ul>
      </div>
    );
  }
}

export default GroupsView;
