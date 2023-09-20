/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import ig from '../../images/social/ig.png'
import * as S from './style'

export default (props) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "logos" }
          relativePath: { eq: "logo-header.png" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 100, maxWidth: 210) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <S.Footer>
      <S.Wrapper>
        <S.ImageWrapper>
          <Img fluid={allFile.nodes[0].childImageSharp.fluid} />
        </S.ImageWrapper>

        <S.Social>
          <a href={props.instagram} target='_blank' rel='noreferrer'>
            <img src={ig} alt='' />
          </a>
        </S.Social>
      </S.Wrapper>
    </S.Footer>
  )
}
