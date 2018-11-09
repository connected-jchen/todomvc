import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    // TODO: fetch api endpoint to get todo items
    fetch('https://webtestclub-todo.herokuapp.com/todo/')
      .then(res => res.json())
      .then(jsonBody => {
        console.log(jsonBody);
        this.setState({todos: jsonBody.body});
      });
    
    // TODO: set state TODO
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