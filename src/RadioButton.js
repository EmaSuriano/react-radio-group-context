import React from 'react';
import { oneOfType, string, number, bool, node } from 'prop-types';
import { Consumer } from './RadioGroupContext';

const RadioButton = ({ id, value, disabled, children }) => (
  <Consumer>
    {({ selected, onChange, disabledGroup, name }) => (
      <React.Fragment>
        <input
          type="radio"
          {...selected && { checked: selected === id }}
          disabled={disabled || disabledGroup}
          id={id}
          value={value || id}
          name={name}
          onChange={onChange}
        />
        <label htmlFor={id}>{children}</label>
      </React.Fragment>
    )}
  </Consumer>
);

RadioButton.propTypes = {
  id: oneOfType([string, number]).isRequired,
  value: oneOfType([string, number]),
  disabled: bool,
  children: node,
};

RadioButton.defaultProps = {
  disabled: false,
};

export default RadioButton;
