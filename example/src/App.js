import React from 'react';
import styled from 'styled-components';
// import { RadioGroup, RadioButton } from 'react-radio-group-context';
import {
  // RadioCreator,
  RadioButton,
  RadioGroup,
} from 'react-radio-group-context';

// const FruitsRadio = RadioCreator('fruits');
// const CarsRadio = RadioCreator('cars');

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

// const CardContainer = styled.div`
//   background: ${({ disabled }) => (disabled ? 'grey' : 'white')};
// `;

// const Card = ({ disabled, selected, value, onChange }) => (
//   <CardContainer
//     disabled={disabled}
//     selected={selected}
//     onClick={() => onChange(value)}
//   >
//     <p>value: {value}</p>
//   </CardContainer>
// );

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
          selected={this.state.selectedFruit}
          onChange={this.onChange('selectedFruit')}
        >
          <RadioButton id="apple" /> Apple <br />
          <RadioButton id="grapes" /> Grapes<br />
          <RadioButton id="orange" /> Orange<br />
        </RadioGroup>

        <RadioGroup
          selected={this.state.selectedCar}
          onChange={this.onChange('selectedCar')}
        >
          <RadioButton id="renualt" /> Renault <br />
          <div style={{ marginLeft: '20px' }}>
            {this.state.selectedCar === 'renualt' && (
              <RadioGroup name="parts" onChange={this.onChange('part')}>
                <RadioButton id="wheel" /> Wheel <br />
                <RadioButton id="bumper" /> Bumper<br />
                <RadioButton id="brakes" /> Brakes<br />
              </RadioGroup>
            )}
          </div>
          <RadioButton id="volskwagen" disabled /> Volskwagen <br />
          <RadioButton id="ford" /> Ford <br />
        </RadioGroup>

        {/* <p>With Creator!</p>
        <FruitsRadio.RadioGroup
          selected={this.state.selectedFruit}
          onChange={this.onChange('selectedFruit')}
        >
          <FruitsRadio.RadioButton id="apple" /> Apple <br />
          <FruitsRadio.RadioButton id="grapes" /> Grapes<br />
          <FruitsRadio.RadioButton id="orange" /> Orange<br />
        </FruitsRadio.RadioGroup>

        <CarsRadio.RadioGroup
          selected={this.state.selectedCar}
          onChange={this.onChange('selectedCar')}
        >
          <CarsRadio.RadioButton id="renualt" /> Renault <br />
          <CarsRadio.RadioButton id="volskwagen" disabled /> Volskwagen <br />
          <CarsRadio.RadioButton id="ford" /> Ford <br />
        </CarsRadio.RadioGroup> */}

        {/* <p>This is an example of </p>

        <RadioGroup>
          <RadioButton value="apple" /> Apple <br />
          <RadioButton value="grapes" disabled /> Grapes<br />
          <RadioButton value="orange" /> Orange<br />
        </RadioGroup> */}
      </div>
    );
  }
}
