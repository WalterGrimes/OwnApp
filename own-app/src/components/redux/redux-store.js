import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import questionsReducer from './questions-reducer';
import profileReducer from './profile-reducer';
import whyusReducer from './whyus-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

let reducers = combineReducers({
  profileProduct: profileReducer,
  whyus: whyusReducer,
  questionsPage: questionsReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = configureStore({
  reducer: reducers, // reducers передается корректно
});

export default store;
