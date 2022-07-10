import React from "react";
import './Users.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

let users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize )

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
    if(i === 10) break
  }

  let requestFollow = (userId) => {
    props.setInProgress(true)
    axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: {
          'API-KEY' : 'badf1b4f-6a6a-4fe5-a6ed-482f613ccdfd'
        }
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          props.follow(userId)
        }
        props.setInProgress(false)
      })
  }

  let requestUnfollow = (userId) => {
    props.setInProgress(true)
    axios
      .post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
        withCredentials: true,
        headers: {
          'API-KEY': 'badf1b4f-6a6a-4fe5-a6ed-482f613ccdfd'
        }
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          props.unfollow(userId)
        }
        props.setInProgress(false)
      })
  }

  return ( <div className='users__container'>
      <p>Users</p>
      {
        props.usersPage.users.map(user => <div key={user.id} className="user">
            <NavLink to={ `/profile/${user.id}` } >
              <div>
                IMG
              </div>
            </NavLink>
            <span>
                  <div>
                    {
                      user.followed
                        ? <button onClick={ () => requestFollow(user.id)} disabled={ props.inProgress }>Unfollow</button>
                        : <button onClick={ () => requestUnfollow(user.id)} disabled={ props.inProgress }>Follow</button>
                    }
                  </div>
                </span>
            <span>
                  <div>User : {user.name}{user.name}</div>
                </span>
            <span>
                  <div>Address : {user.name}</div>
                </span>
          </div>
        )
      }
      <div>
        Pages : {
        pages.map(page => {
          return <span onClick={ (event) => props.changePage(page) }
                       className={ props.currentPage === page && 'current' }>
                        { page }
                    </span>
        })
      }
      </div>
    </div>
  )
}

export default users