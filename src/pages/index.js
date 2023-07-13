import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/ITStartup/MainBanner"
import Features from "../components/ITStartup/Features"
import ServicesArea from "../components/ITStartup/ServicesArea"
import OurFeatures from "../components/ITStartup/OurFeatures"
import Team from "../components/Common/Team"
import FunFactsArea from "../components/Common/FunFactsArea"
import RecentWorks from "../components/Common/RecentWorks"
import Faq from "../components/Common/Faq"
import BlogPost from "../components/Common/BlogPost"
import Footer from "../components/_App/Footer"

const IndexPage = () => (
  <Layout>

    <Navbar />

    <MainBanner />

    <Features />

    <ServicesArea />

    <OurFeatures />

    <Team />

    <FunFactsArea />

    <RecentWorks />

    <Faq />

    <BlogPost />

    <Footer />
 
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
