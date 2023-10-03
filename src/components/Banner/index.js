/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { isMobileOnly } from 'react-device-detect'
import header from '../../images/slider/head01.svg'
import * as S from './style'
import FormData from '../Form'

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

  return (
    <S.Container ref={ref}>
      <FormData />
      {isMobileOnly ? null : (
        <Slider {...settings} className='overflow-hidden'>
          <div>
            <img src={header} alt='header' />
          </div>
        </Slider>
      )}
    </S.Container>
  )
})

export default Banner
