import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Row, Col, Form } from "react-bootstrap"

const CharacteristicProperty = () => {
  const [formData, setFormData] = useState({
    developmentLocality: "",
    surroundingUsage: [],
    classification: "",
    facilities: [],
    waterSupply: [],
    sanitarySystem: [],
  })

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleCheckboxChange = (key, value) => {
    const updated = formData[key].includes(value)
      ? formData[key].filter(item => item !== value)
      : [...formData[key], value]
    setFormData({ ...formData, [key]: updated })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Submitted Data:", formData)
  }

  return (
    <div className="container py-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Development(Locality) *</Form.Label>
          <Form.Select
            value={formData.developmentLocality}
            onChange={e => handleChange("developmentLocality", e.target.value)}
          >
            <option value="">Select</option>
            <option value="Average Developing">Average Developing</option>
            <option value="Developed">Developed</option>
            <option value="Under Developing">Under Developing</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Usage of Surrounding Property *</Form.Label>
          <div className="d-flex flex-wrap gap-2">
            {[
              "Agricultural",
              "Commercial",
              "Dry Vacant Land",
              "Industrial",
              "Institutional",
              "Logistic",
              "Residential",
              "Residential Cum Commercial",
              "Warehouse",
            ].map(item => (
              <Form.Check
                inline
                key={item}
                label={item}
                type="checkbox"
                checked={formData.surroundingUsage.includes(item)}
                onChange={() => handleCheckboxChange("surroundingUsage", item)}
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Classification of Locality *</Form.Label>
          <Form.Select
            value={formData.classification}
            onChange={e => handleChange("classification", e.target.value)}
          >
            <option value="">Select</option>
            <option value="High Class">High Class</option>
            <option value="Middle Class">Middle Class</option>
            <option value="Low Class">Low Class</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Facility Available *</Form.Label>
          <div className="d-flex flex-wrap gap-2">
            {[
              "Electrical Line",
              "Gated Communities",
              "Road",
              "Street Light",
              "Telephone Line",
            ].map(item => (
              <Form.Check
                inline
                key={item}
                label={item}
                type="checkbox"
                checked={formData.facilities.includes(item)}
                onChange={() => handleCheckboxChange("facilities", item)}
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Water Supply *</Form.Label>
          <div className="d-flex flex-wrap gap-2">
            {[
              "Bore Well",
              "Local Body Water Connection",
              "Open Well",
              "Over Head Tank",
              "Under Ground Sump",
            ].map(item => (
              <Form.Check
                inline
                key={item}
                label={item}
                type="checkbox"
                checked={formData.waterSupply.includes(item)}
                onChange={() => handleCheckboxChange("waterSupply", item)}
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sanitary System *</Form.Label>
          <div className="d-flex flex-wrap gap-2">
            {[
              "Septic Tank",
              "Sewage Treatment Plant",
              "Under Ground Sewage System",
            ].map(item => (
              <Form.Check
                inline
                key={item}
                label={item}
                type="checkbox"
                checked={formData.sanitarySystem.includes(item)}
                onChange={() => handleCheckboxChange("sanitarySystem", item)}
              />
            ))}
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          SAVE
        </Button>
      </Form>
    </div>
  )
}

export default CharacteristicProperty
