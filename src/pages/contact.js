import React from 'react'

import Layout from './layout'
//import Head from '../components/head'

import contactStyles from './contact.module.scss'

import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import devpost from '../images/devpost.png'


const ContactPage = () => {
    return (
        <Layout>
            <h1 id="contact"> <br/> <br/> </h1>
            <h3>Contact Me</h3>
            <form action="mailto:me@ginahong.dev">
                <button className={contactStyles.sites}>Get in touch</button>
            </form>
            <p>
                <br />
                Wanna grab coffee? Have questions about TA-ing?
                <br />
                Just shoot me an email!
                <br /><br /><br />
                You can also find me on these sites:
                <sites className={contactStyles.othersites}>
                    <a href="https://github.com/ginaahong" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github"/>
                    </a>
                    <a href="https://linkedin.com/in/ginaahong" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                    <a href="https://devpost.com/ginaahong?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" rel="noopener noreferrer">
                        <img src={devpost} alt="devpost"/>
                    </a>
                </sites>
            </p>
        </Layout>
    )
}

export default ContactPage
