import React from 'react';
import { setUsersAC } from '../../redux/usersReducer';
import './Users.css';

const Users = (props) => {
  console.log('props in Users', props);
  
  // if(props.usersPage.users.length === 0){
  //   props.setUsers(
  //     [
  //     {
  //       id: 1,
  //       followed: true,
  //       fullName: 'Bogdan',
  //       status: 'Сonstructor',
  //       location: 'Tomsk'
  //     },
  //     {
  //       id: 2,
  //       followed: false,
  //       fullName: 'Serega',
  //       status: 'Developer',
  //       location: 'Tomsk'
  //     },
  //   ]
  //   )
  // }

  return (
    <div className='users__container'>
      <p>Users</p>
      {
        props.usersPage.users.map(user => <div key={user.id} className="user">
          <span>
            <div>
              IMG
            </div>
            <div>
              {
                user.followed
                ? <button onClick={ () => props.follow(user.id)}>Unfollow</button>
                : <button onClick={ () => props.unfollow(user.id)}>Follow</button>
              }
            </div>
          </span>
          <span>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{user.location}</div>
          </span>
        </div>
        )
      }
    </div>
  )
}

export default Users;
