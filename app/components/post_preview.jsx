import './scss/post_preview.scss'
import { default as React, PropTypes, PureComponent } from 'react'
import { Link } from 'react-router-dom'

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
		return (
			<div className="post-container">
				<div className="post-title">{this.props.title}</div>
				<div className="post-date">{formattedDate}</div>
				<hr />
				<div className="post-body" dangerouslySetInnerHTML={{ __html: htmlPreview}} />
				<Link to={`/blog/${this.props.urlTitle}`}>
					<button>More...</button>
				</Link>
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
