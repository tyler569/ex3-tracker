import React from "react";

export class ExpressTest extends React.Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render() {
    return <div>
      {this.state.users.map(user =>
        <div key={user.name}>{user.name}</div>
      )}
    </div>
  }
}