import React from "react"

const RefundPolicy = () => {
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
                {/* <h2>Refund Policy</h2> */}
                <div className="bar"></div>
                <p>
                Customers may request a refund once they have explored all the options outlined below, following the delivery of their order:
                </p>
                <ul>
                  <li>
                    <p>Failure to Meet Requirements: If we are unable to fulfill your requirements as specified in your order.</p>
                  </li>
                  <li>
                    <p>Educational Institution Failure: If you receive a complete failure report and comments from your tutors regarding your work.</p>
                  </li>
                  <li>
                    <p>Timeframe for Refund Claims: Refund requests must be made within 30 days of the tutoring delivery. Refunds requested after this designated timeframe will not be considered.</p>
                  </li>
                  <li>
                    <p>Failure to Achieve Guaranteed Grade or Pass Mark: If you do not attain the grade or pass mark that we have guaranteed.</p>
                  </li>
                </ul>
                <p>Please note that refunds will only be processed under the circumstances mentioned above.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RefundPolicy
