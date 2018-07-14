import React from 'react';
import { oneOf, oneOfType, string, number, bool, node } from 'prop-types';
import cx from 'classnames';
import { Consumer } from './RadioGroupContext';

const RadioButton = ({
  id,
  value,
  children,
  disabled: buttonDisabled,
  className: buttonClassName,
  labelPosition: buttonLabelPosition,
}) => (
  <Consumer>
    {({
      selected,
      onChange,
      name,
      disabled: groupDisabled,
      className: groupClassName,
      labelPosition: groupLabelPosition,
    }) => {
      const className = cx(buttonClassName, groupClassName);
      const labelPosition = buttonLabelPosition || groupLabelPosition;
      const isBefore = labelPosition === 'before';
      const label = (
        <label className={className} htmlFor={id}>
          {children}
        </label>
      );
      const radio = (
        <input
          type="radio"
          {...selected && { checked: selected === id }}
          disabled={buttonDisabled || groupDisabled}
          id={id}
          className={className}
          value={value || id}
          name={name}
          onChange={onChange}
        />
      );
      return isBefore ? [label, radio] : [radio, label];
    }}
  </Consumer>
);

RadioButton.propTypes = {
  id: oneOfType([string, number]).isRequired,
  labelPosition: oneOf(['before', 'after']),
  value: oneOfType([string, number]),
  disabled: bool,
  children: node,
  className: string,
};

RadioButton.defaultProps = {
  disabled: false,
  labelPosition: 'before',
};

export default RadioButton;
