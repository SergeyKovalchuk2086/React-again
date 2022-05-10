import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className='post__container'>
      <img src="https://i.imgur.com/dmRcOOI.png" alt="ava" />
      <p>Message : {props.message}</p>
      <p>Likes : {props.likes}</p>
    </div>
  );
};

export default Post;
