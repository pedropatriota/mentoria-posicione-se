import styled from 'styled-components'

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background: transparent;
  position: absolute;
  top: 10%;
  transform: translateY(-50%);
  left: 5%;
  padding: 20px;
  border-radius: 15px;

  @media (max-width: 980px) {
    left: 0;
    margin: 0 auto;
    width: 100%;
    position: relative;
    margin-top: 30px;
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
`

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 125px;
  z-index: 4;
  text-align: center;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 540px;
  width: 100%;

  form {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  p {
    font-style: normal;
    width: 100%;
    font-weight: 400;
    text-align: center;
    line-height: 30px;
    letter-spacing: 0.06em;
    color: #222;
    margin-bottom: 20px;
  }

  div {
    margin: 10px 0;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;

    input,
    textarea {
      color: #000 !important;
      background: #ffffff;
      padding: 8px;
      color: #000;
      width: 100%;
      max-width: 540px;
      width: 80%;
      border: 1px solid #e9e9e9;
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
      border-radius: 4px;
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
  font-size: 12px;
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
export const Img = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    width: 518px;
    height: auto;
  }
`
