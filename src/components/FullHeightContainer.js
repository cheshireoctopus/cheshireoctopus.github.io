import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  min-height: calc(100vh - 322px);
`

const FullHeightContainer = ({ centerContent, children }) => (
  <Container center={centerContent}>{children}</Container>
)

FullHeightContainer.propTypes = {
  centerContent: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

FullHeightContainer.defaultProps = {
  centerContent: false,
}

export default FullHeightContainer
