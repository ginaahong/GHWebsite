import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from './layout'

import github from '../images/github.png'
import external from '../images/external_link.png'

const TabsContainer = styled.div`
    width: 100%;
    display: inline;
    align-items: flex-start;
    position: relative;
    top: -2vh;
`;

const Tabs = styled.ul`
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
    font-weight: ${props => props.isActive ? 'book' : 'normal'};
    font-size: 0.85rem;
    padding-right: 3rem;
    text-align: left;
    width: 100%;
    &:hover,
    &:focus {
        color: #45A660;
    }
`;

const Highlight = styled.span`
    display: block;
    background: #898989;
    position: absolute;
    top: 4.2rem;
    left: ${props => props.activeTab > 0 ? (props.activeTab * 10 + 1.1 ) : 0.8 }rem;
    width: 8rem;
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
`;

const Desc = styled.div`
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
        }
    }
`;

const Links = styled.div`
    display: flex;
    a {
        max-height: 3rem;
        max-width: 3rem;
        margin-right: 2rem;
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
    }
`;


const ImgContainer = styled.div`
    float: right;
    width: 40%;
    margin-top: -5vh;
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
    filter: { fileAbsolutePath: { regex: "/projects/" } }
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

    const [ activeTab, setActiveTab ] = useState(1)

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
                const haslink = (edge.node.frontmatter.external.length !== 0)
                let ext;
                if (haslink) {
                    ext = <a href={frontm.external} target="_blank" rel="noopener noreferrer"><img src={external} alt="external site"/></a>
                } else {
                    ext = ""
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
                            <Links>
                                <a href={frontm.github} target="_blank" rel="noopener noreferrer"><img src={github} alt="github"/></a>
                                {ext}
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
