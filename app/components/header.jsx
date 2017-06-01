import './scss/header.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
	return (
		<header className="header-container">
			<div className="header-title">Hello, my name is Chandler</div>
			<nav>
				<Link className="header-nav-link" to="/">Home</Link>
				<Link className="header-nav-link" to="/projects">Projects</Link>
				<Link className="header-nav-link" to="/cv">Curriculum Vitae</Link>
			</nav>
		</header>
	)
}
