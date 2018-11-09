import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ["foo", "bar"]
    }
  }
  render() {
    return (
      <div className="App">
        <InputBox onSubmit={todo => this.setState((prevState) => ({ todos: [...prevState.todos, todo] }))} />
        <ul>
          {this.state.todos.map((x, i) => <li key={i}>{x}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;