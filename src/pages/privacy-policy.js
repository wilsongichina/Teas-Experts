import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import PrivacyPolicy from "../components/Legacy/PrivacyPolicy"

const PrivacyPolicyPage = ({ data }) => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Privacy Policy" />
    <PrivacyPolicy privacyList={data?.allContentfulPrivacyPolicy?.nodes[0]?.privacies} />

    <Footer data={data?.allContentfulFooter?.nodes[0]} />
  </Layout>
)

export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage

export const pageQuery = graphql`
  query ContentfulContent {
    allContentfulPrivacyPolicy {
      nodes {
        privacies {
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