import React from 'react'

import Layout from './layout'
//import Head from '../components/head'

import contactStyles from './contact.module.scss'

import github from '../images/github.png'
import linkedin from '../images/linkedin.png'


const ContactPage = () => {
    return (
        <Layout>
            <h1 id="contact"> <br/> <br/> </h1>
            <h3>Contact Me</h3>
            <form action="mailto:example@email.com">
                <button className={contactStyles.sites}>Get in touch</button>
            </form>
            <p>
                <br />
                Wanna grab coffee? Have questions about TA-ing?
                <br />
                Just shoot me an email!
                <br /><br /><br />
                You can also find me on these sites:
                <sites className={contactStyles.sites}>
                    <a href="https://github.com/ginaahong" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github"/>
                    </a>
                    <a href="https://linkedin.com/in/ginaahong" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                </sites>
            </p>
        </Layout>
    )
}

export default ContactPage
