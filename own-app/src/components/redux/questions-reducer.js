const ADD_QUESTION = "ADD_QUESTION";
const UPDATE_NEW_QUESTION_TEXT = "UPDATE_NEW_QUESTION_TEXT";

const initialState = {
  questionsPage: {
    newQuestionText: "",
    questions: [],
  },
};


const questionsReducer = (state = initialState.questionsPage, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      const text = state.newQuestionText.trim();
      if (text) {
        return {
          ...state,
          questions: [
            ...state.questions,
            { id: state.questions.length + 1, question: text },
          ],
          newQuestionText: "",
        };
      }
      return state;
    case UPDATE_NEW_QUESTION_TEXT:
      return { ...state, newQuestionText: action.newText };
    default:
      return state;
  }
};

export const addQuestionAC = () => ({ type: ADD_QUESTION });
export const updateNewQuestionAC = (newText) => ({
  type: UPDATE_NEW_QUESTION_TEXT,
  newText,
});

export default questionsReducer;
