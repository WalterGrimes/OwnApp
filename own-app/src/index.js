import './index.css';
import store from './components/redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Функция рендера приложения
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App
        productData={store.getState().profileProduct.productData} // Используем getState
        NewsData={store.getState().NewProducts} // Используем getState
        Questions={store.getState().Questions} // Передаем секцию вопросов
        dispatch={store.dispatch.bind(store)} // Передаем dispatch
      />
    </React.StrictMode>
  );
};

// Изначальный рендер
rerenderEntireTree();

// Подписка на изменения состояния
store.subscribe(rerenderEntireTree);

// Включаем измерение производительности
reportWebVitals();
