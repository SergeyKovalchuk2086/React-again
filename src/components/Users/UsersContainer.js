import {
  follow,
  unfollow,
  setPage,
  setInProgress, getUsersThunkCreator, followThunkCreator, unFollowThunkCreator
} from '../../redux/usersReducer'
import { connect } from 'react-redux';
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersCont extends React.Component {
  //запрос юзеров
  componentDidMount() {
    //thunk функция
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }

  //пагинация
  changePage = (page) => {
    this.props.setPage(page)
    //thunk функция
    this.props.getUsersThunkCreator(page, this.props.pageSize)
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
          followThunkCreator = { this.props.followThunkCreator }
          unfollowThunkCreator = { this.props.unFollowThunkCreator }
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
  setPage,
  setInProgress,
  getUsersThunkCreator,
  followThunkCreator,
  unFollowThunkCreator
})(UsersCont)

export default UsersContainer;
