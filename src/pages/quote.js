import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import GetQuoteForm from "../components/Contact/GetQuoteForm"

const QuotePage = ({ data }) => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Get a Quote" />

    <GetQuoteForm />

    <Footer data={data?.allContentfulFooter?.nodes[0]} />
  </Layout>
)

export const Head = () => <Seo title="Get a Quote" />

export default QuotePage

export const pageQuery = graphql`
  query ContentfulContent {
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