import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const BoundriesDetails = ({ onDataChange }) => {
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
          <h4 className="m-0">BOUNDARIES DETAILS</h4>
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
            <h5 className="mt-4 mb-3">BOUNDARY DETAILS</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">East:</label>
                <input
                  type="text"
                  name="east"
                  className="form-control"
                  defaultValue="COLONY ROAD"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">West:</label>
                <input
                  type="text"
                  name="west"
                  className="form-control"
                  defaultValue="PLOT NO 276"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">North:</label>
                <input
                  type="text"
                  name="north"
                  className="form-control"
                  defaultValue="PLOT NO 218"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">South:</label>
                <input
                  type="text"
                  name="south"
                  className="form-control"
                  defaultValue="PLOT NO 217"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Boundaries Matching:</label>
                <input
                  type="text"
                  name="boundariesMatching"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">AT SITE PLINTH WORK DONE, PREVIOUS REMARKS ARE THESE:</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">1. Sale Deed Copy:</label>
                <textarea
                  name="saleDeedCopy"
                  className="form-control"
                  rows="3"
                  defaultValue="Given xerox copy of sale deed is in favor of Mr. Arjun Lalwani S/O Late Mr. Prahlad Lalwani and draft sale agreement is between Mr. Arjun Lalwani S/O Mr. Prahlad Lalwani and (1) Mr. Rajesh Kumar S/O Mr. Amar Singh (2) Smt. Bharti Bai W/O Mr. Rajesh Kumar."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">2. Property Visit:</label>
                <textarea
                  name="propertyVisit"
                  className="form-control"
                  rows="3"
                  defaultValue="During property visit Mr. Sunil Kumar Ji was met at site who is the customer representative Cont No.- 7987459327. It was clearly explained to him that the property visit is being done for valuation purpose in relation with loan proposal."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">3. Rate Confirmation:</label>
                <textarea
                  name="rateConfirmation"
                  className="form-control"
                  rows="3"
                  defaultValue="Rate has been conform from market inquiry."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">4. Property Location:</label>
                <textarea
                  name="propertyLocation"
                  className="form-control"
                  rows="3"
                  defaultValue="Property is situated at surrounding area of under dev. residential zoning."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">5. Property Identification:</label>
                <textarea
                  name="propertyIdentification"
                  className="form-control"
                  rows="3"
                  defaultValue="Property is identified by four side boundaries of given sale deed and sale agreement and colony layout plan."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">6. TNCP Layout Plan:</label>
                <textarea
                  name="tncpLayoutPlan"
                  className="form-control"
                  rows="3"
                  defaultValue="Obtain copy of TNCP layout plan memo no. 2387 on dated 29.12.2011."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">7. Building Estimate Cost:</label>
                <textarea
                  name="buildingEstimateCost"
                  className="form-control"
                  rows="3"
                  defaultValue="Obtain copy of building estimate cost of Rs. 403200/- for G.F. built up area 336 sqft."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">8. Total Construction Cost:</label>
                <textarea
                  name="totalConstructionCost"
                  className="form-control"
                  rows="3"
                  defaultValue="Total const cost will be consider after completion of work."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">9. Approved Map and Permission:</label>
                <textarea
                  name="approvedMapPermission"
                  className="form-control"
                  rows="3"
                  defaultValue="Approved map and permission to be taken prior disbursement of const part."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">10. Ownership Document:</label>
                <textarea
                  name="ownershipDocument"
                  className="form-control"
                  rows="3"
                  defaultValue="Suggest to credit team to be check proper ownership document prior disbursement."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">ANY OTHER OBSERVATION TO HIGHLIGHTED:</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Observations:</label>
                <textarea
                  name="otherObservations"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Property in Caution Area (Y/N):</label>
                <input
                  type="text"
                  name="propertyInCautionArea"
                  className="form-control"
                  defaultValue="N"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Property in Negative Area (Y/N):</label>
                <input
                  type="text"
                  name="propertyInNegativeArea"
                  className="form-control"
                  defaultValue="N"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Property in OGL (Y/N):</label>
                <input
                  type="text"
                  name="propertyInOGL"
                  className="form-control"
                  defaultValue="N"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Latitude:</label>
                <input
                  type="text"
                  name="latitude"
                  className="form-control"
                  defaultValue="23.089452"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Longitude:</label>
                <input
                  type="text"
                  name="longitude"
                  className="form-control"
                  defaultValue="77.499921"
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

export default BoundriesDetails;