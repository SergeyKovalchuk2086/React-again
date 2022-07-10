import {
  follow,
  unfollow,
  setUsers,
  setPage,
  setUsersCount,
  setIsFetching,
  setInProgress
} from '../../redux/usersReducer'
import { connect } from 'react-redux';
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {getUsers} from "../../api/api";

class UsersCont extends React.Component {
  //запрос юзеров
  componentDidMount() {
    //loader
    this.props.setIsFetching(true)

    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.setUsers(data.items)
      this.props.setUsersCount(data.totalCount)
    })
    //loader
    this.props.setIsFetching(false)
  }

  //пагинация
  changePage = (page) => {
    this.props.setPage(page)

    getUsers(page, this.props.pageSize).then(data => {
      this.props.setUsers(data.items)
    })
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
          inProgress = { this.props.inProgress }
          setInProgress = { this.props.setInProgress }
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
    isFetching: state.usersPage.isFetching,
    inProgress: state.usersPage.inProgress
  }
}

const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setPage,
  setUsersCount,
  setIsFetching,
  setInProgress
})(UsersCont)

export default UsersContainer;
