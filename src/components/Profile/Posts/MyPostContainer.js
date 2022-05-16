// import React from 'react';
import Posts from './Posts';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

// const MyPostContainer = () => {
//   return (
//     <storeContext.Consumer>
//     {
//       (store) => {
//         function changePostText(text) {
//           store.dispatch(updateNewPostTextActionCreator(text))
//         }
  
//         function addPost() {
//           store.dispatch(addPostActionCreator())
//         }
//         return (
//           <Posts
//             changePostText={changePostText}
//             addPost={addPost}
//             posts={store.getState().profilePage.posts}
//             newPostText={store.getState().profilePage.newPostText}
//           />
//         )
//       }
//     }
//     </storeContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  console.log('state :', state);
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changePostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default MyPostContainer;