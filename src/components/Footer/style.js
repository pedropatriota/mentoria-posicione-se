/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  background: #242323;
  padding: 20px 10px;
  display: flex;
  height: auto;
  align-items: flex-end;
  justify-content: space-between;
`

export const ImageWrapper = styled.div`
  width: 180px;
  @media (min-width: 620px) {
    height: auto;
    width: 210px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`

export const Mail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  a {
    color: initial;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0.06em;
  }
`

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    max-width: 28px;
    cursor: pointer;
    margin-top: 10px;

    @media (min-width: 620px) {
      max-width: 38px;
      margin-top: 0;
    }
  }

  @media (min-width: 620px) {
    gap: 30px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 620px) {
    flex-direction: row;
  }
`
