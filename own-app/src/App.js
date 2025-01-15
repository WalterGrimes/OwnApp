import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Whyus from './components/Whyus/Whyus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import FavProduct from './components/FavoriteProducts/FavProduct';

const App = (props) => {
  console.log("NewsData (App):", props.NewsData);


  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route
              path='/news'
              element={<News NewsData={props.NewsData} />}
            />
            <Route
              path='/profile'
              element={
                <Profile
                  postData={props.productData}
                  addProduct={props.addProduct}
                />
              }
            />
            <Route
              path='/whyus'
              element={
                <Whyus
                  advantages={props.NewsData.Whyus}
                  reviews={props.NewsData.reviews}
                  addQuestion={props.addQuestion}
                  newQuestionText={props.newQuestionText}
                  updateNewQuestionText={props.updateNewQuestionText}
                />
              }
            />
            <Route path='/favoriteproducts' element={<FavProduct />} />
            <Route path='/settings' element={<div>Settings Page</div>} />
            <Route path='/music' element={<div>Music Page</div>} />
          </Routes>
            
        </div>
      </div>
    </BrowserRouter>
  );
};



export default App;
