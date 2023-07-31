import React from "react"
import { Link } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import MapImg from "../../images/map.png"

const FunFactsArea = ({data}) => {
  return (
    <>
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>{data.title}</h2>
            <div className="bar"></div>
            {renderRichText(data.description)}
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>5+</h3>
                <p>Years in Academic Help</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>1000+</h3>
                <p>Number of Students Helped</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>3000+</h3>
                <p>Number of Assessments Completed</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="funfact">
                <h3>50+</h3>
                <p>Number of Tutors</p>
              </div>
            </div>
          </div>

          <div className="contact-cta-box">
            <h3>Have Any Questions About Us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>

          <div className="map-bg">
            <img src={MapImg} alt="map" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FunFactsArea
