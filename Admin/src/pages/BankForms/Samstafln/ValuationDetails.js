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
          <h4 className="m-0">PROPERTY VALUATION DETAILS</h4>
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
            <h5 className="mt-4 mb-3">(A) Description of Constructed Area and Rates</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Description:</label>
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  defaultValue="Bungalow"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Land Area (sqft):</label>
                <input
                  type="text"
                  name="landArea"
                  className="form-control"
                  defaultValue="900"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Rate (sqft):</label>
                <input
                  type="text"
                  name="rate"
                  className="form-control"
                  defaultValue="250"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Amount:</label>
                <input
                  type="text"
                  name="amount"
                  className="form-control"
                  defaultValue="225000"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Construction rate (as on date):</label>
                <input
                  type="text"
                  name="constructionRate"
                  className="form-control"
                  defaultValue="846"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Applicable Area:</label>
                <input
                  type="text"
                  name="applicableArea"
                  className="form-control"
                  defaultValue="846"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Stage of construction in %:</label>
                <input
                  type="text"
                  name="stageOfConstruction"
                  className="form-control"
                  defaultValue="100%"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Stage of Recommendation in %:</label>
                <input
                  type="text"
                  name="stageOfRecommendation"
                  className="form-control"
                  defaultValue="100%"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">(B) Value of Extra Amenities if applicable</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Car Parking:</label>
                <input
                  type="text"
                  name="carParking"
                  className="form-control"
                  defaultValue="PLC"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Power Backup:</label>
                <input
                  type="text"
                  name="powerBackup"
                  className="form-control"
                  defaultValue="EDC"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Other:</label>
                <input
                  type="text"
                  name="other"
                  className="form-control"
                  defaultValue="Other"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Land/Plot Area:</label>
                <input
                  type="text"
                  name="landPlotArea"
                  className="form-control"
                  defaultValue="900"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Total Amenities charges:</label>
                <input
                  type="text"
                  name="totalAmenitiesCharges"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Total Market Value of Property as on Date (A+B):</label>
                <input
                  type="text"
                  name="totalMarketValue"
                  className="form-control"
                  defaultValue="901800"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Guideline Value of the Property:</label>
                <input
                  type="text"
                  name="guidelineValue"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Forced Sale Value:</label>
                <input
                  type="text"
                  name="forcedSaleValue"
                  className="form-control"
                  defaultValue="721440"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Boundaries</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">As per deed:</label>
                <input
                  type="text"
                  name="boundariesAsPerDeed"
                  className="form-control"
                  defaultValue="HOUSE OF RAMESH JI"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">At site:</label>
                <input
                  type="text"
                  name="boundariesAtSite"
                  className="form-control"
                  defaultValue="HOUSE OF RAMESH JI"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Boundaries Matching:</label>
                <input
                  type="text"
                  name="boundariesMatching"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">East:</label>
                <input
                  type="text"
                  name="eastBoundary"
                  className="form-control"
                  defaultValue="HOUSE OF RAMESH JI"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">West:</label>
                <input
                  type="text"
                  name="westBoundary"
                  className="form-control"
                  defaultValue="HOUSE OF DILP JI"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">North:</label>
                <input
                  type="text"
                  name="northBoundary"
                  className="form-control"
                  defaultValue="HOUSE OF GOKUL JI"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">South:</label>
                <input
                  type="text"
                  name="southBoundary"
                  className="form-control"
                  defaultValue="ROAD"
                  onChange={handleChange}
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
                  onChange={handleChange}
                  defaultValue={`
1. GIVEN XEROX COPY OF PATTA IS IN FAVOUR OF MR. BHAVARLAL S/O DEVILAL JI MEHRA.
2. DURING PROPERTY VISIT MR. DILIP MEHRA JI WAS MET AT THE PROPERTY, WHO IS CUSTOMER BROTHER CONTACT NO. 6266737358. IT WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.
3. RATE HAS BEEN CONFIRM FROM MARKET ENQUIRY.
4. AT SITE PROPERTY IS RESIDENTIAL HOUSE WHICH IS OCCUPIED BY CUSTOMER.
5. BUILT UP AREA IS TAKEN ONLY G.F FROM ACTUAL AT SITE.
6. APPROVED MAP IS NOT PROVIDED.
7. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARY OF GIVEN PATTA.
8. SUGGESTED TO CREDIT TEAM PLEASE CHECK THE PROPER LEGAL OWNERSHIP DOCUMENTS OF THE PROPERTY.
9. AT SITE G.F COMPLETED AND F.F IS UNDER CONSTRUCTION COMPLETE UPTO SLAB WORK ALSO ACCESS FOR F.F FROM MORTGAGING AREA.
10. ACCESS OF THE HOUSE ROAD WIDTH APPROX 7 FT ONLY. ALSO REAR SIDE OTHER HOUSES ACCESS IS FROM CUSTOMER PROPERTY AND OTHER ACCESS OF REAR SIDE HOUSES IS ONLY 3 FT GAI.
`}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Declaration</h5>
            <Row className="mb-3">
              <Col md={12}>
                <textarea
                  name="declaration"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                  defaultValue={`
We hereby declare that we have no direct or indirect interest in the valued and the information furnished in the report is true and correct to the best of my knowledge of belief.
`}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Name of Engineer who visited the property:</label>
                <input
                  type="text"
                  name="engineerName"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">(Authorized Signatory)</label>
                <input
                  type="text"
                  name="authorizedSignatory"
                  className="form-control"
                  onChange={handleChange}
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