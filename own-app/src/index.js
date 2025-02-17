import './index.css';
import store from './components/redux/store';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from './components/redux/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Функция рендера приложения
let rerenderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          productData={store.getState().profileProduct.productData}
          NewsData={store.getState().NewProducts}
          Questions={store.getState().Questions}
          dispatch={store.dispatch.bind(store)}
        />
      </Provider>
    </React.StrictMode>
  );
};

// Изначальный рендер
rerenderEntireTree(store);

// Подписка на изменения состояния
store.subscribe(()=>rerenderEntireTree(store));

// Включаем измерение производительности
reportWebVitals();
