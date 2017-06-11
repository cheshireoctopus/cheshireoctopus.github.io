import './scss/projects.scss'
import React, { PureComponent } from 'react'
import projects from '../projects.json'

export default class Projects extends PureComponent {
	state = {
		selectedProjectIdx: 0,
	}

	render() {
		return (
			<div>
				<div className="projects-container">
					{this.renderProjectNav()}
					{this.renderSelectedProject()}
				</div>
			</div>
		)
	}

	renderProjectNav() {
		const projectTitles = projects.map((project, idx) => {
			const isSelected = this.state.selectedProjectIdx === idx
			return (
				<div
					key={idx}
					className={`projects-nav-item ${isSelected && 'selected'}`}
					onClick={() => this.handleSelectProject(idx)}
				>
					- {project.title}
				</div>
			)
		})

		return <div className="projects-nav">{projectTitles}</div>
	}

	renderSelectedProject() {
		const {
			title,
			one_liner,
			about,
			github,
			url,
			imgSrc
		} = projects[this.state.selectedProjectIdx]
		const imgPath = `public/img/projects/${imgSrc}`

		return (
			<div className="projects-selected-container">
				<div className="projects-selected-title">{title}</div>
				<div className="projects-selected-blurb">{one_liner}</div>
				<hr />
				<img className="project-selected-img" src={imgPath} />
				<div className="project-selected-about">{about}</div>
				<div>
					<a className="project-selected-url" href={url}>{url}</a>
				</div>
			</div>
		)
	}

	handleSelectProject(idx) {
		this.setState({
			selectedProjectIdx: idx,
		})
	}
}
