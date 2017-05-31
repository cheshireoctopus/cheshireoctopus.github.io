import './scss/header.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
	return (
		<header className="header">
			<div className="title">Hello, my name is Chandler</div>
			<nav>
				<Link className="nav-link" to="/">Home</Link>
				<Link className="nav-link" to="/projects">Projects</Link>
				<Link className="nav-link" to="/cv">Curriculum Vitae</Link>
			</nav>
		</header>
	)
}
