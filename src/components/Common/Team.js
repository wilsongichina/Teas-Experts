import React from "react"
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { BLOCKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const textOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p style={{maxWidth: '100%'}}>{children}</p>,
  },
}

const Team = ({ explains, users }) => {
  return (
    <>
      <div className="team-area ptb-80 bg-f9f6f6">
        {explains && explains.map(({ id, title, description }) => 
          <div className="container" key={id}>
            <div className="section-title">
              <h2>{title}</h2>
              <div className="bar"></div>
              {renderRichText(description, textOptions)}
            </div>
          </div>        
        )}

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="team-slider"
        >
          {users && users.map(({
            id,
            name,
            role,
            description,
            photo,
            facebookLink,
            twitterLink,
            linkedinLink,
            gitlabLink
          }) => {
            const image = getImage(photo)
            return (
              <SwiperSlide className="single-team" key={id}>
                <div className="team-image">
                  <GatsbyImage image={image} alt="blog image" />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>{name}</h3>
                    <span>{role}</span>
                  </div>

                  <ul>
                    <li>
                      <a
                        href={facebookLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href={twitterLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href={linkedinLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Linkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        href={gitlabLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon.Gitlab />
                      </a>
                    </li>
                  </ul>

                  {renderRichText(description)}
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default Team
