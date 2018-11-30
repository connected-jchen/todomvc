import React, { Component } from 'react';
import './App.css';
import InputBox from './InputBox';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      errorState: undefined,
    }
  }
  componentDidMount() {    
    return fetch('https://webtestclub-todo.herokuapp.com/todo/')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({todos: json.body.map( (item) => item.todo)});
      })
      .catch((err) => {
        this.setState({errorState : err});
      });      
  }
  handleSubmitNewTodo = (todo) => {
    return fetch('https://webtestclub-todo.herokuapp.com/todo/',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json; charset=utf-8'},
        body: JSON.stringify({'todo': todo}),
      })
    .then(() => {
      this.setState({todos: [...this.state.todos, todo]});
    })
    .catch((err) => {
      this.setState({errorState : err});
    });  
  }
  render() {
    return (
      <div className="App">
        <InputBox onSubmit={this.handleSubmitNewTodo} />
        {this.state.errorState && (<p className="validation-msg" >{this.state.errorState} already exists</p>)}
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;