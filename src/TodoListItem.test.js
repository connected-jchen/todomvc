import React from 'react';
import TodoListItem from './TodoListItem';
import { shallow } from 'enzyme';

describe('TodoListItem', () => {
    const defaultProps = { label: "alex" };

    it('should render a button with caption "complete" on the right side of each todo item', () => {        
        const wrapper = shallow(<TodoListItem {...defaultProps} />)
        const todoItem = wrapper.find('.complete');
        
        expect(todoItem).toHaveLength(1);
        expect(todoItem.text()).toEqual('complete');
    })

    // TODO
    it('should call handleTodoComplete callback with the todo item whe the "complete" btn is clicked', () => {
        // Arrange        
        // Act
        // Assert
        // Watch it fail
        // Fix
    });

    // TODO
    it('should render a checkbox on the left side of each todo item', () => {
        // Arrange
        // Act
        // Assert
        // Watch it fail
        // Fix
    });

    // TODO
    it('should render a button with caption "complete selected" on the top of the todo items list', () => {
        // Arrange
        // Act
        // Assert
        // Watch it fail
        // Fix
    });

    // TODO
    it('should call handleTodoComplete callback with all the selected todo items when the "complete selected" btn is clicked', () => {
        // Arrange
        // Act
        // Assert
        // Watch it fail
        // Fix
    });

    // TODO
    it('should not call handleTodoComplete callback when the "complete selected" btn is clicked and there are no selected todos', () => {
        // Arrange
        // Act
        // Assert
        // Watch it fail
        // Fix
    });
});