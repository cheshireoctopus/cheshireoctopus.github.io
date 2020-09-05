import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

const appear = keyframes`
  from {
    margin-top: 0.5em;
    opacity: 0;
  }

  to {
    margin-top: 0;
    opacity: 1;
  }
`
const Container = styled.div`
  animation: ${appear} ${({ duration }) => duration}s ease-in-out;
`

const Appear = ({ animationDuration, children }) => (
  <Container duration={animationDuration}>{children}</Container>
)

Appear.propTypes = {
  animationDuration: PropTypes.number,
}

Appear.defaultProps = {
  animationDuration: 0.2,
}

export default Appear
