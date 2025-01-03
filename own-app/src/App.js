import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Whyus from './components/Whyus/Whyus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            {/* <Route path='/messages' element={<Navbar/>}/> */}
            <Route path='/profile' element={<Profile />} />
            <Route path='/whyus' element={<Whyus />} />
            <Route path='/news' element={<News />} />
            
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

