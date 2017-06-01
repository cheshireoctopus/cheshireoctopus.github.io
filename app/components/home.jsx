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
				Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
			</div>
		)
	}
}
