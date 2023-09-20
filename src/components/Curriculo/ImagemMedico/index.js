import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './style'

const Doctor = () => {
  const data = useStaticQuery(graphql`
    query {
      doctor: file(relativePath: { eq: "perfil.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <S.Doctor fluid={data.doctor.childImageSharp.fluid} />
}

export default Doctor
