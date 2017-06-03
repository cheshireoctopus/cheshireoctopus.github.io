import './scss/header.scss'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
	return (
		<header className="header-container">
			<div className="header-title">Chandler Moisen</div>
			<nav>
				<NavLink className="header-nav-link" exact activeClassName="active" to="/">
					<span className="icon ion-compose"></span> Writing
				</NavLink>
				<NavLink className="header-nav-link" exact activeClassName="active" to="/projects">
					<span className="icon ion-code"></span> Projects
				</NavLink>
				<NavLink className="header-nav-link" exact activeClassName="active" to="/cv">
					<span className="icon ion-document-text"></span> CV
				</NavLink>
			</nav>
		</header>
	)
}
