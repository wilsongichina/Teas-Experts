import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import HowItWork from "../components/Common/HowItWork"

const HowItWorksPage = ({ data }) => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="" />

    <HowItWork data={data?.allContentfulHowDoIt?.nodes[0]} />

    <Footer data={data?.allContentfulFooter?.nodes[0]} />
  </Layout>
)

export const Head = () => <Seo title="How it works" />

export default HowItWorksPage

export const pageQuery = graphql`
  query ContentfulContent {
    allContentfulHowDoIt {
      nodes {
        title
        description {
          raw
        }
        steps {
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