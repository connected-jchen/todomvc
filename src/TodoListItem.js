import React, { Component } from 'react';

class TodoListItem extends Component {
    render() {
        const label = this.props.label;
        const onComplete = this.props.onComplete;
        return (
            <li>{label} <button className="complete-btn" onClick={onComplete} >complete</button></li>
        );
    }
}

export default TodoListItem;