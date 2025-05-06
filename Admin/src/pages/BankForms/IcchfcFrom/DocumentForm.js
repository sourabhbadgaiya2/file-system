import React, { useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';

const DocumentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    customerMobileNo: '',
    reqInitiatorId: '',
    salesManagerMobileNo: '',
    reqInitiatorNameCPCCode: '',
    locations: [{
      direction: '',
      boundriesMatching: 'YES',
      distanceTravelled: 0.0,
      siteLocation: '',
      asPerSaleDeed: '',
      actualAtSite: ''
    }]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedLocations = [...formData.locations];
    updatedLocations[index] = {
      ...updatedLocations[index],
      [name]: value
    };
    setFormData({
      ...formData,
      locations: updatedLocations
    });
  };

  const handleGeneralChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const addLocation = () => {
    setFormData({
      ...formData,
      locations: [
        ...formData.locations,
        {
          direction: '',
          boundriesMatching: 'YES',
          distanceTravelled: 0.0,
          siteLocation: '',
          asPerSaleDeed: '',
          actualAtSite: ''
        }
      ]
    });
  };

  const removeLocation = (index) => {
    const updatedLocations = [...formData.locations];
    updatedLocations.splice(index, 1);
    setFormData({
      ...formData,
      locations: updatedLocations
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit all formData including multiple locations
    console.log('Submitting all data:', formData);
    // Add your submission logic here (API call, etc.)
  };

  const directions = [
    'North', 'Northeast', 'East', 'Southeast',
    'South', 'Southwest', 'West', 'Northwest'
  ];

  return (
    <div className="p-3" style={{ backgroundColor: '#fff3e0', border: '1px solid #ccc' }}>
      <h5 className="text-danger fw-bold">Contact Persons Details</h5>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleGeneralChange}
                    placeholder="Narayan Kharka Chhetri"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formSalesManagerMobileNo">
                  <Form.Label>Sales Manager Mobile No</Form.Label>
                  <Form.Control
                    type="text"
                    name="salesManagerMobileNo"
                    value={formData.salesManagerMobileNo}
                    onChange={handleGeneralChange}
                    placeholder="9012757197"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formCustomerMobileNo">
                  <Form.Label>Customer Mobile No</Form.Label>
                  <Form.Control
                    type="text"
                    name="customerMobileNo"
                    value={formData.customerMobileNo}
                    onChange={handleGeneralChange}
                    placeholder="7895335960"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formReqInitiatorId">
                  <Form.Label>Req Initiator Id</Form.Label>
                  <Form.Control
                    type="text"
                    name="reqInitiatorId"
                    value={formData.reqInitiatorId}
                    onChange={handleGeneralChange}
                    placeholder="1611364"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formReqInitiatorNameCPCCode">
                  <Form.Label>Req Initiator Name / CPC Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="reqInitiatorNameCPCCode"
                    value={formData.reqInitiatorNameCPCCode}
                    onChange={handleGeneralChange}
                    placeholder="LOS_CHANNEL"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <h5 className="text-danger fw-bold mt-4">Physical Details</h5>
            
            {formData.locations.map((location, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Title>Location {index + 1}</Card.Title>
                  <Row>
                    <Col md={3}>
                      <Form.Group controlId={`formDirection-${index}`}>
                        <Form.Label>Direction</Form.Label>
                        <Form.Select 
                          name="direction"
                          value={location.direction}
                          onChange={(e) => handleChange(e, index)}
                          required
                        >
                          <option value="">Select Direction</option>
                          {directions.map((dir) => (
                            <option key={dir} value={dir}>{dir}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group controlId={`formBoundriesMatching-${index}`}>
                        <Form.Label>Boundaries Matching</Form.Label>
                        <Form.Select 
                          name="boundriesMatching"
                          value={location.boundriesMatching}
                          onChange={(e) => handleChange(e, index)}
                        >
                          <option value="YES">YES</option>
                          <option value="NO">NO</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group controlId={`formDistanceTravelled-${index}`}>
                        <Form.Label>Distance from office (km)</Form.Label>
                        <Form.Control
                          type="number"
                          step="0.1"
                          name="distanceTravelled"
                          value={location.distanceTravelled}
                          onChange={(e) => handleChange(e, index)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group controlId={`formSiteLocation-${index}`}>
                        <Form.Label>Site Location</Form.Label>
                        <Form.Control
                          type="text"
                          name="siteLocation"
                          value={location.siteLocation}
                          onChange={(e) => handleChange(e, index)}
                          placeholder="Enter exact site location"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={12}>
                      <Form.Group controlId={`formAsPerSaleDeed-${index}`}>
                        <Form.Label>As per Sale Deed</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          name="asPerSaleDeed"
                          value={location.asPerSaleDeed}
                          onChange={(e) => handleChange(e, index)}
                          placeholder="Enter details as per sale deed"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col md={12}>
                      <Form.Group controlId={`formActualAtSite-${index}`}>
                        <Form.Label>Actual At Site</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          name="actualAtSite"
                          value={location.actualAtSite}
                          onChange={(e) => handleChange(e, index)}
                          placeholder="Enter actual site details"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  {formData.locations.length > 1 && (
                    <Button 
                      variant="danger" 
                      size="sm" 
                      className="mt-2"
                      onClick={() => removeLocation(index)}
                    >
                      Remove Location
                    </Button>
                  )}
                </Card.Body>
              </Card>
            ))}

            <Button 
              variant="primary" 
              className="me-2"
              onClick={addLocation}
            >
              Add Another Location
            </Button>

         
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DocumentForm;