import constants from "../constant";
import {auth} from "../api/api";

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

export const authThunk = () => {
	return (dispatch) => {
		auth()
			.then(response => {
				if (response.data.resultCode === 0) {
					let { id, login, email } = response.data.data
					dispatch(setAuthUserData({id, login, email}))
				}
			})
	}
}

export default authReducer
