import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape4 from "../../images/shape4.svg"

const RecentWorks = ({ header, images }) => {
  return (
    <>
      <div className="works-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>{header?.title}</h2>
            <div className="bar"></div>
            {renderRichText(header?.description)}
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Pagination, Autoplay]}
          className="works-slides"
        >
          {images && images.map(({ id, title, description, link, workImage }) => {
            const image = getImage(workImage)
            return (
              <SwiperSlide className="single-works" key={id}>
                <GatsbyImage image={image} alt={title} />

                <div className="works-content">
                  <h3>
                    <Link to="/project-details">{title}</Link>
                  </h3>
                  <p>
                    {description}
                  </p>
                </div>

                <Link to={link} className="icon">
                  <Icon.Settings />
                </Link>
              </SwiperSlide>
            )
          })}
        </Swiper>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src={Shape2} alt="shape" />
        </div>
        <div className="shape7">
          <img src={Shape4} alt="shape" />
        </div>
        <div className="shape4">
          <img src={Shape4} alt="shape" />
        </div>
      </div>
    </>
  )
}

export default RecentWorks
