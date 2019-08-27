import React from 'react';
import './layout.css';
import logo from './tebo-logo.png';

function Head() {
  return (
    <header>
     <img src={logo} className="logo" alt="logo" />
      <div className="title">
        <h1>SusanTebo</h1>
        <h2>Environmental Consultant</h2>
      </div>
   </header>
  );
}

export default Head;
