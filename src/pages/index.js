import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

// Link is react component, that preloads page content for instant loading

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <h1>Hello.</h1>
            <h2>I'm Gina, a UBC COGS student!</h2>
            <p><Link to="/contact">Need a developer? Contact me.</Link>
            <br />
            <Link to="/about">About me.</Link>
            </p>
        </Layout>
    )
}

export default IndexPage
