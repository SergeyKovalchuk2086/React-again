import React from "react";
import './Users.css'

let users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize )

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if(i === 20) break
    }

    return ( <div className='users__container'>
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