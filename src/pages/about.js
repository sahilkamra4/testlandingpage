import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const about =({data,location})=>{
    const siteTitle = data.site.siteMetadata.title
    return(
        <Layout location={location} title={siteTitle}>
    <SEO title="About me" />
      {/* <Bio />    */}
          <h3>About me</h3>
          <div>
            Hi! I'm Sahil Kamra, A full stack software developer and writer
            <br></br><br></br>
            I write Essays on growth and user acquisition
          </div>
        </Layout>
    )


}

export const pageQuery = graphql`
  query {
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


export default about