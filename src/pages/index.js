import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Procedures from '../components/Procedures'
import Curriculo from '../components/Curriculo'
import GlobalStyle from '../style/globalStyle'
import SEO from '../components/seo'
import ClinicHeader from '../components/Clinic/HeaderSection'
import ImagesGrid from '../components/Clinic/ImagesGrid'
import FAQ from '../components/Faq'
import Who from '../components/Who'
import Logo from '../components/Logo/logo'

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

  return (
    <Layout>
      <GlobalStyle />
      <SEO
        title='Camilla Gomes'
        description={site.siteMetadata.description}
        image={site.siteMetadata.image}
      />
      <Logo />
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
