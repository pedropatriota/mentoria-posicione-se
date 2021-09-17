import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Procedures from '../components/Procedures'
import Curriculo from '../components/Curriculo'
import GlobalStyle from '../style/globalStyle'
import SEO from '../components/seo'
import ClinicHeader from '../components/Clinic/HeaderSection'
import ImagesGrid from '../components/Clinic/ImagesGrid'
import WhereWeAre from '../components/WhereWeAre'

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
        title='Home'
        description={site.siteMetadata.description}
        image={site.siteMetadata.image}
      />
      <Procedures />
      <Curriculo />
      <ClinicHeader />
      <ImagesGrid />
      <WhereWeAre />
    </Layout>
  )
}

export default IndexPage
