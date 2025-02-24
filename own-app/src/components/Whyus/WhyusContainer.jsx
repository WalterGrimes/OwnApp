import React from "react";
import { updateNewQuestionAC, addQuestionAC } from "../redux/questions-reducer";
import Whyus from "./Whyus";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  console.log("questionsPage в store:", state.questionsPage);

  return {
    advantages: state.newsPage.Whyus,
    reviews: state.newsPage.reviews,
    newQuestionText: state.questionsPage.newQuestionText

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewQuestionAC: (text) => {
      dispatch(updateNewQuestionAC(text));
    },
    onSendQuestion: () => {  // УБРАЛ text
      dispatch(addQuestionAC());
    }
  };
};


const WhyusContainer = connect(mapStateToProps,mapDispatchToProps)(Whyus);


export default WhyusContainer;
