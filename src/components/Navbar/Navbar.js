import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className='content-wrapper__navbar'>
      <NavLink to='profile/'>Profile</NavLink>
      <NavLink to='users/'>Users</NavLink>
      <NavLink to='dialogs/'>Messages</NavLink>
    </div>
  );
};

export default Navbar;