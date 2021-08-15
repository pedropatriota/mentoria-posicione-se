import styled from 'styled-components'
import Img from 'gatsby-image'

export const Rect = styled(Img)`
  width: 100%;
  position: absolute !important;
  top: 60px !important;
  left: -75% !important;
  transform: translate(50%, -20%);

  @media (min-width: 620px) {
    top: 0 !important;
    left: -50% !important;
    width: 550px;
  }
`
