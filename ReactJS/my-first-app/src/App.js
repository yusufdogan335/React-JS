import React, { Component } from 'react';
//import User from './components/User';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {

  state = {
    users: [
      {
        id: 1,
        name: "Janice Martin",
        salary: "5000",
        department: "IT"
      },
      {
        id: 2,
        name: "Hadley Marrow",
        salary: "4000",
        department: "Marketing"
      },
      {
        id: 3,
        name: "John Doe",
        salary: "6500",
        department: "Engineering"
      }
    ]
  }

  deleteUser = (id) => {
    this.setState({
      users: this.state.users.filter(user => id !== user.id)
    })
  }

  render() {

    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users deleteUser={this.deleteUser} users={this.state.users} />
      </div>
    );
  }
}

export default App;
