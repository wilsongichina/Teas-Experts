import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import RefundPolicy from "../components/Legacy/RefundPolicy"

const RefundPolicyPage = ({ data }) => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Refund Policy" />
    <RefundPolicy refund={data?.allContentfulRefundPolicy?.nodes[0]} />

    <Footer data={data?.allContentfulFooter?.nodes[0]} />
  </Layout>
)

export const Head = () => <Seo title="Refund Policy" />

export default RefundPolicyPage

export const pageQuery = graphql`
  query ContentfulContent {
    allContentfulRefundPolicy {
      nodes {
        title
        description {
          raw
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