import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
          <p className="">{post.node.frontmatter.title}</p>
        </Link>
        <p className="">{post.node.frontmatter.date}</p>

        {post.node.frontmatter.tags && post.node.frontmatter.tags.length ? (
          <p> {post.node.frontmatter.tags.length} </p>

        ) : null }

      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} directory listing${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <p className=" is-bold-light">{tagHeader}</p>
                <ul className="tagResults">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date
          }
        }
      }
    }
  }
`



// {post.frontmatter.tags && post.frontmatter.tags.length ? (
//     <ul className="taglist">
//       {post.frontmatter.tags.map((tag) => (
//         <li key={tag + `tag`}>
//           <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
//         </li>
//       ))}
//     </ul>
// ) : null}
// </p>
// <p className="added">
// Added {post.frontmatter.date}
// </p>
