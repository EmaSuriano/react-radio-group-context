import React from 'react';
import { oneOf, oneOfType, string, number, bool, node } from 'prop-types';
import cx from 'classnames';
import { Consumer } from './RadioGroupContext';
import { LABEL_POSITION, DEFAULT_SHARED_PROPS } from './constants';

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
      const className = cx(groupClassName, buttonClassName);
      const isBefore =
        buttonLabelPosition !== DEFAULT_SHARED_PROPS.labelPosition ||
        groupLabelPosition !== DEFAULT_SHARED_PROPS.labelPosition;

      const disabled = buttonDisabled || groupDisabled;

      const radioProps = {
        disabled,
        id,
        value: value || id,
        name,
        onChange,
      };
      if (selected) radioProps.checked = selected === id;
      const radio = <input type="radio" {...radioProps} />;
      const [first, second] = isBefore ? [children, radio] : [radio, children];

      return (
        <label {...className && { className }} disabled={disabled}>
          {first}
          {second}
        </label>
      );
    }}
  </Consumer>
);

RadioButton.propTypes = {
  id: oneOfType([string, number]).isRequired,
  labelPosition: oneOf(Object.values(LABEL_POSITION)),
  value: oneOfType([string, number]),
  disabled: bool,
  children: node,
  className: string,
};

RadioButton.defaultProps = DEFAULT_SHARED_PROPS;

export default RadioButton;
