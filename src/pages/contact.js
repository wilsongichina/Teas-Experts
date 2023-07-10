import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import ContactForm from "../components/Contact/ContactForm"

const ContactPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Contact Us" />

    <ContactForm />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
