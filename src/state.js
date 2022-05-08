import { rerenderEntireTree } from "./render"

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
}

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likes: 666
	}
	state.profilePage.posts.push(newPost)
	state.profilePage.newPostText = ''
	rerenderEntireTree(state)
}

export let updateNewPostText = (postText) => {
	state.profilePage.newPostText = postText
	rerenderEntireTree(state)
}
export default state;