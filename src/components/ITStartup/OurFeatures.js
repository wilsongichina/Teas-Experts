import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

const OurFeatures = () => {
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Teas Experts</h2>
            <div className="bar"></div>
            <p>
              The ATI TEAS exam is specifically designed to evaluate a student's readiness for entering the health science field.
              There are several reasons why we are the best choice for taking your online exam.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link to="/feature-details">Top Quality ATI/TEAS Services</Link>
                </h3>
                <p>
                  We take immense pride in upholding our trademark of delivering top-notch services, and we are committed to preserving its integrity.
                  Our priority is to ensure that you experience the full spectrum of benefits that our Do My TEAS Exam service has to offer.
                  Our team, united and dedicated, has invested significant effort in the past to achieve resounding success.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link to="/feature-details">On-Time Delivery</Link>
                </h3>
                <p>
                  You must receive quality services on time.
                  Consistency counts when we are on the verge of delivering at least a 90% on your ATI TEAS exams.
                  We have for ten years guaranteed timely delivery even at close deadlines.
                  This is the reason you need to align your interests with the best online teas exam help service across the globe.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link to="/feature-details">Strict Adherence to Instructions</Link>
                </h3>
                <p>
                  Your instructions hold paramount importance to us.
                  We ensure that our team of Teas experts strictly adheres to your directives.
                  We never finalize any assignment without executing your instructions as they are provided.
                  Our approach is distinct, as we prioritize aligning with your objectives rather than making subjective decisions for your benefit.
                  Rest assured, your word is our command, and we strive to meet your expectations accordingly.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link to="/feature-details">Zero-error Anonymity Policy</Link>
                </h3>
                <p>
                  The security of our customers' data is of utmost importance to us.
                  Our support staff deeply values and upholds our privacy policy as a core principle.
                  When you choose to pay someone to do your TEAS exam on our service portal, you can have complete confidence in the confidentiality of your information.
                  We prioritize safeguarding your data and ensuring that it remains secure throughout the process.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Box />
                </div>
                <h3>
                  <Link to="/feature-details">Availability of Assistance 24/7</Link>
                </h3>
                <p>
                  We understand that you have various options to choose from within a limited timeframe.
                  However, the services that are available during the most critical hours to provide you with assistance are truly invaluable.
                  We are here to support you around the clock, ensuring that all your concerns are taken care of.
                  Our team of experts is available 24/7 to address any apprehensions you may have, providing you with the assistance you need at any time.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link to="/feature-details">Professional Review</Link>
                </h3>
                <p>
                  Our team consists of over 50 experienced, trained, and highly skilled professionals.
                  Their exceptional expertise will undoubtedly impress you and compel you to entrust them with taking your TEAS test on your behalf.
                  They are true champions in this field, possessing a wealth of knowledge that sets them apart from the rest.
                  Their extensive expertise and qualifications make them stand out as the best choice for your TEAS test.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OurFeatures
