import React, { Component } from "react";
import CounterButton from "./counterButton";

class Header extends Component {
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return true
	// }

	render() {
		console.log('Header')
		return (
			<div>
				<h1 className='f1'>robofriends</h1>
				<CounterButton color={ 'red' }/>
			</div>
		)
	}
}

export default Header