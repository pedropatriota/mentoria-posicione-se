import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;

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

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 32px;

    li {
      font-size: 18px;
      text-align: left;
      font-weight: 400;
      line-height: 25px;
      letter-spacing: 0.06em;
    }
  }
`

export const KeyContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  opacity: 0.2;

  img {
    max-width: 100%;
    height: auto;
  }
`
