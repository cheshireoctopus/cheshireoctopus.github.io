import React, { PureComponent } from 'react'
import './scss/home.scss'
import PostPreview from './post_preview.jsx'
import posts from '../posts.json'

export default class Home extends PureComponent {
	render() {
		return (
			<div className="home-container">
				<div className="home-about-me">
					<p>Hello, my name is Chandler - I am a technologist and educator.</p>
					<p>
						By day, I help develop the frontend at <a href="https://teachable.com/">Teachable</a>, where we make it easy to teach courses online; I moonlight as a web development instructor, having taught at <a href="https://generalassemb.ly/">General Assembly</a> and <a href="https://www.fullstackacademy.com/">Fullstack Academy</a>.
					</p>
					<p>
						Interests include: the intersection between the web and government, alternative education, distributed ledger tech, David Lynch, beer, and subtle debauchery.
					</p>
					<p>
						Once upon a time I wrote the JavaScripts at <a href="https://percolate.com/">Percolate</a> and <a href="https://http://www.ende-solutions.com/">Ende Solutions</a>. I also gave tours at the world-famous <a href="https://www.harpoonbrewery.com/">Harpoon Brewery</a>.
					</p>
				</div>
				{posts.map((post, idx) => <PostPreview key={idx} {...post} /> )}
			</div>
		)
	}
}
