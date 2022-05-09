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
	rerenderEntireTree() {
		console.log('changed');
	},
	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likes: 666
		}
		this._state.profilePage.posts.push(newPost)
		this._state.profilePage.newPostText = ''
		this.rerenderEntireTree(this._state)
	},
	updateNewPostText(postText) {
		this._state.profilePage.newPostText = postText
		this.rerenderEntireTree(this._state)
	},
	subscribe(observer) {
		this.rerenderEntireTree = observer
	}
}

export default store;
window.store = store;