import React from "react";
import "./clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <p className="clock">{this.state.date.toLocaleTimeString()}</p>
      </>
    );
  }
}

export default Clock;
