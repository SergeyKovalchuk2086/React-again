import constants from "../constant";

const dialogsReducer = (state, action) => {
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
