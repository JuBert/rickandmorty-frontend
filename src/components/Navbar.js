import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  function UserGreeting() {
    return <div></div>;
  }

  function GuestGreeting() {
    return <p></p>;
  }

  let navItemsMarkup = () => (toggle ? <UserGreeting /> : <GuestGreeting />);

  return (
    <div>
      <div className="navbar">
        <div className="nav-items">
          <div className="nav-link nav-link-brand">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>
          </div>
        </div>
        <div className="nav-link">
          <Link
            to="/favorites"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Favorites
          </Link>
        </div>
        <div className="nav-items nav-items-right">
          <div className="nav-link">
            <Link
              to="/login"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
