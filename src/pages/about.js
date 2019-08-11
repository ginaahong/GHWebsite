import React from 'react';
import { Link } from 'gatsby'

import Layout from './layout'
import Head from '../components/head'


const AboutPage = () => {
    return (
        <Layout>
            <Head title="About Me"/>
            <h1 id="about"> <br/> <br/> </h1>
            <h3>About Me.</h3>
            <h4>Hello! I’m <b><i>Gina</i></b>, a fourth-year Cognitive Systems student at UBC.</h4>
            <p>I’m interested in developing practical solutions to everyday problems. I’m constantly learning more about programming and enjoy the challenges that come with it.
            <br />
            <br />
            When I’m not building and learning, I’m playing my
            guitar <span role="img" aria-label="guitar">🎸</span>,
            designing stickers <span role="img" aria-label="palette">🎨</span>,
            or cooking <span role="img" aria-label="egg">🍳</span>!
            <br />
            <br />
            I am searching for a developer position in <b><i>2020 May-August</i></b>!
            <br /> <br />
            </p>
        </Layout>
    )
}

export default AboutPage
