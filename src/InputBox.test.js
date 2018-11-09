import React from 'react';
import InputBox from './InputBox';
import { shallow } from 'enzyme';

const defaultState = {
  text: 'text'
};

const defaultProps = {
  onSubmit: jest.fn()
};

describe('InputBox', () => {

  const wrapper = shallow(<InputBox {...defaultProps} />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  describe('when the button is clicked', () => {

    beforeAll(() => {
      wrapper.setState(defaultState);
      wrapper.find('button').simulate('click');
    })

    it('should call the onSubmit callback with correct value', () => {
      expect(defaultProps.onSubmit).toHaveBeenCalledTimes(1);
      expect(defaultProps.onSubmit).toHaveBeenCalledWith(defaultState.text);
    });

    afterAll(() => {
      defaultProps.onSubmit.mockReset();
    });
  });

  describe('when the input is changed', () => {

  });
});