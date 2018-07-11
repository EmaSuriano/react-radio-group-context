import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioButton, RadioGroup } from '../src';
import { withInfo } from '@storybook/addon-info';
import centered from '@storybook/addon-centered';
import { withState } from '@dump247/storybook-state';

const stories = storiesOf('Radio Group Stories', module);
stories.addDecorator(centered);

stories.add(
  'Controlled Component',
  withState(
    { selected: 'apple' },
    withInfo()(store => (
      <RadioGroup
        name="fruits"
        selected={store.state.selected}
        onChange={({ target: { id } }) => store.set({ selected: id })}
      >
        <RadioButton id="apple">Apple</RadioButton> <br />
        <RadioButton id="grapes">Grapes</RadioButton> <br />
        <RadioButton id="orange">Orange</RadioButton> <br />
        <RadioButton id="watermelon">Watermelon</RadioButton> <br />
        <RadioButton id="lemon">Lemon</RadioButton> <br />
      </RadioGroup>
    )),
  ),
);

stories.add(
  'Uncontrolled Component',
  withInfo()(() => (
    <RadioGroup name="fruits">
      <RadioButton id="apple">Apple</RadioButton> <br />
      <RadioButton id="grapes">Grapes</RadioButton> <br />
      <RadioButton id="orange">Orange</RadioButton> <br />
      <RadioButton id="watermelon">Watermelon</RadioButton> <br />
      <RadioButton id="lemon">Lemon</RadioButton> <br />
    </RadioGroup>
  )),
);

stories.add(
  'Radio Buttons disabled',
  withState(
    { selected: 'apple' },
    withInfo()(store => (
      <RadioGroup
        name="fruits"
        selected={store.state.selected}
        onChange={({ target: { id } }) => store.set({ selected: id })}
      >
        <RadioButton id="apple">Apple</RadioButton> <br />
        <RadioButton id="grapes">Grapes</RadioButton> <br />
        <RadioButton id="orange" disabled>
          Orange
        </RadioButton>
        <br />
        <RadioButton id="watermelon">Watermelon</RadioButton> <br />
        <RadioButton id="lemon" disabled>
          Lemon
        </RadioButton>
        <br />
      </RadioGroup>
    )),
  ),
);

stories.add(
  'Radio Group disabled',
  withState(
    { selected: 'apple' },
    withInfo()(store => (
      <RadioGroup
        name="fruits"
        selected={store.state.selected}
        onChange={({ target: { id } }) => store.set({ selected: id })}
        disabled
      >
        <RadioButton id="apple">Apple</RadioButton> <br />
        <RadioButton id="grapes">Grapes</RadioButton> <br />
        <RadioButton id="orange">Orange</RadioButton> <br />
        <RadioButton id="watermelon">Watermelon</RadioButton> <br />
        <RadioButton id="lemon">Lemon</RadioButton> <br />
      </RadioGroup>
    )),
  ),
);

stories.add(
  'Custom Radio Button',
  withState(
    { selected: 'apple' },
    withInfo()(store => (
      <RadioGroup
        name="fruits"
        selected={store.state.selected}
        onChange={({ target: { id } }) => store.set({ selected: id })}
      >
        <RadioButton id="apple">
          <span role="img" aria-label="apple">
            🍎
          </span>
        </RadioButton>
        <br />
        <RadioButton id="grapes">
          <span role="img" aria-label="grapes">
            🍇
          </span>
        </RadioButton>
        <br />
        <RadioButton id="orange">
          <span role="img" aria-label="orange">
            🍊
          </span>
        </RadioButton>
        <br />
        <RadioButton id="watermelon">
          <span role="img" aria-label="watermelon">
            🍉
          </span>
        </RadioButton>
        <br />
        <RadioButton id="lemon">
          <span role="img" aria-label="lemon">
            🍋
          </span>
        </RadioButton>
        <br />
      </RadioGroup>
    )),
  ),
);

stories.add(
  'Complex Hierarchy',
  withState(
    { selected: 'apple' },
    withInfo()(store => (
      <RadioGroup
        name="fruits"
        selected={store.state.selected}
        onChange={({ target: { id } }) => store.set({ selected: id })}
      >
        <div>
          <p>Small size</p>
          <RadioButton id="grapes">Grapes</RadioButton> <br />
        </div>
        <div>
          <p>Medium size</p>
          <RadioButton id="apple">Apple</RadioButton> <br />
          <RadioButton id="orange">Orange</RadioButton> <br />
          <RadioButton id="lemon">Lemon</RadioButton> <br />
        </div>
        <div>
          <p>Big size</p>
          <RadioButton id="watermelon">Watermelon</RadioButton> <br />
        </div>
      </RadioGroup>
    )),
  ),
);

stories.add(
  'Nested RadioGroup',
  withState(
    {
      selectedBrand: 'ford',
      selectedModelFord: 'ka',
      selectedModelChevrolet: 'camaro',
    },
    withInfo()(store => (
      <RadioGroup
        name="fruits"
        selected={store.state.selectedBrand}
        onChange={({ target: { id } }) => store.set({ selectedBrand: id })}
      >
        <RadioButton id="ford">Ford</RadioButton> <br />
        {store.state.selectedBrand === 'ford' && (
          <div style={{ marginLeft: '20px' }}>
            <RadioGroup
              name="fordCars"
              selected={store.state.selectedModelFord}
              onChange={({ target: { id } }) =>
                store.set({ selectedModelFord: id })
              }
            >
              <RadioButton id="ka">Ka</RadioButton> <br />
              <RadioButton id="fiesta">Fiesta</RadioButton> <br />
              <RadioButton id="focus">Focus</RadioButton> <br />
            </RadioGroup>
          </div>
        )}
        <RadioButton id="chevrolet">Chevrolet</RadioButton> <br />
        {store.state.selectedBrand === 'chevrolet' && (
          <div style={{ marginLeft: '20px' }}>
            <RadioGroup
              name="chevroletCars"
              selected={store.state.selectedModelChevrolet}
              onChange={({ target: { id } }) =>
                store.set({ selectedModelChevrolet: id })
              }
            >
              <RadioButton id="camaro">Camaro</RadioButton> <br />
              <RadioButton id="corvette">Corvette</RadioButton> <br />
              <RadioButton id="spark">Spark</RadioButton> <br />
            </RadioGroup>
          </div>
        )}
      </RadioGroup>
    )),
  ),
);

stories.add(
  'Custom Classes',
  withState(
    { selected: 'blue' },
    withInfo()(store => (
      <RadioGroup
        name="colors"
        className="color-option"
        selected={store.state.selected}
        onChange={({ target: { id } }) => store.set({ selected: id })}
      >
        <RadioButton id="red" className="red">
          Red
        </RadioButton>{' '}
        <br />
        <RadioButton id="blue" className="blue">
          Blue
        </RadioButton>{' '}
        <br />
        <RadioButton id="yellow" className="yellow">
          Yellow
        </RadioButton>{' '}
        <br />
      </RadioGroup>
    )),
  ),
);

stories.add(
  'Custom Label Positions',
  withState(
    { selected: 'blue' },
    withInfo()(store => (
      <RadioGroup
        name="colors"
        labelPosition="before"
        selected={store.state.selected}
        onChange={({ target: { id } }) => store.set({ selected: id })}
      >
        <RadioButton id="red">Red</RadioButton> <br />
        <RadioButton id="blue">Blue</RadioButton> <br />
        <RadioButton id="yellow" labelPosition="after">
          Yellow
        </RadioButton>{' '}
        <br />
      </RadioGroup>
    )),
  ),
);
