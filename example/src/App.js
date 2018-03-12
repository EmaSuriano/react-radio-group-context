import React from 'react';
import { RadioButton, RadioGroup } from 'react-radio-group-context';

export default class App extends React.Component {
  state = {
    selectedFruit: 'apple',
  };

  onChangeFruit = ({ target: { value } }) =>
    this.setState({ selectedFruit: value });

  render() {
    return (
      <div>
        <p>Simple example</p>
        <RadioGroup
          name="fruits"
          selected={this.state.selectedFruit}
          onChange={this.onChangeFruit}
        >
          <RadioButton id="apple">Apple</RadioButton> <br />
          <RadioButton id="grapes">Grapes</RadioButton> <br />
          <RadioButton id="orange">Orange</RadioButton> <br />
          <RadioButton id="watermelon">Watermelon</RadioButton> <br />
          <RadioButton id="lemon">Lemon</RadioButton> <br />
        </RadioGroup>
      </div>
    );
  }
}
