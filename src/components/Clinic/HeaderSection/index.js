import React from 'react'
import * as S from './styles'

function HeaderSection() {
  return (
    <S.Container
      id='clinica'
      data-sal='slide-right'
      data-sal-delay='300'
      data-sal-duration='1000'
      data-sal-easing='ease'
    >
      <h2>Depoimentos</h2>
      <p>Veja o que que minhas alunas dizem</p>
    </S.Container>
  )
}

export default HeaderSection
