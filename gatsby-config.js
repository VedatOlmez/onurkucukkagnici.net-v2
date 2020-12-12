/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `DT. Onur Küçükkağnıcı`,
    titleTemplate: `%s | Konya Ortodonti, Konya Ortodonti Fiyatları, Konya Ortodonti Tedavisi, Konya Şeffaf Plak, Konya Şeffaf Plak Tedavisi`,
    description: `Konya Ortodonti, Konya Ortodonti Fiyatları, Konya Ortodonti Tedavisi, Konya Şeffaf Plak, Konya Şeffaf Plak Tedavisi`,
    siteUrl: `https://onurkucukkagnici.net/`,
    image: `/images/konya-ortodonti-konya-ortodonti-tedavisi-konya-ortodonti-fiyatlari.png`,
    author: `SEO Uzmanı - Vedat Ölmez`,
    authorSite: `https://www.vedatolmez.com`,
    twitterUsername: `@`,
    twitterURL: `https://twitter.com/`,
    linkedInURL: `https://www.linkedin.com/`,
    githubURL: `https://github.com/`,

  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DT. Onur Küçükkağnıcı | Konya Ortodonti, Konya Ortodonti Fiyatları, Konya Ortodonti Tedavisi, Konya Şeffaf Plak, Konya Şeffaf Plak Tedavisi`,
        short_name: `DT. Onur Küçükkağnıcı | Konya Ortodonti`,
        start_url: `/`,
        background_color: `#0027EC`,
        theme_color: `#0027EC`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121912050-6",
        head: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/images`,
      },
    },
  ],
}
