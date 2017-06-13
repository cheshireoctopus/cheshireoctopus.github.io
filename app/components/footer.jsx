import './scss/footer.scss'
import { default as React, PureComponent } from 'react'

const SOCIAL_LINKS = {
	GITHUB: 'https://github.com/cheshireoctopus',
	LINKEDIN: 'https://linkedin.com/in/chandlermoisen',
}

export default class Footer extends PureComponent {
	render() {
		return (
			<footer className="footer-container">
				<div>
					<a href={SOCIAL_LINKS.GITHUB}>
						<span className="icon ion-social-octocat"></span>
					</a>
					<a href={SOCIAL_LINKS.LINKEDIN}>
						<span className="icon ion-social-linkedin"></span>
					</a>
				</div>
				<div>© Chandler Moisen, 2017</div>
			</footer>
		)
	}
}
