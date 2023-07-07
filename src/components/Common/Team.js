import React from "react"
import * as Icon from "react-feather"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import Team1 from "../../images/team-image/team1.jpg"
import Team2 from "../../images/team-image/team2.jpg"
import Team3 from "../../images/team-image/team3.jpg"
import Team4 from "../../images/team-image/team4.jpg"
import Team5 from "../../images/team-image/team5.jpg"

const Team = () => {
  return (
    <>
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>How Can Someone Take My TEAS Exam for Me?</h2>
            <div className="bar"></div>
            <p style={{maxWidth: '100%'}}>
              Are you in search of dependable assistance for your proctored exams? Look no further!
              At Take, our experienced tutors are well-versed in various online testing and proctoring software.
              With years of expertise, they have developed custom software and innovative methods to provide comprehensive support for all your proctored exams.
              When it comes to the ATI TEAS proctored test, our tutors consistently assist aspiring nurses in achieving success.
              They leverage their in-depth understanding of the exam and utilize cutting-edge technologies to help you pass with flying colors.
              Concerned about the security of having someone take your ATI TEAS proctored test on your behalf?
              Rest assured, at TeasExperts.com, we prioritize your safety and confidentiality.
              With over 7 years of experience, we maintain an impeccable track record without a single incident.
              Our strict policies and procedures ensure three layers of security, giving you peace of mind throughout the entire process.
              Whether you require assistance with Take My Exam, Take My Proctored Exam, or any other class-related support, 
              you can trust TeasExperts.com to provide a secure and reliable solution.
              Contact us today and experience our secure and confidential services firsthand.
              Let us assist you in excelling on your academic journey!
            </p>
          </div>
        </div>

        <div className="container">
          <div className="section-title">
            <h2>Pay Someone to Do My TEAS Nursing Exam</h2>
            <div className="bar"></div>
            <p style={{maxWidth: '100%'}}>
              Are you curious about how paying someone to do your TEAS nursing exam can benefit you? Well, one of the correct answers to your query lies in hiring the best online tutors who specialize in the TEAS test. With their expertise, you can receive comprehensive support without any hesitation. At our service, you have the convenience of paying the experts only when you are 100% satisfied with the online TEAS exam help. By seeking assistance from our professionals, you can secure higher grades in a reliable and efficient manner.
              In the market, some service providers may not deliver relevant and trustworthy services. They may engage in scams, offering subpar and irrelevant assistance. However, when you choose our experts, you can expect authorized services with legitimate solutions. With our "Pay Someone to Take My Online TEAS Exam" service, you will receive top-quality assistance, even within tight timelines. You can rest assured that your worries will be alleviated as you receive well-prepared solutions from our experienced professionals.
              Don't let concerns overshadow your success. Place your trust in our capable hands and let us guide you towards achieving your desired results in the TEAS nursing exam.
            </p>
          </div>
        </div>

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
          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team1} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO & Founder</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>

              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team2} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>

              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team3} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>

              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team4} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>

              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team5} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>
              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team1} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Josh Buttler</h3>
                <span>CEO & Founder</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>

              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team2} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Alex Maxwel</h3>
                <span>Marketing Manager</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>

              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team3} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Janny Cotller</h3>
                <span>Web Developer</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>

              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team4} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Jason Statham</h3>
                <span>UX/UI Designer</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>

              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="single-team">
            <div className="team-image">
              <img src={Team5} alt="Team" />
            </div>

            <div className="team-content">
              <div className="team-info">
                <h3>Corey Anderson</h3>
                <span>Project Manager</span>
              </div>

              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://gitlab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Gitlab />
                  </a>
                </li>
              </ul>

              <p>
                Risus commodo viverra maecenas accumsan lacus vel facilisis quis
                ipsum.{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Team
