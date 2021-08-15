/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Profile from './Profile'
import RectImg from './RectImg'
import * as S from './style'

export default () => {
  return (
    <S.CvWrapper id='doutor'>
      <S.DescWrapper>
        <RectImg />
        <Profile />
      </S.DescWrapper>
    </S.CvWrapper>
  )
}
