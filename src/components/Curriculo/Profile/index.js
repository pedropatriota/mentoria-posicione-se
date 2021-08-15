import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Doctor from '../ImagemMedico'
import RectPoints from './RectPoints'
import * as S from './style'

export default () => {
  const data = useStaticQuery(graphql`
    query SiteAuthorQuery {
      site {
        siteMetadata {
          author {
            name
            crm
          }
        }
      }
    }
  `)

  const { crm, name } = data.site.siteMetadata.author

  return (
    <S.ImageWrapper
      data-sal='slide-right'
      data-sal-delay='300'
      data-sal-duration='1000'
      data-sal-easing='ease'
    >
      <Doctor />
      <div>
        <h2>{name}</h2>
        <p>Cirurgião Plástico</p>

        <ul>
          <li>
            <RectPoints /> Graduado em Medicina pela Universidade Severino
            Sombra – USS.
          </li>
          <li>
            <RectPoints /> Residência Médica em Cirurgia Geral na Santa Casa da
            Misericórdia em Goiânia.
          </li>
          <li>
            <RectPoints /> Residência Médica em Cirurgia Plástica (5 anos) na
            Santa Casa da Misericórdia em Goiânia.
          </li>

          <li>
            <RectPoints /> Membro aspirante da Sociedade Brasileira de Cirurgia
            Plástica.
          </li>
        </ul>

        <S.CRM>{crm}</S.CRM>
      </div>
    </S.ImageWrapper>
  )
}
