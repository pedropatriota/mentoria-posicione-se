/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import mail from '../../images/icons/email.svg'
import fb from '../../images/social/fb.png'
import ig from '../../images/social/ig.png'
import * as S from './style'

export default (props) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "logos" }
          relativePath: { eq: "Logo_Allure.png" }
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
          <a href={props.facebook} target='_blank' rel='noreferrer'>
            <img src={fb} alt='' />
          </a>
          <a href={props.instagram} target='_blank' rel='noreferrer'>
            <img src={ig} alt='' />
          </a>
        </S.Social>
      </S.Wrapper>
    </S.Footer>
  )
}
