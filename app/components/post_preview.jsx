import './scss/post_preview.scss'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatDate } from './../utils.js'
import Topics from './topics.jsx'

export default class PostPreview extends PureComponent {
	static propTypes = {
		date: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		topics: PropTypes.array.isRequired,
		html: PropTypes.string.isRequired,
		urlTitle: PropTypes.string.isRequired,
	}

	render() {
		const formattedDate = formatDate(this.props.date)
		const htmlPreview = buildHtmlPreview(this.props.html)
		const postURL = `/blog/${this.props.urlTitle}`
		return (
			<div className="post-container">
				<Link to={postURL} className="post-link">
					<div className="post-title">{this.props.title}</div>
				</Link>
				<div className="post-date">{formattedDate}</div>
				<div className="post-topics">
					<Topics topics={this.props.topics} />
				</div>
				<hr />
				<div className="post-body" dangerouslySetInnerHTML={{ __html: htmlPreview}} />
				<Link to={postURL}>
					<button className="post-more-btn">Read More...</button>
				</Link>
			</div>
		)
	}
}

function buildHtmlPreview(htmlStr) {
	const div = document.createElement('div')
	let previewHtml = ''
	let previewCount = 0
	div.innerHTML = htmlStr

	if (!div.innerHTML) return ''

	for (var i = 0; previewCount < 3; i++) {
		const child = div.children[i]
		previewHtml += child.outerHTML
		if (child.innerHTML) previewCount += 1
	}

	return previewHtml
}
