import React from 'react'
import telIcon from '../../images/icons/telefone.svg'
import local from '../../images/icons/local.svg'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styles'

function WhereWeAre() {
  const data = useStaticQuery(graphql`
    query InfoQueries {
      site {
        siteMetadata {
          title
          info {
            tel
            urlTel
            whats
            urlWhats
            address
            urlAddress
            iframeAddress
          }
        }
      }
    }
  `)

  const {
    tel,
    urlTel,
    whats,
    urlWhats,
    address,
    urlAddress,
    iframeAddress,
  } = data.site.siteMetadata.info
  return (
    <S.Container
      data-sal='zoom-in'
      data-sal-delay='300'
      data-sal-duration='1000'
      data-sal-easing='ease'
    >
      <h2> Onde estamos </h2>
      <S.Info>
        <a href={urlAddress} target='_blank' rel='noreferrer'>
          <img src={local} alt='' />
          <span>{address}</span>
        </a>
        <div>
          <img src={telIcon} alt='' />
          <a href={urlTel} target='_blank' rel='noreferrer'>
            <span>{tel}</span>
          </a>
          <S.Circle />
          <a href={urlWhats} target='_blank' rel='noreferrer'>
            <span>{whats}</span>
          </a>
        </div>
      </S.Info>

      <S.Iframe>
        <iframe
          title='local'
          src={iframeAddress}
          frameBorder='0'
          allowFullScreen=''
          aria-hidden='false'
          tabIndex='0'
        />
      </S.Iframe>
    </S.Container>
  )
}

export default WhereWeAre
