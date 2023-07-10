import React, { useState } from "react"
import { Link } from "gatsby"

// Shape Images
import Shape1 from "../../images/shape1.png"
import Shape2 from "../../images/shape2.svg"
import Shape3 from "../../images/shape3.svg"
import Shape4 from "../../images/shape4.svg"
import Shape5 from "../../images/shape5.png"

const QUOTE_FORM_ENDPOINT = "https://teasexport-mail.com/quote";

const MainBanner = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }
    console.log('quote data:', data);
    setSubmitted(true);
/*
    fetch(QUOTE_FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
      */
  };

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
                    <p className="text-center">
                      Definitely! You can hire TeasExperts.com to take your ATI TEAS exam.
                      We provide a satisfaction guarantee, assuring a minimum score of 85% or a full refund.
                      Our team of proficient tutors is committed to guaranteeing your success on the ATI TEAS test.
                    </p>

                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 align-items-center">
                        <Link to="/quote" className="btn btn-primary">
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
                    {submitted ? (
                      <div className="container">
                        <div className="section-title">
                          <h2>Thank you for reaching out to us</h2>
                          <div className="bar"></div>
                          <p>We appreciate your message, and our support team will respond to you shortly.</p>
                        </div>
                      </div>
                    ) : (
                      <form id="contactForm" action={QUOTE_FORM_ENDPOINT} onSubmit={handleQuoteSubmit}>
                        <div className="form-group">
                          <label htmlFor="text">Your Name</label>
                          <input
                            type="text"
                            name="customer_name"
                            className="form-control"
                            placeholder="Mary Johns"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            name="customer_email"
                            className="form-control"
                            placeholder="johns@email.com"
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="whatsapp">WhatsApp Number</label>
                          <input
                            type="text"
                            name="whatsapp_number"
                            className="form-control"
                            placeholder="+170280..."
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="type-task">Type of Task</label>
                          <select className="form-select" name="task_type">
                            <option value="Teas Exam">Teas Exam</option>
                            <option value="Hesi A2 Exam">Hesi A2 Exam</option>
                            <option value="GED">GED</option>
                            <option value="Online Class">Online Class</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="budget">Your budget</label>
                          <input
                            type="number"
                            name="quote_budget"
                            className="form-control"
                          />
                        </div>

                        <button type="submit" className="btn btn-primary">
                          Get a Quote Now
                        </button>
                      </form>
                    )}
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
