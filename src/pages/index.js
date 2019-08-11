import React from 'react'
//import PropTypes from "prop-types"

import Layout from '../components/layout'
//import Head from '../components/head'

//import Footer from '../components/footer'
import Main from './main'
import About from './about'
import Contact from './contact'
import Project from './project'
import Experience from './experience'


// Link is react component, that preloads page content for instant loading

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => {
    return (
        <Layout>
            <Main />
            <About />
            <Experience />
            <Project />
            <Contact />
        </Layout>
    )
}

export default IndexPage
