import React from 'react';
import User from './components/User';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar title="User App" />
      <hr />
      <User
        name="Janice Martin"
        salary="5000"
        department="IT"
      />
      <User
        name="Hadley Marrow"
        salary="6500"
        department="Engineer"
      />
    </div>
  );
}

export default App;
