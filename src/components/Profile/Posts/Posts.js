import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = (props) => {
  let posts = props.profilePage.posts.map((post, id) => <Post message={post.message} key={id} likes={post.likes} />)

  let newPostElement = React.createRef()

  function addPost() {
    props.addPost()
  }

  function changePostText() {
    let text = newPostElement.current.value
    props.changePostText(text)
  }

  return (
    <div className='posts__container'>
      <textarea onChange={changePostText} ref={ newPostElement } value={props.profilePage.newPostText} />
      <button onClick={ addPost }>Click</button>
      {posts}
    </div>
  );
};

export default Posts;
