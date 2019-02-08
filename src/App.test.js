import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const defaultState = {
  todos: ["foo", "bar"],
  errorState: undefined,
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

    it('should not show validation message', () => {
      const validationMsg = wrapper.find('.validation-msg');
      expect(validationMsg).toHaveLength(0);
    });

    it('should set correct state after fetch', (done) => {
      const jsonResponse = Promise.resolve({ "message": "Ok!", "body": [{ "id": 50, "todo": "buy milk" }] });
      const mockResponse = Promise.resolve({ json: () => jsonResponse });

      jest.spyOn(global, 'fetch').mockImplementation(() => mockResponse);

      const wrapper = shallow(<App />);

      setTimeout(() => {
        expect(wrapper.update().state()).toEqual({ todos: ["buy milk"] });
        done();
      })

      it("should show empty list when fetch fails", (done) => {
        const jsonResponse = Promise.reject(new Error('Bad failure is bad'));
        const mockResponse = Promise.resolve({ json: () => jsonResponse });

        jest.spyOn(global, 'fetch').mockImplementation(() => mockResponse);

        const wrapper = shallow(<App />);

        // Have to wait
        setTimeout(() => {
          expect(wrapper.update().state().todos).toEqual([]);
          done();
        });
      });

      it("should set error state when fetch fails", (done) => {
        const error = new Error('Bad failure is bad');
        const jsonResponse = Promise.reject(error);
        const mockResponse = Promise.resolve({ json: () => jsonResponse });

        jest.spyOn(global, 'fetch').mockImplementation(() => mockResponse);

        const wrapper = shallow(<App />);

        setTimeout(() => {
          expect(wrapper.update().state().errorState).toEqual(error.message);
          done();
        });
      })
    })
  });

  describe('when a new item is added', () => {
    const newItem = 'new todo';

    beforeAll(() => {
      wrapper.setState(defaultState);
      const onSubmitDelegate = wrapper.find('InputBox').prop('onSubmit');
      onSubmitDelegate(newItem);
    })

    it('should be updated in state', () => {
      const jsonResponse = Promise.resolve({ "message": "Created!" });
      const mockResponse = Promise.resolve({ json: () => jsonResponse });
      jest.spyOn(global, 'fetch').mockImplementation(() => mockResponse);

      expect(wrapper.state('todos')).toContain(newItem);
      expect(global.fetch).toHaveBeenCalledWith(
        'https://webtestclub-todo.herokuapp.com/todo/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({ 'todo': 'new todo' }),
        }
      );
    });

    it('should render the newly added item', () => {
      // .props().todo v.s. .prop('todo'), latter one conveys the intention
      expect(wrapper.find('TodoList').prop('todos')).toEqual([...defaultState.todos, newItem]);
    });
  });

  describe('when a new item is added and it has a duplicated value', () => {

    const defaultState = { todos: ['my-todo'] };
    const newItem = 'my-todo';

    beforeAll(() => {
    });

    it('should fail client side validation', () => {
      wrapper.setState(defaultState);
      const onSubmitDelegate = wrapper.find('InputBox').prop('onSubmit');

      onSubmitDelegate(newItem)
        .then(() => {
          // get the validation message compoennt
          const validationMsg = wrapper.find('.validation-msg');
          // assert the value (message) inside of the compoennt
          expect(validationMsg.text()).toEqual('my-todo already exists');
          done();
        });
    });
  });

  describe('when an existing item is deleted', () => {

    // TODO:
    it('should fire a DELETE http request to server api', () => { });

    // TODO:
    it('should remove the element from the DOM', () => { });
  })

})