import React from "react"
import { Navigate } from "react-router-dom"

// Home-page
import ApplicationPipeline from "../pages/Dashboard/ApplicationPipeline"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// BankDeatilsPages
import BankDeatils from "../pages/Bankdetills/index"
import Invoice from "../pages/invoice/index"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Inner Authentication
import Login1 from "../pages/AuthenticationInner/Login"
import Register1 from "../pages/AuthenticationInner/Register"
import Recoverpw from "../pages/AuthenticationInner/Recoverpw"
import LockScreen from "../pages/AuthenticationInner/auth-lock-screen"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

//Charts

//Icons
// import IconMaterialdesign from "../pages/Icons/IconMaterialdesign"
// import Iconion from "../pages/Icons/Iconion"
// import IconFontawesome from "../pages/Icons/IconFontawesome"
// import IconThemify from "../pages/Icons/IconThemify"
// import IconDripicons from "../pages/Icons/IconDripicons"
// import IconTypicons from "../pages/Icons/IconTypicons"

//Tables

// Forms

//Ui
import UiAlert from "../pages/Ui/UiAlert"
import UiButtons from "../pages/Ui/UiButtons"
import UiBadge from "../pages/Ui/UiBadge"
import UiCards from "../pages/Ui/UiCards"
import UiCarousel from "../pages/Ui/UiCarousel"
import UiDropdown from "../pages/Ui/UiDropdown"
import UiGrid from "../pages/Ui/UiGrid"
import UiImages from "../pages/Ui/UiImages"
import UiLightbox from "../pages/Ui/UiLightbox"
import UiModal from "../pages/Ui/UiModal"
import UiPagination from "../pages/Ui/UiPagination"
import UiPopoverTooltips from "../pages/Ui/UiPopoverTooltips"
import UiProgressbar from "../pages/Ui/UiProgressbar"
import UiTabsAccordions from "../pages/Ui/UiTabsAccordions"
import UiTypography from "../pages/Ui/UiTypography"
import UiVideo from "../pages/Ui/UiVideo"
import UiSessionTimeout from "../pages/Ui/UiSessionTimeout"
import UiRangeSlider from "../pages/Ui/UiRangeSlider"

//Extra Pages

import UiUtilities from "pages/Ui/UiUtilities"
import UiColors from "pages/Ui/UiColors"
import UiOffcanvas from "pages/Ui/UiOffcanvas"

// BANK ROUTES
import Allbankform from "pages/Banksform/Index"
import Piramal from "pages/Banks/primal/index"
import IccBank from "pages/Banks/IccBank/index"
import Fed from "pages/Banks/Fed/fed"
import Piramalnpa from "pages/Banks/Piramalnpabank/PiramalNpa"
import Idfcbanks from "pages/Banks/Idfc/IdfcBank"
import Manupurams from "pages/Banks/Manupuram/Manupurambanks"
import SamstaFinance from "pages/Banks/Samsta/SamstaFln"
import Profectus from "pages/Banks/Profectus/ProfectusBank"
import Protiums from "pages/Banks/Protium/ProtiumBank"
import Agriwise from "pages/Banks/newbanks/Agriwise"
import Bajajameriya from "pages/Banks/newbanks/BajaAmeriya"
import Bajaj from "pages/Banks/newbanks/Bajaj"
import DmiFinanace from "pages/Banks/newbanks/DmiFinance"
import Homefirst from "pages/Banks/newbanks/Homefirst"
import ShriRam from "pages/Banks/newbanks/ShriRam"
import ShubhamHfc from "pages/Banks/newbanks/ShubhamHfc"
import Sundaram from "pages/Banks/newbanks/Sundaram"
import Suryodaya from "pages/Banks/newbanks/Suryodaya"
import Utkarsh from "pages/Banks/newbanks/Utkarsh"
import Chola from "pages/Banks/Cholaa/index"
import Velocity from "pages/Banks/Valocity/Index"
import SundaramHome from "pages/Banks/SundaramHome/index"
// import Aditya from "pages/Banks/newbanks/Aditya"
// import  Contact  from "pages/Banks/newbanks/Contact"

