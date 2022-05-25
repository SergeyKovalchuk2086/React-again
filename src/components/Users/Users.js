import axios from 'axios';
import React from 'react';
import './Users.css';

const Users = (props) => {
  console.log('props in Users', props);
  let getUsers = () => {
    axios
    .get('https://jsonplaceholder.typicode.com/users?param=10')
    .then(data => props.setUsers(data.data))
  }
  
  return (
    <div className='users__container'>
      <p>Users</p>
      <button onClick={ () => getUsers() }>Get Users</button>
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
            <div>User : {user.name}{user.username}</div>
          </span>
          <span>
            <div>Address : {user.address.street}</div>
          </span>
        </div>
        )
      }
    </div>
  )
}

export default Users;
