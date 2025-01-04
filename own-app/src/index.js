import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postData = [
  { rating: "Most popular", ratingStatus: "4.6 stars", comment: "I like this protein" },
  { rating: "Best value", ratingStatus: "2.0 stars", comment: "Guys, that's not a protein(" },
  { rating: "New release", ratingStatus: "5.0 stars", comment: "Amazing product!" },
  { rating: "Budget option", ratingStatus: "3.5 stars", comment: "Good for the price." },
];
let NewsData = [
  { id: 1, advantage: 'Protein Maxler' },
  { id: 2, advantage: 'Mezomorf crazy' },
  { id: 3, advantage: 'Creatine blue' },
  { id: 4, advantage: 'Gainer Bucked up' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} NewsData={NewsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
