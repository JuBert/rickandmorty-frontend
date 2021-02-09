import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="#">
              <p>Logo</p>
            </a>
          </div>
          <ul>
            <li>
              <a href="#">FAVORITES</a>
            </li>
            <li>
              <a href="#">LOGIN</a>
            </li>
            <li>
              <a href="#">SIGNUP</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