// BankForm
import PiramalForm from "pages/BankForms/PiramalForm/index"
import IccForm from "pages/BankForms/IccForm/index"
import CholaBankFroms from "pages/BankForms/CholaForms/Index"
import VelocityForm from "pages/BankForms/VelocityFrom/index"
import SundaramFrom from "pages/BankForms/SundaramForm/index"
// import { components } from "react-select"
// import { components } from "react-select"
// import IccForm from "pages/BankForms/IccForm/Index"

const userRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/piramal", component: <Piramal /> },
  { path: "/iccbank", component: <IccBank /> },
  { path: "/fed", component: <Fed /> },
  { path: "/piramalnpa", component: <Piramalnpa /> },
  { path: "/idfcbanks", component: <Idfcbanks /> },
  { path: "/manupurams", component: <Manupurams /> },
  { path: "/samstaFinance", component: <SamstaFinance /> },
  { path: "/profectus", component: <Profectus /> },
  { path: "/protiums", component: <Protiums /> },

  // {path: "/aditya", component:  < Aditya/> },
  // {path: "/contact", component:  <Contact/> },

  { path: "/agriwise", component: <Agriwise /> },
  { path: "/bajajameriya", component: <Bajajameriya /> },
  { path: "/bajaj", component: <Bajaj /> },
  { path: "/dmiFinanace  ", component: <DmiFinanace /> },
  { path: "/Homefirst/:id", component: <Homefirst /> },
  { path: "/shriram", component: <ShriRam /> },
  { path: "/shubhamhfc", component: <ShubhamHfc /> },
  { path: "/sundaram ", component: <Sundaram /> },
  { path: "/suryodaya", component: <Suryodaya /> },
  { path: "/utkarsh", component: <Utkarsh /> },
  { path: "/cholaBankFroms", component: <CholaBankFroms /> },
  { path: "/velocity", component: <Velocity /> },
  { path: "/sundaramhome ", component: <SundaramHome /> },

  // BankForm
  { path: "/piramalForm", component: <PiramalForm /> },
  { path: "/IccForm", component: <IccForm /> },
  { path: "/chola", component: <Chola /> },
  { path: "/velocityForm", component: <VelocityForm /> },
  { path: "/sundaramfrom", component: <SundaramFrom /> },

  // Invoice

  { path: "/invoice", component: <Invoice /> },

  // HOME-PAG
  { path: "/applicationPipeline", component: <ApplicationPipeline /> },
  { path: "/BankDeatils", component: <BankDeatils /> },
  { path: "/Allbankform", component: <Allbankform /> },

  // // //profile
  { path: "/profile", component: <UserProfile /> },

  // // Icons
  // { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  // { path: "/icons-ion", component: <Iconion /> },
  // { path: "/icons-fontawesome", component: <IconFontawesome /> },
  // { path: "/icons-themify", component: <IconThemify /> },
  // { path: "/icons-dripicons", component: <IconDripicons /> },
  // { path: "/icons-typicons", component: <IconTypicons /> },

  // // Tables

  // // Maps

  // // Forms

  // // Ui
  { path: "/ui-alerts", component: <UiAlert /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-badge", component: <UiBadge /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-lightbox", component: <UiLightbox /> },
  { path: "/ui-modals", component: <UiModal /> },
  { path: "/ui-pagination", component: <UiPagination /> },
  { path: "/ui-popover-tooltip", component: <UiPopoverTooltips /> },
  { path: "/ui-progressbars", component: <UiProgressbar /> },
  { path: "/ui-tabs-accordions", component: <UiTabsAccordions /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-session-timeout", component: <UiSessionTimeout /> },
  { path: "/ui-rangeslider", component: <UiRangeSlider /> },
  { path: "/ui-utilities", component: <UiUtilities /> },
  { path: "/ui-colors", component: <UiColors /> },
  { path: "/ui-offcanvas", component: <UiOffcanvas /> },

  // this route should be at the end of all other routes
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
]

const authRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },

  // Authentication Inner
  { path: "/pages-login", component: <Login1 /> },
  { path: "/pages-register", component: <Register1 /> },
  { path: "/page-recoverpw", component: <Recoverpw /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },
]

export { userRoutes, authRoutes }
