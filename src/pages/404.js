import React from 'react'
import { Link } from 'gatsby'

import errorStyle from './error.module.scss'
import Layout1 from '../components/layout'
import Layout2 from '../pages/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout1>
            <Layout2>
                <Head title="404 Page not found"/>
                <br/>
                <h1 className={errorStyle.h1}>404</h1>
                <h2 className={errorStyle.h2}>Page Not Found.</h2>
                <form action='/'>
                    <button type="submit">Go Home</button>
                </form>
            </Layout2>
        </Layout1>
    )
}

export default NotFound
