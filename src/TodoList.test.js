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
});