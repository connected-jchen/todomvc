import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const defaultState = {
  todos: ["foo", "bar"],
};

describe('App', () => {

  const wrapper = shallow(<App />);

  describe('when it is rendered', () => {

    it('should not crash', () => {
      expect(wrapper.exists()).toBeTruthy();
    });

    it('should call fetch with correct url', () => {
      jest.spyOn(global, 'fetch');
      shallow(<App />);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://webtestclub-todo.herokuapp.com/todo/');
    })

    it('should set correct state after fetch', (done) => {
      const jsonResponse = Promise.resolve({ "message": "Ok!", "body": [{ "id": 50, "todo": "buy milk" }] });
      const mockResponse = Promise.resolve({ json: () => jsonResponse });

      jest.spyOn(global, 'fetch').mockImplementation(() => mockResponse);

      const wrapper = shallow(<App />);

      // Have to wait
      setTimeout(() => {
        expect(wrapper.update().state()).toEqual({ todos: ["buy milk"] });
        done();
      }, 3000)
    })
  })

  describe('when a new item is added', () => {
    const newItem = 'new todo';

    beforeAll(() => {
      wrapper.setState(defaultState);
      const onSubmitDelegate = wrapper.find('InputBox').prop('onSubmit');
      onSubmitDelegate(newItem);
    })

    it('should be updated in state', () => {
      expect(wrapper.state('todos')).toContain(newItem);
    });

    it('should render the newly added item', () => {
      expect(wrapper.find('TodoList').props().todos).toEqual([...defaultState.todos, newItem]);
    });
  })
});