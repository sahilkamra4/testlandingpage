import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from "gatsby-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Latest posts" />
      {/* <Bio /> */}
      {/* {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
               
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}  ☕️ 5 min read</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
              
              
            </section>
          </article>
        )

      })} */}

      <Grid container style={{ marginTop: '20px', background: '', minHeight: '100vh', maxWidth: '100%' }}>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ background: "" }}>
          <div style={{
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            marginTop: '40%',
            // justifyItems: "center"
            // alignContent: "center",
            // alignItems: "center"
            // justifyContent: 'center'
          }}>          <div style={{ display: 'flex', width: '100%' }}>
              <Typography variant="h1" component="h2" gutterBottom style={{ fontSize: '32px', }}>
                Learn French 1 on 1 with Handpicked Teachers
      </Typography>
            </div>
            <div style={{ display: 'flex', width: '100%' }}>
              {/* <Typography variant="body1" gutterBottom >
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna ipsum dolor sit amet consectetur.



      </Typography> */}
            </div>

          </div>

        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ background: '' }}>

          <Image
            fluid={data.avatar.childImageSharp.fluid}
            // alt={author.name}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              // borderRadius: `100%`,
            }}
          // imgStyle={{
          //   borderRadius: `50%`,
          // }}
          />
        </Grid>
      </Grid>

      <Grid container style={{ background: '', height: '100vh' }}>


      </Grid>
    </Layout>
  )
}

export default BlogIndex
// avatar: file(absolutePath: { regex: "/language_learning.jpg/" }) {
//   childImageSharp {
//     fixed(width: 100, height: 100) {
//       ...GatsbyImageSharpFixed
//     }
//   }
// }
export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/3969910.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 500,quality:100 ) {
                 ...GatsbyImageSharpFluid
             }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
