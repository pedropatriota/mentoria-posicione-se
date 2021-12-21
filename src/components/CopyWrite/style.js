import styled from 'styled-components'

export const Copy = styled.div`
  width: 100%;
  height: 50px;
  background: #a08236;
  color: #fff;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 0 65px;
  }
  a {
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
      color: #222;
    }
  }
`
