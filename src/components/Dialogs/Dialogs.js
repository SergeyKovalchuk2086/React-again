import React from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let newArr = 
  props.dialogsMessagesData.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />)
  
  let newArr2 = 
  props.dialogsMessagesData.messages.map(message => <Message message={message.text} key={message.id} />)

  let textareaRef = React.createRef()

  function addMessage() {
    console.log('messgae :', textareaRef.current.value);
  }

  return (
    <div className='dialogs__container'>
      <div className='dialogs__items'>
        <div className='dialog'>
          {newArr}
        </div>
      </div>

      <div className='dialogs__messages'>
				{newArr2}
        <textarea ref={ textareaRef }></textarea>
        <button onClick={ addMessage }>Add message</button>
      </div>
    </div>
  )
}

export default Dialogs;