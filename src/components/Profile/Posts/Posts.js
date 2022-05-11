import React from 'react';
import './Posts.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';

const Posts = (props) => {
  let posts = props.posts.map((post, id) => <Post message={post.message} key={id} likes={post.likes} />)

  let newPostElement = React.createRef()

  function addPost() {
    props.dispatch(addPostActionCreator())
  }

  function changePostText() {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className='posts__container'>
      <textarea onChange={changePostText} ref={ newPostElement } value={props.newPostText} />
      <button onClick={ addPost }>Click</button>
      {posts}
    </div>
  );
};

export default Posts;
