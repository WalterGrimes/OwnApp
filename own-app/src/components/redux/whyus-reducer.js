// Action types
export const ADD_QUESTION = "ADD-QUESTION";
export const UPDATE_NEW_QUESTION_TEXT = "UPDATE-NEW-QUESTION-TEXT";

// Initial state
const initialState = {
  Whyus: ["First Advantage", "Second Advantage", "Third Advantage", "Fourth Advantage"],
  reviews: [
    "Top Quality Products – Guaranteed 100% original and effective.",
    "Endorsed by Celebrities – Trusted by Dwayne 'The Rock' Johnson, Chris Hemsworth, and other top athletes.",
    "Innovative Solutions – Cutting-edge designs and formulas.",
    "Nationwide Leader – Recognized as the best in the country."
  ],
  Questions: {
    newQuestionText: "",
    questions: []
  }
};


// Reducer
const questionsReducer = (state = initialState, action) => {

  let stateCopy = {
    ...state,
    reviews: state.reviews,
  }

  switch (action.type) {
    case ADD_QUESTION: {
      const text = state.Questions.newQuestionText.trim();

      if (text) {
        const newQuestion = {
          id: state.Questions.questions.length + 1,
          question: text,
        };
        return {
          ...state,
          Questions: {
            ...state.Questions,
            questions: [...state.Questions.questions, newQuestion],
            newQuestionText: "",
          },
        };
      }
      return state;
    }

    case UPDATE_NEW_QUESTION_TEXT: {
      return {
        ...state,
        Questions: {
          ...state.Questions,
          newQuestionText: action.newText,
        },
      };
    }

    default:
      return state; // Возвращаем состояние по умолчанию, если действие не найдено
  }
};

// Action creators
export const addQuestionAC = () => ({ type: ADD_QUESTION });
export const updateNewQuestionAC = (text) => ({ type: UPDATE_NEW_QUESTION_TEXT, newText: text });

// Default export
export default questionsReducer;
