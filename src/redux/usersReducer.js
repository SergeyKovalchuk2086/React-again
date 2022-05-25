import constants from "../constant";

let initialState = {
	users:  
	[

	]
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
				...state, users: [...state.users, ...action.users]
			}

		default:
			break;
	}
   return state
}

export const followAC = (userId) => {
	console.log('userId AC:', userId);
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

export default usersReducer
