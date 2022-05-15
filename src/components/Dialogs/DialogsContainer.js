import React from 'react';
import './Dialogs.css'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer'
import storeContext from '../../StoreContext'
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return (
    <storeContext.Consumer>
    {
      (store) => {
        function changeMessageText(e) {
          store.dispatch(updateNewMessageBodyCreator(e.target.value))
        }

        function addMessage() {
          store.dispatch(sendMessageCreator())
        }
        return (
          <Dialogs
            changeMessageText={changeMessageText}
            addMessage={addMessage}
            newMessageBody={store.getState().dialogsPage.newMessageBody}
            dialogs={store.getState().dialogsPage.dialogs}
            messages={store.getState().dialogsPage.messages}
          />
        )
      }
    }
    </storeContext.Consumer>
  )
}

export default DialogsContainer;
