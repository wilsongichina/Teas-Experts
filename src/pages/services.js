import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import { Link } from "gatsby"

// Service Images
import ServiceImage1 from "../images/services-image/service-image1.png"
import ServiceImage2 from "../images/services-image/service-image2.png"
import ServiceImage3 from "../images/services-image/service-image3.png"
import ServiceImage4 from "../images/services-image/service-image4.png"

// Shape Images
import Shape1 from "../images/shape1.png"
import Shape2 from "../images/shape2.svg"
import Shape3 from "../images/shape3.svg"
import Shape4 from "../images/shape4.svg"

const ServicesPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="Services" />

    <div className="ml-services-area ptb-80">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Our Solutions</span>
          <h2>Our Services</h2>
          <div className="bar"></div>
          <p>
            Here are our services.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage1} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details" state={{service: 'teas-exams'}}>Teas Exams</Link>
              </h3>
              <p>
                This is a service for Teas Exams
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage2} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details">Hesi A2 Exams</Link>
              </h3>
              <p>
                This is a service for Hesi A2 Exams
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage3} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details">GED Exams</Link>
              </h3>
              <p>
                This is a service for GED Exams
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="single-ml-services-box">
              <div className="image">
                <img src={ServiceImage4} alt="Service" />
              </div>
              <h3>
                <Link to="/service-details">Online Class</Link>
              </h3>
              <p>
                This is a service for Online Class
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src={Shape1} alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
      <div className="shape3">
        <img src={Shape3} alt="shape" />
      </div>
      <div className="shape4">
        <img src={Shape4} alt="shape" />
      </div>
      <div className="shape7">
        <img src={Shape4} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
    </div>

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Services" />

export default ServicesPage
