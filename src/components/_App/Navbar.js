import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../images/new-logo.png"

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/"
              onClick={toggleNavbar}
              className="navbar-brand"
            >
              <img src={Logo} alt="logo" width="300" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Teas Experts
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/about-us"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    About Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/services-2"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Services <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/teas-exams"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Teas Exams
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/hesi-a2-exams"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Hesi A2 Exams
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/ged-exams"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        GED Exams
                      </Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link
                        to="/online-class"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Online Class
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="/how-it-works"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    How it Works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/pricing"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/faq"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    FAQ
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    Legal <Icon.ChevronDown />
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/refund-policy"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Refund Policy
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/privacy-policy"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/terms"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Terms and Conditions
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="/blog"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option">
              <Link to="/login" className="btn btn-primary">
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
