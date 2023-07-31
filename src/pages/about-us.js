import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import FunFactsArea from "../components/Common/FunFactsArea"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"

import AboutOne from "../images/about-one.png"

const AboutUsPage = ({ data }) => {
  const contents = data?.allContentfulAboutUsPage?.nodes[0]?.contents
  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={AboutOne} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>About TeasExperts.com</h2>
                  <div className="bar"></div>
                  {renderRichText(contents[0].description)}
                </div>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>{contents[1].title}</h3>
                  {renderRichText(contents[1].description)}
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>{contents[2].title}</h3>
                  {renderRichText(contents[2].description)}
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>{contents[3].title}</h3>
                  {renderRichText(contents[3].description)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FunFactsArea data={contents[4]} />

      <Footer data={data?.allContentfulFooter?.nodes[0]} />
    </Layout>
  )
}

export const Head = () => <Seo title="About Us" />

export default AboutUsPage

export const pageQuery = graphql`
  query ContentfulAboutUs {
    allContentfulAboutUsPage {
      nodes {
        id
        contents {
          cid
          title
          description {
            raw
          }
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