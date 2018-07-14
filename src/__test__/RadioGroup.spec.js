/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { RadioGroup, RadioButton } from '../';

describe('<RadioGroup />', () => {
  let radioGroup;
  let onChangeCb;

  beforeEach(() => {
    onChangeCb = jest.fn();
    radioGroup = mount(
      <RadioGroup name="fruits" selected="apple" onChange={onChangeCb}>
        <RadioButton id="apple" /> Apple <br />
        <RadioButton id="grapes" /> Grapes<br />
        <RadioButton id="orange" /> Orange<br />
      </RadioGroup>,
    );
  });

  it('should marked as checked the selected radio button', () => {});

  it('should call onChange callback after clicking on RadioButton', () => {});

  it('should change selected checkbox after clicking on it', () => {});

  it('should change selected checkbox on sending new selected', () => {});

  describe('disabled', () => {
    it('should disable radio button on sending disabled prop', () => {});

    it('should whole radio group on sending disabled prop', () => {});
  });

  describe('classname', () => {
    it('should send classname of radioGroup to every radioButton', () => {});

    it('should send classname of radioButton', () => {});
  });

  describe('labelPosition', () => {
    it('should change label position to every RadioButton when sending to RadioGroup', () => {});

    it('should change label position of RadioButton', () => {});
  });
});
