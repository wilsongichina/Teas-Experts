import React from "react"
import * as Icon from "react-feather"

// Cloud Hosting Services Images
import CercleShape from "../../images/services-right-image/cercle-shape.png"
import ServiceRightMainPic from "../../images/services-right-image/service-right-main-pic.png"

// Design & Development Images
// import ServiceLeftMainPic from "../../images/services-left-image/service-left-main-pic.png"

const ServicesArea = () => {
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
                <h2>Teas Experts Services</h2>
                <div className="bar"></div>
                <p>
                  Are you feeling uncertain about how to pass the TEAS 7 exam? With the assistance of TeasExperts.com, achieving success in the TEAS 7 becomes as simple as ABC.
                  We are here to ensure that you pass your TEAS 7 with outstanding marks.
                  Curious to learn more about our process?
                  Simply reach out to us via phone or chat, and one of our TEAS 7 help specialists will be glad to assist you.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Database /> Take My Teas Reading Test
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Globe /> Take My Teas Math Test
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.File /> Take My Teas Science Test
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.TrendingUp /> Take My Teas English Test
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Folder /> Online Class Help
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Monitor /> Proctored Exams
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Mail /> Hesi A2 Exams
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.Cloud /> Hesi Specialty Exams
                  </div>
                </div>
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
            {/* <div
              className="col-lg-6 col-md-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="services-left-image">
                <img
                  src={CercleShape}
                  className="bg-image rotateme"
                  alt="shape"
                />

                <img src={ServiceLeftMainPic} alt="main-pic" />
              </div>
            </div> */}

            <div
              className="col-lg-12 col-md-12 services-content"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="section-title">
                <h2>Can I Hire Someone to Take My TEAS Test?</h2>
                <div className="bar"></div>
                <p style={{maxWidth: '100%'}}>
                  Yes, you can! At TeasExperts.com, we specialize in offering comprehensive exam services tailored to meet your specific needs. Our team of expert tutors are well-versed in taking proctored exams, including the TEAS and ATI TEAS exams. With a proven track record of success, we have helped many nursing students gain admission to nursing programs across the United States. Instead of stressing about your upcoming teas exam, let us handle it for you. You can pay someone to take your TEAS exam and trust that you are in capable hands.

                  When you choose TeasExperts.com, you can have confidence in the expertise of our tutors who are highly knowledgeable about the teas exam requirements, content and format. We stay up-to-date with the latest changes and ensure our strategies align with the exam requirements. Whether you need assistance with specific sections or require comprehensive exam preparation, we have got you covered.

                  Our services are designed to provide you with a seamless experience. From exam registration to accessing study guides and taking the ATI TEAS exam, we handle every aspect. We understand the importance of confidentiality, and we guarantee the security of your information throughout the entire process.

                  Why wait? Hire TeasExperts.com to take your TEAS exam at an affordable price. Let us relieve you of the stress and help you achieve your academic goals of enrolling to a nursing school. Contact us today to learn more about our services and take the first step towards acing your TEAS exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesArea
