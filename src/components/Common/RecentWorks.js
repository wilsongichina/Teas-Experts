import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

// Work Images
import WorksImage1 from "../../images/works-image/Teas 1.png"
import WorksImage2 from "../../images/works-image/Teas 2.png"
import WorksImage3 from "../../images/works-image/Teas 3.png"
import WorksImage4 from "../../images/works-image/Teas 4.png"
import WorksImage5 from "../../images/works-image/Teas 5.png"
import WorksImage6 from "../../images/works-image/Teas 6.jpg"
import WorksImage7 from "../../images/works-image/Teas 7.jpg"
import WorksImage8 from "../../images/works-image/Teas 8.png"
import WorksImage9 from "../../images/works-image/Teas 9.png"
import WorksImage10 from "../../images/works-image/Teas 10.png"
import WorksImage11 from "../../images/works-image/Teas 11.png"
import WorksImage12 from "../../images/works-image/Teas 12.png"

// Shape Images
import Shape2 from "../../images/shape2.svg"
import Shape4 from "../../images/shape4.svg"

const RecentWorks = () => {
  return (
    <>
      <div className="works-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Works</h2>
            <div className="bar"></div>
            <p>
              Take a glimpse at the remarkable grades we have achieved for our students
            </p>
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
          <SwiperSlide className="single-works">
            <img src={WorksImage1} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Incredible infrastructure</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage2} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Email Notifications</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage3} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Best Analytics Audits</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage4} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Simple Dashboard</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage5} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Information Retrieval</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage6} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Incredible infrastructure</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage7} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Email Notifications</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage8} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Best Analytics Audits</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage9} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Simple Dashboard</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage10} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Information Retrieval</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage11} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Simple Dashboard</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-works">
            <img src={WorksImage12} alt="Works" />

            <Link to="/project-details" className="icon">
              <Icon.Settings />
            </Link>

            <div className="works-content">
              <h3>
                <Link to="/project-details">Information Retrieval</Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </SwiperSlide>
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
