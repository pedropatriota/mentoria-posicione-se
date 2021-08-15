import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;
  margin-bottom: 30px;
  @media (min-width: 620px) {
    max-width: 1025px;
    margin: 0 auto 120px auto;
  }
  @media (min-width: 1800px) {
    max-width: 1280px;
  }

  h2 {
    width: 100%;
    text-align: center;
    font-size: 25px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0.06em;
    color: #212469;
    margin-bottom: 15px;

    @media (min-width: 480px) {
      font-size: 35px;
      margin-bottom: 30px;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  div,
  a {
    font-family: Lora;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    span {
      font-family: Lora;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0.06em;
      color: #222;
    }
  }
`

export const Circle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #222;
`
export const Iframe = styled.div`
  width: 100%;
  overflow: hidden;
  height: 400px;
  margin-top: 40px;

  @media (min-width: 1800px) {
    height: 450px;
  }

  iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
`
