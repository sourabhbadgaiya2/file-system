import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const ActualPlanDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [floors, setFloors] = useState([
    { floor: 'FIRST FLOOR', bua: 300, ratePerUnit: 15000, replacementCost: 4500000, depreciation: 0, lessDepreciation: 4500000, netDepreciatedValue: 0 },
    // Add more floors as needed
  ]);
  const [propertyDetails, setPropertyDetails] = useState({
    buildingValue: 4500000,
    amenities: 0,
    totalBuildingValue: 4500000,
    totalValueOfProperty: 4500000,
    marketValue: 4050000,
    distressedSaleValue: 3600000,
    govtGuidelineValue: 2536,
    landValue: 3600000,
    totalGovtValue: 880000,
    riskAssessment: 'High / Medium / Low',
    remarks: `1. GIVEN XEROX COPY OF SALE DEED IN FAVOUR OF ASH BADAL S/O SHRI KAVINDRA KUMAR BADAL.
2. DURING PROPERTY VISIT MR. ASH BADAL JI WAS MET AT THE PROPERTY.
3. RATE HAS BEEN CONFIRM FROM MARKET ENQUIRY.
4. PROPERTY IS SITUATED AT RESIDENTIAL ZONING.
5. AT SITE PROPERTY IS COMMERCIAL SHOP.
6. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF GIVEN DEED AND LOCAL ENQUIRY.
7. BUILDING PERMISSION AND MAP IS NOT OBTAIN, ONLY FLOOR PLAN RECEIVE.
8. TSGP LAYOUT PLAN IS NOT OBTAIN.
9. BUILDING PRAKOSHT RECEIVE AS PER PRAKOSHT SHOP NO. 03 AREA IS 472 SQFT, BUT AS PER DEED AND ACTUAL AT SITE BUILT UP AREA IS 300 SQFT, WE HAVE CONSIDER BUILT UP AREA AS PER DEED.
10. UNIT VALUE OF PROPERTY IS CONSIDER IN THIS REPORT.
11. VALUER IS NOT RESPONSIBLE FOR ANY LEGAL DISPUTE.`,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails(prev => ({ ...prev, [name]: value }));
    onDataChange(prev => ({ ...prev, [name]: value }));
  };

  const addFloor = () => {
    const newFloor = {
      floor: `FLOOR ${floors.length + 1}`,
      bua: 0,
      ratePerUnit: 0,
      replacementCost: 0,
      depreciation: 0,
      lessDepreciation: 0,
      netDepreciatedValue: 0,
    };
    setFloors([...floors, newFloor]);
  };

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">ACTUAL PLAN DETAILS</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="accordion-body p-3 border rounded mt-2" style={{ backgroundColor: "#f8f9fa" }}>
          <Form>
            <h5 className="mt-4 mb-3">Building Value</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Building Value:</label>
                <input
                  type="text"
                  name="buildingValue"
                  className="form-control"
                  value={propertyDetails.buildingValue}
                  onChange={handleInputChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Amenities:</label>
                <input
                  type="text"
                  name="amenities"
                  className="form-control"
                  value={propertyDetails.amenities}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Total Building Value:</label>
                <input
                  type="text"
                  name="totalBuildingValue"
                  className="form-control"
                  value={propertyDetails.totalBuildingValue}
                  onChange={handleInputChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Total Value of Property:</label>
                <input
                  type="text"
                  name="totalValueOfProperty"
                  className="form-control"
                  value={propertyDetails.totalValueOfProperty}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Market Value of Property as per Actual</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Realizable Sale Value:</label>
                <input
                  type="text"
                  name="marketValue"
                  className="form-control"
                  value={propertyDetails.marketValue}
                  onChange={handleInputChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Distressed Sale Value:</label>
                <input
                  type="text"
                  name="distressedSaleValue"
                  className="form-control"
                  value={propertyDetails.distressedSaleValue}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Govt. Guideline Value</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Rate Per SqFt:</label>
                <input
                  type="text"
                  name="govtGuidelineValue"
                  className="form-control"
                  value={propertyDetails.govtGuidelineValue}
                  onChange={handleInputChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Land Value:</label>
                <input
                  type="text"
                  name="landValue"
                  className="form-control"
                  value={propertyDetails.landValue}
                  onChange={handleInputChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Total Govt Value:</label>
                <input
                  type="text"
                  name="totalGovtValue"
                  className="form-control"
                  value={propertyDetails.totalGovtValue}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Floorwise Details</h5>
            {floors.map((floor, index) => (
              <Row key={index} className="mb-3">
                <Col md={2}>
                  <label className="form-label">{floor.floor}:</label>
                </Col>
                <Col md={2}>
                  <input
                    type="text"
                    name={`floors.${index}.bua`}
                    className="form-control"
                    value={floor.bua}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={2}>
                  <input
                    type="text"
                    name={`floors.${index}.ratePerUnit`}
                    className="form-control"
                    value={floor.ratePerUnit}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={2}>
                  <input
                    type="text"
                    name={`floors.${index}.replacementCost`}
                    className="form-control"
                    value={floor.replacementCost}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={2}>
                  <input
                    type="text"
                    name={`floors.${index}.depreciation`}
                    className="form-control"
                    value={floor.depreciation}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={2}>
                  <input
                    type="text"
                    name={`floors.${index}.lessDepreciation`}
                    className="form-control"
                    value={floor.lessDepreciation}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col md={2}>
                  <input
                    type="text"
                    name={`floors.${index}.netDepreciatedValue`}
                    className="form-control"
                    value={floor.netDepreciatedValue}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
            ))}
            <Button variant="primary" onClick={addFloor}>
              Add Floor
            </Button>

            <h5 className="mt-4 mb-3">Risk Assessment</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Risk regarding seismic zone, cyclone area, flood area, land slide:</label>
                <input
                  type="text"
                  name="riskAssessment"
                  className="form-control"
                  value={propertyDetails.riskAssessment}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Remarks</h5>
            <Row className="mb-3">
              <Col md={12}>
                <textarea
                  name="remarks"
                  className="form-control"
                  rows="6"
                  value={propertyDetails.remarks}
                  onChange={handleInputChange}
                />
              </Col>
            </Row>

            {/* Additional fields below remarks */}
            <h5 className="mt-4 mb-3">Additional Information</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Date:</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  defaultValue="2023-05-16"
                  onChange={handleInputChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Applicant Name:</label>
                <input
                  type="text"
                  name="applicantName"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">AB Collection:</label>
                <input
                  type="text"
                  name="abCollection"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Site Images:</label>
                <input
                  type="text"
                  name="siteImages"
                  className="form-control"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Lead Id:</label>
                <input
                  type="text"
                  name="leadId"
                  className="form-control"
                  defaultValue="A068301-LAP"
                  onChange={handleInputChange}
                />
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </div>
  );
};

export default ActualPlanDetails;