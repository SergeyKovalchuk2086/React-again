import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dialog.css'

const Dialog = (props) => {
  let path = '/dialogs/' + props.id
  return (
      <div className='dialog__container'>
        <NavLink to={path} >{props.name}</NavLink>
      </div>
  )
}

export default Dialog;