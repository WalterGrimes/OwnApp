import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Whyus from './components/Whyus/Whyus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';
import FavProduct from './components/FavoriteProducts/FavProduct';

const App = ({ postData, NewsData }) => { // Добавляем NewsData в аргументы
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/news' element={<News NewsData={NewsData} />} /> {/* Исправлено */}
            <Route path='/profile' element={<Profile postData={postData} />} />
            <Route path='/whyus' element={<Whyus />} />
            <Route path='/favoriteproducts' element={<FavProduct />} /> 
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
