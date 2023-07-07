import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

const FAQPage = () => (
  <Layout>
    <Navbar />

    <PageBanner pageTitle="FAQ" />

    <div className="faq-area ptb-80">
      <div className="container">
        <div className="faq-accordion">
          <Accordion allowZeroExpanded preExpanded={["a"]}>
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Can I make payment anonimously?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Ensuring your privacy and anonymity is of utmost importance to us.
                  If you wish to pay anonymously, we offer the option to make payment via credit card or debit card using an online invoice.
                  By utilizing this method, your transactions will not be associated with any personal information or names.
                  We understand the significance of maintaining your confidentiality and provide a secure and discreet payment process for your peace of mind.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Is there a way for me to make changes on the exam time?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Upon submitting the form, you should have received a response email.
                  Please locate this email and open it.
                  At the top of the email, you will find an option to EDIT your submission.
                  Feel free to make the necessary changes to the exam time.
                  You can edit your submission multiple times if needed.
                  Once you make the edits, an updated version will be automatically sent to us via email.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>
                  How does payment work?
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  I provide flexible payment plans to accommodate your financial needs when availing my academic services.
                  Here are the options available:
                  Weekly Payment Plan (Most Expensive): This plan allows you to make weekly payments for the duration of the service.
                  While it offers the highest overall cost, it provides the convenience of smaller, manageable payments on a regular basis.
                  Monthly Payment Plan: With the monthly payment plan, you can spread out the cost over a longer period, making a monthly payment until the service is completed.
                  This option offers a more affordable alternative compared to the weekly plan.

                  Half-Now / Half-Later Payment Plan: The half-now / half-later plan requires an initial deposit upfront, and the remaining balance is divided into two equal payments.
                  This allows you to begin the work with a smaller initial payment and complete the payment later in the process.

                  All Upfront Payment Plan (Least Expensive): Opting for the all upfront payment plan requires paying the full amount in advance.
                  This plan offers the least expensive overall cost and eliminates the need for subsequent payments.
                  Please note that regardless of the chosen payment plan, a deposit is always required before commencing work on your coursework.
                  The deposit serves as a commitment and helps initiate the process.

                  I aim to provide flexibility and affordability in my payment options, ensuring that you can access my academic services while considering your financial situation.

                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>When should I make payment?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  To secure your spot, I highly recommend making a deposit as soon as possible.
                  This deposit serves as confirmation and ensures your reservation.
                  When making the payment through your chosen payment app, please remember to include a note or comment for each transaction.
                  This will help us accurately track and identify your payment, ensuring a seamless process and avoiding any confusion.
                  Your cooperation in providing these transaction details is greatly appreciated.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>How do I make payment for the exam?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  In adherence to my payment policy, the remaining balance is due upon completion of the exam.
                  However, if the attained grade falls below a B-, there is a specific procedure to follow for potential refund consideration.
                  To initiate the refund process, you need to inform me of the grade and provide a screenshot displaying the score.
                  Additionally, you must provide verifiable proof that the provided screenshot is indeed from the specific exam that my team assisted you with.
                  Once this information is submitted and verified, I will carefully review the case, and depending on the circumstances, a refund of 50-100% can be provided.
                  Please note that the refund is subject to verification and evaluation based on the provided evidence.
                  I prioritize fairness and transparency in handling such situations, ensuring that any potential refund aligns with the agreed-upon terms and conditions.
                  I appreciate your understanding and cooperation regarding the refund process outlined in my payment policy.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>How do you ensure that the professor or school does not know that someone else is logging to my school portal?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  I prioritize your safety and ensure the protection of your personal information.
                  By utilizing a VPN (Virtual Private Network) service, I am able to secure and conceal your actual location.
                  If you have concerns about the location appearing different or using a different device,
                  my team and I can adjust our IP address to match a city closest to your actual location.
                  This helps maintain consistency and minimizes any potential discrepancies.
                  Using a VPN for school-related activities is considered safe and beneficial.
                  The VPN encrypts and safeguards your connection, providing an additional layer of security.
                  Rest assured that there is a minimal chance of your school or instructor detecting any unusual or suspicious activity in your account history.
                  I have extensive experience utilizing VPN services for several years, successfully completing numerous exams from various states and even different countries.
                  This track record demonstrates my commitment to ensuring a secure and seamless exam-taking experience for my clients.
                  Your privacy and academic integrity are of utmost importance,
                  and I take every precaution to ensure the confidentiality and security of your online activities.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            
            <AccordionItem uuid="g">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>How much does your service cost?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Pricing for Exams, Tests, and Quizzes: The final rates for exams, tests, and quizzes are determined by several factors.
                  These include whether proctoring is required, the duration of the assessment,
                  the number of questions, the method of delivering answers (showing all work or providing only the answer),
                  and whether the assessment has a flexible or fixed start and end time.
                  Taking these variables into account helps determine the pricing structure for these services.
                  Pricing for Full Classes: The final rates for full class assistance depend on various factors.
                  These include the total number of homework assignments, quizzes, and exams remaining to be completed, the number of weeks left in the class,
                  whether proctoring is required for exams, whether the assignments and exams require showing all work or providing only the answer,
                  and whether the assessments have a flexible or fixed start and end time.
                  Considering these factors allows for a comprehensive assessment of the work involved, resulting in appropriate pricing for full class assistance.
                  Pricing for Essays, Papers, and Discussion Posts: The final rates for writing tasks are determined by specific criteria.
                  These include the required word count or number of pages, the topic of interest, the type of citations, the preferred style for sources and bibliography,
                  and the level of research required. By considering these factors, the pricing for essays, papers,
                  and discussion posts can be accurately determined, ensuring a fair evaluation of the work involved.
                  Taking into account these factors enables us to provide transparent and customized pricing for exams, tests, quizzes, full class assistance, and writing tasks.
                  By assessing the unique requirements of each service,
                  we ensure that our pricing accurately reflects the complexity and effort involved in delivering high-quality academic support.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="h">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Do you have a grade guarantee policy?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  You can anticipate receiving any of the following grades: A or B.
                  In the event that your final grade falls below a C-, specifically a D-, D, D+, or F,
                  I am prepared to offer a refund ranging from 50% to 100% of the payment you made.
                  Please note that no refunds will be provided for grades within the C-, C, or C+ range.
                  We strive to deliver exceptional results and ensure your satisfaction with our services.
                  By offering a refund for lower grades, we aim to demonstrate our commitment to achieving your academic goals.
                  However, it's important to clarify that refunds are only applicable to grades falling within the specified range and
                  are subject to the terms and conditions agreed upon during our engagement.
                  Our primary focus is on helping you excel in your academic pursuits and providing the necessary support for your success.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="i">
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span>Is it a MUST that I share my login details?</span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  While it is not mandatory, I highly recommend sharing your credentials with my team.
                  By doing so, we can provide you with more effective assistance for your exams and assignments, significantly improving our ability to achieve higher scores.
                  The need to access the school portal will depend on the specific requirements of the task at hand.
                  If you are seeking comprehensive support throughout the entire course, granting us access to the school portal would be necessary.
                  Rest assured that we prioritize the confidentiality and security of your personal information.
                  Any credentials you provide will be handled with utmost care and will only be used for the purpose of assisting you with your academic endeavors.
                  Sharing your credentials enables us to deliver a tailored and comprehensive service, maximizing our effectiveness in supporting your educational goals.
                  However, the decision to provide access to the school portal remains entirely voluntary, and we respect your choice in this matter.
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

    <Footer />
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default FAQPage
