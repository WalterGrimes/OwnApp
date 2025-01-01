import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Whyus from './components/Whyus/Whyus';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      {/* <Profile/>  */}
      <div className = 'app-wrapper-content'>
      <Whyus />
      </div>
    </div>
  );
}

export default App;
