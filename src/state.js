let state = {
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
		]
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
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likes: 666
	}
	state.profilePage.posts.push(newPost)
}

export default state;