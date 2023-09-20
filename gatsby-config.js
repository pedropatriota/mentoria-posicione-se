require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mentoria Posicione-se`,
    description: `Eleve Seu Posicionamento Digital para o Próximo Nível! Você irá transformar não apenas sua presença online, mas também sua confiança, seu impacto e suas perspectivas. Você descobrirá como criar uma marca pessoal forte que ressoa com seu público, atraindo seguidores leais e oportunidades incríveis.`,
    author: {
      name: `Camilla Gomes`,
      slogan: 'Mulheres em destaque',
    },
    siteUrl: `https://ampliamed.com`,

    info: {
      whats: '(24)99936-5490',
      email: 'stephaniecamillags@gmail.com',
      urlEmail: 'mailto:stephaniecamillags@gmail.com',
      urlWhats: 'https://wa.me/5524999365490',
      instagram: `https://www.instagram.com/camillagomesgs/`,
    },

    procedimentos: [
      {
        id: 1,
        title: 'Implante Capilar',
        image: `/proc01.png`,
        description: `O implante consiste na retirada de folículos capilares saudáveis de uma região da cabeça e sua implantação na área em que há calvície.`,
      },
      {
        id: 2,
        title: 'Lipoaspiração',
        image: `/proc02.png`,
        description: `Cirurgia indicada para remover o excesso de gordura, melhorando a proporção do corpo.`,
      },
      {
        id: 3,
        title: 'Blefaroplastia',
        image: `/proc03.png`,
        description: `Cirugia indicada para eliminar bolsas de gordura e flacidez na região em torno dos olhos.`,
      },
      {
        id: 4,
        title: 'Abdominoplastia',
        image: `/proc04.png`,
        description: `Cirurgia indicada para remoção da da flacidez da região abdominal inferior, através ressecção do excesso de pele.`,
      },
      {
        id: 5,
        title: 'Mastopxia',
        image: `/proc05.png`,
        icon: '/mastopxia.png',
        description: `Cirurgia indicada para reposicionar a aréola e o tecido mamário, para compor o novo contorno da mama.`,
      },

      {
        id: 6,
        title: 'Implante Mamário',
        image: `/proc06.png`,
        description: `Os implantes são utilizados para dar volume a várias regiões do corpo, como seios e glúteos, por exemplo.`,
      },
      {
        id: 7,
        title: 'Otoplastia',
        image: `/proc07.png`,
        description: `Cirurgia indicada para melhorar o posicionamento e as proporções das orelhas.`,
      },
      {
        id: 8,
        title: 'Rinoplastia',
        image: `/proc08.png`,
        description: `Cirurgia indicada para remodelar a proporção do nariz, além de poder corrigir dificuldade respiratória.`,
      },
      {
        id: 9,
        title: 'Clínica Allure',
        image: `/proc09.png`,
        description: `R. Trinta e Três, 164 - Vila Santa Cecília, Volta Redonda - RJ, 27261-310`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-215638171-1',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KPVLJ4B',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1214612195706304',
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `backgrounds`,
        path: `${__dirname}/src/images/slider`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/images/logos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clinica`,
        path: `${__dirname}/src/images/clinica`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Camilla Gomes`,
        short_name: `Camilla Gomes`,
        start_url: `/https://www.ampliamed.com`,
        background_color: `#f9f9f9`,
        theme_color: `#f9f9f9`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo-header.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ],
}
