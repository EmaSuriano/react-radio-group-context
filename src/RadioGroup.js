import React from 'react';
import { string, number, func, node, bool, oneOfType } from 'prop-types';
import { Provider } from './RadioGroupContext';

Provider.displayName = 'RadioGroupProvider';

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
  children: node.isRequired,
  name: string.isRequired,
  selected: oneOfType([string, number]),
  onChange: func,
  disabled: bool,
};

RadioGroup.defaultProps = {
  disabled: false,
};

export default RadioGroup;
