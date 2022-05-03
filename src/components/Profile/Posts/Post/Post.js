import React from 'react';
import './Post.css';

const Post = (props) => {
  return (
    <div className='post'>
      <img src="https://i.imgur.com/dmRcOOI.png" alt="ava" />
      <p>Как уебу сука!</p>
      <p>{props.message}</p>
      <p>{props.likes}</p>
    </div>
  );
};

export default Post;
