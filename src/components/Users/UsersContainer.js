import {follow, unfollow, setUsers, setPage, setUsersCount, setIsFetching} from '../../redux/usersReducer'
import { connect } from 'react-redux';
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersCont extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)

        axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.setUsers(response.data.items)
          this.props.setUsersCount(response.data.totalCount)
        })
    this.props.setIsFetching(false)
  }

  changePage = (page) => {
    this.props.setPage(page)

    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then(response => this.props.setUsers(response.data.items))
  }

  render() {
    return <React.Fragment>
      { this.props.isFetching ? <Preloader /> : null }
      <Users
          totalUsersCount = { this.props.totalUsersCount }
          pageSize = { this.props.pageSize }
          currentPage = { this.props.currentPage }
          changePage = { this.changePage }
          follow = { this.props.follow }
          unfollow = { this.props.unfollow }
          usersPage = { this.props.usersPage }
          isFetching = { this.props.isFetching }
      />
    </React.Fragment>
  }
}

let mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPage,
  setUsersCount,
  setIsFetching
})(UsersCont)

export default UsersContainer;
