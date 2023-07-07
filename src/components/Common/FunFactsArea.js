import React from "react"
import { Link } from "gatsby"

import MapImg from "../../images/map.png"

const FunFactsArea = () => {
  return (
    <>
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>Reasons to Choose TeasExperts.com</h2>
            <div className="bar"></div>
            <p>
              With a rich history spanning over 8 years of providing assistance with proctored exams, we take pride in consistently delivering excellent service. As a result, we receive an overwhelming number of referrals from satisfied customers who have benefited from our high-quality online exam help services at affordable prices. Our availability round the clock has played a significant role in our success. Our dedicated staff is accessible 24/7, ready to address your questions and meet your requirements.
              Unlike other platforms offering assistance with "take my teas exam" requests, our charges at TeasExperts.com are fair and economical. We prioritize delivering excellent service to our customers without burdening their finances. Furthermore, we prioritize flexibility, allowing students to schedule their TEAS exams as per their convenience.
              Confidentiality is a paramount concern for us. We strictly adhere to the highest standards of confidentiality, ensuring that all customer information remains secure. Even specialists who are not directly involved in your project will not have access to your confidential information. We maintain stringent standards of behavior and operate in compliance with the United States Consumer Protection Act to safeguard the information you provide.
              Maintaining the highest standards of quality in our work is of utmost importance to us. We strive to alleviate any anxieties you may have, as your success on exams is our ultimate priority. Rest assured that you can trust us to uphold these standards and provide you with the support needed to excel in your tests.
            </p>
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
                <p>NNNNNNumber of Students Helped</p>
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
