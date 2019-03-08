import React from 'react';
import TodoListItem from './TodoListItem';
import { shallow } from 'enzyme';

describe('TodoListItem', () => {
    const defaultProps = {label: "alex"};
    const wrapper = shallow(<TodoListItem {...defaultProps} />)

    it('should render a button with caption "complete" on the right side of each todo item', () => {        
        const todoItem = wrapper.find('.complete');
        expect(todoItem).toHaveLength(1);
        expect(todoItem.text()).toEqual('complete');
    })
});