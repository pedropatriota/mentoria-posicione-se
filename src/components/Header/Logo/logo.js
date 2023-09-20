/* eslint-disable no-nested-ternary */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './style'

const Logo = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "logos" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(quality: 100, maxWidth: 230) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return <S.Logo fluid={allFile.edges[1].node.childImageSharp.fluid} />
}

export default Logo
