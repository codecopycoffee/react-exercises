import React from 'react';
import { Component } from 'react';
import './App.css';
import TwisterSpinner from './components/TwisterSpinner';
import ColorBox from './components/ColorBox';
import Light from './components/Light';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			colorBoxArray: [<ColorBox />],
			lightArray: [<Light />]
		}
	}

	addBox = () => {
		let {colorBoxArray} = this.state
		colorBoxArray.push(<ColorBox />)
		this.setState({colorBoxArray: colorBoxArray})
	}

	removeBox = () => {
		let {colorBoxArray} = this.state
		colorBoxArray.pop()
		this.setState({colorBoxArray: colorBoxArray})
	}

	addLight = () => {
    let {lightArray} = this.state
    lightArray.push(<Light />)
    this.setState({lightArray: lightArray})
  }

  removeLight = () => {
    let {lightArray} = this.state
    lightArray.pop()
    this.setState({lightArray: lightArray})
  }

	render() {
		return(
			<>
				<TwisterSpinner />
				<h2 className="heading">Add or Remove a Color Box:</h2>
				<button className="addremove" onClick={this.addBox}>+</button>
				<button className="addremove" onClick={this.removeBox}>-</button>
				<div>{this.state.colorBoxArray}</div>
				<h2 className="heading">Add or Remove a Light Switch:</h2>
				<button className="addremove" onClick={this.addLight}>+</button>
				<button className="addremove" onClick={this.removeLight}>-</button>
				<div>{this.state.lightArray}</div>
			</>
		)
	}
}

export default App
