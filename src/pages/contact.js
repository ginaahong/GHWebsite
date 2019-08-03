import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'


const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact Me"/>
            <h1>Contact Me</h1>
            <p>Wanna grab coffee? Have questions about TA-ing?
            <br />
            Just shoot me an email!
            <br /><br />
            You can also find me on these sites: <a href="https://github.com/ginaahong" target="_blank" rel="noopener noreferrer">Gina's Github</a></p>
        </Layout>
    )
}

export default ContactPage
