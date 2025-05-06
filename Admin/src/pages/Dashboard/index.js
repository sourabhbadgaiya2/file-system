import { connect } from "react-redux"
import React, { useEffect, useState } from "react"
import { Row } from "reactstrap"

// Pages Components
import Miniwidget from "./Miniwidget"
import MyWorklist from "./MyWorklist"
// import MonthlyEarnings from "./montly-earnings";
// import Assigned from "./Assigned";
// import QueryRaised from "./QueryRaised";
// import ReportSubmitted from "./ReportSubmitted";
// import EmailSent from "./email-sent";
// import MonthlyEarnings2 from "./montly-earnings2";
// import Inbox from "./inbox"
// import RecentActivity from "./recent-activity"
// import WidgetUser from "./widget-user"
// import YearlySales from "./yearly-sales"
// import LatestTransactions from "./latest-transactions"
// import LatestOrders from "./latest-orders"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions"

const Dashboard = props => {
  const [activeTab, setActiveTab] = useState("dashboard")
  document.title = "Dashboard |  - Responsive Bootstrap 5 Admin Dashboard"

  const breadcrumbItems = [
    { title: "Unique Engineering", link: "#" },
    { title: "Dashboard", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems("Dashboard", breadcrumbItems)
  })

  // const columns = [
  //   { name: "ID", selector: row => row.id, sortable: true },
  //   { name: "Product Name", selector: row => row.product, sortable: true },
  //   {
  //     name: "Price",
  //     selector: row => `$${row.price}`,
  //     sortable: true,
  //     right: true,
  //   },
  //   { name: "Stock", selector: row => row.stock, sortable: true, right: true },
  // ]

  //   const data = [
  //     { id: 1, product: "bank document", price: 999, stock: 20 },
  //     { id: 2, product: "bank document", price: 699, stock: 50 },
  //     { id: 3, product: "bank document", price: 199, stock: 100 },
  //     { id: 4, product: "bank document", price: 299, stock: 30 },
  // ];

  // console.log(data);

  // const [filterText, setFilterText] = useState("");

  // // Search Functionality
  // const filteredData = data.filter((item) =>
  //   item.product.toLowerCase().includes(filterText.toLowerCase())
  // );

  return (
    <React.Fragment>
      <Row>
        <div className="   custom-container">
          {/* Tabs Navigation */}
          <ul className="nav nav-tabs custom-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "dashboard" ? "active custom-active" : ""}`}
                onClick={() => setActiveTab("dashboard")}
              >
                Dashboard
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "mywork" ? "active custom-active" : ""}`}
                onClick={() => setActiveTab("mywork")}
              >
                My Worklist
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          {activeTab === "dashboard" && <Miniwidget />}
          {activeTab === "mywork" && <MyWorklist />}
        </div>

        <style>
          {`
          /* ✅ Tabs Container (White Background + Shadow) */
          .custom-container {
            background-color: white !important;
            padding-left: 20px;
            // padding: 2px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Soft shadow */
          }

          /* ✅ Remove default Bootstrap border & extra line */
          .custom-tabs {
            border-bottom: none !important;
          }

          /* ✅ Remove extra border around tabs */
          .custom-tabs .nav-link {
            border: none !important;
            background-color: white !important;
            color: black !important;
            transition: all 0.3s ease-in-out;
            
          }
          
          /* ✅ Active Tab Style (Only Bottom Border Red) */
          .custom-tabs .nav-link.active {
            border-bottom: 3px solid #AC2321 !important;
            color: black !important;
            font-weight: bold;
            color: #AC2321 !important;

          }
        `}
        </style>
      </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Dashboard)
