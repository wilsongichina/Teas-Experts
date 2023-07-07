import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import BlogImg1 from "../../images/blog-image/blog1.jpg"
import BlogImg2 from "../../images/blog-image/blog2.jpg"
import BlogImg3 from "../../images/blog-image/blog3.jpg"

const BlogPost = () => {
  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
            <h2>The News from Our Blog</h2>
            <div className="bar"></div>
            <p>
              "Are you looking to stay informed about the latest news and updates regarding TEAS exam help, HESI exam help, GED exam help, and online class assistance?
              Look no further! We provide a reliable source of information to keep you updated and informed about these subjects."
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img src={BlogImg1} alt="Blog Post" />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 15, 2023
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link to="/blog-details">
                      The Security Risks of Changing Package Owners
                    </Link>
                  </h3>

                  <span>
                    By <Link to="/author">Admin</Link>
                  </span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img src={BlogImg2} alt="Blog Post" />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 17, 2023
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link to="/blog-details">
                      Tips to Protecting Your Business and Family
                    </Link>
                  </h3>

                  <span>
                    By <Link to="/author">Smith</Link>
                  </span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link to="/blog-details">
                    <img src={BlogImg3} alt="Blog Post" />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 19, 2023
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link to="/blog-details">
                      Protect Your Workplace from Cyber Attacks
                    </Link>
                  </h3>

                  <span>
                    By <Link to="/author">John</Link>
                  </span>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>

                  <Link to="/blog-details" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
