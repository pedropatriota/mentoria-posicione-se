import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import { HorizontalRule } from '@styled-icons/material-outlined/HorizontalRule'

export const LineDots = styled(HorizontalRule)`
  display: none;

  @media (min-width: 620px) {
    display: block;
    width: 40px;
    height: 8px;
    border-radius: 5px;
    background: #c4c4c4;
    cursor: pointer;
  }

  rect {
    display: none;
  }
`

export const Container = styled.div`
  width: 100%;
  position: relative;

  div {
    img {
      max-width: 100%;
    }
  }

  .slick-dots {
    bottom: 30px !important;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;

      li {
        &.slick-active {
          ${LineDots} {
            background: #fff;
          }
        }
      }
    }
  }
`

export const Caption = styled.div`
  display: none;

  @media (min-width: 620px) {
    display: block;
    margin-left: 130px;
    width: 550px;
    position: absolute;
    top: 70%;
    margin-left: 130px;
    transform: translateY(-70%);
  }
  p {
    font-family: Philosopher;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 82px;
    letter-spacing: 0em;
    text-align: left;
    color: #f9f9f9;
  }
`
