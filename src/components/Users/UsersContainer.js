// import React from 'react';
import {followAC, unfollowAC, setUsersAC, setPageAC, setUsersCountAC} from '../../redux/usersReducer'
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setPage: (page) => {
      dispatch(setPageAC(page))
    },
    setUsersCount: (count) => {
      dispatch(setUsersCountAC(count))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
