import React from 'react'
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
  animation: ${appear} 0.2s ease-in-out;
`

const Appear = ({ children }) => <Container>{children}</Container>

export default Appear
