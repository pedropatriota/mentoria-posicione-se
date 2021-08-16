/* eslint-disable import/no-extraneous-dependencies */
import styled, { css } from 'styled-components'
// import Img from 'gatsby-image'

export const SliderWrapper = styled.div`
  width: 100%;
  margin-top: 30px;

  @media (min-width: 480px) {
    margin-top: 60px;
  }
  @media (min-width: 620px) {
    margin-top: 100px;
  }
  h2 {
    font-size: 25px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0.06em;
    text-align: center;
    color: #212469;
    margin-bottom: 15px;

    @media (min-width: 480px) {
      font-size: 35px;
      margin-bottom: 30px;
    }
  }
`

export const Cards = styled.div`
  min-width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    min-width: 100%;
    grid-template-columns: repeat(3, 1fr);
  }
`
export const Description = styled.div`
  background: #a08236;
  height: 176px;
  color: #fff;
  padding: 10px;
  transition: all 0.4s ease;
  border-radius: 4px;
  overflow-y: auto;

  @media (min-width: 768px) {
    padding: 20px;
    height: 240px;
  }

  p:first-child {
    font-size: min(20px, 5vw);
    font-style: normal;
    font-weight: 900;
    line-height: 27px;
    letter-spacing: 0.06em;
    text-align: center;
    margin-bottom: 10px;
    font-family: Philosopher;
  }

  p:last-child {
    font-size: min(16px, 3vw);
    font-style: normal;
    font-family: Lora;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.06em;
    text-align: center;
  }
`
export const CardInner = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const FlipCard = styled.div`
  background-color: transparent;
  max-width: 240px;
  height: 176px;
  perspective: 1000px;

  @media (max-width: 768px) {
    &:last-child {
      display: none;
    }
  }

  @media (min-width: 768px) {
    height: 240px;
  }

  &:hover {
    ${CardInner} {
      transform: rotateY(180deg);
    }
  }
`
export const ReusableCard = css`
  position: absolute;
  max-width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 4px;
`

export const CardFront = styled.div`
  ${ReusableCard}

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
`

export const CardBack = styled.div`
  ${ReusableCard}
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
`

export const Title = styled.div`
  font-weight: 300;
  text-align: center;
  font-family: Philosopher;
  font-size: min(20px, 4vw);
  font-style: normal;
  font-weight: 900;
  line-height: 27px;
  letter-spacing: 0.06em;
  text-align: center;
  height: 55px;
  color: #fff;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  text-shadow: 2px 2px 5px #666666;
`
