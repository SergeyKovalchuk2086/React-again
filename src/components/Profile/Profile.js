import React from 'react';
import './Profile.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className='profile__container'>
      <ProfileInfo />
      <Posts posts={props.postsData.posts} />
    </div>
  )
}

export default Profile;