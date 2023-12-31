import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useInView } from 'react-intersection-observer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Header from '../Header'
import Banner from '../Banner'
import Footer from '../Footer'
import CopyWrite from '../CopyWrite'

import * as S from './style'

function Layout({ children }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          info {
            email
            urlEmail
            instagram
          }
        }
      }
    }
  `)

  const { email, urlEmail, instagram } = data.site.siteMetadata.info
  return (
    <S.Wrapper>
      <Header
        inView={inView}
        bg={!inView ? '#242323' : ''}
        tColor={!inView ? '#333' : '#f9f9f9'}
        bColor={!inView ? '#333' : '#fff'}
      />

      <Banner ref={ref} />
      {/* <Form /> */}

      <main>{children}</main>

      <Footer instagram={instagram} email={email} urlEmail={urlEmail} />

      <CopyWrite />
      <ToastContainer />
    </S.Wrapper>
  )
}

export default Layout
