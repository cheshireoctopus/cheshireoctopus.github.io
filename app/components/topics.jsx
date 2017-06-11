import './scss/topics.scss'
import { default as React, PropTypes, PureComponent } from 'react'

export default class Topics extends PureComponent {
	static propTypes = {
		topics: PropTypes.array.isRequired,
	}

	render() {
		return (
			<div>
				{this.props.topics.map((topic, idx) => <span key={idx} className="topic">{topic}</span>)}
			</div>
		)
	}
}
