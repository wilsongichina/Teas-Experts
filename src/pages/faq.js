import React from "react"
import { graphql } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const FAQPage = ({ data }) => {
  const faqContents = data?.allContentfulFaqContentPage?.nodes[0]?.faqs;
  return (
    <Layout>
      <Navbar />

      <PageBanner pageTitle="FAQ" />

      <div className="faq-area ptb-80">
        <div className="container">
          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              {faqContents.length > 0 && faqContents.map(({ cid, title, description }) => 
                <AccordionItem uuid={cid} key={cid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>{title}</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    {renderRichText(description)}
                  </AccordionItemPanel>
                </AccordionItem>
              )}
            </Accordion>
          </div>

          <div className="faq-contact">
            <h3>Ask Your Question</h3>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="6"
                      placeholder="Message"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button className="btn btn-primary" type="submit">
                    Submit Now!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer data={data?.allContentfulFooter?.nodes[0]} />
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />

export default FAQPage

export const pageQuery = graphql`
  query ContentfulAboutUs {
    allContentfulFaqContentPage {
      nodes {
        faqs {
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