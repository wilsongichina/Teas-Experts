import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import FunFactsArea from "../components/Common/FunFactsArea"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"

import AboutOne from "../images/about-one.png"

const AboutUsPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="About Us" />

    <div className="about-area ptb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img src={AboutOne} alt="About" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="section-title">
                <h2>About TeasExperts.com</h2>
                <div className="bar"></div>
                <p>
                  As an educational tutoring company, our primary focus is on facilitating knowledge transfer to students worldwide. Over the course of 15 years, we have continuously implemented innovative methods and embraced emerging technologies to revolutionize the education industry.
                  Our team is committed to delivering an exceptional learning experience to our students. We firmly believe in the potential of every student and strive to empower them to reach their fullest potential.
                  With a comprehensive range of tutoring services, including personalized one-on-one sessions and engaging group classes, we tailor our approach to meet the specific needs of each individual. Whether you require assistance in a particular subject or aim to enhance your overall academic performance, we have a solution designed for you.
                  At TeasExperts.com, we are driven by a genuine passion for helping students thrive. If you are ready to embark on a transformative educational journey, we encourage you to give us the opportunity to assist you. We are confident that our services will make a noticeable difference in your academic achievements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-inner-area">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Mission</h3>
                <p>
                  Our core mission is to expand students' knowledge and provide them with affordable instruction. We strive to empower students to excel in their respective fields within the online learning environment, working diligently to meet their expectations and ensure their complete satisfaction.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Our Vision</h3>
                <p>
                  We maintain a clear and unwavering vision to deliver exceptional academic solutions for students at all levels. Our goal is to adapt and excel in various project types, assisting you in finding the most effective methods to achieve your educational objectives. We are committed to being a versatile and reliable partner in your academic journey.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="about-text">
                <h3>Why Choose Us</h3>
                <p>
                  When it comes to finding reliable and expert class takers, we are the top choice for students. Our services encompass a wide range of classes, and our team of trained professionals fully understands the responsibilities that come with their role. With their extensive experience, they are well-equipped to handle your class, assist you with homework, and fulfill any additional requirements you may have. Count on us to provide the support you need for a successful academic journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FunFactsArea />

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="About Us" />

export default AboutUsPage
