import React, { useState } from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';

const FloorwiseBuildingUsageDetails = () => {
  const [formData, setFormData] = useState({
    structureType: '',
    structureDescription: '',
    stageOfConstruction: '',
    descriptionOfStage: '',
    percentCompleted: '',
    percentRecommended: '',
    violationsObserved: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="p-3" style={{ backgroundColor: '#fff3e0', border: '1px solid #ccc' }}>
      <h5 className="text-danger fw-bold">Floorwise Building Usage Details</h5>
      <Card>
        <Card.Body>
          <Form>
            <h6 style={{ color:"#AA0009" }}   className="mt-4 fw-bold">Structure Details</h6>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formStructureType">
                  <Form.Label>Select Structure</Form.Label>
                  <Form.Select
                    name="structureType"
                    value={formData.structureType}
                    onChange={handleChange}
                  >
                    <option value="">Select Structure</option>
                    <option value="Structure 1">Structure 1</option>
                    <option value="Structure 2">Structure 2</option>
                    <option value="Structure 3">Structure 3</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStructureDescription">
                  <Form.Label>Structure Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="structureDescription"
                    value={formData.structureDescription}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <h6 style={{ color:"#AA0009" }}   className="mt-4 fw-bold">Stage of Construction</h6>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formStageOfConstruction">
                  <Form.Label>Stage of Construction</Form.Label>
                  <Form.Control
                    type="text"
                    name="stageOfConstruction"
                    value={formData.stageOfConstruction}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formDescriptionOfStage">
                  <Form.Label>Description of Stage</Form.Label>
                  <Form.Control
                    type="text"
                    name="descriptionOfStage"
                    value={formData.descriptionOfStage}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formPercentCompleted">
                  <Form.Label>% Completed</Form.Label>
                  <Form.Control
                    type="text"
                    name="percentCompleted"
                    value={formData.percentCompleted}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formPercentRecommended">
                  <Form.Label>% Recommended</Form.Label>
                  <Form.Control
                    type="text"
                    name="percentRecommended"
                    value={formData.percentRecommended}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <h6 style={{ color:"#AA0009" }}   className="mt-4 fw-bold">Violations and Remarks</h6>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formViolationsObserved">
                  <Form.Label>Violations Observed</Form.Label>
                  <Form.Control
                    type="text"
                    name="violationsObserved"
                    value={formData.violationsObserved}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formRemarks">
                  <Form.Label>Remarks</Form.Label>
                  <Form.Control
                    type="text"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FloorwiseBuildingUsageDetails;