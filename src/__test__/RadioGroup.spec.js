/* eslint-env jest */
import React from 'react';
import { mount, render } from 'enzyme';
import { RadioGroup, RadioButton } from '../';

const getRadioById = (radioGroup, id) =>
  radioGroup.find('input[type="radio"]').find({ id });

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

  it('should render input and label per RadioButton', () => {
    expect(radioGroup.find('input[type="radio"]').length).toBe(3);
    expect(radioGroup.find('label').length).toBe(3);
  });

  it('should call onChange callback after clicking on RadioButton', () => {
    const grapesRadio = getRadioById(radioGroup, 'grapes');
    grapesRadio.simulate('change');

    expect(onChangeCb).toHaveBeenCalledTimes(1);
    expect(onChangeCb.mock.calls[0][0].target.id).toBe('grapes');
  });

  // describe('Uncontrolled', () => {
  //   beforeEach(() => {
  //     radioGroup = mount(
  //       <RadioGroup name="fruits" onChange={onChangeCb}>
  //         <RadioButton id="apple" /> Apple <br />
  //         <RadioButton id="grapes" /> Grapes<br />
  //         <RadioButton id="orange" /> Orange<br />
  //       </RadioGroup>,
  //     );
  //   });

  //   xit('should change selected checkbox after clicking on it', () => {
  //     let appleRadio = getRadioById(radioGroup, 'apple');
  //     appleRadio.simulate('change');

  //     appleRadio = getRadioById(radioGroup, 'apple');

  //     expect(appleRadio.prop('checked')).toBe(true);
  //   });
  // });

  describe('Controlled', () => {
    it('should marked as checked the selected radio button', () => {
      const appleRadio = getRadioById(radioGroup, 'apple');
      expect(appleRadio.prop('checked')).toBe(true);
    });

    it('should change selected checkbox on sending new selected', () => {
      radioGroup.setProps({ selected: 'grapes' });
      const appleRadio = getRadioById(radioGroup, 'apple');
      const grapesRadio = getRadioById(radioGroup, 'grapes');

      expect(grapesRadio.prop('checked')).toBe(true);
      expect(appleRadio.prop('checked')).toBe(false);
    });
  });

  describe('disabled', () => {
    it('should disable radio button on sending disabled prop', () => {
      radioGroup = mount(
        <RadioGroup name="fruits" selected="apple" onChange={onChangeCb}>
          <RadioButton id="apple" disabled /> Apple <br />
          <RadioButton id="grapes" /> Grapes<br />
        </RadioGroup>,
      );

      expect(getRadioById(radioGroup, 'apple').prop('disabled')).toBe(true);
      expect(getRadioById(radioGroup, 'grapes').prop('disabled')).toBe(false);
    });

    it('should disable whole radio group on sending disabled prop', () => {
      radioGroup = mount(
        <RadioGroup
          name="fruits"
          selected="apple"
          onChange={onChangeCb}
          disabled
        >
          <RadioButton id="apple" /> Apple <br />
          <RadioButton id="grapes" /> Grapes<br />
        </RadioGroup>,
      );

      expect(getRadioById(radioGroup, 'apple').prop('disabled')).toBe(true);
      expect(getRadioById(radioGroup, 'grapes').prop('disabled')).toBe(true);
    });
  });

  describe('classname', () => {
    it('should send classname of radioGroup to every radioButton', () => {
      radioGroup = mount(
        <RadioGroup name="fruits" className="groupClass">
          <RadioButton id="apple" /> Apple <br />
          <RadioButton id="grapes" /> Grapes<br />
        </RadioGroup>,
      );

      expect(getRadioById(radioGroup, 'apple').prop('className')).toBe(
        'groupClass',
      );
      expect(getRadioById(radioGroup, 'grapes').prop('className')).toBe(
        'groupClass',
      );
    });

    it('should send classname of radioButton', () => {
      radioGroup = mount(
        <RadioGroup name="fruits" onChange={onChangeCb}>
          <RadioButton id="apple" className="radioClass" /> Apple <br />
          <RadioButton id="grapes" /> Grapes<br />
        </RadioGroup>,
      );

      expect(getRadioById(radioGroup, 'apple').prop('className')).toBe(
        'radioClass',
      );
      expect(
        getRadioById(radioGroup, 'grapes').prop('className'),
      ).toBeUndefined();
    });

    it('should merge group className with radio className', () => {
      radioGroup = mount(
        <RadioGroup name="fruits" className="groupClass">
          <RadioButton id="apple" className="radioClass">
            Apple
          </RadioButton>
          <RadioButton id="grapes">Grapes</RadioButton>
        </RadioGroup>,
      );

      expect(getRadioById(radioGroup, 'apple').prop('className')).toBe(
        'groupClass radioClass',
      );
      expect(getRadioById(radioGroup, 'grapes').prop('className')).toBe(
        'groupClass',
      );
    });
  });

  describe('labelPosition', () => {
    const getRadioButtonArray = radioGroup =>
      radioGroup.find(RadioButton).map(x => x);

    it('should change label position to every RadioButton when sending to RadioGroup', () => {
      radioGroup = mount(
        <RadioGroup name="fruits" labelPosition="before">
          <RadioButton id="apple">Apple</RadioButton>
          <RadioButton id="grapes">Grapes</RadioButton>
        </RadioGroup>,
      );
      const [appleRadioButton, grapesRadioButton] = getRadioButtonArray(
        radioGroup,
      );

      expect(appleRadioButton.childAt(0).is('label')).toBe(true);
      expect(appleRadioButton.childAt(1).is('input')).toBe(true);

      expect(grapesRadioButton.childAt(0).is('label')).toBe(true);
      expect(grapesRadioButton.childAt(1).is('input')).toBe(true);
    });

    it('should change label position of RadioButton', () => {
      radioGroup = mount(
        <RadioGroup name="fruits">
          <RadioButton id="apple"> Apple </RadioButton>
          <RadioButton id="grapes" labelPosition="before">
            Grapes
          </RadioButton>
        </RadioGroup>,
      );

      const [appleRadioButton, grapesRadioButton] = getRadioButtonArray(
        radioGroup,
      );

      expect(appleRadioButton.childAt(0).is('input')).toBe(true);
      expect(appleRadioButton.childAt(1).is('label')).toBe(true);

      expect(grapesRadioButton.childAt(0).is('label')).toBe(true);
      expect(grapesRadioButton.childAt(1).is('input')).toBe(true);
    });
  });
});
