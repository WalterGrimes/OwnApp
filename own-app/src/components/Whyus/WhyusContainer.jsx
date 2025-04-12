import React from "react";
import { updateNewQuestionAC, addQuestionAC } from "../redux/questions-reducer";
import Whyus from "./Whyus";
import { connect } from "react-redux";



let mapStateToProps = (state) => {
  return {
    advantages: state.whyus?.Whyus, 
    reviews: state.whyus?.reviews,
    newQuestionText: state.questionsPage?.newQuestionText || "",
    isAuth:state.auth.isAuth
  };
};

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
