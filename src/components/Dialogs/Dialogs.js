import React from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let newArr = 
  props.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />)
  
  let newArr2 = 
  props.messages.map(message => <Message message={message.text} key={message.id} />)

  return (
    <div className='dialogs__container'>
      <div className='dialogs__items'>
        <div className='dialog'>
          {newArr}
        </div>
      </div>

      <div className='dialogs__messages'>
				{newArr2}
      </div>
    </div>
  )
}

export default Dialogs;