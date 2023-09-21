import styled from 'styled-components'

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

export const CardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
  font-size: 18px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`

export const Card = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  border: 5px solid #a08236;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 10px 6px 5px -3px rgba(0, 0, 0, 0.75);

  p {
    font-size: 23px;
    color: #e0aa23 !important;
  }
`
