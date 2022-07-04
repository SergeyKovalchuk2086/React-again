import React from 'react';
import './Profile.css';
import MyPostContainer from './Posts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
    <div className='profile__container'>
      <ProfileInfo { ...props.profile } />
      <MyPostContainer />
    </div>
  )
}

export default Profile;
