import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justifyContent: space-between;
  margin-top: 36px;

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
  }
`
const PrevLink = styled.div`
  flex-basis: 33.33%;

  @media screen and (max-width: 425px) {
    flex-basis: 50%;
  }
`

const NextLink = styled.div`
  flex-basis: 33.33%;
  text-align: right;

  @media screen and (max-width: 425px) {
    flex-basis: 50%;
  }
`

const PageNumbers = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 33.33%;
  justify-content: center;

  @media screen and (max-width: 425px) {
    flex-basis: 100%;
    margin-top: 16px;
    order: 1;
  }
`

const PageNumber = styled(Link)`
  background-image: none;
  font-weight: ${({ bold }) => bold && 'bold'};
  font-size: ${({ large }) => large && '24px'};
  margin-left: ${({ pushLeft }) => pushLeft && '24px'};
`

const Pagination = ({
  currentPage,
  numPages
}) => {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Container>
      <PrevLink>
        {!isFirstPage && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
      </PrevLink>
      <PageNumbers>
        {Array.from({ length: numPages }, (_, i) => (
          <PageNumber
            key={`pagination-number${i + 1}`}
            to={`/${i === 0 ? '' : i + 1}`}
            bold={i === currentPage - 1}
            large={i === currentPage - 1}
            pushLeft={i !== 0}
          >
            {i + 1}
          </PageNumber>
        ))}
      </PageNumbers>
      <NextLink>
        {!isLastPage && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </NextLink>
    </Container>
  )
}

export default Pagination
