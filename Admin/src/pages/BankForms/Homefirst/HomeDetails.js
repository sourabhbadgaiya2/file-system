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

const HomeDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    customerName: "Mr. Jivnial Singh",
    customerNo: "9644983608",
    personMetDuringVisit: "Mr. Phool Singh Ji",
    personContactNo: "9644983608",
    typeOfLoan: "Own Plot + SeCo",
    dateOfReport: "13.01.2025",
    refNo: "NA",
    evaluationType: "One Off",
    unitType: "Individual House",
    documentsAvailable: "CO-OWNERSHIP DEED, LAYOUT, MAP",
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
              <h4 className="m-0">Valuation Report</h4>
              <Button variant="link" className="text-decoration-none">
                {isOpen ? "Close" : "Edit"}
              </Button>
            </div>
          </CardHeader>
          {isOpen && (
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="customerName">
                      <Form.Label>Customer Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="customerNo">
                      <Form.Label>Customer No.</Form.Label>
                      <Form.Control
                        type="text"
                        name="customerNo"
                        value={formData.customerNo}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="personMetDuringVisit">
                      <Form.Label>Person Met during visit</Form.Label>
                      <Form.Control
                        type="text"
                        name="personMetDuringVisit"
                        value={formData.personMetDuringVisit}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="personContactNo">
                      <Form.Label>Person Contact No.</Form.Label>
                      <Form.Control
                        type="text"
                        name="personContactNo"
                        value={formData.personContactNo}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group controlId="typeOfLoan">
                      <Form.Label>Type of Loan</Form.Label>
                      <Form.Control
                        type="text"
                        name="typeOfLoan"
                        value={formData.typeOfLoan}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group controlId="documentsAvailable">
                      <Form.Label>Documents Available for perusal</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="documentsAvailable"
                        value={formData.documentsAvailable}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group controlId="image">
                      <Form.Label>Upload Image</Form.Label>
                      <Form.Control type="file" onChange={handleImageChange} />
                      {image && (
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Preview"
                          style={{ width: "100px", marginTop: "10px" }}
                        />
                      )}
                    </Form.Group>
                  </Col>
                </Row> */}

                <Button type="submit" className="mt-2">
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

export default HomeDetails
