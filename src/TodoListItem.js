import React, { Component } from 'react';

class TodoListItem extends Component {
    render() {
        const label = this.props.label;
        return (
                <li>{label} <button className="complete">complete</button></li>
        );
    }
}

export default TodoListItem;