import PropTypes from 'prop-types'
import React, { useState } from "react"


import { connect } from "react-redux"
import { BsHouseDoor, BsPersonBadge, BsQuestionCircle } from "react-icons/bs";


import { Link, NavLink } from "react-router-dom"
// import "bootstrap-icons/font/bootstrap-icons.css";



// Reactstrap
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

// import megamenuImg from "../../assets/images/megamenu-img.png"
import logo from "../../assets/images/logo-sm.png"
// import logoLightPng from "../../assets/images/logo-light.png"
import logoDark from "../../assets/images/logo-dark.png"

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
} from "../../store/actions"

const Header = props => {
  const [search, setsearch] = useState(false)
  // const [createmenu, setCreateMenu] = useState(false)

  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  function tToggle() {
    var body = document.body;
    body.classList.toggle("vertical-collpsed");
    body.classList.toggle("sidebar-enable");
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="17" />
                </span>
              </Link>

              <Link style={{ marginTop: "20px", textDecoration: "none" }} to="/" className="logo logo-light">
                <span className="logo-lg">
                  <h5
                    style={{
                      fontSize: "18px", // Bigger size for better visibility
                      fontWeight: "bold", // Bold styling
                      letterSpacing: "1.5px", // More spacing for premium feel
                      textTransform: "uppercase", // Makes it look official
                      background: "linear-gradient(45deg, #ff416c, #ff7b00)", // Choose any gradient
                      //         WebkitBackgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent", // Keeps only text visible
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    Unique <br />
                    <span style={{ fontWeight: "lighter", fontSize: "16px" }}>Engineering</span>
                  </h5>
                </span>
              </Link>

            </div>

            <button
              type="button"
              onClick={() => {
                tToggle()
              }}
              className="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn"
              id="vertical-menu-btn"
            >
              <i className="mdi mdi-menu"></i>
            </button>
            {/* <div className="d-none d-sm-block">
              <Dropdown
                isOpen={createmenu}
                toggle={() => setCreateMenu(!createmenu)}
                className="d-inline-block"
              >

                <div className="dropdown dropdown-topbar pt-3 mt-1 d-inline-block">

                  <DropdownToggle
                    className="btn btn-light"
                    tag="button"
                  >
                    Create <i className="mdi mdi-chevron-down"></i>
                  </DropdownToggle>

                  <DropdownMenu className="dropdown-menu-end">
                    <DropdownItem tag="a" href="#">Action</DropdownItem>
                    <DropdownItem tag="a" href="#">Another action</DropdownItem>
                    <DropdownItem tag="a" href="#">Something else here</DropdownItem>
                    <div className="dropdown-divider"></div>
                    <DropdownItem tag="a" href="#">Separated link</DropdownItem>
                  </DropdownMenu>

                </div>
              </Dropdown>
           </div > */}

<div className="d-inline-block mt-3">
<nav className="nav justify-content-around">

{/* Home */}
<div className="nav-item text-center mx-3">
  <NavLink
    to="/dashboard"
    className="nav-link d-flex flex-column align-items-center"
    style={({ isActive }) => ({
      color: isActive ? "#AC2321" : "black",
      fontWeight: isActive ? "bold" : "normal",
      borderBottom: isActive ? "3px solid #AC2321" : "none",
    })}
  >
    <BsHouseDoor size={22} />
    <span style={{ fontSize: "14px", marginTop: "4px" }}>Home</span>
  </NavLink>
</div>

{/* Application Pipeline */}
<div className="nav-item text-center mx-3">
  <NavLink
    to="/applicationPipeline"
    className="nav-link d-flex flex-column align-items-center"
    style={({ isActive }) => ({
      color: isActive ? "#AC2321" : "black",
      fontWeight: isActive ? "bold" : "normal",
      borderBottom: isActive ? "3px solid #AC2321" : "none",
    })}
  >
    <BsPersonBadge size={22} />
    <span style={{ fontSize: "14px", marginTop: "4px" }}>Application Pipeline</span>
  </NavLink>
</div>

{/* Help */}
<div className="nav-item text-center mx-3">
  <NavLink
    to="/help"
    className="nav-link d-flex flex-column align-items-center"
    style={({ isActive }) => ({
      color: isActive ? "#AC2321" : "black",
      fontWeight: isActive ? "bold" : "normal",
      borderBottom: isActive ? "3px solid #AC2321" : "none",
    })}
  >
    <BsQuestionCircle size={22} />
    <span style={{ fontSize: "14px", marginTop: "4px" }}>Help/FAQ's</span>
  </NavLink>
</div>

</nav>


    </div>
          </div>
          <div className="d-flex">
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.t("Search") + "..."}
                />
                <span className="fa fa-search"></span>
              </div>
            </form>
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button
                onClick={() => {
                  setsearch(!search)
                }}
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  search
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <LanguageDropdown />
            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen()
                }}
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="mdi mdi-fullscreen font-size-24"></i>
              </button>
            </div>
            <NotificationDropdown />
            <ProfileMenu />
            <div
              onClick={() => {
                props.showRightSidebarAction(!props.showRightSidebar)
              }}
              className="dropdown d-inline-block"
            >
              <button
                type="button"
                className="btn header-item noti-icon right-bar-toggle waves-effect"
              >
                <i className="mdi mdi-spin mdi-cog"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType,
  } = state.Layout
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(mapStatetoProps, {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType,
})(withTranslation()(Header))
