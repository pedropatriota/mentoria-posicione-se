import styled from 'styled-components'

export const CvWrapper = styled.section`
  width: 100%;

  @media (min-width: 620px) {
    margin: 160px 0;
  }
`

export const DescWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`
export const Triangle = styled.div`
  clip-path: polygon(100% 45%, 0 0, 0 100%);
  background: #efe1aa;
  position: absolute;
  top: 0;
  left: 0;
`
