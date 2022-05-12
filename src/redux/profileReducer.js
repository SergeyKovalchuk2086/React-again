import constants from "../constant";

let initialState = {
	posts: [
		{
			id: 1,
			message: 'Hi',
			likes: 20
		},
		{
			id: 2,
			message: 'powel nahui',
			likes: 999
		},
	],
	newPostText: 'Hello bitch'
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.ADD_POST:
			let newPost = {
				id: 5,
				message: state.newPostText,
				likes: 666
			}
			state.posts.push(newPost)
			state.newPostText = ''
			break;
		case constants.UPDATE_NEW_POST_TEXT:
			state.newPostText = action.postText
			break
		default:
			break;
	}
  return state
}

export const addPostActionCreator = () => {
	return {
		type: constants.ADD_POST
	}
}

export const updateNewPostTextActionCreator = (text) => {
	return {
		type: constants.UPDATE_NEW_POST_TEXT,
		postText: text
	}
}

export default profileReducer
