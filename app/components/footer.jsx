import './scss/footer.scss'
import React from 'react'

const SOCIAL_LINKS = {
	GITHUB: 'https://github.com/cheshireoctopus',
	LINKEDIN: 'https://linkedin.com/in/chandlermoisen',
}

const Footer = () => (
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

export default Footer
