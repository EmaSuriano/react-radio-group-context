import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroupContext } from './RadioGroup';
// const Radio = props => <input type="radio" {...props} />;

// class RadioButton extends React.Component {
//   static propTypes = {
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     value: PropTypes.string,
//     disabled: PropTypes.bool,
//     renderComponent: PropTypes.func,
//   };

//   // static defaultProps = {
//   //   renderComponent: Radio,
//   // };

//   static contextTypes = {
//     selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//       .isRequired,
//     onChange: PropTypes.func.isRequired,
//     nameRadioGroup: PropTypes.string.isRequired,
//     disabledRadioGroup: PropTypes.bool,
//   };

//   render() {
//     const {
//       // renderComponent: Component,
//       id,
//       className,
//       value,
//       disabled,
//     } = this.props;

//     const {
//       selected,
//       onChange,
//       nameRadioGroup,
//       disabledRadioGroup,
//     } = this.context;

//     return (
//       <input
//         type="radio"
//         checked={selected === id}
//         className={className}
//         disabled={disabled || disabledRadioGroup}
//         id={id}
//         value={value || id}
//         name={nameRadioGroup}
//         onChange={onChange}
//       />
//     );
//   }
// }

class RadioButton extends React.Component {
  render() {
    const {
      id,
      className,
      value,
      disabled,
      selected,
      onChange,
      nameRadioGroup,
      disabledRadioGroup,
    } = this.props;

    return (
      <input
        type="radio"
        checked={selected === id}
        className={className}
        disabled={disabled || disabledRadioGroup}
        id={id}
        value={value || id}
        name={nameRadioGroup}
        onChange={onChange}
      />
    );
  }
}

const RadioButtonWithConsumer = props => (
  <RadioGroupContext.Consumer>
    {val => <RadioButton {...props} {...val} />}
  </RadioGroupContext.Consumer>
);

export default RadioButtonWithConsumer;
