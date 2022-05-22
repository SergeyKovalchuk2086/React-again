// import React from 'react';
import {followAC, unfollowAC, setUsersAC} from '../../redux/usersReducer'
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      console.log('userId container:', userId);
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
