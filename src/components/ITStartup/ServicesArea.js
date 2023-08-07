import React from "react"
import * as Icon from "react-feather"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from "@contentful/rich-text-types"

// Cloud Hosting Services Images
import CercleShape from "../../images/services-right-image/cercle-shape.png"
import ServiceRightMainPic from "../../images/services-right-image/service-right-main-pic.png"

const serviceIcons = [
  <Icon.Database />,
  <Icon.Globe />,
  <Icon.File />,
  <Icon.TrendingUp />,
  <Icon.Folder />,
  <Icon.Monitor />,
  <Icon.Mail />,
  <Icon.Cloud />
]

const textOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p style={{maxWidth: '100%'}}>{children}</p>,
  },
}

const ServicesArea = ({ title, description, services, hireData }) => {
  return (
    <>
      <div className="services-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-lg-6 col-md-12 services-content"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="section-title">
                <h2>{title}</h2>
                <div className="bar"></div>
                {renderRichText(description)}
              </div>

              <div className="row">
                {services && services.map(({ id, title }, index) => 
                  <div className="col-lg-6 col-md-6" key={id}>
                    <div className="box">
                      {serviceIcons[index]} {title}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="services-right-image">
                <img
                  src={CercleShape}
                  className="bg-image rotateme"
                  alt="shape"
                />

                <img src={ServiceRightMainPic} alt="main-pic" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-area ptb-80">
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
                <h2>{hireData?.title}</h2>
                <div className="bar"></div>
                {renderRichText(hireData.description, textOptions)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesArea
