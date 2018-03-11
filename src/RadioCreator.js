import React from 'react';

class RadioButton extends React.Component {
  render() {
    const {
      id,
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
        disabled={disabled || disabledRadioGroup}
        id={id}
        value={value || id}
        name={nameRadioGroup}
        onChange={onChange}
      />
    );
  }
}

const RadioCreator = name => {
  const { Provider, Consumer } = React.createContext(name);

  const RadioGroup = ({ selected, onChange, disabled, children }) => (
    <Provider
      value={{
        selected,
        onChange,
        name,
        disabledRadioGroup: disabled,
      }}
    >
      {children}
    </Provider>
  );

  const RadioButtonWithConsumer = props => (
    <Consumer>
      {val => <RadioButton {...props} {...val} name={name} />}
    </Consumer>
  );

  return {
    RadioGroup,
    RadioButton: RadioButtonWithConsumer,
  };
};

export default RadioCreator;
