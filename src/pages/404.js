import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Não encontrado' />
    <h1>Página não encontrada</h1>
    <p>Você acessou uma página que não existe...</p>
  </Layout>
)

export default NotFoundPage
