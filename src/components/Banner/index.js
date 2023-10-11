/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { isMobileOnly } from 'react-device-detect'
import header from '../../images/header2.svg'
import * as S from './style'
import FormData from '../Form'

// Sell

const Banner = React.forwardRef((props, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <S.LineDots>{i + 1}</S.LineDots>,
  }

  const redirectToPay = () => {
    window.location.replace(
      'https://pay.hotmart.com/I87110461O?off=mwpkh6pt&bid=1697039722948'
    )
  }

  const isForm = false

  return (
    <S.Container ref={ref}>
      {isForm ? (
        <FormData />
      ) : (
        <S.Button onClick={redirectToPay}>Fazer parte do Posicione-se</S.Button>
      )}
      {/* {isMobileOnly ? null : ( */}
      <Slider {...settings} className='overflow-hidden'>
        <div>
          <img src={header} alt='header' />
        </div>
      </Slider>
      {/* )} */}
    </S.Container>
  )
})

export default Banner
