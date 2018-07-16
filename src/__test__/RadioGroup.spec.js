/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import { RadioGroup, RadioButton } from '..';
import radioSelector from './testHelpers';

describe('<RadioGroup />', () => {
  it('should render input and label per RadioButton', () => {
    const radioGroup = mount(
      <RadioGroup name="fruits">
        <RadioButton id="apple">Apple</RadioButton>
        <RadioButton id="grapes">Grapes</RadioButton>
        <RadioButton id="orange">Orange</RadioButton>
      </RadioGroup>,
    );

    expect(radioGroup.find('input[type="radio"]').length).toBe(3);
    expect(radioGroup.find('label').length).toBe(3);
  });

  it('should call onChange callback after clicking on RadioButton', () => {
    const onChangeCb = jest.fn();
    const radioGroup = mount(
      <RadioGroup name="fruits" onChange={onChangeCb}>
        <RadioButton id="apple">Apple</RadioButton>
        <RadioButton id="grapes">Grapes</RadioButton>
        <RadioButton id="orange">Orange</RadioButton>
      </RadioGroup>,
    );

    const grapesRadio = radioSelector(radioGroup).getRadioInputById('grapes');
    grapesRadio.simulate('change');

    expect(onChangeCb).toHaveBeenCalledTimes(1);
    expect(onChangeCb.mock.calls[0][0].target.id).toBe('grapes');
  });

  describe('Uncontrolled', () => {
    it('should change selected checkbox after clicking on it', () => {
      const radioGroup = mount(
        <RadioGroup name="fruits">
          <RadioButton id="apple">Apple</RadioButton>
          <RadioButton id="grapes">Grapes</RadioButton>
          <RadioButton id="orange">Orange</RadioButton>
        </RadioGroup>,
      );
      const appleRadio = radioSelector(radioGroup).getRadioInputById('apple');
      appleRadio.simulate('change');

      expect(appleRadio.prop('checked')).toBeUndefined();
    });
  });

  describe('Controlled', () => {
    let radioGroup;

    beforeEach(() => {
      radioGroup = mount(
        <RadioGroup name="fruits" selected="apple">
          <RadioButton id="apple">Apple</RadioButton>
          <RadioButton id="grapes">Grapes</RadioButton>
          <RadioButton id="orange">Orange</RadioButton>
        </RadioGroup>,
      );
    });

    it('should marked as checked the selected radio button', () => {
      const appleRadio = radioSelector(radioGroup).getRadioInputById('apple');
      expect(appleRadio.prop('checked')).toBe(true);
    });

    it('should change selected checkbox on sending new selected', () => {
      radioGroup.setProps({ selected: 'grapes' });
      const appleRadio = radioSelector(radioGroup).getRadioInputById('apple');
      const grapesRadio = radioSelector(radioGroup).getRadioInputById('grapes');

      expect(grapesRadio.prop('checked')).toBe(true);
      expect(appleRadio.prop('checked')).toBe(false);
    });
  });

  describe('disabled', () => {
    it('should disable radio button on sending disabled prop', () => {
      const radioGroup = mount(
        <RadioGroup name="fruits" selected="apple">
          <RadioButton id="apple" disabled>
            Apple
          </RadioButton>
          <RadioButton id="grapes">Grapes</RadioButton>
        </RadioGroup>,
      );

      expect(
        radioSelector(radioGroup)
          .getRadioInputById('apple')
          .prop('disabled'),
      ).toBe(true);
      expect(
        radioSelector(radioGroup)
          .getRadioInputById('grapes')
          .prop('disabled'),
      ).toBe(false);
    });

    it('should disable whole radio group on sending disabled prop', () => {
      const radioGroup = mount(
        <RadioGroup name="fruits" selected="apple" disabled>
          <RadioButton id="apple">Apple</RadioButton>
          <RadioButton id="grapes">Grapes</RadioButton>
        </RadioGroup>,
      );

      expect(
        radioSelector(radioGroup)
          .getRadioInputById('apple')
          .prop('disabled'),
      ).toBe(true);
      expect(
        radioSelector(radioGroup)
          .getRadioInputById('grapes')
          .prop('disabled'),
      ).toBe(true);
    });
  });

  describe('classname', () => {
    it('should send classname of radioGroup to every radioButton', () => {
      const radioGroup = mount(
        <RadioGroup name="fruits" className="groupClass">
          <RadioButton id="apple">Apple</RadioButton>
          <RadioButton id="grapes">Grapes</RadioButton>
        </RadioGroup>,
      );
      const [appleLabel, grapesLabel] = radioSelector(
        radioGroup,
      ).getLabelArray();

      expect(appleLabel.prop('className')).toBe('groupClass');
      expect(grapesLabel.prop('className')).toBe('groupClass');
    });

    it('should send classname of radioButton', () => {
      const radioGroup = mount(
        <RadioGroup name="fruits">
          <RadioButton id="apple" className="radioClass">
            Apple
          </RadioButton>
          <RadioButton id="grapes">Grapes</RadioButton>
        </RadioGroup>,
      );

      const [appleLabel, grapesLabel] = radioSelector(
        radioGroup,
      ).getLabelArray();

      expect(appleLabel.prop('className')).toBe('radioClass');
      expect(grapesLabel.prop('className')).toBeUndefined();
    });

    it('should merge group className with radio className', () => {
      const radioGroup = mount(
        <RadioGroup name="fruits" className="groupClass">
          <RadioButton id="apple" className="radioClass">
            Apple
          </RadioButton>
          <RadioButton id="grapes">Grapes</RadioButton>
        </RadioGroup>,
      );

      const [appleLabel, grapesLabel] = radioSelector(
        radioGroup,
      ).getLabelArray();

      expect(appleLabel.prop('className')).toBe('groupClass radioClass');
      expect(grapesLabel.prop('className')).toBe('groupClass');
    });
  });

  describe('labelPosition', () => {
    it('should render text after radio button by default', () => {
      const radioGroup = mount(
        <RadioGroup name="fruits">
          <RadioButton id="apple">
            <p>Apple</p>
          </RadioButton>
          <RadioButton id="grapes">
            <p>Grapes</p>
          </RadioButton>
        </RadioGroup>,
      );
      const [appleLabel, grapesLabel] = radioSelector(
        radioGroup,
      ).getLabelArray();

      expect(appleLabel.childAt(0).is('input')).toBe(true);
      expect(appleLabel.childAt(1).is('p')).toBe(true);

      expect(grapesLabel.childAt(0).is('input')).toBe(true);
      expect(grapesLabel.childAt(1).is('p')).toBe(true);
    });

    it('should change label position to every RadioButton when sending to RadioGroup', () => {
      const radioGroup = mount(
        <RadioGroup name="fruits" labelPosition="before">
          <RadioButton id="apple">
            <p>Apple</p>
          </RadioButton>
          <RadioButton id="grapes">
            <p>Grapes</p>
          </RadioButton>
        </RadioGroup>,
      );
      const [appleLabel, grapesLabel] = radioSelector(
        radioGroup,
      ).getLabelArray();

      expect(appleLabel.childAt(0).is('p')).toBe(true);
      expect(appleLabel.childAt(1).is('input')).toBe(true);

      expect(grapesLabel.childAt(0).is('p')).toBe(true);
      expect(grapesLabel.childAt(1).is('input')).toBe(true);
    });

    it('should change label position of RadioButton', () => {
      const radioGroup = mount(
        <RadioGroup name="fruits">
          <RadioButton id="apple">
            <p>Apple</p>
          </RadioButton>
          <RadioButton id="grapes" labelPosition="before">
            <p>Grapes</p>
          </RadioButton>
        </RadioGroup>,
      );

      const [appleLabel, grapesLabel] = radioSelector(
        radioGroup,
      ).getLabelArray();

      expect(appleLabel.childAt(0).is('input')).toBe(true);
      expect(appleLabel.childAt(1).is('p')).toBe(true);

      expect(grapesLabel.childAt(0).is('p')).toBe(true);
      expect(grapesLabel.childAt(1).is('input')).toBe(true);
    });
  });
});
