import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
	_state: {
		profilePage: {
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
		},
		dialogsPage: {
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
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this.rerenderEntireTree = observer
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

		this.rerenderEntireTree(this._state)
	}
}

export default store;
window.store = store;
