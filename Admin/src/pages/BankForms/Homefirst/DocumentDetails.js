import React, { useState } from "react"
import {
  Form,
  Button,
  Card,
  Col,
  Row,
  Accordion,
  CardBody,
  CardHeader,
} from "react-bootstrap"

const DocumentDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    addressLegal:
      "PROPERTY AT PLOT NO.147 IS SITUATED GRAM-PATLONA(BIJORI), PH NO.18, GRAM PANCHAYAT-BIJORI, TEHSIL AND DIST- SEHORE, MP 466001",
    addressSite:
      "PROPERTY AT PLOT NO.147 IS SITUATED GRAM-PATLONA(BIJORI), PH NO.18, GRAM PANCHAYAT-BIJORI, TEHSIL AND DIST- SEHORE, MP 466001",
    nearbyLandmark: "NEAR GOVT.SCHOOL",
    projectPinCode: "466001",
    zone: "RESIDENTIAL",
    projectState: "MADHYAPRADESH",
    nameOnSocietyBoard: "NA",
    nameOnDoor: "NA",
    latitude: "23.235495",
    longitude: "77.076638",
    populationCensus2011: "NA",
    ruralUrban: "Rural",
    statusOfOccupancy: "Under Construction",
    occupiedBy: "NA",
    usageOfProperty: "NA",
    eraApplicable: "No", // Assuming you meant "RERA"
    ownershipType: "Freehold",
    numberAndDate: "", // ✅ Added missing field
  })

  const [image, setImage] = useState(null)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageChange = e => {
    const file = e.target.files[0]
    setImage(file)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const formDataWithImage = { ...formData, image }
    onDataChange(formDataWithImage)
    setIsOpen(false)
  }

  return (
    <div>
      <Accordion>
        <Card style={{ backgroundColor: "#f8f9fa" }}>
          <CardHeader
            className="accordion-header"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">GENERAL DETAILS</h4>
              <Button variant="link" className="text-decoration-none">
                {isOpen ? "Close" : "Edit"}
              </Button>
            </div>
          </CardHeader>
          {isOpen && (
            <CardBody>
              <Form onSubmit={handleSubmit}>
                {/* Form Fields */}
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="addressLegal">
                      <Form.Label>Address as per Legal Document</Form.Label>
                      <Form.Control
                        type="text"
                        name="addressLegal"
                        value={formData.addressLegal}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="addressSite">
                      <Form.Label>Address As per Site</Form.Label>
                      <Form.Control
                        type="text"
                        name="addressSite"
                        value={formData.addressSite}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="nearbyLandmark">
                      <Form.Label>Nearby Landmark (within 500m)</Form.Label>
                      <Form.Control
                        type="text"
                        name="nearbyLandmark"
                        value={formData.nearbyLandmark}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="projectPinCode">
                      <Form.Label>Project Pin Code</Form.Label>
                      <Form.Control
                        type="text"
                        name="projectPinCode"
                        value={formData.projectPinCode}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="zone">
                      <Form.Label>Zone</Form.Label>
                      <Form.Control
                        type="text"
                        name="zone"
                        value={formData.zone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="projectState">
                      <Form.Label>Project State</Form.Label>
                      <Form.Control
                        type="text"
                        name="projectState"
                        value={formData.projectState}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="nameOnSocietyBoard">
                      <Form.Label>Name on Society Board</Form.Label>
                      <Form.Control
                        type="text"
                        name="nameOnSocietyBoard"
                        value={formData.nameOnSocietyBoard}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="nameOnDoor">
                      <Form.Label>Name on Door of the Premises</Form.Label>
                      <Form.Control
                        type="text"
                        name="nameOnDoor"
                        value={formData.nameOnDoor}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="latitude">
                      <Form.Label>Latitude</Form.Label>
                      <Form.Control
                        type="text"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="longitude">
                      <Form.Label>Longitude</Form.Label>
                      <Form.Control
                        type="text"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="populationCensus2011">
                      <Form.Label>Population as per Census 2011</Form.Label>
                      <Form.Control
                        type="text"
                        name="populationCensus2011"
                        value={formData.populationCensus2011}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="ruralUrban">
                      <Form.Label>Rural/ Urban</Form.Label>
                      <Form.Control
                        type="text"
                        name="ruralUrban"
                        value={formData.ruralUrban}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="statusOfOccupancy">
                      <Form.Label>Status of Occupancy</Form.Label>
                      <Form.Control
                        type="text"
                        name="statusOfOccupancy"
                        value={formData.statusOfOccupancy}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="occupiedBy">
                      <Form.Label>Occupied By</Form.Label>
                      <Form.Control
                        type="text"
                        name="occupiedBy"
                        value={formData.occupiedBy}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="usageOfProperty">
                      <Form.Label>Usage of the Property</Form.Label>
                      <Form.Control
                        type="text"
                        name="usageOfProperty"
                        value={formData.usageOfProperty}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="eraApplicable">
                      <Form.Label>RERA (if applicable)</Form.Label>
                      <Form.Control
                        type="text"
                        name="eraApplicable"
                        value={formData.eraApplicable}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="ownershipType">
                      <Form.Label>Ownership Type</Form.Label>
                      <Form.Control
                        type="text"
                        name="ownershipType"
                        value={formData.ownershipType}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="numberAndDate">
                      <Form.Label>Number & Date</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="numberAndDate"
                        value={formData.numberAndDate}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="primary" type="submit">
                  Save
                </Button>
              </Form>
            </CardBody>
          )}
        </Card>
      </Accordion>
    </div>
  )
}

export default DocumentDetails
