import './scss/post.scss'
import forEach from 'lodash/forEach'
import { default as React, PropTypes, PureComponent } from 'react'

export default class Post extends PureComponent {
	static propTypes = {
		date: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		topics: PropTypes.array.isRequired,
		html: PropTypes.string.isRequired,
	}

	render() {
		const formattedDate = formatDate(this.props.date)
		const htmlPreview = buildHtmlPreview(this.props.html)
		return (
			<div className="post-container">
				<div className="post-title">{this.props.title}</div>
				<div className="post-date">{formattedDate}</div>
				<div className="post-body" dangerouslySetInnerHTML={{ __html: htmlPreview}} />
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
