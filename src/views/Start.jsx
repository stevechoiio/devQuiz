import React, { Component } from "react";
import { Button } from "react-bootstrap";

const buttonStyle = {
  minWidth: 200,
  marginTop: 100,
  marginRight: 50,
  marginLeft: 50,
  minHeight: 100
};

class Start extends Component {
  render() {
    const quizList = this.props.quiz["quizzes"];

    return (
      <div>
        <span style={{ fontSize: "5em" }}>
          <i className={"fas fa-question"} />
        </span>
        <h1 style={{ margin: "50px" }}>Answer a Quiz!</h1>

        {/* renders list of quizzes from quiz.json */}
        {quizList.map((title, key) => {
          return (
            <Button
              style={buttonStyle}
              bsStyle="primary"
              bsSize="large"
              key={key}
              onClick={() => this.props.quizHandler({ key })}
            >
              <h4>{title["title"]}</h4>
            </Button>
          );
        })}
      </div>
    );
  }
}

export default Start;
