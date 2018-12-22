import React, { Component } from "react";
import Option from "./Option";
import { ProgressBar } from "react-bootstrap";

const progressBarStyle = {
  maxWidth: "500px",
  marginTop: 50,
  marginLeft: "auto",
  marginRight: "auto"
};

class Options extends Component {
  state = { questionPage: 0 };
  questionPageHandler = () => {
    //check to see if there are any questions left, if not, then shows result page
    if (this.state.questionPage == this.props.quiz["questions"].length - 1) {
      this.props.done();
    }
    this.setState({ questionPage: this.state.questionPage + 1 });
    console.log("clicked!!");
  };
  render() {
    let now = 100 * ((this.state.questionPage + 1) / 4);
    let questionTitle = this.props.quiz["questions"][this.state.questionPage][
      "question"
    ];
    let optionArray = this.props.quiz["questions"][this.state.questionPage][
      "answers"
    ];
    return (
      <div>
        <h3 style={{ marginBottom: 50 }}>{questionTitle}</h3>

        {optionArray.map((option, index) => {
          return (
            <Option
              scoreHandler={this.props.scoreHandler}
              onClick={this.questionPageHandler}
              key={index}
              answer={option["value"]}
            >
              {option["content"]}
            </Option>
          );
        })}
        <ProgressBar style={progressBarStyle} now={now} />
        <h5>Your current score: {this.props.currentScore}</h5>
      </div>
    );
  }
}

export default Options;
