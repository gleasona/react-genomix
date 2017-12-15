import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import TurnAroundTimeProgress from './turn-around-time-progress'


describe('Test TurnAroundTimeProgress', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TurnAroundTimeProgress target={40} />, div)
  })

  it('if start is undefined, it should render Not started!', () => {
    const wrapper = shallow(<TurnAroundTimeProgress target={40} />)
    expect(wrapper.find('p')).toHaveLength(1)
    expect(wrapper.find('p').props().children).toEqual('Not started!')
  })

  it('if start is defined, it should render a Progress component', () => {
    const wrapper = shallow(<TurnAroundTimeProgress target={40} start="12-18-1987" />)
    expect(wrapper.find('PopupContent')).toHaveLength(1)
  })

  it('if start is defined but signout is not, it should render a Progress component w/o signout date', () => {
    const wrapper = shallow(<TurnAroundTimeProgress target={40} start="12-18-1987" />)
    expect(wrapper.find('PopupContent').props().children).toContain("N/A")
  })

  it('if start and signout are defined, it should render a Progress component w/o signout date', () => {
    const wrapper = shallow(<TurnAroundTimeProgress target={40} start="12-18-1987" signout="12-20-2017" />)
    expect(wrapper.find('PopupContent').props().children).toContain("2017/12/20")
  })
})
