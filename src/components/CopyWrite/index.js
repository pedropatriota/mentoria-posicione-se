import React from 'react'
import * as S from './style'

export default () => (
  <S.Copy>
    <span>
      {`© ${new Date().getFullYear()}, desenvolvido por `}
      <a href='https://www.ampliamed.com' target='_blank' rel='noreferrer'>
        Ampliamed
      </a>
    </span>
  </S.Copy>
)
