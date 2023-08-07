import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"

const BlogPost = ({ newsHeader, blogs }) => {
  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
            <h2>{newsHeader.title}</h2>
            <div className="bar"></div>
            {renderRichText(newsHeader.description)}
          </div>

          <div className="row justify-content-center">
            {blogs && blogs.map(bd => {
              const featuredImage = {
                data: bd.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
                alt: bd.featuredImage?.node?.alt || ``,
              }
              return (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="false"
                  key={bd.id}
                >
                  <div className="single-blog-post">
                    <div className="blog-image">
                      <Link to={bd.uri}>
                        <GatsbyImage
                          image={featuredImage.data}
                          alt={featuredImage.alt}
                        />
                      </Link>

                      <div className="date">
                        <Icon.Calendar /> {bd.date}
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <h3>
                        <Link to="/blog-details">
                          {parse(bd.title)}
                        </Link>
                      </h3>

                      <span>
                        By <Link to="/author">{bd.author.node.name}</Link>
                      </span>

                      {parse(bd.excerpt)}

                      <Link to="/blog-details" className="read-more-btn">
                        Read More <Icon.ArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
