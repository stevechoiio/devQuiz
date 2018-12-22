import React, { Component } from "react";
import Options from "../components/Options";
const QUIZ = require("../quiz.json");

class Quiz extends Component {
  state = { questionNumber: 0 };
  render() {
    {
      console.log("your current score:", this.props.currentScore);
    }
    let quiz = QUIZ["quizzes"][this.props.quizNumber];
    console.log("quiz is:", quiz["title"]);
    return (
      <div>
        <h1>{quiz["title"]}</h1>
        <Options
          currentScore={this.props.currentScore}
          scoreHandler={this.props.scoreHandler}
          done={this.props.done}
          quiz={quiz}
        />
      </div>
    );
  }
}

export default Quiz;

// // To Do: render result page
// //        button color back to original state
// //         ?return button?
// //         css change

// import React, { Component } from "react";
// import Option from "./Option";
// class Quiz extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       questionNumber: 0
//     };
//     this.answerVerifier = this.answerVerifier.bind(this);
//   }

// //   answerVerifier(key) {
// //     // check to see if the response is correct, if correct, increment score by 1
// //     if (
// //       this.props.quiz["quizzes"][this.state.quizNumber]["questions"][
// //         this.state.questionNumber
// //       ]["answers"][key]["value"]
// //     ) {
// //       this.setState({ score: this.state.score + 1 });
// //     }

// //     // 2 second delay before the next questions
// //     setTimeout(() => {
// //       this.setState({
// //         questionNumber: this.state.questionNumber + 1
// //       });
// //     }, 2000);
// //   }

// //   render() {
// //     if (
// //       this.props.quiz["quizzes"][this.state.quizNumber]["questions"].length >
// //       this.state.questionNumber
// //     ) {
// //       this.setState({
// //         answerOptions: this.props.quiz["quizzes"][this.state.quizNumber][
// //           "questions"
// //         ]
// //       });
// //     }

// //     return (
// //       <div>
// //         {/* {console.log(
// //           "current number of questions? ",
// //           this.props.quiz["quizzes"][this.state.quizNumber]["questions"].length
// //         )}

// //         {this.props.quiz["quizzes"][this.state.quizNumber]["questions"].length <
// //         this.state.questionNumber
// //           ? console.log("more questions left? ", true)
// //           : console.log("more questions left? ", false)}

// //         {this.props.quiz["quizzes"][this.state.quizNumber]["title"]}
// //         {console.log("first option", this.state.answerOptions[0]["content"])} */}
// //         <h1>
// //           {
// //             this.props.quiz["quizzes"][this.state.quizNumber]["questions"][
// //               this.state.questionNumber
// //             ]["question"]
// //           }
// //         </h1>
// //         {this.state.answerOptions.map((option, index) => {
// //           return (
// //             // <Button
// //             //   bsSize="large"
// //             //   key={key}
// //             //   onClick={() => this.answerVerifier(key)}
// //             // >
// //             //   {option["content"]}
// //             // </Button>
// //             <Option
// //               index={index}
// //               onClickHandler={this.answerVerifier}
// //               answer={option["value"]}
// //             >
// //               {option["content"]}
// //             </Option>
// //           );
// //         })}
// //         <h1>{this.state.score}</h1>
// //       </div>
// //     );
// //   }
// // }

// export default Quiz;
