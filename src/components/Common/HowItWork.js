import React from "react"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

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

const stepImages = [Step1, Step2, Step3, Step4];

const HowItWork = ({ data }) => {
  const steps = data?.steps;
  return (
    <section className="feedback-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="section-title">
          <h2>{data.title}</h2>
          <div className="bar"></div>
          {renderRichText(data.description)}
        </div>
        <ul className="hiw-content">
          {steps.map(({ cid, title, description}, index) => {
              return (<li key={cid}>
                <div className="hiw-cont__item-img">
                  <img src={stepImages[index]} alt={`Step ${index + 1}`} />
                </div>
                <div className="hiw-cont__item-text">
                  <h3>{title}</h3>
                  {renderRichText(description)}
                </div>
              </li>)
            }
          )}
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
