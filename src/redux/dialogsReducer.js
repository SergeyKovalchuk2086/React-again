import constants from "../constant";

let initialState = {
	dialogs: [
		{
			id: 1,
			name: 'Bogdan'
		},
		{
			id: 2,
			name: 'Alexandra'
		}
	],
	messages: [
		{
			id: 1,
			text: 'Hello, I`m Bogdan'
		},
		{
			id: 2,
			text: 'Hello, I`m ALexa'
		}
	],
	newMessageBody: 'new'
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body
			break;
		case constants.SEND_MESSAGE:
			state.messages.push({
				id: 5,
				text: state.newMessageBody
			})
			state.newMessageBody = ''
			break;
		default:
			break;
	}
  return state
}

export const sendMessageCreator = () => {
	return {
		type: constants.SEND_MESSAGE
	}
}

export const updateNewMessageBodyCreator = (text) => {
	return {
		type: constants.UPDATE_NEW_MESSAGE_BODY,
		body: text
	}
}

export default dialogsReducer
