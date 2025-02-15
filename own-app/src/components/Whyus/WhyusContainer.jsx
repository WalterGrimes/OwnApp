import React from "react";
import { updateNewQuestionAC, addQuestionAC } from "../redux/questions-reducer";
import Whyus from "./Whyus";

const WhyusContainer = (props) => {


//  const onSendQuestion = () => {
//   if (!props.addQuestionAC) {
//     console.error("Ошибка: addQuestionAC не передан в Whyus");
//     return;
//   }
//   if (props.newQuestionText.trim()) {
//     props.addQuestionAC();
//   }
// };


//   const onQuestionChange = (event,value) => { // Передаём event
//     let action = updateNewQuestionAC(event.target.value);
//     props.store.dispatch(action);
  // };

  return (
    <Whyus 
      updateNewQuestionAC={(text) => {
        props.store.dispatch(updateNewQuestionAC(text));
      }} 
      onSendQuestion={() => {
        if (props.newQuestionText.trim()) {
          props.store.dispatch(addQuestionAC());
        }
      }}
      advantages={props.advantages} 
      reviews={props.reviews} 
      newQuestionText={props.newQuestionText}
    />
  );
};
  

export default WhyusContainer;
