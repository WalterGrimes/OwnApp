import profileReducer from "./profile-reducer"
import whyusReducer from "./whyus-reducer"
import newsReducer from "./news-reducer"
import questionsReducer from "./questions-reducer"

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
    this._state.newsPage.Whyus = whyusReducer(this._state.newsPage, action);
    this._state.questionsPage = questionsReducer(this._state.questionsPage, action);
    this._callsubscriber(this._state); // Уведомляем подписчиков
  },
};

export default store;

