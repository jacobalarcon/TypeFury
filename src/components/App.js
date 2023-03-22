import React, { Component } from 'react';
import UserForm from './Login';

class App extends Component {
  render() {
    const styles = {
      backgroundColor: 'white',
      color: 'blue',
      fontSize: 24,
      padding: '10px',
    };

    const centerStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    return (
      <div style={centerStyle}>
        <h1 className="my-title" style={styles}>
          TypeFury
        </h1>
        <UserForm />
      </div>
    );
  }
}

export default App;
