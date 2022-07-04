import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className='app-wrapper__header'>
            <img alt='logo' src='https://i.pinimg.com/originals/d2/9f/c1/d29fc14e3e508b26c3c121c133df174c.png'/>
            <p>Header</p>
            <div className='login'>
                {
                    props.isAuth ? 'You are logined' : <NavLink to='/users'>LOGIN</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;
