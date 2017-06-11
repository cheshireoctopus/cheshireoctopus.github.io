import './scss/header.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default () => {
	return (
		<header className="header-container">
			<div className="header-title">Chandler Moisen</div>
			<nav className="header-nav-links-container">
				<NavLink className="header-nav-link" exact activeClassName="active" to="/">
					<span className="icon ion-compose"></span> Writing
				</NavLink>
				<NavLink className="header-nav-link" exact activeClassName="active" to="/archive">
					<span className="icon ion-folder"></span> Archive
				</NavLink>
				<NavLink className="header-nav-link" exact activeClassName="active" to="/projects">
					<span className="icon ion-code"></span> Projects
				</NavLink>
				<a href="public/resume.pdf" className="header-nav-link">
					<span className="icon ion-document-text"></span> CV
				</a>
			</nav>
		</header>
	)
}
