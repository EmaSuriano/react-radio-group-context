# react-radio-group-context

[![NPM](https://img.shields.io/npm/v/react-radio-group-context.svg)](https://www.npmjs.com/package/react-radio-group-context) 
[![Code style: Prettier](https://img.shields.io/badge/Code_style-Prettier-e31f2e.svg)](https://github.com/prettier/prettier)
[![Circle CI status](https://circleci.com/gh/EmaSuriano/react-radio-group-context.png?circle-token=:circle-token)](https://circleci.com/gh/EmaSuriano/react-radio-group-context/tree/master)
[![Storybook](https://img.shields.io/badge/%F0%9F%93%93-Storybook-ff69b4.svg)](https://emasuriano.github.io/react-radio-group-context/)
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)


> Radio Group Component for React written with the new Context API 😮

**In order to use this component, you must use React 16.3 or above.** Older versions of React do not implement the Context API that this library depends on.

## Why?

RadioGroup in react is one the most annoying components that a web developer has to deal with it. A possible implementation without using Context could be like this:

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
        <label>
          <input
            type="radio"
            value="apple"
            id="apple"
            name="fruits"
            onChange={this.onChangeFruit}
            checked={this.state.selectedFruit === 'apple'}
          />
          Apple
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="grapes"
            id="grapes"
            name="fruits"
            onChange={this.onChangeFruit}
            checked={this.state.selectedFruit === 'grapes'}
          />
          Grapes
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="orange"
            id="orange"
            name="fruits"
            onChange={this.onChangeFruit}
            checked={this.state.selectedFruit === 'orange'}
          />
          Orange
        </label>
        <br />
      </div>
    );
  }
}
```

That's a lot of code just to create a radio group in React! Time to see how we can do the same but with Context!

## Install

```bash
yarn add react-radio-group-context
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

## Label Position

```jsx
import React, { Component } from 'react';
import { RadioButton, RadioGroup } from 'react-radio-group-context';

const GroupLabelBefore = () => (
  <RadioGroup name="fruits" labelPosition="before">
    <RadioButton id="apple">Apple</RadioButton> <br />
    <RadioButton id="grapes">Grapes</RadioButton> <br />
    <RadioButton id="orange">Orange</RadioButton> <br />
  </RadioGroup>
);

const ItemsLabelBefore = () => (
  <RadioGroup name="fruits">
    <RadioButton id="apple" labelPosition="before">Apple</RadioButton> <br />
    <RadioButton id="grapes">Grapes</RadioButton> <br />
    <RadioButton id="orange" labelPosition="before">Orange</RadioButton> <br />
  </RadioGroup>
);
```

## Disabling

```jsx
import React, { Component } from 'react';
import { RadioButton, RadioGroup } from 'react-radio-group-context';

const GroupDisabled = () => (
  <RadioGroup name="fruits" disabled>
    <RadioButton id="apple">Apple</RadioButton> <br />
    <RadioButton id="grapes">Grapes</RadioButton> <br />
    <RadioButton id="orange">Orange</RadioButton> <br />
  </RadioGroup>
);

const ItemsDisabled = () => (
  <RadioGroup name="fruits">
    <RadioButton id="apple" disabled>Apple</RadioButton> <br />
    <RadioButton id="grapes">Grapes</RadioButton> <br />
    <RadioButton id="orange">Orange</RadioButton> <br />
  </RadioGroup>
);
```

For more examples please check the [Storybook](https://emasuriano.github.io/react-radio-group-context/)

## License

MIT © [EmaSuriano](https://github.com/EmaSuriano/react-radio-group-context)
