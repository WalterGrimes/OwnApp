import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Whyus from './components/Whyus/Whyus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import FavProduct from './components/FavoriteProducts/FavProduct';
import WhyusContainer from './components/Whyus/WhyusContainer';
import { connect } from 'react-redux';
import store from "./components/redux/redux-store";
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {
  console.log("Текущий state в Redux:", store.getState());


  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/news'
              element={<News NewsData={props.newsPage.NewsData} />} />

            <Route path='/profile'
              element={<Profile />} />

            <Route path='/whyus'
              element={<WhyusContainer />} />

            <Route path='/favoriteproducts' element={<FavProduct />} />
            <Route path='/settings' element={<div>Settings Page</div>} />
            <Route path='/music' element={<div>Music Page</div>} />
             
            <Route path='/users' 
            element={<UsersContainer/>} />
          </Routes>
        </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  console.log("state в mapStateToProps:", state);
  return {
    newsPage: state.newsPage,
  };
};

export default connect(mapStateToProps)(App);
