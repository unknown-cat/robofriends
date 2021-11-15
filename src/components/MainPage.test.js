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