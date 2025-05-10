import React from "react"
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap"

const ReadOnlyInput = ({ label, value }) => (
  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm={4}>
      {label}
    </Form.Label>
    <Col sm={8}>
      <Form.Control value={value} readOnly />
    </Col>
  </Form.Group>
)

const ButtonGroupField = ({ label, options, selected }) => (
  <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    <div>
      {options.map((opt, idx) => (
        <Button
          key={idx}
          variant={selected.includes(opt) ? "primary" : "outline-secondary"}
          className="me-2 mb-2"
          disabled
        >
          {opt}
        </Button>
      ))}
    </div>
  </Form.Group>
)

const ValuationDetails = () => {
  return (
    <Container className="my-4">
      <h3 className="mb-4 text-center">Valuation Details</h3>

      {/* Property Factors */}
      <h5>Property Factors</h5>
      <Row>
        <Col md={6}>
          <ReadOnlyInput label="Caution Property" value="NO" />
        </Col>
        <Col md={6}>
          <ReadOnlyInput
            label="Marketability of the Property"
            value="AVERAGE"
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ReadOnlyInput
            label="Usage of Property - as per plan / Master Plan"
            value="Residential"
          />
        </Col>
        <Col md={6}>
          <ReadOnlyInput
            label="Usage of Property - as per site"
            value="Residential"
          />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ReadOnlyInput label="Factor Enhancing Market value" value="NA" />
        </Col>
        <Col md={6}>
          <ReadOnlyInput label="Factor Affecting Market value" value="NA" />
        </Col>
      </Row>

      {/* Building and Specifications */}
      <h5 className="mt-4">Building and Specifications</h5>
      <Row>
        <Col md={6}>
          <ReadOnlyInput label="Details" value="NA" />
        </Col>
        <Col md={6}>
          <ReadOnlyInput label="Details" value="NA" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ReadOnlyInput
            label="No. of floors and total No. of Units"
            value="G+3"
          />
        </Col>
        <Col md={6}>
          <ReadOnlyInput label="Construction Type" value="New Construction" />
        </Col>
      </Row>

      <ButtonGroupField
        label="Structure"
        options={["Framed", "Load Bearing", "Mixed", "Steel"]}
        selected={["Framed"]}
      />
      <ButtonGroupField
        label="Roof"
        options={["Industry roof", "Light", "Madras Terrace", "RCC", "Tiled"]}
        selected={["RCC"]}
      />
      <ButtonGroupField
        label="Flooring"
        options={[
          "Cement",
          "Ceramic Tiles",
          "Granite",
          "Marble",
          "Mosaic",
          "Stone",
          "Tiles",
          "Under Construction",
          "Vitrified Tiles",
        ]}
        selected={["Tiles"]}
      />

      <ReadOnlyInput
        label="Details of Rooms"
        value="G.F:3R+1H+1K+4LB,F.F:4R+1H+1K+4LB,S.F:1..."
      />

      <Row>
        <Col md={4}>
          <ReadOnlyInput
            label="Stage of Construction"
            value="Under Construction"
          />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Year of Construction" value="" />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Total Life of Building" value="" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ReadOnlyInput label="Age of Building Detailed" value="" />
        </Col>
        <Col md={6}>
          <ReadOnlyInput label="Residual Age" value="0" />
        </Col>
      </Row>

      <ButtonGroupField
        label="Protection Features"
        options={[
          "Earthquake Protection",
          "Fire Fighting System",
          "Floods Protection",
          "Landslide Protection",
          "Tsunami Protection",
          "Volcanic Eruption Protection",
        ]}
        selected={["Earthquake Protection"]}
      />

      <ButtonGroupField
        label="Facilities Available"
        options={[
          "CCTV",
          "Club House",
          "Community Hall",
          "Covered Car Park",
          "Gym",
          "Intercom Facility",
          "Kids Play Area",
          "Lift",
          "No Additional Amenities",
          "Power Backup - For Common Areas",
          "Power Backup - For Limited Points & Common Area",
          "Power Backup - For Entire Building",
          "Security",
          "Swimming Pool",
        ]}
        selected={["CCTV", "Lift"]}
      />

      {/* Valuation Section */}
      <h5 className="mt-4">Valuation</h5>
      <Row>
        <Col md={4}>
          <ReadOnlyInput label="Extent of Land" value="21,524" />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Unit" value="Sq.Ft." />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Land - Rate Range" value="3,200 - 3,400" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <ReadOnlyInput label="Rate Adopted" value="3,400" />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Land Value" value="7,31,81,600" />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Guideline Value of Land" value="1,400" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <ReadOnlyInput label="Building Area" value="1,286" />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Building Value" value="2,43,48,000" />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Carpet Area in Sq Ft as per site" value="0" />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <ReadOnlyInput label="Amenities & Service Cost" value="0" />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Total Property Value" value="9,75,29,600" />
        </Col>
        <Col md={4}>
          <ReadOnlyInput label="Realizable value" value="9,75,29,600" />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ReadOnlyInput label="Forced Sale Value" value="7,80,23,680" />
        </Col>
        <Col md={6}>
          <ReadOnlyInput label="Present value" value="7,99,74,272" />
        </Col>
      </Row>
      <ReadOnlyInput label="Property Outlook" value="POSITIVE" />
    </Container>
  )
}

export default ValuationDetails
