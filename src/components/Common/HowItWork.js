import React from "react"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

// Step Images
import Step1 from "../../images/step1.svg"
import Step2 from "../../images/step2.svg"
import Step3 from "../../images/step3.svg"
import Step4 from "../../images/step4.svg"

const HowItWork = () => {
  return (
    <section className="feedback-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="section-title">
          <h2>How We Do It</h2>
          <div className="bar"></div>
          <p>
            We offer our clients a seamless experience through a simple and straightforward process comprising four easy steps.
            These steps are designed to provide comprehensive assistance and support to our clients.
          </p>
        </div>
        <ul className="hiw-content">
          <li key="s1">
            <div className="hiw-cont__item-img">
              <img src={Step1} alt="Step 1" />
            </div>
            <div className="hiw-cont__item-text">
              <h3>Step 1 of 4</h3>
              <p>
                In the initial stage of our program, students are required to register and inform us that they would like us to handle their TEAS exam.
                They can reach out to us with the preferred date and time, allowing us to schedule their session in our system.
                This step is crucial as it enables you to make an appointment with one of our experienced tutors who will assist you during the exam.
                We highly encourage you to get in touch with us to learn about the available packages specifically designed for the TEAS test.
                Our team of leading tutors is dedicated to addressing any inquiries or apprehensions you may have regarding our services.
                Feel free to rely on their expertise and guidance.
              </p>
            </div>
          </li>

          <li key="s2">
            <div className="hiw-cont__item-img">
              <img src={Step2} alt="Step 2" />
            </div>
            <div className="hiw-cont__item-text">
              <h3>Step 2 of 4</h3>
              <p>
                Our dedicated IT specialist will remotely connect to your computer and efficiently prepare it for the test. In less than 30 minutes, we will ensure that everything is properly set up for you. For optimal compatibility, we recommend our clients to use either a Windows laptop or a Macbook.
                To guarantee an optimal testing environment, it is important that the setup takes place in a quiet space, free from distractions. We kindly ask that you refrain from using earphones or eyewear during the test. Additionally, please ensure you are settled in bed or at a study table. These measures will help create an ideal testing atmosphere for you.
              </p>
            </div>
          </li>

          <li key="s3">
            <div className="hiw-cont__item-img">
              <img src={Step3} alt="Step 3" />
            </div>
            <div className="hiw-cont__item-text">
              <h3>Step 3 of 4</h3>
              <p>
                The assigned tutor will connect and proceed with taking the test on your behalf. By hiring our services, you can effortlessly reap the advantages while we handle the responsibilities for you. Based on the option you have chosen for the exam, we carefully plan the test-taking process to ensure your well-being and safety are prioritized. Rest assured, we have devised strategies to ensure you receive the utmost care and protection throughout the entire experience.
              </p>
            </div>
          </li>

          <li key="s4">
            <div className="hiw-cont__item-img">
              <img src={Step4} alt="Step 4" />
            </div>
            <div className="hiw-cont__item-text">
              <h3>Step 4 of 4</h3>
              <p>
                After completing the test, you will be able to view your scores in your ATI portal. Simply navigate to the "My Results" section where the results will be displayed. From there, you have the option to send your transcript to the school of your preference.
                Lastly, you will proceed with the payment. We offer our clients the convenience of paying after we have provided the service, without requiring any upfront payment. Your satisfaction is our priority, and we believe in establishing trust by delivering the service before requesting payment.
              </p>
            </div>
          </li>
        </ul>
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
    </section>
  )
}

export default HowItWork
