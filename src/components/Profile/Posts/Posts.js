import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = (props) => {
  let posts = props.posts.map((post, id) => <Post message={post.message} key={id} likes={post.likes} />)

  let newPostElement = React.createRef()

  function log() {
    let temp = newPostElement.current.value
    console.log('text :', temp)
  }

  return (
    <div className='posts__container'>
      <textarea ref={ newPostElement }></textarea>
      <button onClick={ log }>Click</button>
      {posts}
    </div>
  );
};

export default Posts;
