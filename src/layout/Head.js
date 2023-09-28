import React from 'react';
import './layout.css';
import logo from './img-tebo-logo2.png';

function Head() {
  return (
    <div class="container-fluid header">
       <header>
         <img src={logo} className="logo" alt="logo" />

     </header>
   </div>

  );
}
export default Head;
