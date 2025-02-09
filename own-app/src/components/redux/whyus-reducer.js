// Action types
export const ADD_QUESTION = "ADD-QUESTION";
export const UPDATE_NEW_QUESTION_TEXT = "UPDATE-NEW-QUESTION-TEXT";

// Initial state
const initialState = {
  Questions: {
    newQuestionText: "",
    questions: [],
  },
};

// Reducer
const questionsReducer = (state = initialState, action) => {
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
