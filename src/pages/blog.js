import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from './layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

import Header from '../components/header'
import Footer from '../components/footer'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
          allContentfulBlogPost (
            sort: {
              fields:publishedDate,
              order:DESC
            }
          ) {
            edges {
              node {
                title,
                publishedDate (formatString: "MMMM Do, YYYY"),
                slug
              }
            }
          }
        }
        `)

    console.log(data)

    return (
        <Layout>
            <Head title="Blog"/>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={ `/blog/${edge.node.slug}` }>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
            <Footer />
        </Layout>
    )
}

export default BlogPage

// Goal: Create an about page and a contact page
