import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const Faq = () => {
  return (
    <>
      <div className="faq-area ptb-80">
        <div className="container">
          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Why Should I Pay Someone to Take My TEAS Exam Online?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    One compelling reason to consider hiring someone to take your online TEAS exam is the potential to achieve an impressive score.
                    A high TEAS exam score can significantly enhance your chances of gaining admission into prestigious nursing schools,
                    which, in turn, opens doors to better employment opportunities.
                    It is important to exceed the cut-off score to ensure the approval of your application.
                    The TEAS exam process effectively filters out highly skilled candidates in a professional and objective manner, allowing nursing schools to identify the most proficient and qualified individuals.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What can be expected from the TEAT test?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The Nursing exam, also known as the TEAS test, consists of approximately 170 multiple-choice questions.
                    Although the questions are not excessively difficult, it is important to study diligently and answer them accordingly.
                    If you have successfully completed your college-level education, you should be able to tackle these questions with ease.
                    It is crucial to prioritize your studies and complete them promptly to ensure optimal academic performance.
                    The TEAS test holds great significance for your nursing career, as it contributes to your certification in the TEAS course.
                    If you find yourself lacking time or resources to adequately prepare for the test, you can seek the assistance of experts who can take the online TEAS exam on your behalf.
                    Many students often lack the necessary knowledge or find themselves pressed for time when it comes to preparing for exams.
                    In such situations, hiring someone to take your online TEAS exam can be highly beneficial.
                    With detailed case-study solutions, you can aim for better grades and academic outcomes.
                    Even if you have a tight deadline for your exams, our team will promptly address all your concerns.
                    Our knowledgeable and qualified professionals are dedicated to providing you with guaranteed success through top-class services tailored to your needs.
                    As you navigate through the task of TEAS exam preparation, remember to subscribe to the assistance of professionals for optimal results and performance.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Whats a Proctored Exam/ Test?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    A proctored exam is conducted with the presence of a third-party individual who administers and supervises the test.
                    Proctors play a crucial role in verifying the identity of test takers, ensuring adherence to rules, and preventing cheating.
                    Traditionally, proctored exams were administered on paper in physical classrooms, with proctors providing test materials and monitoring the duration of the exam.
                    However, with the increasing popularity of online studying and examinations, proctoring methods have undergone a shift to accommodate this new environment.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What grades will I receive with your TEAS Exam help service?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Every nursing student dreams of passing the TEAS Exam with exceptional results.
                    We are dedicated to turning your dreams into reality by providing you with a guaranteed impressive grade.
                    Our experts consistently achieve a minimum of 70%, and more often than not, they surpass the 85% mark.
                    With our affordable rates, we offer you the opportunity to obtain the grades you desire.
                    Don't hesitate to contact us as soon as possible for higher grades and the best possible assistance.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

            </Accordion>
          </div>

          <div className="faq-contact">
            <h3>Ask Your Question</h3>
            <form>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="6"
                      placeholder="Message"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <button className="btn btn-primary" type="submit">
                    Submit Now!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
