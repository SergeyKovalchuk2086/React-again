import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='content-wrapper__navbar'>
      <ul>
        <li>News</li>
        <li>Messages</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Navbar;