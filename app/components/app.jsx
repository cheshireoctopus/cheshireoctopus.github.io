import React, { PropTypes, Component, PureComponent } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from './home.jsx'
import Projects from './projects.jsx'
import CV from './cv.jsx'


const NoMatch = () => {
	return <h1>404</h1>
}

export default class App extends Component {
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<Link to="/projects">Projects</Link>
				<Link to="/cv">Curriculum Vitae</Link>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/cv" component={CV} />
					<Route component={NoMatch}/>
				</Switch>
			</div>
		)
	}
}
