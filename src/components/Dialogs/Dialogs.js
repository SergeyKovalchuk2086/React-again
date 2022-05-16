import React from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  console.log('props dialogs :', props);
  let dialogs = 
    props.dialogsPage.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />)
        
  let messages = 
    props.dialogsPage.messages.map(message => <Message message={message.text} key={message.id} />)

  return (
        <div className='dialogs__container'>
          <div className='dialogs__items'>
            <div className='dialog'>
              {dialogs}
            </div>
          </div>

          <div className='dialogs__messages'>
            {messages}
            <textarea onChange={props.dialogsPage.changeMessageText} value={props.newMessageBody} ></textarea>
            <button onClick={props.addMessage}>Add message</button>
          </div>
      </div>
  )
}

export default Dialogs;
