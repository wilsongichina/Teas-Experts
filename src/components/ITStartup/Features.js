import React from "react"
import * as Icon from "react-feather"
import { Link } from "gatsby"

const Features = () => {
  return (
    <>
      <div className="boxes-area">
        <div className="container">
          <div className="section-title">
            <h2>Explore Our Work Flow</h2>
            <div className="bar"></div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-box">
                <div className="icon">
                  <Icon.Server />
                </div>

                <h3>
                  <Link to="/feature-details">Submit Your Order</Link>
                </h3>

                <p>
                  Please provide us with all the essential details of your task, including specific requirements and the deadline.
                  It is crucial for us to have a comprehensive understanding of your needs so that we can effectively meet your expectations.
                  Kindly ensure that you communicate all the necessary information to facilitate a smooth and successful execution of your task.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-box bg-f78acb">
                <div className="icon">
                  <Icon.Code />
                </div>

                <h3>
                  <Link to="/feature-details">Make an Initial Payment</Link>
                </h3>

                <p>
                  To initiate the process of taking the TEAS exam, you can begin by making a small prepayment.
                  This payment enables our expert to start working on your task promptly and ensure a smooth progression throughout the exam-taking process.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-box bg-c679e3">
                <div className="icon">
                  <Icon.Users />
                </div>

                <h3>
                  <Link to="/feature-details">Receive Your Grades</Link>
                </h3>

                <p>
                  We will ensure the completion of the exam well before the deadline, allowing you ample time to meticulously review the grades.
                  Our commitment is to provide you with sufficient opportunity to assess and evaluate the results before making any final payment.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-box bg-eb6b3d">
                <div className="icon">
                  <Icon.GitBranch />
                </div>

                <h3>
                  <Link to="/feature-details">Make Full Payment</Link>
                </h3>

                <p>
                  Upon reviewing the grades and confirming the quality of the service, you can release the remaining payment.
                  Nevertheless, this is contingent upon our guarantee of achieving a minimum of 85% in the results.
                  In the event of not meeting this threshold, you are entitled to a full refund, ensuring your satisfaction is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
