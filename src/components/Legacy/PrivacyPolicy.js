import React from "react"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const PrivacyPolicy = ({ privacyList }) => {
  return (
    <>
      <div className="pricing-area ptb-80">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            {privacyList.map(({ cid, title, description }) => 
              <div
                className="col-lg-12 col-md-12 services-content"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="false"
                key={cid}
              >
                <div className="section-title">
                  <h2>{title}</h2>
                  <div className="bar"></div>
                  {renderRichText(description)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
