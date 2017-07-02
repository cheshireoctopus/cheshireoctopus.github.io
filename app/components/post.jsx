import './scss/post.scss'
import { default as React, PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import find from 'lodash/find'
import posts from './../posts.json'
import { formatDate } from './../utils.js'
import Topics from './topics.jsx'

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
				<div className="post-topics">
					<Topics topics={post.topics} />
				</div>
				<hr/>
				<div className="post-body" dangerouslySetInnerHTML={{ __html: post.html}} />
			</div>
		)
	}
}
