import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Result extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginTop: 150 }}>
        <h3>
          Your final score is: <br />
          <h1>{this.props.currentScore}</h1>
        </h3>
        {this.props.currentScore > 1 ? (
          <h1>
            <i style={{ size: 50 }} className="fas fa-thumbs-up" />
            <br />
            Pass!
          </h1>
        ) : (
          <h1>
            <i style={{ size: 50 }} className="fas fa-thumbs-down" />
            <br />
            Fail
          </h1>
        )}
        <Button
          style={{ margin: 100 }}
          bsSize="large"
          bsStyle="info"
          onClick={this.props.back}
        >
          Try again?
        </Button>
      </div>
    );
  }
}

export default Result;
