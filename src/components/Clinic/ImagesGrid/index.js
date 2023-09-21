import React from 'react'
import d01 from '../../../images/d01.svg'
import d02 from '../../../images/d02.svg'
import d03 from '../../../images/d03.svg'
import d04 from '../../../images/d04.svg'

import * as S from './styles'

function ImagesGrid() {
  const images = [d01, d02, d03, d04]

  return (
    <S.Container
      data-sal='flip-left'
      data-sal-delay='300'
      data-sal-duration='1000'
      data-sal-easing='ease'
    >
      {images.map((img) => (
        <S.ImgClinic key={img}>
          <S.Image src={img} />
        </S.ImgClinic>
      ))}
    </S.Container>
  )
}

export default ImagesGrid
