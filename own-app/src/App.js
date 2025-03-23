import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import FavProduct from './components/FavoriteProducts/FavProduct';
import WhyusContainer from './components/Whyus/WhyusContainer';
import { connect } from 'react-redux';
import store from "./components/redux/redux-store";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Header/LoginPage/Login';


const App = (props) => {
  console.log("Текущий state в Redux:", store.getState());


  return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
          { <Route path='/login'
              element={<LoginPage/>} /> }

            <Route path='/news'
              element={<News NewsData={props.newsPage.NewsData} />} />

            <Route path='/profile/:userId?'
              element={<ProfileContainer />} />

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
