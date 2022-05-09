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
		}
	},
	getState() {
		return this._state
	},
	subscribe(observer) {
		this.rerenderEntireTree = observer
	},
	rerenderEntireTree() {
		console.log('changed');
	},

	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likes: 666
			}
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
			this.rerenderEntireTree(this._state)
		} else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.newPostText = action.postText
		this.rerenderEntireTree(this._state)
		}
	}
	
}

export default store;
window.store = store;