import React from 'react';
import { string, number, func, node, bool, oneOfType } from 'prop-types';
import { Provider } from './RadioGroupContext';
import { generateRandomName } from './utils';

const RadioGroup = ({ selected, onChange, name, disabled, children }) => (
  <Provider
    value={{
      selected,
      onChange,
      name,
      disabledGroup: disabled,
    }}
  >
    {children}
  </Provider>
);

RadioGroup.propTypes = {
  selected: oneOfType([string, number]).isRequired,
  onChange: func.isRequired,
  children: node.isRequired,
  name: string.isRequired,
  disabled: bool,
};

RadioGroup.defaultProps = {
  disabled: false,
};

export default RadioGroup;
