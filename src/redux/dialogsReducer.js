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
			let stateCopy = {...state}
			stateCopy.newMessageBody = action.body
			return stateCopy
		case constants.SEND_MESSAGE:
			let newMesage = {
				id: 5,
				text: state.newMessageBody
			}
			let stateCopy2 = {...state}
			stateCopy2.messages = [...state.messages]
			stateCopy2.messages.push(newMesage)
			stateCopy2.newMessageBody = ''
			return stateCopy2;
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
