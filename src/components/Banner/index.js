/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Img from 'gatsby-image'
import * as S from './style'

const Banner = React.forwardRef((props, ref) => {
  const data = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          id
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

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
      <Slider {...settings} className='overflow-hidden'>
        <div>
          <Img fluid={data.backgrounds.nodes[0].childImageSharp.fluid} />
          <S.Caption>
            <p>Nosso objetivo é a sua satisfação</p>
          </S.Caption>
        </div>

        <div>
          <Img fluid={data.backgrounds.nodes[1].childImageSharp.fluid} />
          <S.Caption>
            <p>Conheça nossos procedimentos estéticos </p>
          </S.Caption>
        </div>

        <div>
          <Img fluid={data.backgrounds.nodes[2].childImageSharp.fluid} />
          <S.Caption>
            <p>Venha conhecer nosso espaço</p>
          </S.Caption>
        </div>
      </Slider>
    </S.Container>
  )
})

export default Banner
