import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ValuationDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">VALUATION DETAILS</h4>
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
          <div className="card-body">
            <h5 className="mt-4 mb-3">Detailing</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Plot Area (AS PER LEASE DEED):</label>
                <input
                  type="text"
                  name="plotAreaLeaseDeed"
                  className="form-control"
                  defaultValue="7,280"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Rate psqft:</label>
                <input
                  type="text"
                  name="ratePsqft"
                  className="form-control"
                  defaultValue="800"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Value:</label>
                <input
                  type="text"
                  name="value"
                  className="form-control"
                  defaultValue="5824000"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Plot Area(s per physical):</label>
                <input
                  type="text"
                  name="plotAreaPhysical"
                  className="form-control"
                  defaultValue="7,280"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Plot Area(s per plan):</label>
                <input
                  type="text"
                  name="plotAreaPlan"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Carpet Area (as per plan):</label>
                <input
                  type="text"
                  name="carpetAreaPlan"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Carpet Area (as per measurement):</label>
                <input
                  type="text"
                  name="carpetAreaMeasurement"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Built Up Area (RCC):</label>
                <input
                  type="text"
                  name="builtUpAreaRcc"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Built Up Area TIN SHED:</label>
                <input
                  type="text"
                  name="builtUpAreaTinShed"
                  className="form-control"
                  defaultValue="3,252"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Boundary Details</label>
                <input
                  type="text"
                  name="boundaryDetails"
                  className="form-control"
                  defaultValue="PLOT NO.61-A(M/S K.C. ENTERPRISES)"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Valuation</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Area in Sqft:</label>
                <input
                  type="text"
                  name="areaInSqft"
                  className="form-control"
                  defaultValue="3,252"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Rate psqft:</label>
                <input
                  type="text"
                  name="ratePsqft"
                  className="form-control"
                  defaultValue="1000"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Value:</label>
                <input
                  type="text"
                  name="value"
                  className="form-control"
                  defaultValue="4659200"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Boundary Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">North:</label>
                <input
                  type="text"
                  name="north"
                  className="form-control"
                  defaultValue="PLOT NO.61-A(M/S K.C. ENTERPRISES)"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">South:</label>
                <input
                  type="text"
                  name="south"
                  className="form-control"
                  defaultValue="M/S T.A.J. ENTERPRISES"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">East:</label>
                <input
                  type="text"
                  name="east"
                  className="form-control"
                  defaultValue="ROAD"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">West:</label>
                <input
                  type="text"
                  name="west"
                  className="form-control"
                  defaultValue="RESIDENCE COLONY"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Percentage Recommendation:</label>
                <input
                  type="text"
                  name="percentageRecommendation"
                  className="form-control"
                  defaultValue="100%"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Old Remarks</h5>
            <Row className="mb-3">
              <Col md={12}>
                <textarea
                  name="oldRemarks"
                  className="form-control"
                  rows="6"
                  onChange={handleChange}
                  defaultValue={`
1. GIVEN XEROX COPY OF LEASE DEED IN FAVOUR OF M/S RADHIKA STEELS (PROPETER NAME: SHRI GAURAV GUPTA S/O SHRI RAMESH BABU GUPTA) STARTED FROM ON DATE 26.03.2016 TO 25.03.2046 FOR THIRTY YEARS WHICH IS LEASED BY DISTRICT TRADE & INDUSTRIES CENTRE BHOPAL. TOTAL AREA 7280 SQFT.
2. DURING PROPERTY VISIT MR GAURAV KUMAR GUPTA MET AT THE PROPERTY WHO IS LESSEE WITH CONTACT NO. 9981049877. IT WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.
3. RATE HAS BEEN CONFIRM FROM MARKET ENQUIRY.
4. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS INDUSTRIAL ZONING SURROUNDING AREA DEVELOPMENT MORE THAN 50% AND HABITATION IS MORE THAN 60%.
5. AT SITE PROPERTY IS TIN SHED STRUCTURED FACTORY WHICH IS OCCUPIED BY OWNER.
6. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF GIVEN LEASE DEED AND LOCAL ENQUIRY.
7. THIS IS CAUTION PROPERTY HIGH TENSION ELECTRIC LINE OF 132 KV IS PASSING THROUGH THE WHOLE PROPERTY. HENCE REGISTRY VALUE (GOV. GUIDELINE VALUE) IS CONSIDERED IN REPORT.
8. ACTUAL AT SITE BUILT-UP AREA OF TIN SHED IS 3,252 SQFT.
9. AS PER LEASE DEED LAND AREA IS 7280 SQFT. BUT ACTUAL AT SITE LAND AREA OF THE PROPERTY IS 8,436 SQFT. LOWER SIDE AREA OF THE PROPERTY IS CONSIDERED IN REPORT.
10. BUILDING PERMISSION AND MAP IS NOT PROVIDED.
11. SALEABILITY OF THE SUBJECTED PROPERTY IS VERY LOW SAME SHOULD BE NOTE.
12. REPORT IS RELEASED WITH LAND ENCROACHMENT CONCERN AND HIGH TENSION ELECTRIC LINE CONCERN TO TECHNICAL TEAM APPROVAL.
`}
                />
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValuationDetails;