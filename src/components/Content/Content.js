import React from 'react';
import './Content.css';
import Posts from './Posts/Posts';

const Content = () => {
  return (
    <div className='content'>
      <div>
        <img
          alt='back'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioXfAaPnwiLL3ISHXde0LgfVKYI5TYnQQqYEE40G7KYTHOuomz5lsaNZZWiqo-X_9XSM&usqp=CAU'
        />
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, placeat ea! Itaque labore cum, doloribus numquam possimus inventore vitae voluptas soluta animi rerum omnis dignissimos accusantium veniam nesciunt corrupti laborum! </p>
      <Posts />
    </div>
  );
};

export default Content;
