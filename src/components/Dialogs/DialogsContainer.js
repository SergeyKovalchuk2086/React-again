// import React from 'react';
import './Dialogs.css'
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogsReducer'
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = () => {
//   return (
//     <storeContext.Consumer>
//     {
//       (store) => {
//         function changeMessageText(e) {
//           store.dispatch(updateNewMessageBodyCreator(e.target.value))
//         }

//         function addMessage() {
//           store.dispatch(sendMessageCreator())
//         }
//         return (
//           <Dialogs
//             changeMessageText={changeMessageText}
//             addMessage={addMessage}
//             newMessageBody={store.getState().dialogsPage.newMessageBody}
//             dialogs={store.getState().dialogsPage.dialogs}
//             messages={store.getState().dialogsPage.messages}
//           />
//         )
//       }
//     }
//     </storeContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeMessageText: (e) => {
      dispatch(updateNewMessageBodyCreator(e.target.value))
    },
    addMessage: () => {
      dispatch(sendMessageCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
