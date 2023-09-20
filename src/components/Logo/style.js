import styled from 'styled-components'
import Img from 'gatsby-image'

export const Logo = styled(Img)`
  margin: 0 auto;
  width: 300px;
  @media (min-width: 620px) {
    width: 500px;
    transition: width 0.3s ease-in-out;
  }
`
