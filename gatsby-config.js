/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    siteMetadata: {
        title: 'Gina Hong',
        author: 'Gina Hong',
        description: 'This is a site about Gina Hong!'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        // {
        //     resolve: 'gatsby-source-contentful',
        //     options: {
        //         spaceId: process.env.CONTENTFUL_SPACE_ID,
        //         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        //     }
        // },
        'gatsby-plugin-sass',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/`
            }
        },
        `gatsby-transformer-sharp`,
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}
