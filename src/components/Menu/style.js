import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'

export const Ul = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  text-transform: uppercase;
  margin-top: 10px;
  flex-wrap: wrap;

  @media (min-width: 620px) {
    margin-top: 0;
    width: 80%;
    justify-content: flex-end;
    flex-wrap: nowrap;
    li {
      position: relative;
      padding: 5px 0;
      margin: 0 10px;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.2);
      }
      &:last-child {
        &:hover {
          transform: scale(1);
        }
      }
    }
  }
`

export const Link = styled(AnchorLink)`
  font-family: Philosopher;
  font-size: min(16px, 3vw);
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.06em;
  color: #333;

  @media (min-width: 620px) {
    color: ${(props) => props.tColor};
    padding: 10px;
  }
`
export const BookWa = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 4px;
  background: #25d366;
  padding: 10px;
  gap: 8px;
  color: #fff;
  transition: background 0.4s;

  @media (min-width: 620px) {
    margin: 0;
  }

  &:hover {
    background: #20b859;
  }

  span {
    font-family: Lora;
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    letter-spacing: 0.06em;
  }
`

export const WaLogo = styled(Whatsapp)`
  color: #fff;
  width: 24px;
`
