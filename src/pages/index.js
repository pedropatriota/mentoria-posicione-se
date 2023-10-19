import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Procedures from '../components/Procedures'
import Curriculo from '../components/Curriculo'
import GlobalStyle from '../style/globalStyle'
import SEO from '../components/seo'
import FAQ from '../components/Faq'
import Who from '../components/Who'
import logo from '../images/logo.svg'
import ClinicHeader from '../components/Clinic/HeaderSection'
import ImagesGrid from '../components/Clinic/ImagesGrid'

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
            }
          }
        }
      }
    `
  )

  // Sell

  return (
    <Layout>
      <GlobalStyle />
      <SEO
        title='Camilla Gomes'
        description={site.siteMetadata.description}
        image={site.siteMetadata.image}
      />
      <div style={{ display: 'grid', placeContent: 'center' }}>
        <img src={logo} alt='logo' width='100%' />
      </div>
      <Who />
      <Procedures />
      <Curriculo />
      <ClinicHeader />
      <ImagesGrid />
      <FAQ />
    </Layout>
  )
}

export default IndexPage
