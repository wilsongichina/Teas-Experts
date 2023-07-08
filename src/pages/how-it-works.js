import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import HowItWork from "../components/Common/HowItWork"

const HowItWorksPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="" />

    <HowItWork />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="How it works" />

export default HowItWorksPage
