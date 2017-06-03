import React, { PureComponent } from 'react'
import Post from './post.jsx'
import posts from '../posts.json'

export default class Home extends PureComponent {
	render() {
		return (
			<div>
				{this.renderAboutMe()}
				{posts.map(post => <Post {...post} /> )}
			</div>
		)
	}

	renderAboutMe() {
		return (
			<div className="home-about-me">
				Hello, my name is Chandler.

				I am blah blah blah
			</div>
		)
	}
}
