import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky';

import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import "circular-std";

import layoutStyles from './layout.module.scss'
//import background from '../images/main_bg.png'

//import Home from '../pages/index'
//import Contact from '../pages/contact'

const Layout = (props) => {

    return (
        <div className={layoutStyles.bg}>
            <StickyContainer>
                <Sticky>{({ style }) => <header id="header" style={style}><Header /></header>}</Sticky>
                {props.children}
                <Footer />
            </StickyContainer>
        </div>
    )
}
// functional component 'Layout' that returns some jsx

export default Layout
