import React, { Component } from "react";
import Start from "./views/Start";
import Quiz from "./views/Quiz";
import Result from "./views/Result";
import { Well } from "react-bootstrap";

// json data
const quiz = require("./quiz.json");

const bgStyle = {
  maxWidth: "50%",
  height: 600,

  alignContent: "center",
  textAlign: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 100
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quizNumber: false, viewResult: false, currentScore: 0 };
    this.quizHandler = this.quizHandler.bind(this);
  }
  // listens for the user's quiz selection
  quizHandler(key) {
    this.setState({ quizNumber: key });
    console.log("quiznumber has changed to key #", key);
  }
  //switch between start/result/quiz view
  viewHandler = () => {
    this.setState({ viewResult: true });
  };
  // keeps track of user's score
  scoreHandler = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };
  // reset
  tryAgain = () => {
    this.setState({ viewResult: false, quizNumber: false });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <Well style={bgStyle}>
            {/* render selection then when the user selects a quiz, it 
            renders the quiz, and renders result when there is a result */}

            {!this.state.quizNumber ? (
              <Start
                quiz={quiz}
                quizNumber={this.state.quizNumber}
                quizHandler={this.quizHandler}
              />
            ) : this.state.viewResult ? (
              <Result
                currentScore={this.state.currentScore}
                back={this.tryAgain}
              />
            ) : (
              <Quiz
                done={this.viewHandler}
                quizNumber={this.state.quizNumber.key}
                scoreHandler={this.scoreHandler}
                currentScore={this.state.currentScore}
              />
            )}
          </Well>
        </div>
      </div>
    );
  }
}

export default App;
