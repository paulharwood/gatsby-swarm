import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Link, graphql, StaticQuery } from 'gatsby'

class DirectoryListing extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (

      <div className="listings">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {posts &&
              posts.map(({ node: post }) => (
                <div className="listing" key={post.id}>
                  <article
                    className="is-child notification"
                  >
                    <header>
                      <h2 className="post-meta">
                        <Link
                          className="title has-text-primary"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </h2>
                    </header>
                    <p>
                      {post.excerpt}

                      <br />
                      <br />
                      {post.frontmatter.tags && post.frontmatter.tags.length ? (
                          <ul className="taglist">
                            {post.frontmatter.tags.map((tag) => (
                              <li key={tag + `tag`}>
                                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                              </li>
                            ))}
                          </ul>
                      ) : null}
                    </p>
                    <Link className="button" to={post.fields.slug}>
                      See details
                    </Link>

                    <p className="added">
                      Updated {post.frontmatter.date}
                    </p>
                  </article>
                    <hr></hr>
                </div>

              ))}
          </div>
        </div>
      </div>
    )
  }
}

DirectoryListing.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query DirectoryListingQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "directory-listing" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
              id
              fields {
                slug
              }
              frontmatter {
                tags
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <DirectoryListing data={data} count={count} />}
  />
)
