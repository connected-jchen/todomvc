import React, { Component } from 'react';

class InputBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: undefined
        }
    }
    onInputChange = e => {
        this.setState({text: e.target.value})
    }
    render() {
        const onSubmit = this.props.onSubmit;
        return [
            <input type="text" onChange={this.onInputChange}/>,
            <button onClick={() => {onSubmit(this.state.text)}}>ok</button>,
            <p>{this.state.text}</p>
        ]
    }
}

export default InputBox;