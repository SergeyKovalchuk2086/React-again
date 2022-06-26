import axios from 'axios';
import React from 'react';
import './Users.css';

class Users extends React.Component {
    componentDidMount() {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setUsersCount(response.data.totalCount)
                })
    }

    changePage = (page) => {
        this.props.setPage(page)

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize )

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
            if(i === 20) break
        }

        return (
          <div className='users__container'>
            <p>Users</p>
            {
              this.props.usersPage.users.map(user => <div key={user.id} className="user">
                <span>
                  <div>
                    IMG
                  </div>
                  <div>
                    {
                      user.followed
                      ? <button onClick={ () => this.props.follow(user.id)}>Unfollow</button>
                      : <button onClick={ () => this.props.unfollow(user.id)}>Follow</button>
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
                    return <span onClick={ (event) => this.changePage(page) }
                                 className={ this.props.currentPage === page && 'current' }>
                        { page }
                    </span>
                })
            }
            </div>
          </div>
        )
    }
}

export default Users;

// const Users = (props) => {
// console.log('props in Users', props);
// let getUsers = () => {
//   axios
//   .get('https://jsonplaceholder.typicode.com/users?param=10')
//   .then(data => props.setUsers(data.data))
// }

// return (
//   <div className='users__container'>
//     <p>Users</p>
//     <button onClick={ () => getUsers() }>Get Users</button>
//     {
//       props.usersPage.users.map(user => <div key={user.id} className="user">
//         <span>
//           <div>
//             IMG
//           </div>
//           <div>
//             {
//               user.followed
//               ? <button onClick={ () => props.follow(user.id)}>Unfollow</button>
//               : <button onClick={ () => props.unfollow(user.id)}>Follow</button>
//             }
//           </div>
//         </span>
//         <span>
//           <div>User : {user.name}{user.username}</div>
//         </span>
//         <span>
//           <div>Address : {user.address.street}</div>
//         </span>
//       </div>
//       )
//     }
//   </div>
// )
// }