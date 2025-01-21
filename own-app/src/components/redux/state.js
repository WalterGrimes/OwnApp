const ADD_QUESTION = 'ADD-QUESTION'
const UPDATE_NEW_QUESTION_TEXT = 'UPDATE-NEW-QUESTION-TEXT'
const ADD_PRODUCT = 'ADD-PRODUCT'

let store = {
  _state: {
    profileProduct: {
      productData: [
        { rating: "Most popular", ratingStatus: "4.6 stars", comment: "I like this protein" },
        { rating: "Best value", ratingStatus: "2.0 stars", comment: "Guys, that's not a protein(" },
        { rating: "New release", ratingStatus: "5.0 stars", comment: "Amazing product!" },
        { rating: "Budget option", ratingStatus: "3.5 stars", comment: "Good for the price." },
      ],
    },
    NewProducts: {
      NewsData: [
        { id: 1, advantage: "Protein Maxler" },
        { id: 2, advantage: "Mezomorf crazy" },
        { id: 3, advantage: "Creatine blue" },
        { id: 4, advantage: "Gainer Bucked up" },
      ],
      Whyus: ["First Advantage", "Second Advantage", "Third Advantage", "Fourth Advantage"],
      reviews: [
        "Top Quality Products – Guaranteed 100% original and effective.",
        "Endorsed by Celebrities – Trusted by Dwayne 'The Rock' Johnson, Chris Hemsworth, and other top athletes.",
        "Innovative Solutions – Cutting-edge designs and formulas.",
        "Nationwide Leader – Recognized as the best in the country.",
      ],
    },
    Questions: {
      newQuestionText: "",
      questions: [],
    },
  },

  _callsubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callsubscriber = observer;
  },

  addProduct(product) { // Вернул addPost
    const newPost = {
      id: this._state.profileProduct.productData.length + 1,
      rating: "Unrated",
      ratingStatus: "No stars yet",
      comment: product, // Используем переданный product как комментарий
    };
    this._state.profileProduct.productData.push(newPost);
    this._callsubscriber(this._state); // Уведомляем подписчиков
  },

  addQuestion() {
    const text = this._state.NewProducts.newQuestionText.trim();
    if (text) {
      const newQuestion = {
        id: this._state.NewProducts.questions.length + 1,
        question: text,
      };
      // Пока не добавляем вопрос в массив
    }
  },

  updateNewQuestionText(newText) {
    this._state.Questions.newQuestionText = newText; // Исправил на правильный путь
    this._callsubscriber(this._state); // Добавляем уведомление подписчиков
  },



  dispatch(action) {
    switch (action.type) {
      case ADD_PRODUCT: {
        const newProduct = {
          id: this._state.profileProduct.productData.length + 1,
          rating: "Unrated",
          ratingStatus: "No stars yet",
          comment: action.product, // Используем action.product
        };
        this._state.profileProduct.productData.push(newProduct);
        this._callsubscriber(this._state); // Уведомляем подписчиков
        break;
      }

      case  ADD_QUESTION: {
        const text = this._state.Questions.newQuestionText.trim();
        if (text) {
          const newQuestion = {
            id: this._state.Questions.questions.length + 1,
            question: text,
          };
          this._state.Questions.questions.push(newQuestion);
          this._state.Questions.newQuestionText = ""; // Очищаем поле после добавления
          this._callsubscriber(this._state);
        }
        break;
      }

      case UPDATE_NEW_QUESTION_TEXT: {
        this._state.Questions.newQuestionText = action.newText;
        this._callsubscriber(this._state);
        break;
      }

      default:
        console.warn(`Unknown action type: ${action.type}`);
    }
  },
}

export const addQuestionAC = () => {                     
  return{
   type: ADD_QUESTION
  }
}

export const updateNewQuestionAC = (text) => {
 return{
   type: UPDATE_NEW_QUESTION_TEXT, newText: text
 }
}


export default store;
