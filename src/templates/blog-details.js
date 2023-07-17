import React from "react"
import * as Icon from "react-feather"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import BlogSidebar from "../components/Blog/BlogSidebar"

import BlogDetailsImg from "../images/blog-image/blog-details.jpg"

import ClientImg1 from "../images/client-image/client1.jpg"
// import ClientImg2 from "../images/client-image/client2.jpg"
// import ClientImg3 from "../images/client-image/client3.jpg"
// import ClientImg4 from "../images/client-image/client4.jpg"
// import ClientImg5 from "../images/client-image/client5.jpg"

const BlogDetailsPage = ({data: { previous, next, post, popularPosts, allTags }}) => {
  const featuredImage = {
    data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }
  const postTags = post.tags?.nodes
  const tags = allTags?.edges

  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle="Blog Details" />

      <div className="blog-details-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  {featuredImage?.data ? (
                    <GatsbyImage
                      image={featuredImage.data}
                      alt={featuredImage.alt}
                      style={{ marginBottom: 50 }}
                    />
                  ) : <img src={BlogDetailsImg} alt="Post" />}
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Icon.Clock /> {post.date}
                      </li>
                      <li>
                        <Icon.User /> {post?.author?.node.name}
                      </li>
                    </ul>
                  </div>

                  <h2>{post.title}</h2>

                  {parse(post.excerpt)}
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    {postTags && postTags.map(tag => 
                      <Link to={`/blogsByTag/${tag.slug}`}>{tag.name}</Link>
                    )}
                  </div>
                </div>

                {post?.comments?.nodes.length > 0 && 
                  <div className="comments-area">
                    <h3 className="comments-title">{post?.comments?.nodes.length} Comments:</h3>

                    <ol className="comment-list">
                      {post.comments.nodes.map(com => {
                        return (
                          <li className="comment" key={com.id}>
                            <article className="comment-body">
                              <footer className="comment-meta">
                                <div className="comment-author vcard">
                                  <img
                                    src={ClientImg1}
                                    className="avatar"
                                    alt="Post"
                                  />
                                  <b className="fn">{com.author.node.name}</b>
                                  <span className="says">says:</span>
                                </div>

                                <div className="comment-metadata">
                                  at {com.date}
                                </div>
                              </footer>

                              <div className="comment-content">
                                {parse(com.content)}
                              </div>

                              {/* <div className="reply">
                                <Link to="#comment" className="comment-reply-link">
                                  Reply
                                </Link>
                              </div> */}
                            </article>

                            {/* <ol className="children">
                              <li className="comment">
                                <article className="comment-body">
                                  <footer className="comment-meta">
                                    <div className="comment-author vcard">
                                      <img
                                        src={ClientImg2}
                                        className="avatar"
                                        alt="Post"
                                      />
                                      <b className="fn">Steven Smith</b>
                                      <span className="says">says:</span>
                                    </div>

                                    <div className="comment-metadata">
                                      April 24, 2023 at 10:59 am
                                    </div>
                                  </footer>

                                  <div className="comment-content">
                                    <p>
                                      Lorem Ipsum has been the industry’s standard dummy
                                      text ever since the 1500s, when an unknown printer
                                      took a galley of type and scrambled it to make a
                                      type specimen.
                                    </p>
                                  </div>

                                  <div className="reply">
                                    <Link to="#comment" className="comment-reply-link">
                                      Reply
                                    </Link>
                                  </div>
                                </article>
                              </li>

                              <ol className="children">
                                <li className="comment">
                                  <article className="comment-body">
                                    <footer className="comment-meta">
                                      <div className="comment-author vcard">
                                        <img
                                          src={ClientImg3}
                                          className="avatar"
                                          alt="Post"
                                        />
                                        <b className="fn">Sarah Taylor</b>
                                        <span className="says">says:</span>
                                      </div>

                                      <div className="comment-metadata">
                                        April 24, 2023 at 10:59 am
                                      </div>
                                    </footer>

                                    <div className="comment-content">
                                      <p>
                                        Lorem Ipsum has been the industry’s standard
                                        dummy text ever since the 1500s, when an unknown
                                        printer took a galley of type and scrambled it
                                        to make a type specimen.
                                      </p>
                                    </div>

                                    <div className="reply">
                                      <Link to="#comment" className="comment-reply-link">
                                        Reply
                                      </Link>
                                    </div>
                                  </article>
                                </li>
                              </ol>
                            </ol> */}
                          </li>
                        )}
                      )}
                    </ol>

                    <div id="comment" className="comment-respond">
                      <h3 className="comment-reply-title">Leave a Reply</h3>

                      <form className="comment-form">
                        <p className="comment-notes">
                          <span id="email-notes">
                            Your email address will not be published.
                          </span>
                          Required fields are marked
                          <span className="required">*</span>
                        </p>

                        <p className="comment-form-comment">
                          <label htmlFor='comment'>Comment</label>
                          <textarea
                            name="comment"
                            id="comment"
                            cols="45"
                            rows="5"
                            maxLength="65525"
                            required="required"
                          ></textarea>
                        </p>

                        <p className="comment-form-author">
                          <label htmlFor='password'>
                            Name <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            id="author"
                            name="author"
                            required="required"
                          />
                        </p>

                        <p className="comment-form-email">
                          <label htmlFor='email'>
                            Email <span className="required">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required="required"
                          />
                        </p>

                        <p className="comment-form-url">
                          <label htmlFor='website'>Website</label>
                          <input type="url" id="url" name="url" />
                        </p>

                        <p className="comment-form-cookies-consent">
                          <input
                            type="checkbox"
                            value="yes"
                            name="comment-cookies-consent"
                            id="comment-cookies-consent"
                          />
                          <label htmlFor="commentCookiesConsent">
                            Save my name, email, and website in this browser for the
                            next time I comment.
                          </label>
                        </p>
                        
                        <p className="form-submit">
                          <input
                            type="submit"
                            name="submit"
                            id="submit"
                            className="submit"
                            value="Post Comment"
                          />
                        </p>
                      </form>
                    </div>
                  </div>                
                }
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar posts={popularPosts?.nodes} tags={tags} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  )
}

export const Head = () => <Seo title="Blog Details" />

export default BlogDetailsPage

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
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
      author {
        node {
          name
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      comments {
        nodes {
          id
          author {
            node {
              name
            }
          }
          content
          date(formatString: "MMMM DD, YYYY hh-mm-ss")
        }
      }
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
    popularPosts: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      nodes {
        id
        excerpt
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
    allTags: allWpTag {
      edges {
        tag: node {
          id
          name
          slug
          count
        }
      }
    }
  }

`