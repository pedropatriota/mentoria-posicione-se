import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './style'

const RectPoints = () => {
  const data = useStaticQuery(graphql`
    query {
      rect: file(relativePath: { eq: "icons/retangulo.svg" }) {
        publicURL
      }
    }
  `)

  return <S.Rect src={data.rect.publicURL} />
}

export default RectPoints
