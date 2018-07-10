import React from 'react';
import { string, number, func, node, bool, oneOf, oneOfType } from 'prop-types';
import { Provider } from './RadioGroupContext';

Provider.displayName = 'RadioGroupProvider';

const RadioGroup = ({
  selected,
  onChange,
  name,
  disabled,
  children,
  className,
  labelPosition,
}) => (
  <Provider
    value={{
      selected,
      onChange,
      name,
      disabled,
      className,
      labelPosition,
    }}
  >
    {children}
  </Provider>
);

RadioGroup.propTypes = {
  children: node.isRequired,
  name: string.isRequired,
  labelPosition: oneOf(['before', 'after']).isRequired,
  selected: oneOfType([string, number]),
  onChange: func,
  disabled: bool,
  className: string,
};

RadioGroup.defaultProps = {
  labelPosition: 'after',
  disabled: false,
};

export default RadioGroup;
