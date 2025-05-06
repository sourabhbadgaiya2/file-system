import React, { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const UploadAndSiteVisitForm = ({ onCloseEdit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className="p-3" style={{ backgroundColor: '#fff3e0', border: '1px solid #ccc' }}>
      <h5 className="text-danger fw-bold">
        "RESALE FIRST" Request ID: <span className="text-dark">HRQ-25-57269</span>
      </h5>

      <Card className="mb-3">
        <Card.Body>
          <h6 className="text-danger fw-bold">Upload Images</h6>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>Image 1</Form.Label>
                <Form.Control type="file" name="image1" onChange={handleChange} />
                <Form.Text className="text-danger">Allowed Type: jpeg | Max Size: 100KB</Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-2">
                <Form.Label>Image 2</Form.Label>
                <Form.Control type="file" name="image2" onChange={handleChange} />
                <Form.Text className="text-danger">Allowed Type: jpeg | Max Size: 100KB</Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={4}><Form.Label>File Save by Name</Form.Label><Form.Control name="fileName" onChange={handleChange} /></Col>
            <Col md={4}><Form.Label>Original File Name</Form.Label><Form.Control name="originalFileName" onChange={handleChange} /></Col>
            <Col md={4}><Form.Label>Latitude</Form.Label><Form.Control name="latitude" onChange={handleChange} /></Col>
          </Row>
          <Row className="mt-2">
            <Col md={4}><Form.Label>Longitude</Form.Label><Form.Control name="longitude" onChange={handleChange} /></Col>
            <Col md={4}><Form.Label>Location</Form.Label><Form.Control name="location" onChange={handleChange} /></Col>
            <Col md={4}><Form.Label>Image Taken Date</Form.Label><Form.Control type="date" name="imageDate" onChange={handleChange} /></Col>
          </Row>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h6 className="text-danger fw-bold">First Site Visit Report</h6>
          <Row>
            <Col md={4}>
              <Form.Label>Property Type</Form.Label>
              <Form.Select name="propertyType" onChange={handleChange}>
                <option>Select Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Unit Type</Form.Label>
              <Form.Select name="unitType" onChange={handleChange}>
                <option>Select</option>
                <option>Flat</option>
                <option>Plot</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Loan Property Type</Form.Label>
              <Form.Select name="loanType" onChange={handleChange}>
                <option>Select</option>
                <option>General</option>
                <option>Special</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={6}>
              <Form.Label>Property Address</Form.Label>
              <Form.Control name="propertyAddress" onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Label>Nearest Landmark</Form.Label>
              <Form.Control name="landmark" onChange={handleChange} />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={12}>
              <Form.Label>Legal Address</Form.Label>
              <Form.Control as="textarea" rows={3} name="legalAddress" onChange={handleChange} />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col md={6}>
              <Form.Label>PIN</Form.Label>
              <Form.Control name="pin" onChange={handleChange} />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div className="text-end mt-3">
        <Button variant="danger" onClick={onCloseEdit}>Close Edit</Button>
      </div>
    </div>
  );
};

export default UploadAndSiteVisitForm;
