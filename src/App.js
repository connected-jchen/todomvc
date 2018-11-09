import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox';
import TodoList from './TodoList';

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
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;