import React from 'react';
import './Profile.css';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
      <div>
      <img
      alt='back'
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioXfAaPnwiLL3ISHXde0LgfVKYI5TYnQQqYEE40G7KYTHOuomz5lsaNZZWiqo-X_9XSM&usqp=CAU'
      />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, placeat ea! Itaque labore cum, doloribus numquam possimus inventore vitae voluptas soluta animi rerum omnis dignissimos accusantium veniam nesciunt corrupti laborum! </p>
      <Posts />
      </div>
  )
}

export default Profile;