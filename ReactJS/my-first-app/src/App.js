import React, { Component } from 'react';
//import User from './components/User';
import Navbar from './components/Navbar';
import AddUser from './components/AddUser';
import Users from './components/Users';

class App extends Component {

  render() {

    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <AddUser />
        <Users />
      </div>
    );
  }
}

export default App;
