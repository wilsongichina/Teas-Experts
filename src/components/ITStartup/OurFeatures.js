import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const whychooseIcons = [
  {icon: <Icon.Settings />, bgColor: ''},
  {icon: <Icon.Mail />, bgColor: ''},
  {icon: <Icon.Grid />, bgColor: 'bg-c679e3'},
  {icon: <Icon.Info />, bgColor: 'bg-c679e3'},
  {icon: <Icon.Box />, bgColor: 'bg-eb6b3d'},
  {icon: <Icon.Bell />, bgColor: 'bg-eb6b3d'}
]

const OurFeatures = ({ data }) => {
  const headerData = data[0];
  const bodyData = data.splice(1);
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>{headerData.title}</h2>
            <div className="bar"></div>
            {renderRichText(headerData.description)}
          </div>

          <div className="row justify-content-center">
            {bodyData && bodyData.map(({id, title, description}, index) => 
              <div
                className="col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1200"
                data-aos-once="false"
                key={id}
              >
                <div className="single-features">
                  <div className={`icon ${whychooseIcons[index].bgColor}`}>
                    {whychooseIcons[index].icon}
                  </div>
                  <h3>
                    <Link to="/feature-details">{title}</Link>
                  </h3>
                  {renderRichText(description)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default OurFeatures
