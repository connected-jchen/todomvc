import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        const todos = this.props.todos || [];
        return (<ul>
            {todos.map((x, i) => <li key={i}>{x}</li>)}
        </ul>);
    }
}

export default TodoList;