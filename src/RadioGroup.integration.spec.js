/* eslint-env jest */
import React from 'react'
import { mount } from 'enzyme'
import { RadioGroup, RadioButton } from '../'

describe('<RadioGroup />', () => {
  let radioGroup
  let onChangeCb

  beforeEach(() => {
    onChangeCb = jest.fn()
    radioGroup = mount(
      <RadioGroup name='fruits' selected='apple' onChange={onChangeCb}>
        <RadioButton id='apple' /> Apple <br />
        <RadioButton id='grapes' /> Grapes<br />
        <RadioButton id='orange' /> Orange<br />
      </RadioGroup>
    )
  })

  it('should render children', () => {
    const children = radioGroup.find(RadioButton)
    expect(children.exists()).toBe(true)
    expect(children.text()).toBe('Children')
  })
})
