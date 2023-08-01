import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"

const PricingCards = ({ pricings }) => {
  const openTabSection = (evt, tabNmae) => {
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
  const priceOptions = pricings.slice(1);

  return (
    <>
      <div className="pricing-area pb-50">
        <div className="container">
          <div className="section-title">
            <h2>{pricings[0].title}</h2>
            <div className="bar"></div>
            {renderRichText(pricings[0].description)}
          </div>

          <div className="tab pricing-tab bg-color">
            <ul className="tabs">
              <li
                className="current"
                onClick={e => openTabSection(e, "tab1")}
                aria-hidden="true"
              >
                Monthly Plan
              </li>

              <li
                onClick={e => openTabSection(e, "tab2")}
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
            {priceOptions.map(({cid, title, description}) => 
              <div className="section-title" key={cid}>
                <h2>{title}</h2>
                <div className="bar"></div>
                {renderRichText(description)}
              </div>            
            )}
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

export default PricingCards
