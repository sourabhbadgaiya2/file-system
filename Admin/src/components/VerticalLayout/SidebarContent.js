import PropTypes from "prop-types"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { Form } from "react-bootstrap"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import withRouter from "components/Common/withRouter"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()
  const [location, setLocation] = useState("Bhopal")

  const handleLocationChange = event => {
    setLocation(event.target.value)
  }
  const activateParentDropdown = useCallback(item => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }, [])

  const removeActivation = items => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i]
      const parent = items[i].parentElement

      if (item && item.classList.contains("active")) {
        item.classList.remove("active")
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show")
        }

        parent.classList.remove("mm-active")
        const parent2 = parent.parentElement

        if (parent2) {
          parent2.classList.remove("mm-show")

          const parent3 = parent2.parentElement
          if (parent3) {
            parent3.classList.remove("mm-active") // li
            parent3.childNodes[0].classList.remove("mm-active")

            const parent4 = parent3.parentElement // ul
            if (parent4) {
              parent4.classList.remove("mm-show") // ul
              const parent5 = parent4.parentElement
              if (parent5) {
                parent5.classList.remove("mm-show") // li
                parent5.childNodes[0].classList.remove("mm-active") // a tag
              }
            }
          }
        }
      }
    }
  }

  const activeMenu = useCallback(() => {
    const pathName = process.env.PUBLIC_URL + props.router.location.pathname
    let matchingMenuItem = null
    const ul = document.getElementById("side-menu")
    const items = ul.getElementsByTagName("a")
    removeActivation(items)

    for (let i = 0; i < items.length; ++i) {
      if (pathName === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  }, [props.router.location.pathname, activateParentDropdown])

  useEffect(() => {
    ref.current.recalculate()
  }, [])

  useEffect(() => {
    new MetisMenu("#side-menu")
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    activeMenu()
  }, [activeMenu])

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Main")} </li>
            {/* user-profile */}
            <div className="d-flex align-items-center p-3  rounded bg-dark">
              {/* User Image */}
              <img
                src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid" // प्रोफाइल इमेज URL
                alt="User"
                className="rounded-circle me-3"
                width="60"
                height="60"
              />
              {/* User Details */}
              <div>
                <span className="fw-bold d-block">Abhishek Meena</span>
                {/* Location Dropdown */}
                <Form.Select
                  value={location}
                  onChange={handleLocationChange}
                  className="mt-1"
                >
                  <option value="Bhopal">Bhopal</option>
                  <option value="Indore">Indore</option>
                  <option value="Vidisha">Vidisha</option>
                </Form.Select>
              </div>
            </div>

            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="mdi mdi-view-dashboard"></i>
                <span className="badge rounded-pill bg-primary float-end">
                  2
                </span>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="/BankDeatils" className=" waves-effect">
                <i className="mdi mdi-calendar-check"></i>
                <span>{props.t("Banks")}</span>
              </Link>
            </li>

            <li>
              <Link to="/Allbankform" className=" waves-effect">
                <i className="mdi mdi-chat-processing-outline"></i>
                <span className="badge rounded-pill bg-danger float-end"></span>
                <span>BankForms</span>
              </Link>
            </li>

            <li>
              <Link to="/Invoice" className=" waves-effect">
                <i className="mdi mdi-chat-processing-outline"></i>
                <span className="badge rounded-pill bg-danger float-end"></span>
                <span>InoviceAll</span>
              </Link>
            </li>

            {/* <li className="menu-title">{props.t("Components")}</li> */}

            {/* <li>
              <Link to="/#" className="waves-effect">
                <span className="badge rounded-pill bg-danger float-end">
                  2
                </span>
                <i className="mdi mdi-google-maps"></i>
                <span>{props.t("Maps")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/maps-google">{props.t("Google Maps")}</Link>
                </li>
                <li>
                  <Link to="/maps-vector">{props.t("Vector Maps")}</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="mdi mdi-account-box"></i>
                <span>{props.t("Authentication")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/pages-login">{props.t("Login")}</Link>
                </li>
                <li>
                  <Link to="/pages-register">{props.t("Register")}</Link>
                </li>
                <li>
                  <Link to="/page-recoverpw">
                    {props.t("Recover Password")}
                  </Link>
                </li>
                <li>
                  <Link to="/auth-lock-screen">{props.t("Lock Screen")}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
