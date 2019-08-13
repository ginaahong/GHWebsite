import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

import logo from '../images/GH_big.png'
import resume from '../images/gina_hong_resume_v3.pdf'
import "circular-std";

const Header = () => {
    /*
    const [scroll, setScroll] = useState(0)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY < 10
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    */

    // const data_title = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    //     `)

    return (
        <header id="header" name="header" className={headerStyles.header}>
            <Link className={headerStyles.logo_box} activeClassName={headerStyles.logo_box} to="/#main">
                <img src={logo} alt="logo"/>
            </Link>
            <ul className={headerStyles.navList}>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#experience">
                        Experience
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#project">
                        Project
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/#contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <a className={headerStyles.navItem} href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header
