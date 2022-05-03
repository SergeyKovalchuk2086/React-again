import React from 'react';
import './Dialogs.css'
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {
  return (
      <div className='dialogs__container'>
        <div className='dialogs__items'>
          <div className='dialog'>
            <Dialog name='Bogdan' id='1' />
          </div>
          <div className='dialog'>
						<Dialog name='Alexandra' id='2' />
          </div>
        </div>

        <div className='dialogs__messages'>
					<Message message='Hello, I`m Bogdan'/>
          <Message message='Hello, I`m ALexa'/>
        </div>
      </div>
  )
}

export default Dialogs;