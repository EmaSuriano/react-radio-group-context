import React from 'react';
import styled from 'styled-components';
import { RadioGroup, RadioButton } from 'react-radio-group-context';

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
  };

  onChangeFruit = ({ target: { value } }) =>
    this.setState({ selectedFruit: value });

  render() {
    return (
      <div className="exampleContainer">
        <p>This is an example of </p>
        <RadioGroup
          name="fruits"
          selected={this.state.selectedFruit}
          onChange={this.onChangeFruit}
        >
          <RadioButton id="apple" /> Apple <br />
          <RadioButton id="grapes" disabled /> Grapes<br />
          <RadioButton id="orange" /> Orange<br />
        </RadioGroup>

        <RadioGroup
          name="fruits"
          selected={this.state.selectedFruit}
          onChange={this.onChangeFruit}
        >
          <RadioButton id="apple" /> Apple <br />
          <RadioButton id="grapes" disabled /> Grapes<br />
          <RadioButton id="orange" /> Orange<br />
        </RadioGroup>

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
