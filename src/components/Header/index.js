import React from 'react'
import { Link } from 'gatsby'
import { isMobile } from 'react-device-detect'
import * as S from './style'
import Logo from './Logo/logo'
import Menu from '../Menu'

const Header = ({ bg, top, tColor, bColor, hColor, inView }) => (
  <S.Header bg={bg} top={top} inView={inView}>
    {!isMobile && (
      <Link to='/'>
        <Logo />
      </Link>
    )}
    <Menu tColor={tColor} bColor={bColor} hColor={hColor} />
  </S.Header>
)

export default Header
