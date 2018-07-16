import React from 'react';
import { string, number, func, node, bool, oneOf, oneOfType } from 'prop-types';
import { Provider } from './RadioGroupContext';
import { LABEL_POSITION, DEFAULT_SHARED_PROPS } from './constants';

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
  labelPosition: oneOf(Object.values(LABEL_POSITION)),
  selected: oneOfType([string, number]),
  onChange: func,
  disabled: bool,
  className: string,
};

RadioGroup.defaultProps = DEFAULT_SHARED_PROPS;

export default RadioGroup;
