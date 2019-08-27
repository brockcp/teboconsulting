import React from 'react';
import './layout.css';
import logo from './tebo-logo.png';

function Head() {
  return (
    <header className="ddd">
     <img src={logo} className="fff" alt="logo" />
      <h1 className="">SusanTebo</h1>
      <h2 className="">Environmental Consulting</h2>
      <div className="">
        <ul className="">Specializing in:
          <li className="">Environmental Impact Reports</li>
          <li className="">Initial Studies</li>
          <li className="">Negative Declarations</li>
          <li className="">NEPA Documentation</li>
          <li className="">Staff Reports</li>
          <li className="">Strategic Environmental Planning</li>
       </ul>
      </div>
    </header>
  );
}

export default Head;
