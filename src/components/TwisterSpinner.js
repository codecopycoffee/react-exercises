import React, { Component } from 'react';

export default class TwisterSpinner extends Component {
	constructor(props) {
		super(props)
		this.state = {
			bodyPlacementOptions: ["hand", "foot"],
			colorOptions: ["red", "blue", "yellow", "green"],
			sideOptions: ["Left", "Right"],
			currentPosition: ""
		}
	}

	handleChange = () => {
		// destructuring - could also use this.state.bodyPlacementOptions[0] to access "hand"
		let { bodyPlacementOptions, colorOptions, sideOptions } = this.state
		let bodyPosition = bodyPlacementOptions[Math.floor(Math.random() * 2)]
		let colorPosition = colorOptions[Math.floor(Math.random() * 4)]
		let sidePosition = sideOptions[Math.floor(Math.random() * 2)]
		let newPosition = `${ sidePosition } ${ bodyPosition } ${ colorPosition }`

		this.setState({ currentPosition: newPosition })
	}

	render() {
		let { currentPosition } = this.state
		return(
			<>
				<div className="spinnerContainer">
					<h1 className="twisterHeader">Twister Spinner</h1>
					<button className="twisterBtn" onClick={ this.handleChange }>Click me!</button>
					<div className="currentPosition">{ currentPosition }</div>
				</div>
			</>
		)
	}
}
