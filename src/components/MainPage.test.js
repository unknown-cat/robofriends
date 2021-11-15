import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		pending: false
	}

	wrapper = shallow(<MainPage { ...mockProps }/>)
})

it('renders mainPage', () => {
	expect(wrapper).toMatchSnapshot()
})

it('filters robots correctly', () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'john',
			email: 'john@gmail.com'
		}],
		searchField: 'john',
		pending: false
	}
	const wrapper2 = shallow(<MainPage {...mockProps2}/>)
	expect(wrapper2.instance().filterRobots()).toEqual([{
		id: 3,
		name: 'john',
		email: 'john@gmail.com'
	}])
})