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
  newsPage: {
    NewsData: [
      { id: 1, advantage: "Protein Maxler" },
      { id: 2, advantage: "Mezomorf crazy" },
      { id: 3, advantage: "Creatine blue" },
      { id: 4, advantage: "Gainer Bucked up" },
    ],
  s}
}

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
    this._state.newsPage = newsReducer(this._state.newsPage, action);
    this._state.newsPage.Whyus = whyusReducer(this._state.newsPage.Whyus, action);
    this._state.questionsPage = questionsReducer(this._state.questionsPage, action);
    this._callsubscriber(this._state); // Уведомляем подписчиков
  },
};

export default store;

