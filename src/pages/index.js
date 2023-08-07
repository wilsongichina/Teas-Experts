import * as React from "react"
import { graphql } from "gatsby"
// import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/ITStartup/MainBanner"
import Features from "../components/ITStartup/Features"
import ServicesArea from "../components/ITStartup/ServicesArea"
import OurFeatures from "../components/ITStartup/OurFeatures"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import RecentWorks from "../components/Common/RecentWorks"
import Faq from "../components/Common/Faq"
import BlogPost from "../components/Common/BlogPost"
import Footer from "../components/_App/Footer"

const IndexPage = ({ data }) => {
  const homeData = data?.allContentfulHomePage?.nodes[0];
  const recentBlogs = data?.allWpPost?.nodes

  return (
    <Layout>

      <Navbar />

      <MainBanner data={homeData?.bannerDescription} />

      <Features title={homeData?.workflowTitle} flows={homeData?.flows} />

      <ServicesArea
        title={homeData?.serviceTitle}
        description={homeData?.serviceDescription}
        services={homeData?.services}
        hireData={homeData?.hire}
      />

      <OurFeatures data={homeData?.whyChoose} />

      <Team explains={homeData?.explains} users={homeData?.users} />

      <FunFactsArea data={data?.allContentfulAboutUsPage?.nodes[0]?.contents[4]} />

      <RecentWorks header={homeData?.recentWorks} images={homeData?.recentImages} />

      <Faq faqs={homeData?.faqs} />

      <BlogPost newsHeader={homeData?.news} blogs={recentBlogs} />

      <Footer data={data?.allContentfulFooter?.nodes[0]} />
  
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const pageQuery = graphql`
  query ContentfulHomepage {
    allContentfulHomePage {
      nodes {
        title
        bannerDescription {
          raw
        }
        workflowTitle
        flows {
          id
          title
          description {
            raw
          }
        }
        serviceTitle
        serviceDescription {
          raw
        }
        services {
          description {
            raw
          }
          id
          title
        }
        hire {
          title
          description {
            raw
          }
        }
        whyChoose {
          id
          title
          description {
            raw
          }
        }
        explains {
          id
          title
          description {
            raw
          }
        }
        users {
          id
          name
          role
          description {
            raw
          }
          photo {
            gatsbyImageData(width: 130, quality: 100)
          }
          facebookLink
          twitterLink
          linkedinLink
          gitlabLink
        }
        recentWorks {
          title
          description {
            raw
          }
        }
        recentImages {
          id
          title
          description
          link
          workImage {
            gatsbyImageData(width: 300)
          }
        }
        faqs {
          id
          title
          description {
            raw
          }
        }
        news {
          title
          description {
            raw
          }
        }
      }
    }
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 3
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