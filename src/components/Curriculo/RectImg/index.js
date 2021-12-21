import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './style'

const Rect = () => {
  const data = useStaticQuery(graphql`
    query {
      rect: file(relativePath: { eq: "bg2.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <S.Rect fluid={data.rect.childImageSharp.fluid} />
}

export default Rect
