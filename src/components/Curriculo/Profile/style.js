import styled from 'styled-components'

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 95px;
  }

  div {
    max-width: 100%;
    @media (min-width: 768px) {
      max-width: 50%;
    }

    h2 {
      font-size: 25px;
      font-weight: 600;
      line-height: 72px;
      letter-spacing: 0.06em;
      text-align: left;
    }

    p {
      font-size: 18px;
      line-height: 23px;
      letter-spacing: 0.06em;
      text-align: left;
      margin-bottom: 40px;
      font-family: 'Lora' sans-serif;
    }

    li {
      font-size: 18px;
      line-height: 26px;
      align-items: center;
      letter-spacing: 0.06em;
      margin-bottom: 24px;
    }
  }
`
export const CRM = styled.div`
  width: fit-content;
  padding: 8px;
  border: 2px solid #e3d18b;
  font-family: Lora;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.06em;
  color: #222222;
`
