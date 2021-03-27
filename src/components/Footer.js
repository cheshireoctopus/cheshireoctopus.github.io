import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => `${theme.space[4]}px ${theme.space[3]}px`};
  margin-top: 0;

  ${({ theme }) => theme.mediaQueries.large} {
    margin: ${({ theme }) => `${theme.space[5]}px ${theme.space[6]}px`};
  }
`

const SocialIconsContainer = styled.div`
  align-items: center;
  display: flex;

  img {
    margin-bottom: 0;
  }

  a:not(:last-child) {
    margin-right: 16px;
  }
`

const GitHubLogo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 33 33"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
  >
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        id="GitHub-Mark"
        transform="translate(-136.000000, -55.000000)"
        fill="#161514"
      >
        <path
          d="M152.608,55.455 C143.614,55.455 136.32,62.748 136.32,71.745 C136.32,78.942 140.987,85.047 147.46,87.201 C148.275,87.351 148.572,86.848 148.572,86.416 C148.572,86.03 148.558,85.005 148.55,83.646 C144.019,84.63 143.063,81.462 143.063,81.462 C142.322,79.58 141.254,79.079 141.254,79.079 C139.775,78.069 141.366,78.089 141.366,78.089 C143.001,78.204 143.861,79.768 143.861,79.768 C145.314,82.257 147.674,81.538 148.602,81.121 C148.75,80.069 149.171,79.351 149.636,78.944 C146.019,78.533 142.216,77.135 142.216,70.893 C142.216,69.115 142.851,67.66 143.893,66.522 C143.725,66.11 143.166,64.453 144.053,62.211 C144.053,62.211 145.42,61.773 148.532,63.881 C149.831,63.519 151.225,63.339 152.61,63.332 C153.994,63.339 155.387,63.519 156.688,63.881 C159.798,61.773 161.163,62.211 161.163,62.211 C162.052,64.453 161.493,66.11 161.326,66.522 C162.37,67.66 163,69.115 163,70.893 C163,77.151 159.191,78.528 155.563,78.931 C156.147,79.434 156.668,80.428 156.668,81.948 C156.668,84.125 156.648,85.882 156.648,86.416 C156.648,86.852 156.942,87.359 157.768,87.2 C164.236,85.041 168.899,78.94 168.899,71.745 C168.899,62.748 161.605,55.455 152.608,55.455"
          id="Fill-4"
        />
      </g>
    </g>
  </svg>
)

const LinkedInLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const Footer = () => (
  <FooterContainer>
    <div>
      <b>© 2013 - {new Date().getFullYear()}</b>
      <div>
        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
      </div>
    </div>

    <SocialIconsContainer>
      <a href="https://github.com/cheshireoctopus">
        <GitHubLogo />
      </a>
      <a href="https://linkedin.com/in/chandlermoisen">
        <LinkedInLogo />
      </a>
      <a href="https://dev.to/cheshireoctopus">
        <img
          src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
          alt="Chandler Moisen's DEV Profile"
          height="31"
          width="31"
        />
      </a>
    </SocialIconsContainer>
  </FooterContainer>
)

export default Footer
