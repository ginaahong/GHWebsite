import React from 'react';
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const AboutPage = () => {
    return (
        <Layout>
            <Head title="About Me"/>
            <h1>About Me.</h1>
            <h2>Hello! I’m Gina, a fourth-year Cognitive Systems student at UBC.</h2>
            <p>I’m interested in developing practical solutions to everyday problems. I’m constantly learning more about programming and enjoy the challenges that come with it.
            <br />
            <br />
            When I’m not building and learning, I’m playing my
            guitar <span role="img" aria-label="guitar">🎸</span>,
            designing stickers <span role="img" aria-label="palette">🎨</span>,
            or cooking <span role="img" aria-label="egg">🍳</span>!
            <br />
            <br />
            I’m currently searching for a co-op position for 2019 Sept-Dec.
            <br /> <br />
            <Link to="/contact">You can reach me here</Link>
            </p>
        </Layout>
    )
}

export default AboutPage
