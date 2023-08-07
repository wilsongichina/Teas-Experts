import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import TermsConditions from "../components/Legacy/TermsConditions"

const TermsConditionsPage = ({ data }) => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Terms and Conditions" />
    <TermsConditions data={data?.allContentfulTermsAndConditions?.nodes[0]} />

    <Footer data={data?.allContentfulFooter?.nodes[0]} />
  </Layout>
)

export const Head = () => <Seo title="Terms and Conditions" />

export default TermsConditionsPage

export const pageQuery = graphql`
  query ContentfulContent {
    allContentfulTermsAndConditions {
      nodes {
        description {
          raw
        }
        terms {
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