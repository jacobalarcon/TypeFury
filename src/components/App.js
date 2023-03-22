import React, { Component } from 'react';
import UserForm from './Login';

class App extends Component {
  render() {
    const styles = {
      backgroundColor: 'yellow',
      color: 'blue',
      fontSize: 24,
      padding: '10px',
    };
    return (
      <div>
        <h1 className="my-title" style={styles}>
          Type I am Fury
        </h1>
        <UserForm />
      </div>
    );
  }
}

export default App;
