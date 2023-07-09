import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import PricingCards from "../components/PricingPlans/PricingCards"

const PricingPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Pricing" />

    <div className="pt-80">
      <PricingCards />
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Pricing" />

export default PricingPage
