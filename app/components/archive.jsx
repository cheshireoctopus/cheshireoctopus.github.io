import './scss/archive.scss'
import { default as React, PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from './../utils.js'
import Topics from './topics.jsx'
import posts from '../posts.json'

export default class Archive extends PureComponent {
	render() {
		return (
			<div className="archive-container">
				{posts.map((post, idx) => {
					const postURL = `/blog/${post.urlTitle}`
					return (
						<div key={idx} className="archive-record">
							<Link to={postURL}>
								<div className="archive-title">{post.title}</div>
							</Link>
							<div className="archive-date">{formatDate(post.date)}</div>
							<div className="archive-topics">
								<Topics topics={post.topics} />
							</div>
							<hr />
						</div>
					)
				})}
			</div>
		)
	}
}
