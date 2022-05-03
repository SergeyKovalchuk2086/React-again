import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='content-wrapper__navbar'>
      <NavLink to='/'>News</NavLink>
      <NavLink to='/Dialogs'>Dialogs</NavLink>
      <NavLink to='/Profile'>Profile</NavLink>
    </div>
  );
};

export default Navbar;