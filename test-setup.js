import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

function mockReact() {
  const originalReact = require.requireActual('react');
  return {
    ...originalReact,
    createContext: jest.fn(defaultValue => {
      var value = defaultValue;
      const Provider = props => {
        value = props.value;
        return props.children;
      };
      const Consumer = props => props.children(value);
      return {
        Provider: Provider,
        Consumer: Consumer,
      };
    }),
  };
}

jest.mock('react', () => mockReact());
