import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialogs.css'

const Dialogs = () => {
  return (
      <div className='dialogs__container'>
        <div className='dialogs__items'>
            <div className='dialog'>
            	<NavLink to='/dialogs/1'>Bogdan</NavLink>
            </div>
            <div className='dialog'>
              <NavLink to='/dialogs/2'>Alexandra</NavLink>
            </div>
        </div>

        <div className='dialogs__messages'>
            <div className='message'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias voluptatibus possimus, harum alias optio sed quos tempora earum architecto sit nesciunt voluptas! Voluptate laborum aut iure quo veniam voluptas.
            </div>
        </div>
      </div>
  )
}

export default Dialogs;