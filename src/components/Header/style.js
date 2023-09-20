import styled from 'styled-components'

export const Header = styled.header`
  position: relative;
  width: 100%;
  max-height: 200px;
  padding: 10px 10px;
  background: #ededed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 620px) {
    background: ${(props) => props.bg || 'transparent'};
    box-shadow: ${(props) =>
      props.inView ? 'none' : '0px 2px 20px rgba(0, 0, 0, 0.16)'};
    padding: ${(props) =>
      props.inView ? '10px 70px 10px 20px' : '10px 80px 10px 55px'};
    flex-direction: row;
    align-items: center;
    position: fixed !important;
    left: 0;
    transition: 0.3s ease-in;
    z-index: 3;
  }
`
