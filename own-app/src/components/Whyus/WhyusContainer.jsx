import React from "react";
import { updateNewQuestionAC, addQuestionAC } from "../redux/questions-reducer";
import Whyus from "./Whyus";
import StoreContext from "../redux/StoreContext";

const WhyusContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const newQuestionText = state.Questions.newQuestionText;
        const advantages = state.NewProducts.Whyus; // Доступ к Whyus из NewProducts
        const reviews = state.NewProducts.reviews; // Доступ к reviews из NewProducts

        console.log('Advantages in container:', advantages); // Логируем advantages
        console.log('Reviews in container:', reviews); // Логируем reviews

        const onSendQuestion = () => {
          if (newQuestionText && typeof newQuestionText === 'string' && newQuestionText.trim()) {
            store.dispatch(addQuestionAC());
          } else {
            console.log("Invalid question text:", newQuestionText);
          }
        };

        const onQuestionChange = (text) => {
          store.dispatch(updateNewQuestionAC(text));
        };

        return (
          <Whyus
            updateNewQuestionAC={onQuestionChange}
            onSendQuestion={onSendQuestion}
            advantages={advantages}
            reviews={reviews}
            newQuestionText={newQuestionText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};


export default WhyusContainer;
