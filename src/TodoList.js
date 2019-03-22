import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTodos: [],
        };
    }
    render() {
        const todos = this.props.todos || [];
        return (
            <div>
                <button className="complete-selected-btn" onClick={() => this.props.onComplete(this.state.selectedTodos)} disabled={true} >complete selected todo items</button>
                <ul>
                    {todos.map((x, i) => {
                        return <div key={i}>
                            <input type="checkbox"
                                className="todo-checkbox"
                                onChange={() => { this.setState({ selectedTodos: [...this.state.selectedTodos, x] }) }}
                                checked={this.state.selectedTodos.includes(x)} />
                            <TodoListItem label={x} onComplete={() => {
                                this.props.onComplete([x])
                            }} /></div>
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;