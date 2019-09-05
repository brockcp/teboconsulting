import React from 'react';
import './layout.css';
import logo from './img-tebo-logo.png';
import photo from './img-susan-tebo.jpg';

function Head() {
  return (
    <div class="container-fluid header">
       <header>
         <img src={logo} className="logo" alt="logo" />
         <div className="title">
           <img src={photo} className="photo" alt="profile" />
           <h1>SusanTebo</h1>
           <h2>President</h2>
         </div>
     </header>
   </div>

  );
}
export default Head;
