import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background: #efe1aa;
  position: relative;
  padding-top: 140px;

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
`

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 125px;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 540px;
  width: 100%;
  @media (min-width: 920px) {
    min-width: 540px;
  }
  form {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  p {
    font-size: 16px;
    font-style: normal;
    width: 100%;
    font-weight: 400;
    text-align: center;
    line-height: 30px;
    letter-spacing: 0.06em;
    color: #222;
    margin-bottom: 40px;
  }

  div {
    margin: 22px 0;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;

    input,
    textarea {
      background: #ffffff;
      padding: 8px;
      width: 100%;
      max-width: 540px;
      max-width: 540px;
      width: 80%;
      border: 1px solid #e9e9e9;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
      border-radius: 4px;

      @media (min-width: 768px) {
        width: 100%;
      }
    }
    input {
      height: 50px;
    }
    textarea {
      height: 180px;
    }
  }
`

export const Button = styled.button`
  height: 50px;
  width: 60%;
  text-transform: uppercase;
  border-radius: 4px;
  background: #a08236;
  border: 1px solid #a08236;
  color: #fff;
  margin: 20px 0;
  transition: 0.3s ease;
  font-family: Nunito;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 16px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
  transition: 0.3s;

  @media (min-width: 768px) {
    width: 100%;
  }

  &:hover,
  &:focus {
    background: #7d6424;
    color: #fff;
  }
`
export const Img = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    width: 518px;
    height: auto;
  }
`
