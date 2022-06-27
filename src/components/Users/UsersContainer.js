import {followAC, unfollowAC, setUsersAC, setPageAC, setUsersCountAC} from '../../redux/usersReducer'
import { connect } from 'react-redux';
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersCont extends React.Component {
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
    return <Users
        totalUsersCount = { this.props.totalUsersCount }
        pageSize = { this.props.pageSize }
        currentPage = { this.props.currentPage }
        changePage = { this.changePage }
        follow = { this.props.follow }
        unfollow = { this.props.unfollow }
        usersPage = { this.props.usersPage }
    />
  }
}

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersCont)

export default UsersContainer;
