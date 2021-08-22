import React, { Component } from 'react';

export default class ColorBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			color: "white",
			shadow: "0px 0px 15px 5px white",
			name: "white"
		}
	}

	colorize = () => {
		let { color, shadow, name } = this.state
		let colors = ["Crimson", "Coral", "yellow", "Chartreuse", "Aqua", "DarkOrchid", "DeepPink"]
		let shadows = ["0px 0px 15px 5px crimson", "0px 0px 15px 5px Coral", "0px 0px 15px 5px yellow", "0px 0px 15px 5px Chartreuse", "0px 0px 15px 5px Aqua", "0px 0px 15px 5px DarkOrchid", "0px 0px 15px 5px DeepPink"]
		let names = ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
		let num = Math.floor(Math.random() * colors.length)
		let newColor = colors[num]
		let newShadow = shadows[num]
		let newName = names[num]
		this.setState({color: newColor})
		this.setState({shadow: newShadow})
		this.setState({name: newName})
	}

	resetColor = () => {
		let { color, shadow, name } = this.state
		this.setState({color: "white"})
		this.setState({shadow: "0px 0px 15px 5px white"})
		this.setState({name: "white"})
	}

	render() {
		let styling = {
			background: this.state.color,
			boxShadow: this.state.shadow
		}

		console.log(styling);

		return  (
			<div className="colorContainer">
				<h1 className="colorTitle">Color Box: Click to Change Color</h1>
				<div className="colorBox" onClick={this.colorize} style={styling}>
					<h2 className="colorName">{this.state.name}</h2>
				</div>
				<button className="resetColor" onClick={this.resetColor}>Reset Color</button>
			</div>
		)
	}
}
