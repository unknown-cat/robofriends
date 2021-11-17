import * as actions from './actions.js'
import {
	CHANGE_SEARCHFIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware])

describe("searchField", () => {
	it('should create an action to search robots', () => {
		const text = 'i search'
		const expectedAction = {
			type: CHANGE_SEARCHFIELD,
			payload: text
		}
		expect(actions.setSearchField(text)).toEqual(expectedAction)
	})
})

describe("requestRobots", () => {
	it('handles requesting robots API', () => {
		const store = mockStore()
		store.dispatch(actions.requestRobots())
		const action = store.getActions()
		const expectedAction = {
			type: REQUEST_ROBOTS_PENDING,
		}
		expect(action[0]).toEqual(expectedAction)
	})
})