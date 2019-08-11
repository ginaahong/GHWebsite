import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "gatsby-image"

import Layout from './layout'

const ImgContainer = styled.div`
    float: right;
`;

const FeaturedImage = styled(Img)`
    height: 25vh;
    width: 25vw;
    vertical-align: middle;
    position: relative;
    float: right;
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

    return (
        <Layout>
            <p id="project"><br/><br/></p>
            <h3>Projects.</h3>
            <div>
            <div>
            {data.allMarkdownRemark.edges.map((edge, i) => {
                const title = edge.node.frontmatter.title
                return (
                    <li key={i}>
                    <button>
                        <span>{title}</span>
                    </button>
                    </li>
                );
            })}
            <span></span>
            </div>
            <div>
            {data.allMarkdownRemark.edges.map((edge, i) => {
                const frontm = edge.node.frontmatter
                return (
                    <div>
                        <div>
                            <h6><span>{frontm.type}</span></h6>
                            <h4>{frontm.title}</h4>
                            <div dangerouslySetInnerHTML={{__html: edge.node.html} } />
                        </div>
                        <ImgContainer>
                            <FeaturedImage fluid={frontm.cover.childImageSharp.fluid} />
                        </ImgContainer>
                    </div>
                )
            })}
            </div>
            </div>
        </Layout>
    )
}

export default ProjectPage
