import React from "react"
import parse from "html-react-parser"
import * as Icon from "react-feather"
import { graphql, Link } from "gatsby"

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import BlogSidebar from "../components/Blog/BlogSidebar"

import BlogImg9 from "../images/blog-image/blog9.jpg"

const BlogPage = ({ data }) => {
  const posts = data?.allWpPost?.nodes
  
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

                  return (
                    <div className="col-lg-6 col-md-6" key={post.id}>
                      <div className="single-blog-post-box">
                        <div className="entry-thumbnail">
                          <Link to={`/blog-detail/${post.id}`}>
                            <img src={BlogImg9} alt="Post" />
                          </Link>
                        </div>

                        <div className="entry-post-content">
                          <div className="entry-meta">
                            <ul>
                              <li>
                                <Link to="#">Admin</Link>
                              </li>
                              <li>{post.date}</li>
                            </ul>
                          </div>

                          <h3>
                            <Link to={`/blog-detail/${post.id}`}>
                              {parse(title)}
                            </Link>
                          </h3>
                          <p>
                            {parse(post.excerpt)}
                          </p>

                          <Link to={`/blog-detail/${post.id}`} className="learn-more-btn">
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
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            Prev
                          </Link>
                        </li>

                        <li className="page-item active">
                          <Link className="page-link" to="#">
                            1
                          </Link>
                        </li>

                        <li className="page-item">
                          <Link className="page-link" to="#">
                            2
                          </Link>
                        </li>

                        <li className="page-item">
                          <Link className="page-link" to="#">
                            3
                          </Link>
                        </li>

                        <li className="page-item">
                          <Link className="page-link" to="#">
                            Next
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>

      <Footer />
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
        excerpt
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`