import React from 'react'
import styled from 'styled-components'

import Layout from './layout'
import Head from '../components/head'


// Link is react component, that preloads page content for instant loading

const Detail = styled.p`
    width: 75%;
    text-align: left;
`;

const MainPage = () => {
    return (
        <Layout>
            <Head title="main" />
            <h6 id="main"><br/><br/><br/><br/><br/></h6>
            <h5>Hello! My name is</h5>
            <h1>Gina Hong.</h1>
            <h2>I design, research, and code.</h2>
            <Detail>I'm a UBC Cognitive Systems student interested in building and designing websites and applications!
            <br />
            </Detail>
        </Layout>
    )
}

export default MainPage
