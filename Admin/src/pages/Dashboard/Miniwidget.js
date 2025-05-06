import React, { useState } from "react"
import { Card, CardBody, Row, Col } from "reactstrap"
import Pending from "./Pending"
import Assigned from "./Assigned"
import QueryRaised from "./QueryRaised"
import ReportSubmitted from "./ReportSubmitted"
import { Dropdown } from "react-bootstrap"

const Miniwidget = props => {
  const reports = [
    {
      title: "To Be Assigned",
      total: "1,587",
      component: "Pending",
    },
    {
      title: "Total Assigned",
      total: "782",
      component: "Assigned",
    },
    {
      title: "Awaiting Approved",
      total: "59",
    },
    {
      title: "Query Raised",
      total: "120",
      component: "QueryRaised",
    },
    {
      title: "Pending For Action",
      total: "300",
      component: "ReportSubmitted",
    },
    {
      title: "Cancel Cases",
      total: "10",
    },
  ]

  const [activeComponent, setActiveComponent] = useState(null)
  const [selectedAgent, setSelectedAgent] = useState("Self")

  const handleSelect = eventKey => {
    setSelectedAgent(eventKey)
  }

  return (
    <React.Fragment>
      <Row
        className="mb-4"
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px",
          background: "#f9f9f9",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="mb-0">All Cases</h5>

          <div
            style={{
              width: "250px",
              border: "1px solid #ccc", // Border for the dropdown
              borderRadius: "5px",
              padding: "5px",
              // backgroundColor: "gray",
            }}
          >
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                style={{
                  width: "100%",
                  padding: "2px",
                  fontSize: "16px",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between", // To align text and icon
                }}
              >
                {selectedAgent}
                <span>&#x25BC;</span> {/* Down arrow icon */}
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ width: "100%" }}>
                <Dropdown.Item eventKey="All Agents">All Agents</Dropdown.Item>
                <Dropdown.Item eventKey="Self">Self</Dropdown.Item>
                <Dropdown.Item eventKey="SHUBHAM RATHORE">
                  SHUBHAM RATHORE
                </Dropdown.Item>
                <Dropdown.Item eventKey="SAKET THAKUR">
                  SAKET THAKUR
                </Dropdown.Item>
                <Dropdown.Item eventKey="LOKESH SHARMA">
                  LOKESH SHARMA
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {reports.map((report, key) => (
          <Col xl={2} sm={6} key={key}>
            <Card
              className="mini-stat"
              style={{
                cursor: "pointer",
                background: "transparent",
                border:
                  activeComponent === report.component
                    ? "2px solid #AC2321"
                    : "1px solid gray",
                color: "black",
                paddingTop: "20px",
                height: "180px",
                borderRadius: "5px",
              }}
              onClick={() => setActiveComponent(report.component)}
            >
              <CardBody className="card-body mini-stat-img text-center">
                <h6
                  className="text-uppercase mb-3 font-size-13"
                  style={{ whiteSpace: "nowrap", overflow: "hidden" }}
                >
                  {report.title}
                </h6>
                <h2 className="mb-4">{report.total}</h2>
              </CardBody>
            </Card>
          </Col>
        ))}
        <div className="d-flex justify-content-between">
          <h5>Total cases: 2000</h5>
          <div className="d-flex justify-content-between w-50">
            <h5>Denied cases: 50</h5>
            <h5>Token Back Requests: 0</h5>
          </div>
        </div>
      </Row>

      <Row>
        <Col xs="12">
          {activeComponent === "Pending" && <Pending />}
          {activeComponent === "Assigned" && <Assigned />}
          {activeComponent === "QueryRaised" && <QueryRaised />}
          {activeComponent === "ReportSubmitted" && <ReportSubmitted />}
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Miniwidget
