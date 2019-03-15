import React from 'react';
import TodoListItem from './TodoListItem';
import { shallow } from 'enzyme';


describe('TodoListItem', () => {
    const onCompleteMock = jest.fn();
    const defaultProps = { label: 'alex', onComplete: onCompleteMock };

    describe('when it is rendered', () => {
        // Arrange
        const wrapper = shallow(<TodoListItem {...defaultProps} />)
        const completeBtn = wrapper.find('.complete-btn');

        it('should render without crashing', () => {
            expect(wrapper.exists()).toBeTruthy();
        });

        it('should render a button with className "complete-btn"', () => {
            expect(completeBtn).toHaveLength(1);
        });

        it('should render the complete button with text "complete"', () => {
            expect(completeBtn.text()).toEqual('complete');
        });
    });

    describe('when the complete button onClick handler is fired', () => {
        // Arrange
        const wrapper = shallow(<TodoListItem {...defaultProps} />)
        const completeBtn = wrapper.find('.complete-btn');
        completeBtn.simulate('click');

        // TODO:
        it('should fire onComplete callback', () => {
            // Assert
            expect(onCompleteMock.mock.calls).toHaveLength(1)
            // Watch it fail
            // Fix
        });
    });

});