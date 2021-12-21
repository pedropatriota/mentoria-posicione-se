import styled from 'styled-components'

export const Container = styled.div`
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
    margin-bottom: 15px;

    @media (min-width: 480px) {
      font-size: 30px;
      margin-bottom: 30px;
    }
  }

  p {
    font-size: 18px;
    color: #222;
    text-align: center;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.06em;
    margin-bottom: 40px;
  }
`
