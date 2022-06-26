import constants from "../constant";

let initialState = {
	users: [],
	pageSize: 20,
	totalUsersCount: 0,
	currentPage: 1
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

		default:
			break;
	}
   return state
}

export const followAC = (userId) => {
	return {
		type: constants.FOLLOW,
		userId: userId
	}
}

export const unfollowAC = (userId) => {
	return {
		type: constants.UNFOLLOW,
		userId: userId
	}
}

export const setUsersAC = (users) => {
	return {
		type: constants.SET_USERS,
		users: users
	}
}

export const setPageAC = (currentPage) => {
	return {
		type: constants.SET_CURRENT_PAGE,
		currentPage: currentPage
	}
}

export const setUsersCountAC = (count) => {
	return {
		type: constants.SET_USERS_COUNT,
		count: count
	}
}

export default usersReducer
