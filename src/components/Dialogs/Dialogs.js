import React from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
  let dialogsData = [
    {
      id: 1,
      name: 'Bogdan'
    },
    {
      id: 2,
      name: 'Alexandra'
    }
  ]

  let messagesData = [
    {
      id: 1,
      text: 'Hello, I`m Bogdan'
    },
    {
      id: 2,
      text: 'Hello, I`m ALexa'
    }
  ]
  
  let newArr = 
  dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />)
  
  let newArr2 = 
  messagesData.map(message => <Message message={message.text} key={message.id} />)

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