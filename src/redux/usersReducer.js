import constants from "../constant";
import {getUsers, followRequest, unfollowRequest} from "../api/api";

let initialState = {
	users: [],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followInProgress: false
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.FOLLOW:
			return {
				...state,
				users: state.users.map(user => {
				if (user.id === action.userId) {
					return {...user, followed: false}
				}
				return user
			})
		}

		case constants.UNFOLLOW:
			return {
				...state,
				users: state.users.map(user => {
				if (user.id === action.userId) {
					return {...user, followed: true}
				}
				return user
			})
		}

		case constants.SET_USERS:
			return {
				...state, users: action.users
			}

		case constants.SET_CURRENT_PAGE:
			return {
				...state, currentPage: action.currentPage
			}

		case constants.SET_USERS_COUNT:
			return {
				...state, totalUsersCount: action.count
			}
		case constants.TOGGLE_IS_FETCHING:
			return {
				...state, isFetching: action.isFetching
			}
		case constants.TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state, followInProgress: action.inProgress
			}

		default:
			break;
	}
   return state
}

//ниже обычные action (creator)

export const follow = (userId) => {
	return {
		type: constants.FOLLOW,
		userId: userId
	}
}

export const unfollow = (userId) => {
	return {
		type: constants.UNFOLLOW,
		userId: userId
	}
}

export const setUsers = (users) => {
	return {
		type: constants.SET_USERS,
		users: users
	}
}

export const setPage = (currentPage) => {
	return {
		type: constants.SET_CURRENT_PAGE,
		currentPage: currentPage
	}
}

export const setUsersCount = (count) => {
	return {
		type: constants.SET_USERS_COUNT,
		count: count
	}
}

export const setIsFetching = (payload) => {
	return {
		type: constants.TOGGLE_IS_FETCHING,
		isFetching: payload
	}
}

export const setInProgress = (payload) => {
	return {
		type: constants.TOGGLE_IS_FOLLOWING_PROGRESS,
		inProgress: payload
	}
}

//ниже thunk (creator)

export const getUsersThunkCreator = (currentPage, pageSize) => {
	return (dispath) => {
		//loader
		dispath(setIsFetching(true))

		getUsers(currentPage, pageSize).then(data => {
			dispath(setUsers(data.items))
			dispath(setUsersCount(data.totalCount))
		})
		//loader
		dispath(setIsFetching(false))
	}
}

export const followThunkCreator = (userId) => {
	return (dispath) => {
		//в прогрессе для disabled button
		dispath(setInProgress(true))

		followRequest(userId).then(data => {
			if (data.resultCode === 0) {
				dispath(follow(userId))
			}
		})
		//в прогрессе для disabled button
		dispath(setInProgress(false))
	}
}

export const unFollowThunkCreator = (userId) => {
	return (dispath) => {
		//в прогрессе для disabled button
		dispath(setInProgress(true))

		unfollowRequest(userId).then(data => {
			if (data.resultCode === 0) {
				dispath(unfollow(userId))
			}
		})
		//в прогрессе для disabled button
		dispath(setInProgress(false))
	}
}

export default usersReducer
