import React from 'react';
import './layout.css';
import logo from './tebo-logo.png';
import pic from './pic.jpg';

function Head() {
  return (
    <header className="clearfix">
     <img src={logo} className="logo" alt="logo" />
      <div className="title">
        <h1>SusanTebo</h1>
        <h2>President</h2>
        <img src={pic} className="pic img-rounded" alt="pic" />
      </div>
   </header>
  );
}

export default Head;
