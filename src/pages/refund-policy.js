import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import RefundPolicy from "../components/Legacy/RefundPolicy"

const RefundPolicyPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Refund Policy" />
    <RefundPolicy />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Refund Policy" />

export default RefundPolicyPage
