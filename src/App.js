import React from "react";
import Lightbulb from "./components/LightBulb";

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLightOn: false
    };
  }
  handleClick = () => {
    this.setState({ isLightOn: !this.state.isLightOn });
  };
  render() {
    const url = this.state.isLightOn
      ? "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
      : "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png";
    return (
      <div className="content">
        <h1>Turn the light on and off by clicking the bulb!</h1>
        <Lightbulb src={url} func={this.handleClick} />
      </div>
    );
  }
}

export default App;
