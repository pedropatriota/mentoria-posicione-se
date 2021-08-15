import React from 'react'
import { Link } from 'gatsby'
import * as S from './style'
import Logo from './Logo/logo'
import Menu from '../Menu'

const Header = ({ bg, top, tColor, bColor, hColor, inView }) => (
  <S.Header bg={bg} top={top} inView={inView}>
    <Link to='/'>
      <Logo inView={inView} />
    </Link>
    <Menu tColor={tColor} bColor={bColor} hColor={hColor} />
  </S.Header>
)

export default Header
