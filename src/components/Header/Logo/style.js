import styled from 'styled-components'
import Img from 'gatsby-image'

export const Logo = styled(Img)`
  width: 80px;
  @media (min-width: 620px) {
    width: ${(props) => (props.inView ? '134px' : '110px')};
    transition: width 0.3s ease-in-out;
  }
`
