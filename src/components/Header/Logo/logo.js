/* eslint-disable no-nested-ternary */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { isMobileOnly } from 'react-device-detect'
import * as S from './style'

const Logo = ({ inView }) => {
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

  return (
    <S.Logo
      inView={inView}
      fluid={
        isMobileOnly
          ? allFile.edges[2].node.childImageSharp.fluid
          : inView
          ? allFile.edges[1].node.childImageSharp.fluid
          : allFile.edges[2].node.childImageSharp.fluid
      }
    />
  )
}

export default Logo
