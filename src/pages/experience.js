import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from './layout'

// Credit to https://brittanychiang.com/ on formating the tabs and utilizing useState!

const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;
  top: -2vh;
  a {
      text-decoration: inherit;
      color: inherit;
  }
`;

const Tabs = styled.ul`
    display: block;
    position: relative;
    width: max-content;
    z-index: 3;
    top: 2vh;

    li {
        list-style-type: none;
        margin-left: -50px;
    }
`;

const Tab = styled.button`
    font-family: Consolas;
    font-size: 0.9rem;
    font-weight: ${props => props.isActive ? 'book' : 'normal' };
    color: ${props => props.isActive ? '#45A660' : '#898989' };
    padding: 1.2rem 1.5rem 0rem;
    margin-top: 0.3rem;
    outline: none;
    border: none;
    background-color: transparent;
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
    top: ${props => props.activetab > 0 ? (props.activetab * 3.1 + 1.2 ) : 0.8 }rem;
    left: 0.3rem;
    width: 0.15rem;
    height: 2.5rem;
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

const TabContent = styled.div`
    outline: none;
    border: none;
    left: -2vw;
    width: 100%;
    height: auto;
    z-index: ${props => (props.isActive ? 2 : -1)};
    visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
    transition-duration: ${props => (props.isActive ? '1s' : '0s')};
    position: ${props => (props.isActive ? 'relative' : 'absolute')};

    h4 {
        margin-top: 1rem;
        font-weight: 600;
    }
    ul {
        li {
            font-size: 0.87rem;
            a {
                text-decoration: none;
                color: inherit;
            }
        }
    }
`;

const Company = styled.span`
    color: #45A660;
`;


const ExpPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                filter: { fileAbsolutePath: { regex: "/jobs/" } }
                sort: { fields: [ frontmatter___to ], order: DESC }
            )
            {
                edges {
                    node {
                        frontmatter {
                            company
                            position
                            from (formatString: "MMM YYYY")
                            to (formatString: "MMM YYYY")
                        }
                        html
                    }
                }
            }
        }`)

    const [ activeTab, setActiveTab ] = useState(0);

    return (
        <Layout>
            <p id="experience"><br/><br/></p>
            <h3>Experience.</h3>
            <TabsContainer>
            <Tabs>
            {data.allMarkdownRemark.edges.map((edge, i) => {
                const company = edge.node.frontmatter.company
                return (
                    <li key={i}>
                    <Tab
                    isActive={ activeTab === i }
                    onClick={ () => setActiveTab(i) }
                    role="tab"
                    aria-selected={ activeTab === i ? 'true' : 'false' }
                    id={`tab${i}`}
                    tabIndex={ activeTab === i ? '0' : '-1'}>
                    <span>{company}</span>
                    </Tab>
                    </li>
                );
            })}
            <Highlight activetab={activeTab}></Highlight>
            </Tabs>
            <Content>
            {data.allMarkdownRemark.edges.map((edge, i) => {
                const frontm = edge.node.frontmatter
                return (
                    <TabContent
                    key={i}
                    isActive={ activeTab === i }
                    id={`job${i}`}
                    role="tabpanel"
                    tabIndex="1"
                    aria-labelledby={`job${i}`}
                    aria-hidden={ activeTab !== i }
                    >
                    <h4>
                    <span>{frontm.position}</span>
                    <Company>&nbsp;@&nbsp;{frontm.company}</Company>
                    </h4>
                    <h6>{frontm.from.toUpperCase()} - {frontm.to.toUpperCase()}</h6>
                    <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
                    </TabContent>
                );
            })}
            </Content>
            </TabsContainer>
        </Layout>
    )
}

ExpPage.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ExpPage
