import React from "react"
import * as Icon from "react-feather"
import { Link } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const flowsIcons = [
  {icon: <Icon.Server />, bgColor: ''},
  {icon: <Icon.Code />, bgColor: 'bg-f78acb'},
  {icon: <Icon.Users />, bgColor: 'bg-c679e3'},
  {icon: <Icon.GitBranch />, bgColor: 'bg-eb6b3d'}
]
const Features = ({ title, flows }) => {
  return (
    <>
      <div className="boxes-area">
        <div className="container">
          <div className="section-title">
            <h2>{title}</h2>
            <div className="bar"></div>
          </div>
          <div className="row justify-content-center">
            {flows && flows.map(({ id, title, description }, index) => 
              <div
                className="col-lg-3 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1200"
                data-aos-once="false"
                key={id}
              >
                <div className={`single-box ${flowsIcons[index].bgColor}`}>
                  <div className="icon">
                    {flowsIcons[index].icon}
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

export default Features
