import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    const data_author = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
        `)

    return (
        <footer className={footerStyles.footer}>
            <h6>Built by {data_author.site.siteMetadata.author}, © 2019</h6>
        </footer>
    )
}

export default Footer
