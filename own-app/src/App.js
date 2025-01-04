import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Whyus from './components/Whyus/Whyus';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News';

const App = ({ postData }) => {
  let NewsData = [
    { id: 1, advantage: 'Protein Maxler' },
    { id: 2, advantage: 'Mezomorf crazy' },
    { id: 3, advantage: 'Creatine blue' },
    { id: 4, advantage: 'Gainer Bucked up' },
]
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/news' element={<News NewsData={NewsData}/>} />
            <Route path='/profile' element={<Profile postData={postData} />} />
            <Route path='/whyus' element={<Whyus />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
