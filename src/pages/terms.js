import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import TermsConditions from "../components/Legacy/TermsConditions"

const TermsConditionsPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Terms and Conditions" />
    <TermsConditions />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Terms and Conditions" />

export default TermsConditionsPage
