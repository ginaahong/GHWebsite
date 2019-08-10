import React from 'react'
import { Link } from 'gatsby'

import Layout from './layout'
import Head from '../components/head'


// Link is react component, that preloads page content for instant loading

const MainPage = () => {
    return (
        <Layout>
            <Head title="main" />
            <h6 id="main"> </h6>
            <h5>Hello! My name is</h5>
            <h1>Gina Hong.</h1>
            <h2>I design, research, and code.</h2>
            <p>I'm a UBC Cognitive Systems student <br />interested in building and designing websites <br />and applications!
            <br />
            </p>
        </Layout>
    )
}

export default MainPage
