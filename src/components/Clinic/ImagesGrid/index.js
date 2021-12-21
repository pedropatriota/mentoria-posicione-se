import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

function ImagesGrid() {
  const data = useStaticQuery(graphql`
    query {
      clinic: allFile(
        filter: { sourceInstanceName: { eq: "clinica" } }
        sort: { fields: name }
      ) {
        nodes {
          name
          relativePath
          id
          childImageSharp {
            fluid(quality: 100, maxWidth: 945) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <S.Container
      data-sal='flip-left'
      data-sal-delay='300'
      data-sal-duration='1000'
      data-sal-easing='ease'
    >
      {data.clinic.nodes.map((img) => (
        <S.ImgClinic key={img.id}>
          <S.Image fluid={img.childImageSharp.fluid} />
        </S.ImgClinic>
      ))}
    </S.Container>
  )
}

export default ImagesGrid
