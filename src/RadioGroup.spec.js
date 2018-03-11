/* eslint-env jasmine */
/* eslint react/jsx-filename-extension: 0 */
/* eslint import/no-extraneous-dependencies: 0 */

import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import RadioGroup from './RadioGroup';
import RadioButton from './RadioButton';

describe('<RadioGroup />', () => {
  const selected = 'check2';
  const name = 'bestRadiosEver!';
  let radioGroup;
  let onChangeCb;

  beforeEach(() => {
    onChangeCb = spy();
    radioGroup = shallow(
      <RadioGroup onChange={onChangeCb} selected={selected} name={name}>
        <RadioButton id="check1" />
        <RadioButton id="check2" />
      </RadioGroup>,
    );
  });

  it('should render children', () => {
    expect(radioGroup.find(RadioButton).length).toBe(2);
  });

  it('should set Context with selected, onChange, name and disabled', () => {
    const context = radioGroup.instance().getChildContext();
    expect(context).toEqual({
      disabledRadioGroup: false,
      nameRadioGroup: name,
      onChangeCheckbox: onChangeCb,
      selectedCheckbox: selected,
    });
  });
});
