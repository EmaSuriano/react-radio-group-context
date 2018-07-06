# react-radio-group-context

[![NPM](https://img.shields.io/npm/v/react-radio-group-context.svg)](https://www.npmjs.com/package/react-radio-group-context) 
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Radio Group Component for React written with the new Context API 😮

Right now test coverage is not working due to a problem with Enzyme and Context Tag. This is the [issue](https://github.com/airbnb/enzyme/issues/1509)

This is an experimental component using a feature in React that is not official yet, so I don't recommend using it meanwhile React don't upgrade its version.

**In order to use this component, you have to use the latest version of React that implement Context**

```bash
npm install react@next react-dom@next
```

## Why?

RadioGroup in react is one the most annoying components that a web developer has to deal with it. A possible implementation wihout using Context could be like this:

```jsx
import React, { Component } from 'react';

class Example extends Component {
  state = {
    selectedFruit: 'apple',
  };

  onChangeFruit = ({ target: { value } }) =>
    this.setState({ selectedFruit: value });

  render() {
    return (
      <div>
        <input
          type="radio"
          value="apple"
          id="apple"
          name="fruits"
          onChange={this.onChangeFruit}
          checked={this.state.selectedFruit === 'apple'}
        />
        <label htmlFor="apple">Apple</label>
        <br />
        <input
          type="radio"
          value="grapes"
          id="grapes"
          name="fruits"
          onChange={this.onChangeFruit}
          checked={this.state.selectedFruit === 'grapes'}
        />
        <label htmlFor="grapes">Grapes</label>
        <br />
        <input
          type="radio"
          value="orange"
          id="orange"
          name="fruits"
          onChange={this.onChangeFruit}
          checked={this.state.selectedFruit === 'orange'}
        />
        <label htmlFor="orange">Orange</label>
        <br />
      </div>
    );
  }
}
```

That's a lot of code just to create a radio group in React! Time to see how we can do the same but with Context!

## Install

```bash
npm install --save react-radio-group-context
```

## Usage

## Controlled Component

```jsx
import React, { Component } from 'react';
import { RadioButton, RadioGroup } from 'react-radio-group-context';

class Example extends Component {
  state = {
    selectedFruit: 'apple',
  };

  onChangeFruit = ({ target: { value } }) =>
    this.setState({ selectedFruit: value });

  render() {
    return (
      <RadioGroup
        name="fruits"
        selected={this.state.selectedFruit}
        onChange={this.onChangeFruit}
      >
        <RadioButton id="apple">Apple</RadioButton> <br />
        <RadioButton id="grapes">Grapes</RadioButton> <br />
        <RadioButton id="orange">Orange</RadioButton> <br />
      </RadioGroup>
    );
  }
}
```

## Uncontrolled Component

```jsx
import React, { Component } from 'react';
import { RadioButton, RadioGroup } from 'react-radio-group-context';

const Example = () => (
  <RadioGroup name="fruits">
    <RadioButton id="apple">Apple</RadioButton> <br />
    <RadioButton id="grapes">Grapes</RadioButton> <br />
    <RadioButton id="orange">Orange</RadioButton> <br />
  </RadioGroup>
);
```

For more examples please check the [Storybook](https://emasuriano.github.io/react-radio-group-context/)

## License

MIT © [EmaSuriano](https://github.com/EmaSuriano/react-radio-group-context)
