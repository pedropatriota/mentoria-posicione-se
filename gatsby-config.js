module.exports = {
  siteMetadata: {
    title: `Clínica Allure`,
    description: `Clínica Especializada em Cirúrgia Plástica, Oftamololgia e Nutrologia.`,
    author: {
      name: `Dr. Gustavo Costa`,
      crm: 'CRMRJ - 847100',
    },
    siteUrl: 'https://www.allure.med.br',

    info: {
      tel: '(24)3336-1761',
      urlTel: 'tel.:+552433361761',
      whats: '(24)99947520',
      email: 'clinicaallure@outlook.com',
      urlEmail: 'mailto:clinicaallure@outlook.com',
      urlWhats: 'https://wa.me/5524999947520',
      address:
        'R. Trinta e Três, 164 - Vila Santa Cecília, Volta Redonda - RJ, 27261-310',
      urlAddress: 'https://goo.gl/maps/dZUJRuubmu9RC9F48',
      iframeAddress:
        'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14741.953251778763!2d-44.102466!3d-22.5233735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52103228b2e2afbe!2sAllure!5e0!3m2!1spt-BR!2sbr!4v1627524130643!5m2!1spt-BR!2sbr',
      instagram: `https://www.instagram.com/dr.gustavo_costa/`,
      facebook: `https://pt-br.facebook.com/drgustavocosta/`,
    },

    procedimentos: [
      {
        id: 1,
        title: 'Abdominoplastia',
        image: `/po01.png`,
        description: `Técnica cirúrgica que atua no tegumento, através da dermolipectomia abdominal, 
        fazendo-se ressecção do excesso de pele e tecido subcutâneo da região abdominal inferior.`,
      },
      {
        id: 2,
        title: 'Blefaroplastia',
        image: `/po02.png`,
        description: `Procedimento cirúrgico que melhora o aspecto das pálpebras superiores e inferiores,
         eliminando bolsas de gordura, rugas, flacidez e com isso rejuvenescendo a região em torno dos olhos.`,
      },
      {
        id: 3,
        title: 'Lipoaspiração',
        image: `/po03.png`,
        description: `Procedimento cirúrgico indicado para remodelar áreas específicas do corpo, removendo o excesso de depósitos de gordura, melhorando os contornos do corpo e a proporção.`,
      },
      {
        id: 4,
        title: 'Mastopxia',
        image: `/po04.png`,
        icon: '/mastopxia.png',
        description: `Cirurgia indicada para reposicionar a aréola e o tecido mamário, removendo o excesso de pele e comprimindo o tecido para compor o novo contorno da mama.`,
      },
      {
        id: 5,
        title: 'Reconstrução Mamária',
        image: `/po05.png`,
        description: `A reconstrução da mama é conseguida através de várias técnicas cirúrgicas que tentam restaurar a mama, seja na forma, aparência e o tamanho após a mastectomia.`,
      },
      {
        id: 6,
        title: 'Implante Mamário',
        image: `/po06.png`,
        description: `Os implantes são utilizados para dar volume a varias regiões do corpo, como seios, glúteos e ect., ou ainda restaurar o volume perdido após perda de peso ou gravidez.`,
      },
      {
        id: 7,
        title: 'Otoplastia',
        image: `/po07.png`,
        description: `Cirurgia da orelha – também conhecida como otoplastia – pode melhorar a forma, a posição ou as proporções das orelhas.`,
      },
      {
        id: 8,
        title: 'Rinoplastia',
        image: `/po08.png`,
        description: `Cirurgia que melhora a aparência e a proporção do nariz, realçando a harmonia facial e melhorando a autoestima, além de poder corrigir dificuldade respiratória.`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
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
        name: `Clinica Allure`,
        short_name: `Clinica Allure`,
        start_url: `/`,
        background_color: `#f9f9f9`,
        theme_color: `#f9f9f9`,
        display: `minimal-ui`,
        icon: `src/images/logos/logo_preta.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
