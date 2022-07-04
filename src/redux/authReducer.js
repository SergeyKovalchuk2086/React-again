import constants from "../constant";

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			}
		default:
			break;
	}
   return state
}

export const setAuthUserData = (data) => {
	return {
		type: constants.SET_USER_DATA,
		data : data
	}
}

export default authReducer
