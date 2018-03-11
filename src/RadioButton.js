import React from 'react';
import { oneOfType, string, number, bool } from 'prop-types';
import { Consumer } from './RadioGroupContext';

const RadioButton = ({ id, value, disabled }) => (
  <Consumer>
    {({ selected, onChange, disabledGroup, name }) => (
      <input
        type="radio"
        {...selected && { checked: selected === id }}
        disabled={disabled || disabledGroup}
        id={id}
        value={value || id}
        name={name}
        onChange={onChange}
      />
    )}
  </Consumer>
);

RadioButton.propTypes = {
  id: oneOfType([string, number]).isRequired,
  value: oneOfType([string, number]).isRequired,
  disabled: bool,
};

RadioButton.defaultProps = {
  disabled: false,
};

export default RadioButton;
