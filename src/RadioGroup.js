import React from 'react';
import PropTypes from 'prop-types';
// import { Provider } from './RadioGroupContext';
import { generateRandomName } from './utils';

export const RadioGroupContext = React.createContext('radioGroup');

class RadioGroup extends React.Component {
  static propTypes = {
    selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
  };

  // static childContextTypes = {
  //   selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  //     .isRequired,
  //   onChange: PropTypes.func.isRequired,
  //   nameRadioGroup: PropTypes.string,
  //   disabledRadioGroup: PropTypes.bool,
  // };

  // getChildContext() {
  //   const { selected, onChange, name, disabled } = this.props;
  //   console.log(name);
  //   return {
  //     selected: selected,
  //     onChange,
  //     nameRadioGroup: name,
  //     disabledRadioGroup: disabled,
  //   };
  // }

  render() {
    // return (
    //   <Provider
    //     value={{
    //       selected: 'apple',
    //     }}
    //   >
    //     {this.props.children}
    //   </Provider>
    // );
    const { selected, onChange, name, disabled } = this.props;
    return (
      <RadioGroupContext.Provider
        value={{
          selected,
          onChange,
          name,
          disabledRadioGroup: disabled,
        }}
      >
        {this.props.children}
      </RadioGroupContext.Provider>
    );
  }
}

export default RadioGroup;
