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
        title: '7 Encontros Impactantes',
        image: `/proc01.png`,
        description: `Participação em sete encontros que guiarão sua jornada de transformação digital, proporcionando aprendizado prático e progresso mensurável.`,
      },
      {
        id: 2,
        title: '4 Bônus Exclusivos',
        image: `/proc02.png`,
        description: `Bônus exclusivos desenvolvidos com a colaboração de profissionais de destaque no mercado online.`,
      },
      {
        id: 3,
        title: 'PDF das Aulas',
        image: `/proc03.png`,
        description: `Acesso a materiais em PDF para auxiliar seu aprendizado e servir como referência prática.`,
      },
      {
        id: 4,
        title: 'Aulas Gravadas',
        image: `/proc04.png`,
        description: `Flexibilidade para assistir às aulas no seu próprio ritmo e revisitar o conteúdo sempre que necessário.
        `,
      },
      {
        id: 5,
        title: 'Mapa Mental',
        image: `/proc05.png`,
        icon: '/mastopxia.png',
        description: ` Receba um mapa mental estratégico elaborado em conjunto comigo como a primeira etapa da mentoria, direcionando sua jornada rumo ao sucesso digital.`,
      },

      {
        id: 6,
        title: 'Comunidade Empoderadora',
        image: `/proc06.png`,
        description: `Comunidade de mulheres determinadas a dominar o mundo digital. Juntas, construímos um ambiente de apoio e inspiração para o seu crescimento online.`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-215638171-1',
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'GTM-KPVLJ4B',
    //     includeInDevelopment: false,
    //   },
    // },
    {
      resolve: '@hutsoninc/gatsby-plugin-facebook-pixel',
      options: {
        pixelId: '714198784066851',
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
