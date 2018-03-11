import React from 'react';
import styled from 'styled-components';
import { RadioButton, RadioGroup } from 'react-radio-group-context';

/* 
Things to show
Easy example - Controlled
Easy example - Uncontrolled

Disabling specific options
Disabling the whole group

Different kind of children (like img)

Showing hierarchy of divs , like each radioButton inside a Card
Nested Radio Group 
*/

export default class App extends React.Component {
  state = {
    selectedFruit: 'apple',
    selectedCar: 'renualt',
  };

  onChange = name => ({ target: { value } }) =>
    this.setState({ [name]: value });

  render() {
    return (
      <div className="exampleContainer">
        <p>This is an example of </p>
        <RadioGroup
          name="fruits"
          selected={this.state.selectedFruit}
          onChange={this.onChange('selectedFruit')}
        >
          <RadioButton id="apple" /> Apple <br />
          <RadioButton id="grapes" /> Grapes<br />
          <RadioButton id="orange" /> Orange<br />
        </RadioGroup>

        <RadioGroup
          name="cars"
          selected={this.state.selectedCar}
          onChange={this.onChange('selectedCar')}
        >
          <RadioButton id="renualt" /> Renault <br />
          <div style={{ marginLeft: '20px' }}>
            {this.state.selectedCar === 'renualt' && (
              <RadioGroup name="parts">
                <RadioButton id="wheel" /> Wheel <br />
                <RadioButton id="bumper" /> Bumper<br />
                <RadioButton id="brakes" /> Brakes<br />
              </RadioGroup>
            )}
          </div>
          <RadioButton id="volskwagen" disabled /> Volskwagen <br />
          <RadioButton id="ford" /> Ford <br />
        </RadioGroup>
      </div>
    );
  }
}
