import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import TodoList from './TodoList';

describe('App', () => {

  describe('with defaultState and defaultProps', () => {
    // Arrange & Act
    const mockFetchAllTodos = jest.fn();
    const wrapper = shallow(<App fetchAllTodos={mockFetchAllTodos} />);

    // Assert
    it('should call fetchAllTodos when componentDidMount is called', () => {
      expect(mockFetchAllTodos).toHaveBeenCalledTimes(1);
    });

    describe('when there is an errorState', () => {

      const expectedErrorState = "sample-error-state";

      beforeEach(() => {
        wrapper.setState({
          errorState: expectedErrorState,
        })
      })

      it(`should render a .validation-msg with the message ${expectedErrorState}`, () => {
        const validationMsgWrapper = wrapper.find('.validation-msg');
        expect(validationMsgWrapper).toHaveLength(1)
        expect(validationMsgWrapper.text()).toBe(expectedErrorState);
      })

    })

    describe('when there is not an errorState', ()=> {

      beforeEach(() => {
        wrapper.setState({
          errorState: undefined,
        })
      })

      it('should not render a .validation-msg', () => {
        expect(wrapper.find('.validation-msg')).toHaveLength(0);
      })

    })

    it('should render TodoList with default props', () => {

      expect(wrapper.find(TodoList)).toHaveLength(1);

    })
  });

  describe('something is changing about the app here', () => {

  })

});