import './index.css';
import state, { subscribe } from './components/redux/state';
import reportWebVitals from './reportWebVitals';   
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addProduct, addQuestion, updateNewQuestionText } from './components/redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  
  root.render(
    <React.StrictMode>
      <App
        productData={state.profileProduct.productData}
        NewsData={state.NewProducts} // Передаём весь объект NewProducts
        newQuestionText={state.NewProducts.newQuestionText}
        addQuestion={addQuestion}
        updateNewQuestionText={updateNewQuestionText}
        addProduct={addProduct}
      />

    </React.StrictMode>
  );
};


rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();  // Теперь это не вызывает ошибку
