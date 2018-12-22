import React, { Component } from "react";
import { Button } from "react-bootstrap";
class Start extends Component {
  render() {
    const data = this.props.quiz["quizzes"];

    return (
      <div>
        <h1 style={{ margin: "50px" }}>Choose a Quiz!</h1>
        {/* renders list of quizzes from quiz.json */}
        {data.map((title, key) => {
          return (
            <Button
              style={{
                minWidth: 200,
                marginTop: 200,
                marginRight: 50,
                marginLeft: 50,
                minHeight: 100
              }}
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
