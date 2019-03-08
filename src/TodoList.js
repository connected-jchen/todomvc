import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render() {
        const todos = this.props.todos || [];
        return (
            <ul>
                {todos.map((x, i) => <TodoListItem key={i} label={x}/> )}
            </ul>
        );
    }
}

export default TodoList;