import React from "react"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const RefundPolicy = ({ refund }) => {
  return (
    <>
      <div className="pricing-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div
              className="col-lg-12 col-md-12 services-content"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="section-title">
                <div className="bar"></div>
                {renderRichText(refund.description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RefundPolicy
