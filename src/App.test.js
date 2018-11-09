import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

const defaultState = {
  todos: ["foo", "bar"],
};

describe('App', () => {

  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should call fetch api with a GET request when rendered', () => {
    const temp = fetch;
    fetch = jest.fn();

    shallow(<App />);
    expect(fetch).toBeCalled();

    fetch = temp;
  })

  it('should call fetch api with correct URL when rendered', () => {
    const temp = fetch;
    fetch = jest.fn();

    shallow(<App/>);
    expect(fetch.mock.calls[0][0]).toEqual('URL');

    fetch = temp;
  })

  it('should set the correct state into the component', (done) => {
    const temp = fetch;
    fetch = jest.fn(() => Promise.resolve(
      {json: () => {
        Promise.resolve({
        "message":"Ok!", "body":[{"id":50,"todo":"buy milk"}]}
      )
      done();
    }
          
        }
    ));

    const wrapper = shallow(<App/>);
    expect(wrapper.state()).toEqual({todos: ["buy milk"]})

    fetch = temp;
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