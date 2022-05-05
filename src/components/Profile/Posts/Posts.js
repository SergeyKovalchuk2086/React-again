import React from 'react';
import './Posts.css';
import Post from './Post/Post';

const Posts = (props) => {
  let posts = props.posts.map((post, id) => <Post message={post.message} key={id} likes={post.likes} />)

  return (
    <div className='posts__container'>
      {posts}
    </div>
  );
};

export default Posts;
