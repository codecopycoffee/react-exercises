import React, { Component } from 'react';
import offSwitch from '../offSwitch.png';
import onSwitch from '../onSwitch.png';

export default class Light extends Component {
	constructor(props) {
		super(props)
		this.state = {
			position: "off",
			color: "white",
			shadow: "0px 0px 25px 5px white",
			displayOn: "none",
			displayOff: "inline-block"
		}
	}

	switch = () => {
		let { position, color, shadow, displayOn, displayOff, removal } = this.state

		if (position === "off") {
			position = "on"
			color = "yellow"
			shadow = "0px 0px 25px 5px yellow"
			displayOff = "none"
			displayOn = "inline-block"
		} else if (position === "on") {
			position = "off"
			color = "white"
			shadow = "0px 0px 25px 5px white"
			displayOff = "inline-block"
			displayOn = "none"
		}

		this.setState({position, color, shadow, displayOn, displayOff})
	}

  render() {
    let styles = {
      background: this.state.color,
      boxShadow: this.state.shadow
    }

    let styleOn = {
      display: this.state.displayOn,
    }

    let styleOff = {
      display: this.state.displayOff,
    }

    return (
      <div class="lightContainer">
        <h1 className="lightTitle">Light Switch: Click Switch to Toggle Light</h1>
        <img className="lightSwitch" src={offSwitch} onClick = {this.switch} style = {styleOff} alt="off switch" />
        <img className="lightSwitch" src={onSwitch} onClick = {this.switch} style = {styleOn} alt="on switch" />
        <div className="box" style = {styles}>
          <h1>{this.state.position}</h1>
        </div>
      </div>
    )
  }
}
