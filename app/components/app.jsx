import './scss/app.scss'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Header from './header.jsx'
import Home from './home.jsx'
import Archive from './archive.jsx'
import Projects from './projects.jsx'
import Post from './post.jsx'
import Footer from './footer.jsx'

const NoMatch = () => (
	<div>
		<h1>404</h1>
		<p>Page not found</p>
	</div>
)

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="app-container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/archive" component={Archive} />
						<Route path="/projects" component={Projects} />
						<Route path="/blog" component={Post} />
						<Route component={NoMatch}/>
					</Switch>
				</div>
				<Footer />
			</div>
		)
	}
}
