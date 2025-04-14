import React from "react";
import { updateNewQuestionAC, addQuestionAC } from "../redux/questions-reducer";
import Whyus from "./Whyus";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { authRedirect } from "../../hoc/authRedirect";
import { compose } from "redux"; // Импортируем compose из redux

let mapStateToProps = (state) => {
  return {
    advantages: state.whyus?.Whyus,
    reviews: state.whyus?.reviews,
    newQuestionText: state.questionsPage?.newQuestionText || "",
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewQuestionAC: (text) => {
      dispatch(updateNewQuestionAC(text));
    },
    onSendQuestion: () => {
      dispatch(addQuestionAC());
    }
  };
};

export default compose(
  authRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Whyus);
