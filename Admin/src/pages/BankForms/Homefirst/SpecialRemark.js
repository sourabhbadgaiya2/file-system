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

const ValuationDetailsComp = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    document: 900,
    landAreaPlan: 0,
    landAreaSite: 900,
    landAreaGF: 500,
    builtUpAreaFF: 0,
    builtUpAreaSF: 0,
    landAreaForValuation: 900,
    landRate: 300,
    totalLandValuation: 270000,
    constructionAreaForValuation: 500,
    constructionRate: 1200,
    totalConstructionValuation: 600000,
    fairMarketValue: 870000,
    valueAfterCompletion: 870000,
    presentStageValuation: 390000,
    govtGuidelineValuation: 112,
  })

  // Auto calculations when inputs change
  useEffect(() => {
    const totalLandValuation = formData.landAreaForValuation * formData.landRate
    const totalConstructionValuation =
      formData.constructionAreaForValuation * formData.constructionRate
    const fairMarketValue = totalLandValuation + totalConstructionValuation

    setFormData(prev => ({
      ...prev,
      totalLandValuation,
      totalConstructionValuation,
      fairMarketValue,
    }))
  }, [
    formData.landAreaForValuation,
    formData.landRate,
    formData.constructionAreaForValuation,
    formData.constructionRate,
  ])

  const handleChange = e => {
    const { name, value, type } = e.target
    const parsedValue = type === "number" ? parseFloat(value) || 0 : value
    setFormData(prev => ({ ...prev, [name]: parsedValue }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    onDataChange(formData)
    setIsOpen(false)
  }

  return (
    <div>
      <Accordion>
        <Card>
          <CardHeader
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">VALUATION DETAILS</h4>
              <Button variant="link" className="text-decoration-none">
                {isOpen ? "Close" : "Edit"}
              </Button>
            </div>
          </CardHeader>
          {isOpen && (
            <CardBody>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={4}>
                    <Form.Group controlId="document">
                      <Form.Label>Document</Form.Label>
                      <Form.Control
                        type="number"
                        name="document"
                        value={formData.document}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="landAreaPlan">
                      <Form.Label>Land Area (Sq. ft) Plan</Form.Label>
                      <Form.Control
                        type="number"
                        name="landAreaPlan"
                        value={formData.landAreaPlan}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="landAreaSite">
                      <Form.Label>Land Area (Sq. ft) Site</Form.Label>
                      <Form.Control
                        type="number"
                        name="landAreaSite"
                        value={formData.landAreaSite}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={4}>
                    <Form.Group controlId="landAreaGF">
                      <Form.Label>Land Area (Sq. ft) GF</Form.Label>
                      <Form.Control
                        type="number"
                        name="landAreaGF"
                        value={formData.landAreaGF}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="builtUpAreaFF">
                      <Form.Label>Built Up Area (Proposed) FF</Form.Label>
                      <Form.Control
                        type="number"
                        name="builtUpAreaFF"
                        value={formData.builtUpAreaFF}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId="builtUpAreaSF">
                      <Form.Label>Built Up Area (Proposed) SF</Form.Label>
                      <Form.Control
                        type="number"
                        name="builtUpAreaSF"
                        value={formData.builtUpAreaSF}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="landAreaForValuation">
                      <Form.Label>Land Area for Valuation</Form.Label>
                      <Form.Control
                        type="number"
                        name="landAreaForValuation"
                        value={formData.landAreaForValuation}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="landRate">
                      <Form.Label>Land Rate per sq. ft.</Form.Label>
                      <Form.Control
                        type="number"
                        name="landRate"
                        value={formData.landRate}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="totalLandValuation">
                      <Form.Label>Total Land Valuation</Form.Label>
                      <Form.Control
                        type="number"
                        name="totalLandValuation"
                        value={formData.totalLandValuation}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="constructionAreaForValuation">
                      <Form.Label>Construction Area for Valuation</Form.Label>
                      <Form.Control
                        type="number"
                        name="constructionAreaForValuation"
                        value={formData.constructionAreaForValuation}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="constructionRate">
                      <Form.Label>Construction Rate per sq. ft</Form.Label>
                      <Form.Control
                        type="number"
                        name="constructionRate"
                        value={formData.constructionRate}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="totalConstructionValuation">
                      <Form.Label>Total Construction Valuation</Form.Label>
                      <Form.Control
                        type="number"
                        name="totalConstructionValuation"
                        value={formData.totalConstructionValuation}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="fairMarketValue">
                      <Form.Label>Fair Market Value</Form.Label>
                      <Form.Control
                        type="number"
                        name="fairMarketValue"
                        value={formData.fairMarketValue}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="valueAfterCompletion">
                      <Form.Label>Value After Completion</Form.Label>
                      <Form.Control
                        type="number"
                        name="valueAfterCompletion"
                        value={formData.valueAfterCompletion}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="presentStageValuation">
                      <Form.Label>Present Stage Valuation</Form.Label>
                      <Form.Control
                        type="number"
                        name="presentStageValuation"
                        value={formData.presentStageValuation}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="govtGuidelineValuation">
                      <Form.Label>Govt. Guideline Valuation</Form.Label>
                      <Form.Control
                        type="number"
                        name="govtGuidelineValuation"
                        value={formData.govtGuidelineValuation}
                        onChange={handleChange}
                        required
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

export default ValuationDetailsComp
