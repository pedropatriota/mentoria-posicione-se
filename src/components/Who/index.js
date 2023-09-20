/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import RectPoints from '../Curriculo/Profile/RectPoints'
import * as S from './styles'

function Who() {
  return (
    <S.Container
      id='who'
      data-sal='slide-right'
      data-sal-delay='300'
      data-sal-duration='1000'
      data-sal-easing='ease'
    >
      <h2>Para quem é?</h2>

      <ul>
        <li>
          <RectPoints />
          <span>
            Para mulheres que anseiam por se destacar nas redes sociais, mas
            enfrentam a incerteza de como começar.
          </span>
        </li>
      </ul>

      <ul>
        <li>
          <RectPoints />
          <span>
            Para aquelas que desejam impulsionar sua presença digital, mas se
            sentem sobrecarregadas com a competição online.
          </span>
        </li>
      </ul>

      <ul>
        <li>
          <RectPoints />
          <span>
            Para as mulheres que trabalharam incansavelmente para seus clientes,
            mas se esqueceram de promover a si mesmas e sua própria marca.
          </span>
        </li>
      </ul>

      <ul>
        <li>
          <RectPoints />
          <span>
            Para as que anseiam por conquistar independência digital, mas
            enfrentam obstáculos emocionais, como a falta de confiança e medo de
            serem julgadas.
          </span>
        </li>
      </ul>
    </S.Container>
  )
}

export default Who
