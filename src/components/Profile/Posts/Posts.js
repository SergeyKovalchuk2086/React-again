import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div>
      <Post message='Hi' likes='20'/>
      <Post message='powel nahui' />
    </div>
  );
};

export default Posts;
