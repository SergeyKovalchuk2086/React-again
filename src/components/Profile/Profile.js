import React from 'react';
import './Profile.css';
import MyPostContainer from './Posts/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  console.log('props in PROFILE', props);
  return (
    <div className='profile__container'>
      <ProfileInfo />
      {/* <Posts posts={props.postsData.posts}
      newPostText={props.postsData.newPostText}
      dispatch={props.dispatch}
      /> */}
      <MyPostContainer
        posts={props.postsData.posts}
        newPostText={props.postsData.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile;
