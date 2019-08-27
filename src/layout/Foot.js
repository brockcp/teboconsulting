import React from 'react';
import { Link } from 'react-router-dom';

function Foot() {
  return (
    <div className="">
      <footer className="">
        <ul className="">
          <li className="ddd"><Link to="tel:1-805-340-4058">805-340-4058</Link></li>
          <li className="ddd"><Link to="https://goo.gl/maps/Metdp9KwyUM2">300 E. Esplanade Dr.,#1660 <br /> Oxnard, CA 93036</Link></li>
          <li className="ddd"><Link to="mailto:susan@teboconsulting.com" className="btn btn-primary">email</Link></li>
        </ul>
      </footer>
    </div>
  );
}
export default Foot;
