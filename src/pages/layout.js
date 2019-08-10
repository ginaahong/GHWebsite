import React from 'react'

import '../styles/index.scss'

import Header from '../components/header'
import layoutStyles from '../components/layout.module.scss'

//import Home from '../pages/index'
//import Contact from '../pages/contact'

const Layout = (props) => {
    return (
        <div>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
// functional component 'Layout' that returns some jsx

export default Layout
