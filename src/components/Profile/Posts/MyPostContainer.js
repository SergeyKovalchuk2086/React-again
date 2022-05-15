import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import storeContext from '../../../StoreContext'

const MyPostContainer = () => {
  return (
    <storeContext.Consumer>
    {
      (store) => {
        function changePostText(text) {
          store.dispatch(updateNewPostTextActionCreator(text))
        }
  
        function addPost() {
          store.dispatch(addPostActionCreator())
        }
        return (
          <Posts
            changePostText={changePostText}
            addPost={addPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
          />
        )
      }
    }
    </storeContext.Consumer>
  );
};

export default MyPostContainer;
