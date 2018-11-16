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
    fetch('https://webtestclub-todo.herokuapp.com/todo/')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({todos: json.body});
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