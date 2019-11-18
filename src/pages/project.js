import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from './layout'

import github from '../images/github.png'
import external from '../images/external_link.png'
import devpostimg from '../images/devpost.png'


const TabsContainer = styled.div`
    width: 110%;
    display: inline;
    align-items: flex-start;
    position: relative;
    top: -2vh;
    outline: none;
    border: none;
    &:hover,
    &:focus {
        outline: 0;
        border: none;
        -moz-outline-style: none;
    }
`;

const Tabs = styled.ul`
    outline: none;
    border: none;
    padding-left: 0;
    display: flex;
    list-style-type: none;
    height: max-content;
    z-index: 3;
    top: 2vh;
    margin-left: -3%;
`;

const Tab = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    color: ${props => props.isActive ? '#45A660' : '#898989' };
    font-family: CircularStd;
    font-weight: ${props => props.isActive ? '600' : 'normal'};
    font-size: 0.9rem;
    padding-right: 3rem;
    text-align: left;
    width: 100%;
    &:hover,
    &:focus {
        color: #45A660;
        outline: 0;
        border: none;
        -moz-outline-style: none;
    }
`;

const Highlight = styled.span`
    display: block;
    background: #898989;
    position: absolute;
    top: 4.2rem;
    left: ${props => props.activeTab > 0 ? (props.activeTab * 8.9 + props.activeTab ) : 2.25 }rem;
    width: ${props => props.activeTab > 0 ? 7 : 4.7 }rem;;
    height: 0.15rem;
    z-index: 10;
    margin-left: -45px;
    transition-duration: ${props => (props.isActive ? '1s' : '0s')};
`;

const Content = styled.div`
    position: relative;
    padding-top: 12px;
    padding-left: 30px;
    flex-grow: 1;
    &:hover,
    &:focus {
        outline: 0;
        border: none;
        -moz-outline-style: none;
    }
`;

const Desc = styled.div`
    outline: none;
    border: none;
    width: 110%;
    height: auto;
    margin-left: -5%;
    margin-right: auto;
    z-index: ${props => (props.isActive ? 2 : -1)};
    visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
    transition-duration: ${props => (props.isActive ? '1s' : '0s')};
    position: ${props => (props.isActive ? 'relative' : 'absolute')};
`;

const Detail = styled.div`
    float: left
    align-text: left;
    width: 60%;

    h6 {
        font: consolas;
        margin-bottom: 0.4rem;
        font-size: 0.95rem;
        font-weight: bold;
    }

    h4 {
        font-weight: 600;
        font-size: 1.3rem;
    }

    ul {
        li {
            font-size: 0.87rem;
            margin-left: -5%;
            a {
                text-decoration: inherit;
                font-weight: 400;
                color: #45A660;
                &:hover,
                &:focus {
                    outline: 0;
                    border: none;
                    -moz-outline-style: none;
                    font-weight: 600;
                }
            }
        }
    }
`;

const Tech = styled.div`
    display: flex;
    h6 {
        margin-right: 1rem;
        font-size: 0.8rem;
        color: color;
        font-weight: 100;
        margin-bottom: 1.5rem;
    }
    h6:hover {
        color: #484848;
    }
`;

const Links = styled.div`
    display: flex;
    a {
        max-height: 2.5rem;
        max-width: 2.5rem;
        margin-right: 2rem;
        &:hover,
        &:focus {
            outline: 0;
            border: none;
            -moz-outline-style: none;
        }
    }
    img {
        max-width: 2.5rem;
        opacity: 1;
        transition: opacity .25s ease-in-out;
        -moz-transition: opacity .25s ease-in-out;
        -webkit-transition: opacity .25s ease-in-out;
    }
    img:hover {
        position: relative;
        top: -1px;
        opacity: 0.6;
        outline: 0;
        -moz-outline-style: none;
    }
    &:hover,
    &:focus {
        outline: 0;
        border: none;
        -moz-outline-style: none;
    }
`;


const ImgContainer = styled.div`
    float: right;
    width: 40%;
    margin-top: -45%;
`;

const FeaturedImage = styled(Img)`
    height: 100%;
    width: 100%;
    position: relative;
    float: right;
    margin-top: 15%;
`;

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
  allMarkdownRemark (
    filter: { fileAbsolutePath: { regex: "/projects/"}, frontmatter : { order : { in : ["1", "2", "3", "4" ] }}}
    sort: { fields: [ frontmatter___order ], order: ASC }
  ) {
    edges {
      node {
        frontmatter {
          order
          type
          title
          team
          github
          external
          devpost
          tech
          cover {
            childImageSharp {
                fluid(maxWidth: 700, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
            }
          }
        }
        html
      }
    }
  }
}
        `)

    const [ activeTab, setActiveTab ] = useState(0)

    return (
        <Layout>
            <p id="project"><br/><br/></p>
            <h3>Projects.</h3>
            <TabsContainer>
            <Tabs>
            {data.allMarkdownRemark.edges.map((edge, i) => {
                const title = edge.node.frontmatter.title
                return (
                    <li key={i}>
                    <Tab
                    isActive={activeTab===i}
                    onClick={ () => setActiveTab(i) }
                    role="tab"
                    aria-selected={activeTab===i ? 'true' : 'false'}
                    id={`tab${i}`}
                    tabIndex={ activeTab === i ? '0' : '-1'}>
                        <span>{title}</span>
                    </Tab>
                    </li>
                );
            })}
            <Highlight activeTab={activeTab}></Highlight>
            </Tabs>
            <Content>
            {data.allMarkdownRemark.edges.map((edge, i) => {
                const frontm = edge.node.frontmatter
                const hasextlink = (edge.node.frontmatter.external.length !== 0)
                const hasdevpost = (edge.node.frontmatter.devpost.length !== 0)
                let ext;
                if (hasextlink) {
                    ext = <a href={frontm.external} target="_blank" rel="noopener noreferrer"><img src={external} alt="external site"/></a>
                } else {
                    ext = ""
                }
                let devpost;
                if (hasdevpost) {
                    devpost = <a href={frontm.devpost} target="_blank" rel="noopener noreferrer"><img src={devpostimg} alt="devpost"/></a>
                } else {
                    devpost = ""
                }

                return (
                    <Desc
                    key={i}
                    isActive={activeTab === i}
                    id={`proj${i}`}
                    role="tabpanel"
                    tabIndex="1"
                    aria-labelledby={`job${i}`}
                    aria-hidden={ activeTab !== i}
                    >
                        <Detail>
                            <h6><span>{frontm.type}</span></h6>
                            <h4>{frontm.title}</h4>
                            <div dangerouslySetInnerHTML={{__html: edge.node.html} } />
                            <Tech>{frontm.tech.map((tech) => {
                                return (
                                    <h6>+{tech}</h6>
                                );
                            })}</Tech>
                            <Links>
                                <a href={frontm.github} target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                                {ext}
                                {devpost}
                            </Links>
                        </Detail>
                        <ImgContainer>
                            <FeaturedImage fluid={frontm.cover.childImageSharp.fluid} />
                        </ImgContainer>
                    </Desc>
                )
            })}
            </Content>
            </TabsContainer>
        </Layout>
    )
}

ProjectPage.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ProjectPage
