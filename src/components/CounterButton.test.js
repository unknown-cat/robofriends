import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it('expects to render CounterButton component', () => {
	const mockColor = 'red'
	expect(shallow(<CounterButton color={ mockColor }/>)).toMatchSnapshot()
})

it('correctly increment the counter', () => {
	const mockColor = 'red'
	const wrapper = shallow(<CounterButton color={ mockColor }/>)
	wrapper.find('[id="counter"]').simulate('click')
	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({ count: 2 })
	wrapper.find('[id="counter"]').simulate('click')
	expect(wrapper.state()).toEqual({ count: 3 })
	wrapper.find('[id="counter"]').simulate('keypress')
	expect(wrapper.state()).toEqual({ count: 3 })
})

it('expects that color props been red', () => {
	const mockColor = 'red'
	const wrapper = shallow(<CounterButton color={ mockColor }/>)
	expect(wrapper.props().color).toEqual('red' )
})