import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import PrivacyPolicy from "../components/Legacy/PrivacyPolicy"

const PrivacyPolicyPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Privacy Policy" />
    <PrivacyPolicy />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage
