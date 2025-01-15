import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addProduct, addQuestion, updateNewQuestionText } from './components/redux/state';
import state from './components/redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  
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

export default rerenderEntireTree;
