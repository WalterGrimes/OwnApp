import React from "react";
import { updateNewQuestionAC, addQuestionAC } from "../redux/questions-reducer";
import Whyus from "./Whyus";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { authRedirect } from "../../hoc/authRedirect";

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

// СНАЧАЛА создаём контейнер
const WhyusContainer = connect(mapStateToProps, mapDispatchToProps)(Whyus);

// ПОТОМ оборачиваем в HOC
const AuthRedirectComponent = authRedirect(WhyusContainer);

export default AuthRedirectComponent;
