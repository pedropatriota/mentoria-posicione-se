import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as S from './style'

export default () => {
  const data = useStaticQuery(graphql`
    query SiteProcedureQuery {
      site {
        siteMetadata {
          procedimentos {
            id
            title
            image
            description
          }
        }
      }
    }
  `)

  const { procedimentos } = data.site.siteMetadata
  return (
    <S.SliderWrapper
      id='procedimentos'
      data-sal='slide-up'
      data-sal-delay='300'
      data-sal-duration='1000'
      data-sal-easing='ease'
    >
      <h2> O que você vai receber</h2>
      {/* <S.Cards>
        {procedimentos.map((item) => (
          <S.FlipCard key={item.id}>
            <S.CardInner>
              <S.CardBack>
                <S.Description>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </S.Description>
              </S.CardBack>
            </S.CardInner>
          </S.FlipCard>
        ))}
      </S.Cards> */}

      <S.CardsContainer>
        {procedimentos.map(({ id, title, description }) => (
          <S.Card key={id}>
            <p>{title}</p>
            <span>{description}</span>
          </S.Card>
        ))}
      </S.CardsContainer>
    </S.SliderWrapper>
  )
}
