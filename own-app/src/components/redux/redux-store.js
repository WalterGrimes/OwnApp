import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import questionsReducer from './questions-reducer';
import profileReducer from './profile-reducer';
import whyusReducer from './whyus-reducer';
import newsReducer from './news-reducer';

let reducers = combineReducers({
  profileProductPage: profileReducer,
  whyus: whyusReducer,
  questionsPage: questionsReducer,
  newsPage: newsReducer,
});

let store = configureStore({
  reducer: reducers, // reducers передается корректно
});

export default store;
