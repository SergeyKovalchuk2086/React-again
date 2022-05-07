import React from 'react';
import './Profile.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log('props in PROFILE', props);
  return (
    <div className='profile__container'>
      <ProfileInfo />
      <Posts posts={props.postsData.posts} addPost={props.addPost}/>
    </div>
  )
}

export default Profile;