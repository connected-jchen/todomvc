import React from 'react';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import { shallow } from 'enzyme';


describe('TodoList', () => {

    const defaultProps = { todos: ['foo', 'bar'] };

    describe('when it is rendered', () => {
        // Arrange
        const wrapper = shallow(<TodoList {...defaultProps} />)

        it('should render without crashing', () => {
            expect(wrapper.exists()).toBeTruthy();
        });

        it('should render two todo items', () => {
            expect(wrapper.find(TodoListItem)).toHaveLength(2);
        });

        it('should render first todo item with label = foo', () => {
            expect(wrapper.find(TodoListItem).at(0).props().label).toEqual('foo');
        });

        it('should render first todo item with label = bar', () => {
            expect(wrapper.find(TodoListItem).at(1).props().label).toEqual('bar');
        });

        // TODO:
        it('should render two checkboxes with className "todo-checkbox"', () => {
            // Assert
            // Watch it fail
            // Fix
        });

        // TODO:
        it('should render a button with className "complete-selected-btn"', () => {
            // Assert
            // Watch it fail
            // Fix
        });
    });

    describe('when first TodoItem onComplete handler is fired', () => {
        // Arrange
        // Act

        // TODO:
        it('should fire onComplete with an array containing the todo item', () => {
            // Assert
            // Watch it fail
            // Fix
        });
    });

    describe('when the first checkbox onChange handler is fired', () => {
        // Arrange
        // Act

        // TODO:
        it('should set the first checkbox checked prop to true', () => {
            // Assert
            // Watch it fail
            // Fix
        });
    });

    describe('when complete selected button onClick handler is fired and there are two checkboxes checked', () => {
        // Arrange
        // Act

        //TODO:
        it('should fire onComplete with an array containing the two todo items', () => {
            // Assert
            // Watch it fail
            // Fix
        })
    });
});