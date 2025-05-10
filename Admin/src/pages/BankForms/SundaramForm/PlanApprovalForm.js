import React, { useState } from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"

const PlanApprovalForm = () => {
  const [formData, setFormData] = useState({
    layoutApproval: "",
    approvedNumber1: "",
    approvedDate1: "",
    approvedAuthority1: "",
    planningPermit: "",
    approvedNumber2: "",
    approvedDate2: "",
    approvedAuthority2: "",
    buildingPermit: "",
    approvedNumber3: "",
    approvedDate3: "",
    approvedAuthority3: "",
    civicStatus: "",
    propertyIdentifiedBy: "",
    plotDemarcation: "",
    propCharacteristic: "",
    shapeOfLand: "",
    typeOfRoad1: "",
    roadWidth1: "",
    typeOfRoad2: "",
    roadWidth2: "",
    reportedOwner: "",
    ebServiceNo: "",
    docNorth: "",
    docSouth: "",
    docEast: "",
    docWest: "",
    siteNorth: "",
    siteSouth: "",
    siteEast: "",
    siteWest: "",
    matchesDoc: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Submitted Data:", formData)
  }

  return (
    <Container className="py-4">
      <Form onSubmit={handleSubmit}>
        <h5>Plan Approval Details</h5>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="layoutApproval"
              placeholder="Layout Approval"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="approvedNumber1"
              placeholder="Approved Number"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="date"
              name="approvedDate1"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="approvedAuthority1"
              placeholder="Approved Authority"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="planningPermit"
              placeholder="Planning Permit"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="approvedNumber2"
              placeholder="Approved Number"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="date"
              name="approvedDate2"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="approvedAuthority2"
              placeholder="Approved Authority"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="buildingPermit"
              placeholder="Building Permit"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="approvedNumber3"
              placeholder="Approved Number"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="date"
              name="approvedDate3"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="approvedAuthority3"
              placeholder="Approved Authority"
              onChange={handleChange}
            />
          </Col>
        </Row>

        <h5>Property Aspects</h5>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="civicStatus"
              placeholder="Civic Status"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="propertyIdentifiedBy"
              placeholder="Property Identified By"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="plotDemarcation"
              placeholder="Plot Demarcation"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="propCharacteristic"
              placeholder="Prop Characteristic"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="shapeOfLand"
              placeholder="Shape of Land"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="typeOfRoad1"
              placeholder="Type of Road 1"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="roadWidth1"
              placeholder="Road Width"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="typeOfRoad2"
              placeholder="Type of Road 2"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="roadWidth2"
              placeholder="Road Width"
              onChange={handleChange}
            />
          </Col>
        </Row>

        <h5>Legal Aspects</h5>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="reportedOwner"
              placeholder="Name of the Reported Owner / Tenant"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="ebServiceNo"
              placeholder="EB Service No / Property ID No"
              onChange={handleChange}
            />
          </Col>
        </Row>

        <h5>Boundaries of the Property</h5>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="docNorth"
              placeholder="North by (Doc)"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="docSouth"
              placeholder="South by (Doc)"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="docEast"
              placeholder="East by (Doc)"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="docWest"
              placeholder="West by (Doc)"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="siteNorth"
              placeholder="North by (Site)"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="siteSouth"
              placeholder="South by (Site)"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="siteEast"
              placeholder="East by (Site)"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              name="siteWest"
              placeholder="West by (Site)"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              name="matchesDoc"
              placeholder="Matches with documents (If No input the reason)"
              onChange={handleChange}
            />
          </Col>
        </Row>

        <Button type="submit" variant="primary">
          Save
        </Button>
      </Form>
    </Container>
  )
}

export default PlanApprovalForm
