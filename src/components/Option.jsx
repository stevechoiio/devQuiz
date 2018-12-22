import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "default"
    };
  }
  stateRefresh = () => {
    this.setState({ color: "default" });
  };
  clickHandler = e => {
    e.preventDefault();
    if (this.props.answer) {
      this.setState({ color: "success" });
      this.props.scoreHandler();
    } else {
      this.setState({ color: "danger" });
    }
    setTimeout(this.stateRefresh, 2000);
    setTimeout(this.props.onClick, 2000);
  };
  render() {
    return (
      <div>
        <Button
          style={{
            minWidth: 300,

            padding: "10px",
            margin: "5px"
          }}
          bsStyle={this.state.color}
          onClick={this.clickHandler}
        >
          {this.props.children}
        </Button>
      </div>
    );
  }
}

export default Option;
