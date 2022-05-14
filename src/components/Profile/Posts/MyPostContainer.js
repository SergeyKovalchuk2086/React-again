import React from 'react';
import Posts from './Posts';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const MyPostContainer = (props) => {
  function changePostText(text) {
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  function addPost() {
    props.dispatch(addPostActionCreator())
  }

  return (
    <Posts
      changePostText={changePostText}
      addPost={addPost}
      posts={props.posts}
      newPostText={props.newPostText}
    />
  );
};

export default MyPostContainer;
