import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import CheckboxCell from './checkbox-cell'


describe('Test CheckboxCell', () => {
  it('CheckboxCell renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CheckboxCell rowIndex={1} onChange={jest.fn()} />, div)
  })

  it('CheckboxCell initial props are set correctly', () => {
    const wrapper = shallow(<CheckboxCell rowIndex={1} onChange={jest.fn()} />)
    expect(wrapper.instance().props.rowIndex).toEqual(1)
    expect(wrapper.instance().props.as).toEqual('div')
  })

  it('CheckboxCell initial props are set correctly as td', () => {
    const wrapper = shallow(<CheckboxCell as="td" rowIndex={1} onChange={jest.fn()} />)
    expect(wrapper.instance().props.rowIndex).toEqual(1)
    expect(wrapper.instance().props.as).toEqual('td')
  })

  it('CheckboxCell onChange is called correctly', () => {
    const onChange = jest.fn()
    const wrapper = shallow(<CheckboxCell rowIndex={1} onChange={onChange} />)
    wrapper.find('Checkbox').simulate('change')
    expect(onChange).toHaveBeenCalledWith(1)
  })
})
