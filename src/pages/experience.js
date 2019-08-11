import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from './layout'

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
            <div>
                <ul>
                    {data.allMarkdownRemark.edges.map((edge, i) => {
                        const company = edge.node.frontmatter.company
                        return (
                            <li key={i}>
                                <button
                                isActive={ activeTab === i }
                                onClick={ () => setActiveTab(i) }
                                role="tab"
                                aria-selected={ activeTab === i ? 'true' : 'false' }
                                id={`tab${i}`}
                                tabIndex={ activeTab === i ? '1' : '0'}>
                                <span>{company}</span>
                                </button>
                            </li>
                        );
                    })}
                    <span activetab={activeTab} ></span>
                </ul>
            </div>
            <content>
                {data.allMarkdownRemark.edges.map((edge, i) => {
                    const frontm = edge.node.frontmatter
                    return (
                        <div
                        key={i}
                        isActive={ activeTab === i}
                        id={`job${i}`}
                        role="tabpanel"
                        tabIndex="1"
                        aria-labelledby={`job${i}`}
                        aria-hidden={ activeTab !== i }
                        >
                            <h4>
                                <span>{frontm.position}</span>
                                <span>&nbsp;@&nbsp;</span>
                                <span>{frontm.company}</span>
                            </h4>
                            <h6>{frontm.from} - {frontm.to}</h6>
                            <div dangerouslySetInnerHTML={{ __html: edge.node.html }} />
                        </div>
                    );
                })}
            </content>
        </Layout>
    )
}

export default ExpPage
