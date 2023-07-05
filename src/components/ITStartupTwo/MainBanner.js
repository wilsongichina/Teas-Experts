import React from "react"
import { Link } from "gatsby"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/shape5.png"

const MainBanner = () => {
  return (
    <>
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5">
                  <div className="hero-content">
                    <h1>Can I Pay Someone to Take My Teas Exam for Me?</h1>
                    <p>
                      Definitely! You can hire TeasExperts.com to take your ATI TEAS exam.
                      We provide a satisfaction guarantee, assuring a minimum score of 85% or a full refund.
                      Our team of proficient tutors is committed to guaranteeing your success on the ATI TEAS test.
                    </p>

                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 align-items-center">
                        <Link to="/contact" className="btn btn-primary">
                          Get a Quote
                        </Link>
                      </div>
                      <div className="col-lg-5 align-items-center">
                        <Link to="/contact" className="btn btn-primary">
                          Chat Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 offset-lg-1">
                  <div className="banner-form ml-3">
                    <form>
                      <div className="form-group">
                        <label htmlFor="text">Your Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mary Johns"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="johns@email.com"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="whatsapp">WhatsApp Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+170280..."
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Type of Task</label>
                        <select className="form-select">
                          <option value="1">Teas Exam</option>
                          <option value="2">Hesi A2 Exam</option>
                          <option value="3">GED</option>
                          <option value="4">Online Class</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Get a Quote Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
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
        <div className="shape5">
          <img src={Shape5} alt="shape" />
        </div>
        <div className="shape6 rotateme">
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

export default MainBanner
