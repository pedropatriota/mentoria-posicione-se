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
export const Button = styled.button`
  top: 55%;
  left: 10%;
  height: 50px;
  position: absolute;
  z-index: 999;
  max-width: 540px;
  width: 80%;
  text-transform: uppercase;
  border-radius: 4px;
  background: #a08236;
  border: 1px solid #a08236;
  color: #fff;
  margin: 20px 0 40px 0;
  transition: 0.3s ease;
  font-family: Nunito;
  font-size: 15px;
  font-style: normal;
  font-weight: 800;
  line-height: 16px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
  transition: 0.3s;

  &:hover,
  &:focus {
    background: #7d6424;
    color: #fff;
  }

  &:disabled {
    cursor: not-allowed;
    background: #ccc;
  }
`
