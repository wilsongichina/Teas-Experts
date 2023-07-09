import React, { Component } from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

class PricingCards extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabs_item")
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none"
    }

    tablinks = document.getElementsByTagName("li")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "")
    }

    document.getElementById(tabNmae).style.display = "block"
    evt.currentTarget.className += "current"
  }

  render() {
    return (
      <>
        <div className="pricing-area pb-50">
          <div className="container">
            <div className="section-title">
              <h2>Our Pricing Plan</h2>
              <div className="bar"></div>
              <p>
                We are pleased to provide you with our pricing for the services we offer. Rest assured that we prioritize quality and offer a 100% pass guarantee, ensuring that you achieve at least a B grade. Additionally, we aim to provide you with quick and convenient access to our homework prices, which can be obtained in as little as 5 minutes. To make the payment process more manageable, we offer the option to pay in small installments for exams, quizzes, classes, and courses.
              </p>
            </div>

            <div className="tab pricing-tab bg-color">
              <ul className="tabs">
                <li
                  className="current"
                  onClick={e => this.openTabSection(e, "tab1")}
                  aria-hidden="true"
                >
                  Monthly Plan
                </li>

                <li
                  onClick={e => this.openTabSection(e, "tab2")}
                  aria-hidden="true"
                >
                  Yearly Plan
                </li>
              </ul>

              <div className="tab_content">
                <div id="tab1" className="tabs_item">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Teas Exam Help Rates</h3>
                          <p>
                            Starting from <br /> $400 Per Exam
                          </p>
                        </div>

                        <div className="price">
                          $400 <span>/ Exam</span>
                        </div>

                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">
                            Get Started
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <Icon.Check /> Full Money Back Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Confidential Testing Environment
                          </li>
                          <li>
                            <Icon.Check /> Secure Testing Environment
                          </li>
                          <li>
                            <Icon.Check /> Affordable Prices
                          </li>
                          <li>
                            <Icon.Check /> USA Based Tutors
                          </li>
                          <li>
                            <Icon.Check /> Payment Plan Included
                          </li>
                          <li>
                            <Icon.Check /> No Hidden Charges
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Full Class Help Rates</h3>
                          <p>
                            Starting from <br /> $600-$2000 Per Exam
                          </p>
                        </div>

                        <div className="price">
                          $600-$2000 <span>/ Exam</span>
                        </div>

                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">
                            Get Started
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <Icon.Check /> Full Money Back Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Confidential Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Data Security Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Affordable Prices
                          </li>
                          <li>
                            <Icon.Check /> USA Based Tutors
                          </li>
                          <li>
                            <Icon.Check /> Payment Plan Included
                          </li>
                          <li>
                            <Icon.Check /> No Hidden Charges
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Exam and Tests Help Rates</h3>
                          <p>
                            Starting from <br /> $200 Per Exam
                          </p>
                        </div>

                        <div className="price">
                          $200 <span>/ Exam</span>
                        </div>

                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">
                            Get Started
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <Icon.Check /> Full Money Back Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Confidential Testing Environment
                          </li>
                          <li>
                            <Icon.Check /> Secure Testing Environment
                          </li>
                          <li>
                            <Icon.Check /> Affordable Prices
                          </li>
                          <li>
                            <Icon.Check /> USA Based Tutors
                          </li>
                          <li>
                            <Icon.Check /> Payment Plan Included
                          </li>
                          <li>
                            <Icon.Check /> No Hidden Charges
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="tab2" className="tabs_item">
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Teas Exam Help Rates</h3>
                          <p>
                            Starting from <br /> $400 Per Exam
                          </p>
                        </div>

                        <div className="price">
                          $400 <span>/ Exam</span>
                        </div>

                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">
                            Get Started
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <Icon.Check /> Full Money Back Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Confidential Testing Environment
                          </li>
                          <li>
                            <Icon.Check /> Secure Testing Environment
                          </li>
                          <li>
                            <Icon.Check /> Affordable Prices
                          </li>
                          <li>
                            <Icon.Check /> USA Based Tutors
                          </li>
                          <li>
                            <Icon.Check /> Payment Plan Included
                          </li>
                          <li>
                            <Icon.Check /> No Hidden Charges
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Full Class Help Rates</h3>
                          <p>
                            Starting from <br /> $600-$2000 Per Exam
                          </p>
                        </div>

                        <div className="price">
                          $600-$2000 <span>/ Exam</span>
                        </div>

                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">
                            Get Started
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <Icon.Check /> Full Money Back Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Confidential Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Data Security Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Affordable Prices
                          </li>
                          <li>
                            <Icon.Check /> USA Based Tutors
                          </li>
                          <li>
                            <Icon.Check /> Payment Plan Included
                          </li>
                          <li>
                            <Icon.Check /> No Hidden Charges
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="pricing-box">
                        <div className="pricing-header">
                          <h3>Exam and Tests Help Rates</h3>
                          <p>
                            Starting from <br /> $200 Per Exam
                          </p>
                        </div>

                        <div className="price">
                          $200 <span>/ Exam</span>
                        </div>

                        <div className="buy-btn">
                          <Link to="/login" className="btn btn-primary">
                            Get Started
                          </Link>
                        </div>

                        <ul className="pricing-features">
                          <li>
                            <Icon.Check /> Full Money Back Guarantee
                          </li>
                          <li>
                            <Icon.Check /> Confidential Testing Environment
                          </li>
                          <li>
                            <Icon.Check /> Secure Testing Environment
                          </li>
                          <li>
                            <Icon.Check /> Affordable Prices
                          </li>
                          <li>
                            <Icon.Check /> USA Based Tutors
                          </li>
                          <li>
                            <Icon.Check /> Payment Plan Included
                          </li>
                          <li>
                            <Icon.Check /> No Hidden Charges
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-content">
              <div className="section-title">
                <h2>Payment Options</h2>
                <div className="bar"></div>
                <ul>
                  <li><p>I firmly believe that my rates are reasonable considering my education, skills, legitimacy, and the significant value, stress relief, time, and energy I would be providing you in exchange for my valuable and irretrievable time, energy, and effort.</p></li>
                  <li><p>I offer the following payment plans for my services: weekly (most expensive), monthly, half-now / half-later, and full upfront (least expensive).</p></li>
                  <li><p>I accept payments through Stripe, including all major credit and debit cards, processed via online invoices.</p></li>
                  <li><p>I guarantee a minimum grade of B. However, in the event that you receive a grade lower than a B, I offer a refund ranging from 50% to 100% of the payment, depending on the specific circumstances.</p></li>
                </ul>
              </div>

              <div className="section-title">
                <h2>How Exam and Quiz Rates Are Calculated</h2>
                <div className="bar"></div>
                <p style={{maxWidth: '100%'}}>
                  For exams, tests, and quizzes, the final rates are determined based on the following factors:
                </p>
                <ul>
                  <li><p>Proctoring Requirement: The presence of proctoring during the exam influences the cost, with proctored exams generally being more expensive.</p></li>
                  <li><p>Exam Duration: The length of the exam affects the rate; as longer exams typically incur higher charges.</p></li>
                  <li><p>Number of Questions: The total number of questions, including sub-parts (such as Part A, B, C, etc.), impacts the rate. More questions generally result in a higher cost.</p></li>
                  <li>
                    <p>Preferred Method of Solution Submission: The chosen method for submitting solutions also influences the pricing structure. The following options are available:</p>
                    <ul>
                      <li><p>Least Expensive: Logging into the student's account and completing the exam on their behalf.</p></li>
                      <li><p>Moderately Expensive: The student sends questions via text or email using platforms like WhatsApp, and I respond with solutions.</p></li>
                      <li><p>Most Expensive: Utilizing screen sharing or remote PC access software, where I view the student's screen and submit solutions.</p></li>
                    </ul>
                  </li>
                  <li><p>Exam Requirements: The nature of the exam, whether it requires showing all work (which tends to be more expensive) or submitting only the answers (which is typically less expensive), affects the rate.</p></li>
                  <li><p>Exam Time Flexibility: If the exam has a fixed and rigid start and end time that cannot be altered, it may result in higher costs. On the other hand, if the exam provides a flexible window of time for completion, it is usually less expensive.</p></li>
                </ul>
                <p>These factors are taken into account when determining the specific rates for exams, tests, and quizzes.</p>
              </div>

              <div className="section-title">
                <h2>How Rates Are Calculated for Full Class Help</h2>
                <div className="bar"></div>
                <p style={{maxWidth: '100%'}}>
                  The final rates for full class help are determined based on several factors, including:
                </p>

                <ul>
                  <li><p>Number of Remaining Assessments: The total number of pending homework assignments, quizzes, exams, discussion posts, projects, and other academic tasks that need to be completed. The higher the number of remaining assessments, the higher the rate.</p></li>
                  <li><p>Weeks & Modules Remaining: The total number of weeks and modules remaining in the class. As the number of weeks and modules left increases, the rate may also increase.</p></li>
                  <li><p>Multi-Factor Authentication Requirement: Whether there is required multi-factor authentication, such as Duo Push or passcode, for logging into the class. The presence of multi-factor authentication may affect the rate.</p></li>
                  <li><p>Proctoring Requirement: Whether there is required proctoring for the exams. Full class help for proctored exams usually incurs higher costs.</p></li>
                  <li>
                    <p>Preferred Method of Solution Submission: The student's desired method of submitting solutions impacts the pricing. The following options are available:</p>
                    <ul>
                      <li><p>Least Expensive: Logging into the student's account and completing the exam on their behalf.</p></li>
                      <li><p>Moderately Expensive: The student sends questions via text or email using platforms like WhatsApp, and I respond with solutions.</p></li>
                      <li><p>Most Expensive: Utilizing screen sharing or remote PC access software, where I view the student's screen and submit solutions.</p></li>
                    </ul>
                  </li>
                  <li><p>Exam Requirements: The nature of the exam, whether it requires showing all work (which tends to be more expensive) or submitting only the answers (which is typically less expensive), affects the rate.</p></li>
                  <li><p>Exam Time Flexibility: If the exam has a fixed and rigid start and end time that cannot be altered, it may result in higher costs. Conversely, if the exam provides a flexible window of time for completion, it is usually less expensive.</p></li>
                </ul>
                <p>These factors are taken into consideration when calculating the specific rates for full class help services.</p>
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
      </>
    )
  }
}

export default PricingCards
