import './scss/post.scss'
import { default as React, PropTypes, PureComponent } from 'react'

export default class Post extends PureComponent {
	static propTypes = {
		date: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		topics: PropTypes.array.isRequired,
		html: PropTypes.string.isRequired,
	}

	render() {
		const date = new Date(this.props.date).toLocaleDateString()
		return (
			<div className="post-container">
				<div className="post-title">{this.props.title}</div>
				<div className="post-date">{date}</div>
				<div className="post-body" dangerouslySetInnerHTML={{ __html: this.props.html}} />
			</div>
		)
	}
}
