import React from 'react';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import { shallow } from 'enzyme';

const defaultProps = {
    todos: ['foo', 'bar']
};

describe('TodoList', () => {

    const wrapper = shallow(<TodoList {...defaultProps} />)

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('renders todo items with two TodoListItem', () => {
        expect(wrapper.find(TodoListItem)).toHaveLength(2);
        expect(wrapper.find(TodoListItem).at(0).props()).toEqual({'label': 'foo'});
        expect(wrapper.find(TodoListItem).at(1).props()).toEqual({'label': 'bar'});
    });


    // TODO
    it('should call handleTodoComplete callback with the todo item whe the "complete" btn is clicked', () => { })


    // TODO
    it('should render a checkbox on the left side of each todo item', () => { });
    // TODO
    it('should render a button with caption "complete selected" on the top of the todo items list', () => { });
    // TODO
    it('should call handleTodoComplete callback with all the selected todo items when the "complete selected" btn is clicked', () => { })
    // TODO
    it('should not call handleTodoComplete callback when the "complete selected" btn is clicked and there are no selected todos', () => { })

});