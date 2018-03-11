/* eslint react/jsx-filename-extension: 0 */
/* eslint import/no-extraneous-dependencies: 0 */

import { shallow } from 'enzyme';
import React from 'react';
import RadioButton from 'js/components/shared/RadioButton';
import { noop } from 'lodash';
import RadioButtonGroup from './RadioButton';

describe('RadioButtonGroup', () => {
  const context = {
    selectedCheckbox: 'check1',
    onChangeCheckbox: noop,
    nameRadioGroup: 'radioGroup',
    disabledRadioGroup: false,
  };
  let radioButtonGroup;

  beforeEach(() => {
    radioButtonGroup = shallow(<RadioButtonGroup id="id" />, { context });
  });

  it('should render RadioButton with props', () => {
    const radioButton = radioButtonGroup.find(RadioButton);
    expect(radioButton.exists()).toBe(true);
    expect(radioButton.props()).toEqual({
      checked: false,
      disabled: false,
      id: 'id',
      name: 'radioGroup',
      onChange: context.onChangeCheckbox,
      className: undefined,
      label: undefined,
    });
  });

  it('should send checked property if selectedCheckbox', () => {
    radioButtonGroup.setProps({ id: context.selectedCheckbox });
    const radioButton = radioButtonGroup.find(RadioButton);
    expect(radioButton.prop('checked')).toBe(true);
  });

  it('should disabled radioButton if group is disabled', () => {
    radioButtonGroup.setContext({
      selectedCheckbox: 'check1',
      onChangeCheckbox: noop,
      nameRadioGroup: 'radioGroup',
      disabledRadioGroup: true,
    });
    const radioButton = radioButtonGroup.find(RadioButton);
    expect(radioButton.prop('disabled')).toBe(true);
  });
});
