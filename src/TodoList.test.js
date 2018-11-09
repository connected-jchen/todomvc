import React from 'react';
import TodoList from './TodoList';
import { shallow } from 'enzyme';

const defaultProps = {
    todos: ['foo', 'bar']
};

describe('TodoList', () => {

    const wrapper = shallow(<TodoList {...defaultProps} />)

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('renders todo items correctly', () => {
        expect(wrapper.find('li')).toHaveLength(2);
        expect(wrapper.find('li').get(0).props.children).toEqual('foo');
        expect(wrapper.find('li').get(1).props.children).toEqual('bar');
    });
});