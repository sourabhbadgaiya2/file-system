import React, { useState } from "react"
import PropertyLocation from "./PropertyLocation"
import Conditions from "./Conditions"
import Specifications from "./Specifications"
import StageConstruction from "./StageConstruction"
import DocumentUpload from "./DocumentUpload"
import Remarks from "./Remarks"
import { Card, ListGroup, Button, Row, Col, Badge } from "react-bootstrap"

const LocationDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null)
  const [recommended, setRecommended] = useState(false)

  const components = {
    Location: {
      title: "LOCATION",
      content: <PropertyLocation />,
      icon: "📝",
    },
    conditions: {
      title: "CONDITIONS",
      content: <Conditions/>,
      icon: "📝",
    },
    specifications: {
      title: "SPECIFICATIONS",
      content: <Specifications />,
      icon: "📋",
    },
    construction: {
      title: "CONSTRUCTION STAGE",
      content: <StageConstruction />,
      icon: "🏗️",
    },
    document: {
      title: "DOCUMENT UPLOAD",
      content: <DocumentUpload/>,
      icon: "📎",
    },
    remarks: {
      title: "REMARKS",
      content: <Remarks/>,
      icon: "💬",
    },
   
  }
  const userDetails = {
    mainApplicant: "MAMTA TYAGI",
    productType: "LAP Resale Independent House",
    applicationNumber: "60810631",
    applicationDate: "13/01/2025 06:46 PM",
    contact: "+91 98765 43210",
    email: "mamta.tyagi@example.com",
  }

  return (
    <div className="container-fluid mt-3">
      <Row>
        {/* Left Column - User Details and Navigation */}
        <Col md={3}>
          <Card className="shadow-sm mb-4" style={{ height: 'fit-content', borderColor: '#262F40' }}>
            <Card.Header className="text-white d-flex justify-content-between align-items-center py-2" style={{ backgroundColor: '#262F40' }}>
                <h5 className="mb-0" style={{ fontSize: '1rem' }}>APPLICANT DETAILS</h5>
                <Badge bg="light" style={{ color: '#262F40', fontSize: '0.75rem' }}>ACTIVE</Badge>
            </Card.Header>
            <Card.Body className="p-3">
                <div className="mb-2">
                    <small className="text-muted">MAIN APPLICANT</small>
                    <p className="mb-1 fw-bold" style={{ fontSize: '0.9rem' }}>{userDetails.mainApplicant}</p>
                </div>

                <div className="mb-2">
                    <small className="text-muted">PRODUCT TYPE</small>
                    <p className="mb-1" style={{ fontSize: '0.85rem' }}>{userDetails.productType}</p>
                </div>

                <div className="mb-2">
                    <small className="text-muted">APPLICATION NUMBER</small>
                    <p className="mb-1" style={{ fontSize: '0.85rem' }}>{userDetails.applicationNumber}</p>
                </div>

                <div className="mb-2">
                    <small className="text-muted">DATE OF APPLICATION</small>
                    <p className="mb-1" style={{ fontSize: '0.85rem' }}>{userDetails.applicationDate}</p>
                </div>
            </Card.Body>
          </Card>

          <Card className="shadow-sm">
            <Card.Header className="bg-light">
              <h5 className="mb-0">Sections</h5>
            </Card.Header>

            <ListGroup style={{ color: "#313A4D" }}>
              {Object.entries(components).map(([key, { title, icon }]) => (
                <ListGroup.Item
                  key={key}
                  action
                  active={activeComponent === key}
                  onClick={() => setActiveComponent(key)}
                  className="d-flex justify-content-between align-items-center"
                  style={activeComponent === key ? { 
                    backgroundColor: '#262F40', 
                    borderColor: '#262F40',
                    color: 'white'
                  } : {}}
                >
                  <span>
                    {icon} {title}
                  </span>
                  {activeComponent === key && (
                    <Badge bg="light" style={{ color: '#262F40' }}>Active</Badge>
                  )}
                </ListGroup.Item>
              ))}
            </ListGroup>

            <Card.Footer className="bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Recommendation:</h6>
                <Button
                  size="sm"
                  variant={recommended ? "success" : "outline-danger"}
                  onClick={() => setRecommended(!recommended)}
                >
                  {recommended ? "YES" : "NO"}
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>

        {/* Main Content Area */}
        <Col md={9}>
          <Card className="shadow-sm h-100">
            <Card.Header className="bg-light d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                {activeComponent
                  ? components[activeComponent].title
                  : "Select a section"}
              </h5>
              {activeComponent && (
                <Badge bg="info">{components[activeComponent].icon}</Badge>
              )}
            </Card.Header>
            <Card.Body>
              {activeComponent ? (
                components[activeComponent].content
              ) : (
                <div className="text-center text-muted py-5">
                  {/* <h4>👈 Select a section from the sidebar</h4> */}
                  {/* <p>Click on any item to view its details</p> */}
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default LocationDashboard