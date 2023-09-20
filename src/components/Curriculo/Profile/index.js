/* eslint-disable react/no-unescaped-entities */
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
          }
        }
      }
    }
  `)

  const { name } = data.site.siteMetadata.author

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
        <ul>
          <li>
            <RectPoints />
            Graduado em Publicidade e Propaganda pela UniFOA.
          </li>
          <li>
            <RectPoints />
            CEO e fundadora da Ampliamed. Desde 2016 desenvolvendo médicos e
            clínicas a expandir sua imagem na internet, através de técnicas de
            marketing digital.
          </li>
        </ul>
        <p>
          Especialista em posicionamento digital, dedicada a capacitá-la para o
          sucesso online. Minha experiência com dezenas de mulheres resultou em
          multiplicação de faturamento, preços elevados, independência digital e
          confiança destacada nas redes sociais.
        </p>
        <p>
          Agora, eu estou abrindo as portas do meu nicho para todas as mulheres.
          É uma honra compartilhar meu conhecimento e experiência com vocês na
          mentoria "POSICIONE-se". Estou comprometida em capacitá-las para o
          sucesso digital e estou ansiosa para fazer parte de sua jornada. Vamos
          brilhar juntas!
        </p>
      </div>
    </S.ImageWrapper>
  )
}
