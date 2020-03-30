import React,{useEffect} from "react"
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useStaticQuery,Link, graphql } from "gatsby"
import Image from "gatsby-image"
import DockerIcon from "../../static/docker.svg";
const ArticleLayout = ()=>{
    const data = useStaticQuery(graphql`
    query AvatarQuery {
      avatar: file(absolutePath: { regex: "/pirate.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
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
              thumbnail {
                childImageSharp {
                  fixed(width: 30, height: 30) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
// console.log(DockerIcon)
const siteTitle = data.site.siteMetadata.title
const posts = data.allMarkdownRemark.edges
    return(<div>
      <h1>All Essays</h1>
      
    <List>
  {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        let thumbnail
        if (node.frontmatter.thumbnail) {
          thumbnail = node.frontmatter.thumbnail.childImageSharp.fixed
        }
        console.log(thumbnail)
        return (
          
<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
          <ListItem button key={node.fields.slug}>
        <ListItemIcon style={{paddingRight:40}}>
          {/* <SendIcon /> */}
         
          {thumbnail ? <Image fixed={thumbnail} /> : <div />}
        </ListItemIcon>
        <ListItemText style={{color:"black",fontSize:"1.3rem"}} primary={title} />
                
      </ListItem>
      </Link>
        )
      })}
</List>
    </div>);




}

export default ArticleLayout;