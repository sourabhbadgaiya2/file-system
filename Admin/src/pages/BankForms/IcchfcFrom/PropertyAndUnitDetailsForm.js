import React, { useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';

const PropertyAndUnitDetailsForm = () => {
  // Property Details State
  const [formData, setFormData] = useState({
    plotArea: '',
    approvedLandUse: 'RESIDENTIAL',
    nameOfLocation: 'INTER-CLASS/EXECUTE',
    propertyLocation: 'DEVELOPMENT/LATENDER',
    propertyType: 'LABOR/SERIENING',
    propertyArea: '',
    costOfConstruction: '',
    carpetAreaMeasured: 'No',
    billingCriteria: 'BELS',
    virtualVisit: 'No',
    plotDemarcatedAtSite: 'YES',
    commercializedArea: 'YES',
    classOfLocality: 'REPEAL CLASS HERE',
    distanceFromCityCenter: '',
    noOfFloors: '1',
    toBeBilled: 'No',
    greenHousing: 'Yes',
    natureOfLocation: 'URBAN',
    roadWidth: 'IS',
    structure: 'GET APPLICABLE',
    exterior: 'GOOD',
    approxPropertyAge: '',
    interior: 'GOOD',
    maintenanceLevel: 'GOOD',
    residualAgeOfProperty: 'IE',
    internet: 'GOOD',
    nationalizeLevel: 'GOOD'
  });

  // Unit Details State (with floors)
  const [unitDetails, setUnitDetails] = useState([
    {
      floor: 'Ground Floor',
      description: '',
      rooms: '',
      kitchens: '',
      bathrooms: '',
      usageRemarks: 'BRANDSBOX BY $9.92'
    }
  ]);

  // Handle property details change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add a new floor
  const addFloor = () => {
    setUnitDetails([
      ...unitDetails,
      {
        floor: `Floor ${unitDetails.length}`,
        description: '',
        rooms: '',
        kitchens: '',
        bathrooms: '',
        usageRemarks: 'BRANDSBOX BY $9.92'
      }
    ]);
  };

  // Remove a floor
  const removeFloor = (index) => {
    if (unitDetails.length > 1) {
      const newFloors = [...unitDetails];
      newFloors.splice(index, 1);
      setUnitDetails(newFloors);
    }
  };

  // Handle changes in floor details
  const handleFloorChange = (index, field, value) => {
    const newFloors = [...unitDetails];
    newFloors[index][field] = value;
    setUnitDetails(newFloors);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const allData = {
      propertyDetails: formData,
      unitDetails: unitDetails
    };
    console.log('Form Data:', allData);
    // Here you can send the data to your backend
  };

  return (
    <div className="p-3" style={{ backgroundColor: '#fff3e0', border: '1px solid #ccc' }}>
      <form onSubmit={handleSubmit}>
        <h5 className="text-danger fw-bold">Property Details</h5>
        <Card className="mb-4">
          <Card.Body>
            <Row>
              <Col md={4}>
                <Form.Group controlId="formPlotArea">
                  <Form.Label>Plot Area (In Sq. Ft.)</Form.Label>
                  <Form.Control
                    type="text"
                    name="plotArea"
                    value={formData.plotArea}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formApprovedLandUse">
                  <Form.Label>Approved Land Use</Form.Label>
                  <Form.Control
                    as="select"
                    name="approvedLandUse"
                    value={formData.approvedLandUse}
                    onChange={handleChange}
                  >
                    <option value="RESIDENTIAL">RESIDENTIAL</option>
                    <option value="COMMERCIAL">COMMERCIAL</option>
                    <option value="INDUSTRIAL">INDUSTRIAL</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formNameOfLocation">
                  <Form.Label>Name of Location</Form.Label>
                  <Form.Control
                    as="select"
                    name="nameOfLocation"
                    value={formData.nameOfLocation}
                    onChange={handleChange}
                  >
                    <option value="INTER-CLASS/EXECUTE">INTER-CLASS/EXECUTE</option>
                    <option value="OTHER">OTHER</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formPropertyLocation">
                  <Form.Label>Property Location</Form.Label>
                  <Form.Control
                    as="select"
                    name="propertyLocation"
                    value={formData.propertyLocation}
                    onChange={handleChange}
                  >
                    <option value="DEVELOPMENT/LATENDER">DEVELOPMENT/LATENDER</option>
                    <option value="OTHER">OTHER</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formPropertyType">
                  <Form.Label>Property Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                  >
                    <option value="LABOR/SERIENING">LABOR/SERIENING</option>
                    <option value="OTHER">OTHER</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formPropertyArea">
                  <Form.Label>Property Area</Form.Label>
                  <Form.Control
                    type="text"
                    name="propertyArea"
                    value={formData.propertyArea}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <h6 className="mt-3">Cost Of Construction</h6>
            <Row>
              <Col md={4}>
                <Form.Group controlId="formCostOfConstruction">
                  <Form.Label>Cost</Form.Label>
                  <Form.Control
                    type="text"
                    name="costOfConstruction"
                    value={formData.costOfConstruction}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCarpetAreaMeasured">
                  <Form.Label>Carpet Area Measured</Form.Label>
                  <Form.Control
                    as="select"
                    name="carpetAreaMeasured"
                    value={formData.carpetAreaMeasured}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formBillingCriteria">
                  <Form.Label>Billing Criteria</Form.Label>
                  <Form.Control
                    as="select"
                    name="billingCriteria"
                    value={formData.billingCriteria}
                    onChange={handleChange}
                  >
                    <option value="BELS">BELS</option>
                    <option value="OTHER">OTHER</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formVirtualVisit">
                  <Form.Label>Virtual Visit</Form.Label>
                  <Form.Control
                    as="select"
                    name="virtualVisit"
                    value={formData.virtualVisit}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formPlotDemarcatedAtSite">
                  <Form.Label>Plot Demarcated At Site</Form.Label>
                  <Form.Control
                    as="select"
                    name="plotDemarcatedAtSite"
                    value={formData.plotDemarcatedAtSite}
                    onChange={handleChange}
                  >
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formCommercializedArea">
                  <Form.Label>Commercialized Area</Form.Label>
                  <Form.Control
                    as="select"
                    name="commercializedArea"
                    value={formData.commercializedArea}
                    onChange={handleChange}
                  >
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formClassOfLocality">
                  <Form.Label>Class Of Locality</Form.Label>
                  <Form.Control
                    as="select"
                    name="classOfLocality"
                    value={formData.classOfLocality}
                    onChange={handleChange}
                  >
                    <option value="REPEAL CLASS HERE">REPEAL CLASS HERE</option>
                    <option value="OTHER">OTHER</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formDistanceFromCityCenter">
                  <Form.Label>Distance From City Center</Form.Label>
                  <Form.Control
                    type="text"
                    name="distanceFromCityCenter"
                    value={formData.distanceFromCityCenter}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formNoOfFloors">
                  <Form.Label>No Of Floors</Form.Label>
                  <Form.Control
                    as="select"
                    name="noOfFloors"
                    value={formData.noOfFloors}
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formToBeBilled">
                  <Form.Label>To Be Billed</Form.Label>
                  <Form.Control
                    as="select"
                    name="toBeBilled"
                    value={formData.toBeBilled}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formGreenHousing">
                  <Form.Label>Green Housing</Form.Label>
                  <Form.Control
                    as="select"
                    name="greenHousing"
                    value={formData.greenHousing}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formNatureOfLocation">
                  <Form.Label>Nature Of Location</Form.Label>
                  <Form.Control
                    as="select"
                    name="natureOfLocation"
                    value={formData.natureOfLocation}
                    onChange={handleChange}
                  >
                    <option value="URBAN">URBAN</option>
                    <option value="RURAL">RURAL</option>
                    <option value="SEMI-URBAN">SEMI-URBAN</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="formRoadWidth">
                  <Form.Label>Road Width</Form.Label>
                  <Form.Control
                    as="select"
                    name="roadWidth"
                    value={formData.roadWidth}
                    onChange={handleChange}
                  >
                    <option value="IS">IS</option>
                    <option value="OTHER">OTHER</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formInternet">
                  <Form.Label>Internet</Form.Label>
                  <Form.Control
                    as="select"
                    name="internet"
                    value={formData.internet}
                    onChange={handleChange}
                  >
                    <option value="GOOD">GOOD</option>
                    <option value="AVERAGE">AVERAGE</option>
                    <option value="POOR">POOR</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formNationalizeLevel">
                  <Form.Label>Nationalize Level</Form.Label>
                  <Form.Control
                    as="select"
                    name="nationalizeLevel"
                    value={formData.nationalizeLevel}
                    onChange={handleChange}
                  >
                    <option value="GOOD">GOOD</option>
                    <option value="AVERAGE">AVERAGE</option>
                    <option value="POOR">POOR</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <h6 className="mt-3">Structure</h6>
            <Row>
              <Col md={4}>
                <Form.Group controlId="formStructure">
                  <Form.Label>Structure</Form.Label>
                  <Form.Control
                    as="select"
                    name="structure"
                    value={formData.structure}
                    onChange={handleChange}
                  >
                    <option value="GET APPLICABLE">GET APPLICABLE</option>
                    <option value="OTHER">OTHER</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formExterior">
                  <Form.Label>Exterior</Form.Label>
                  <Form.Control
                    as="select"
                    name="exterior"
                    value={formData.exterior}
                    onChange={handleChange}
                  >
                    <option value="GOOD">GOOD</option>
                    <option value="AVERAGE">AVERAGE</option>
                    <option value="POOR">POOR</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="formApproxPropertyAge">
                  <Form.Label>Approx. Property Age (in Years)</Form.Label>
                  <Form.Control
                    type="text"
                    name="approxPropertyAge"
                    value={formData.approxPropertyAge}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <h5 className="text-danger fw-bold">Unit Details</h5>
        <Card className="mb-4">
          <Card.Body>
            {unitDetails.map((floor, index) => (
              <div key={index} className="mb-4 p-3" style={{ border: '1px solid #ddd', borderRadius: '5px' }}>
                <Row className="mb-2">
                  <Col>
                    <h6>{floor.floor}</h6>
                    {index > 0 && (
                      <Button 
                        variant="danger" 
                        size="sm" 
                        onClick={() => removeFloor(index)}
                        className="float-end"
                      >
                        Remove Floor
                      </Button>
                    )}
                  </Col>
                </Row>
                
                <Row>
                  <Col md={12}>
                    <Form.Group controlId={`formDescription-${index}`}>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        value={floor.description}
                        onChange={(e) => handleFloorChange(index, 'description', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={4}>
                    <Form.Group controlId={`formRooms-${index}`}>
                      <Form.Label>Rooms</Form.Label>
                      <Form.Control
                        type="number"
                        value={floor.rooms}
                        onChange={(e) => handleFloorChange(index, 'rooms', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId={`formKitchens-${index}`}>
                      <Form.Label>Kitchens</Form.Label>
                      <Form.Control
                        type="number"
                        value={floor.kitchens}
                        onChange={(e) => handleFloorChange(index, 'kitchens', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group controlId={`formBathrooms-${index}`}>
                      <Form.Label>Bathrooms</Form.Label>
                      <Form.Control
                        type="number"
                        value={floor.bathrooms}
                        onChange={(e) => handleFloorChange(index, 'bathrooms', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={12}>
                    <Form.Group controlId={`formUsageRemarks-${index}`}>
                      <Form.Label>Usage & Remarks</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={floor.usageRemarks}
                        onChange={(e) => handleFloorChange(index, 'usageRemarks', e.target.value)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </div>
            ))}
            
            <Row>
              <Col>
                <Button 
                  variant="primary" 
                  onClick={addFloor}
                  className="mt-2"
                >
                  Add Another Floor
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        
      </form>
    </div>
  );
};

export default PropertyAndUnitDetailsForm;