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
      loading: false,
    }
  }
  componentDidMount() {
    return fetch('https://webtestclub-todo.herokuapp.com/todo/')
      .then(res => res.json())
      .then(json => {
        this.setState({ todos: json.body.map((item) => item.todo) });
      })
      .catch((err) => {
        this.setState({ errorState: err.message });
      });
  }
  handleSubmitNewTodo = (todo) => {
    return this.clientValidationPromise(todo)
      .then(this.createTodoServerPromise)
      .then(() => {
        this.setState({ todos: [...this.state.todos, todo] });
      })
      .catch((err) => {
        this.setState({ errorState: err.message });
      });

  }
  createTodoServerPromise(todo) {
    return fetch('https://webtestclub-todo.herokuapp.com/todo/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ 'todo': todo }),
    });
  }

  clientValidationPromise(todo) {
    return new Promise((resolve, reject) => {
      if (this.state.todos.includes(todo)) {
        reject(todo + ' already exists');
      }
      else {
        resolve(todo);
      }
    });
  }

  handleTodosComplete(todos) {
    this.setState({loading: true});
    let deleteRequestPromises = [];
    todos.forEach(element => {
      deleteRequestPromises.push(fetch(`https://webtestclub-todo.herokuapp.com/todo/${element}`, {
      method: 'DELETE',
      }));
    });

    Promise.all(deleteRequestPromises).then(() => {
      fetch(`https://webtestclub-todo.herokuapp.com/todo/`);
    });
  }

  render() {
    return (
      <div className="App">
      {this.state.loading && <div className="loading"/>}
        <InputBox onSubmit={this.handleSubmitNewTodo} />
        {this.state.errorState && (<p className="validation-msg">{this.state.errorState}</p>)}
        <TodoList todos={this.state.todos} onComplete={this.handleTodosComplete.bind(this)} />
      </div>
    );
  }
}

export default App;