import React from 'react';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';
import { shallow } from 'enzyme';
import { doesNotReject } from 'assert';


describe('TodoList', () => {

    const defaultProps = { todos: ['foo', 'bar'] };
    const onCompleteMock = jest.fn();

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
            expect(wrapper.find(".todo-checkbox")).toHaveLength(2);

            // Watch it fail
            // Fix
        });

        // TODO:
        it('should render a button with className "complete-selected-btn"', () => {
            // Assert
            expect(wrapper.find(".complete-selected-btn").exists()).toBeTruthy();
            // Watch it fail
            // Fix
        });
    });

    describe('when first TodoItem onComplete handler is fired', () => {
        // Arrange
        const wrapper = shallow(<TodoList {...defaultProps} onComplete={onCompleteMock} />)
        // Act
        const todoListItems = wrapper.find(TodoListItem);
        const firstTodoListItem = todoListItems.at(0);
        firstTodoListItem.simulate('complete');

        // TODO:
        it('should fire onComplete with an array containing the todo item', () => {
            // Assert
            expect(onCompleteMock.mock.calls).toHaveLength(1)
            expect(onCompleteMock.mock.calls[0][0]).toEqual(['foo'])
            // Watch it fail
            // Fix
        });
    });

    describe('when the first checkbox onChange handler is fired', () => {
        // Arrange
        const wrapper = shallow(<TodoList {...defaultProps} onComplete={onCompleteMock} />)

        // Act
        const firstTodoCheckBox = wrapper.find('.todo-checkbox').at(0);
        firstTodoCheckBox.simulate('change');

        // TODO:
        it('should set the first checkbox checked prop to true', () => {
            // Assert
            expect(wrapper.update().find('.todo-checkbox').at(0).props().checked).toEqual(true);
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