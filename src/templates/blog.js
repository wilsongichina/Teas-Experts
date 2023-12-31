import React from "react"
import parse from "html-react-parser"
import * as Icon from "react-feather"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import BlogSidebar from "../components/Blog/BlogSidebar"

import DefaultPostImage from "../images/blog-image/blog9.jpg"

const BlogPage = ({ data, pageContext: { postsPerPage, nextPagePath, previousPagePath } }) => {
  const posts = data?.allWpPost?.nodes
  const tags = data?.allWpTag?.edges
  const popularPosts = posts.length > 0 ? (posts.length > 3 ? posts.slice(0, 3) : posts) : []
  
  if (!posts.length) {
    return (
      <Layout>
        <Navbar />
        <PageBanner pageTitle="Blog Right Sidebar" />
        <div className="blog-area ptb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <p>
                    No blog posts found. Add posts to your WordPress site and they'll
                    appear here!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle="Blog Right Sidebar" />

      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                
                {posts.map(post => {
                  const title = post.title
                  const author = post.author.node
                  const featuredImage = {
                    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
                    alt: post.featuredImage?.node?.alt || ``,
                  }

                  return (
                    <div className="col-lg-6 col-md-6" key={post.id}>
                      <div className="single-blog-post-box">
                        <div className="entry-thumbnail">
                          <Link to={post.uri}>
                            {featuredImage?.data ? (
                              <GatsbyImage
                                image={featuredImage.data}
                                alt={featuredImage.alt}
                                style={{ marginBottom: 50 }}
                              />
                            ) : 
                            (
                              <img src={DefaultPostImage} alt="Post" />
                            )}
                          </Link>
                        </div>

                        <div className="entry-post-content">
                          <div className="entry-meta">
                            <ul>
                              <li>
                                {author.name}
                              </li>
                              <li>{post.date}</li>
                            </ul>
                          </div>

                          <h3>
                            <Link to={post.uri}>
                              {parse(title)}
                            </Link>
                          </h3>
                          {parse(post.excerpt)}

                          <Link to={post.uri} className="learn-more-btn">
                            Read Story <Icon.Plus />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* Pagination */}
                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center">
                        {previousPagePath && <li className="page-item"><Link to={previousPagePath}>Previous page</Link></li>}
                        {nextPagePath && <li className="page-item"><Link to={nextPagePath}>Next page</Link></li>}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar posts={popularPosts} tags={tags} />
            </div>
          </div>
        </div>
      </div>

      <Footer data={data?.allContentfulFooter?.nodes[0]} />
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default BlogPage

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        id
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: TRACED_SVG
                  layout: FULL_WIDTH
                )
              }
            }
          }
        }
      }
    }
    allWpTag {
      edges {
        tag: node {
          id
          name
          slug
          count
        }
      }
    }
    allContentfulFooter {
      nodes {
        address
        copyright
        email
        phone
        specialist {
          title
          description {
            raw
          }
        }
      }
    }
  }
`