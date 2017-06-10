import './scss/post.scss'
import { default as React, PureComponent, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import find from 'lodash/find'
import posts from './../posts.json'

export default class Post extends PureComponent {
	static propTypes = {
		location: PropTypes.shape({
			pathname: PropTypes.string,
		})
	}

	componentWillMount() {
		window.scrollTo(0,0)
	}

	render() {
		const { pathname } = this.props.location
		const postTitle = pathname.replace(/\/blog\//, '')
		const post = find(posts, { urlTitle: postTitle })
		const formattedDate = formatDate(post.date)
		return (
			<div className="post-container">
				<Link to="/" className="post-home-link">
					<span className="icon ion-ios-arrow-back"></span> Back
				</Link>
				<div className="post-title">{post.title}</div>
				<div className="post-date">{formattedDate}</div>
				<hr/>
				<div className="post-body" dangerouslySetInnerHTML={{ __html: post.html}} />
			</div>
		)
	}
}

function formatDate(dateStr) {
	const date = new Date(dateStr)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate() <= 10 ? `0${date.getDate()}` : date.getDate()
	return `@${year}-${month}-${day}`
}
