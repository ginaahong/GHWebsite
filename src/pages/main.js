import React from 'react'
import styled from 'styled-components'

import Layout from './layout.js'

// Link is react component, that preloads page content for instant loading

const Detail = styled.p`
    width: 75%;
`;

const MainPage = () => {
    return (
        <Layout>
            <h5 id="main"><br/><br/>Hello! My name is</h5>
            <h1>Gina Hong.</h1>
            <h2>I design, research, and code.</h2>
            <Detail>I'm a UBC Cognitive Systems student interested in building and designing websites and applications!
            </Detail>
        </Layout>
    )
}

export default MainPage
