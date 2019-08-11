import React from 'react'

import Layout from './layout'
import Head from '../components/head'


// Link is react component, that preloads page content for instant loading

const MainPage = () => {
    return (
        <Layout>
            <Head title="main" />
            <h6 id="main"><br/><br/><br/><br/><br/></h6>
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
