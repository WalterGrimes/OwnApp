import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import questionsReducer from './questions-reducer';
import profileReducer from './profile-reducer';
import whyusReducer from './whyus-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import { thunk } from 'redux-thunk';

let reducers = combineReducers({
  profileProduct: profileReducer,
  whyus: whyusReducer,
  questionsPage: questionsReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: authReducer
});

const loggerMiddleware = store => next => action => {
  console.log('Dispatching action:', action);  // Логируем действие
  return next(action);  // Передаем действие дальше в middleware/редюсеры
};

let store = configureStore({
  reducer: reducers,  // ваши редюсеры
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(loggerMiddleware),  // Добавление loggerMiddleware
});


export default store;
