import React from 'react';
import './Posts.css';
import Post from './Post/Post';
// import { addPost } from '../../../state';

const Posts = (props) => {
  let posts = props.posts.map((post, id) => <Post message={post.message} key={id} likes={post.likes} />)

  let newPostElement = React.createRef()

  function addPost() {
    props.addPost()
  }

  function changePostText() {
    props.updateNewPostText(newPostElement.current.value)
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
