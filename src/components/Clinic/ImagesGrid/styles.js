import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(1, 1fr);
  gap: 10px;
  margin: 0 auto 30px auto;

  @media (min-width: 620px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto 120px auto;
  }
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.5s ease;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
`

export const ImgClinic = styled.div`
  max-width: 945px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
  transition: transform 0.3s;
  overflow: hidden;

  &:hover ${Image} {
    transform: scale(1.05);
    overflow: hidden;
  }
`
