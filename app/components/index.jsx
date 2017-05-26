import React, { Component } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import App from './app.jsx'

export default class Index extends Component {
	render() {
		return (
			<Router>
				<App />
			</Router>
		)
	}
}
