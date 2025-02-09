import profileReducer from "./profile-reducer"
import whyusReducer from "./whyus-reducer"
import newsReducer from "./news-reducer"
import questionsReducer from "./questions-reducer"

// Инициализация состояния
const initialState = {
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
};

// Создание store
// state.js
const store = {
  _state: initialState,

  _callsubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callsubscriber = observer;
  },

  dispatch(action) {
    this._state.profileProduct = profileReducer(this._state.profileProduct, action);
    this._state.NewProducts = newsReducer(this._state.NewProducts, action);
    this._state.whyus = whyusReducer(this._state.whyus, action);
    this._state.Questions = questionsReducer(this._state.Questions, action);
    this._callsubscriber(this._state); // Уведомляем подписчиков
  },
};

export default store;

