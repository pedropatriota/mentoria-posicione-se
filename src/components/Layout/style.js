import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;

  main {
    margin: 0 auto;
    max-width: 90%;
    padding: 0 20px;

    @media (min-width: 620px) {
      max-width: 1025px;
    }
    @media (min-width: 1800px) {
      max-width: 1280px;
    }
  }
`
