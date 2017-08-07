import './scss/topics.scss'
import React from 'react'
import PropTypes from 'prop-types'

const Topics = props => (
	<div>
		{props.topics.map((topic, idx) => <span key={idx} className="topic">{topic}</span>)}
	</div>
)

Topics.propTypes = {
	topics: PropTypes.array.isRequired,
}

export default Topics
