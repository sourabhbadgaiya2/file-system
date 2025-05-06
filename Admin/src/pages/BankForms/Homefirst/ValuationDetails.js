import React, { useState, useEffect } from "react"
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

const PropertyFieldDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const [formData, setFormData] = useState({
    directions: {
      North: "ROAD",
      South: "ROAD",
      East: "MUD HOUSE OF RAM SINGH JI",
      West: "MUD HOUSE OF JEEVAN LAL",
    },
    boundariesMatching: "Yes",
    plotArea: 900,
    isPropertyWithinLimit: "Gram panchayat (GP)",
    marketability: "Yes",
    typeOfStructure: "NA",
    qualityOfConstruction: "",
    unitFlatConfiguration: "NA",
    noOfFloorsPermissible: "NA",
    noOfUnitFlatOnEachFloor: "NA",
    noOfFloorsActual: "",
    approxAgeOfProperty: 0,
    residualAge: 50,
    liftAvailable: "No",
    constructionStage: "Plinth",
  })

  useEffect(() => {
    onDataChange(formData)
  }, [formData, onDataChange])

  const handleChange = e => {
    const { name, value } = e.target

    if (name.startsWith("directions.")) {
      const directionKey = name.split(".")[1]
      setFormData(prev => ({
        ...prev,
        directions: {
          ...prev.directions,
          [directionKey]: value,
        },
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    onDataChange(formData)
    setIsOpen(false)
  }

  return (
    <div>
      <Accordion>
        <Card style={{ backgroundColor: "#f8f9fa" }}>
          <CardHeader
            className="accordion-header"
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">PROPERTY DETAILS</h4>
              <Button variant="link" className="text-decoration-none">
                {isOpen ? "Close" : "Edit"}
              </Button>
            </div>
          </CardHeader>

          {isOpen && (
            <CardBody>
              <Form onSubmit={handleSubmit}>
                {/* Property Details */}
                <h5 className="mt-4 mb-3">PROPERTY DETAILS</h5>

                <Row className="mb-3">
                  {["North", "South", "East", "West"].map(dir => (
                    <Col md={6} key={dir}>
                      <Form.Group controlId={`directions${dir}`}>
                        <Form.Label>{dir}</Form.Label>
                        <Form.Control
                          type="text"
                          name={`directions.${dir}`}
                          value={formData.directions[dir]}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  ))}
                </Row>

                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group controlId="boundariesMatching">
                      <Form.Label>Boundaries Matching</Form.Label>
                      <Form.Control
                        as="select"
                        name="boundariesMatching"
                        value={formData.boundariesMatching}
                        onChange={handleChange}
                      >
                        <option>Yes</option>
                        <option>No</option>
                        <option>NA</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="plotArea">
                      <Form.Label>Plot Area (Sq. ft)</Form.Label>
                      <Form.Control
                        type="number"
                        name="plotArea"
                        value={formData.plotArea}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="isPropertyWithinLimit">
                      <Form.Label>
                        Is the property within which limit
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="isPropertyWithinLimit"
                        value={formData.isPropertyWithinLimit}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group controlId="marketability">
                      <Form.Label>Marketability</Form.Label>
                      <Form.Control
                        as="select"
                        name="marketability"
                        value={formData.marketability}
                        onChange={handleChange}
                      >
                        <option>Yes</option>
                        <option>No</option>
                        <option>NA</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>

                {/* Structural Details */}
                <h5 className="mt-4 mb-3">STRUCTURAL DETAILS</h5>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="typeOfStructure">
                      <Form.Label>Type of Structure</Form.Label>
                      <Form.Control
                        type="text"
                        name="typeOfStructure"
                        value={formData.typeOfStructure}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="qualityOfConstruction">
                      <Form.Label>Quality of Construction</Form.Label>
                      <Form.Control
                        type="text"
                        name="qualityOfConstruction"
                        value={formData.qualityOfConstruction}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="unitFlatConfiguration">
                      <Form.Label>Unit / Flat Configuration</Form.Label>
                      <Form.Control
                        type="text"
                        name="unitFlatConfiguration"
                        value={formData.unitFlatConfiguration}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="noOfFloorsPermissible">
                      <Form.Label>No. Of Floors Permissible</Form.Label>
                      <Form.Control
                        type="text"
                        name="noOfFloorsPermissible"
                        value={formData.noOfFloorsPermissible}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="noOfUnitFlatOnEachFloor">
                      <Form.Label>No. of Unit / Flat on each Floor</Form.Label>
                      <Form.Control
                        type="text"
                        name="noOfUnitFlatOnEachFloor"
                        value={formData.noOfUnitFlatOnEachFloor}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="noOfFloorsActual">
                      <Form.Label>No. Of Floors Actual</Form.Label>
                      <Form.Control
                        type="text"
                        name="noOfFloorsActual"
                        value={formData.noOfFloorsActual}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="approxAgeOfProperty">
                      <Form.Label>Approx. Age of Property (Years)</Form.Label>
                      <Form.Control
                        type="number"
                        name="approxAgeOfProperty"
                        value={formData.approxAgeOfProperty}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="residualAge">
                      <Form.Label>Residual Age (years)</Form.Label>
                      <Form.Control
                        type="number"
                        name="residualAge"
                        value={formData.residualAge}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="liftAvailable">
                      <Form.Label>Whether Lift Available</Form.Label>
                      <Form.Control
                        as="select"
                        name="liftAvailable"
                        value={formData.liftAvailable}
                        onChange={handleChange}
                      >
                        <option>Yes</option>
                        <option>No</option>
                        <option>NA</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="constructionStage">
                      <Form.Label>Construction Stage</Form.Label>
                      <Form.Control
                        type="text"
                        name="constructionStage"
                        value={formData.constructionStage}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-left">
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                </div>
              </Form>
            </CardBody>
          )}
        </Card>
      </Accordion>
    </div>
  )
}

export default PropertyFieldDetails
