import React, { Fragment } from 'react';
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
      const className = cx(groupClassName, buttonClassName);
      const labelPosition = buttonLabelPosition || groupLabelPosition;
      const isBefore = labelPosition === 'before';
      const label = (
        <label {...className && { className }} htmlFor={id} key={`label${id}`}>
          {children}
        </label>
      );
      const radio = (
        <input
          type="radio"
          {...selected && { checked: selected === id }}
          {...className && { className }}
          disabled={buttonDisabled || groupDisabled}
          id={id}
          value={value || id}
          name={name}
          onChange={onChange}
          key={`radio${id}`}
        />
      );

      return isBefore ? [label, radio] : [radio, label];

      // return isBefore ? (
      //   <Fragment>
      //     {label}
      //     {radio}
      //   </Fragment>
      // ) : (
      //   <Fragment>
      //     {radio}
      //     {label}
      //   </Fragment>
      // ); // [radio, label];
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
};

export default RadioButton;
