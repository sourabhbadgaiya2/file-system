import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const TechnicalAppraisalReport = ({ onDataChange }) => {
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
          <h4 className="m-0">TECHNICAL APPRAISAL REPORT FOR HOUSE/FLAT/LAND/OFFICE/COMMERCIAL PROPERTY</h4>
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
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Branch Name</label>
                <input
                  type="text"
                  name="branchName"
                  className="form-control"
                  defaultValue="IDFC FIRST MANDDEEP"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Ref</label>
                <input
                  type="text"
                  name="ref"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Date</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  defaultValue="2023-05-22"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Type of Case</label>
                <input
                  type="text"
                  name="typeOfCase"
                  className="form-control"
                  defaultValue="Ht (construction)"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Volunteer Name</label>
                <input
                  type="text"
                  name="volunteerName"
                  className="form-control"
                  defaultValue="UNIQUE ENGINEERING AND ASSOCIATE"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Date of Visit</label>
                <input
                  type="date"
                  name="dateOfVisit"
                  className="form-control"
                  defaultValue="2023-05-22"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Case Ref. No.</label>
                <input
                  type="text"
                  name="caseRefNo"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Contacted Person for property inspection</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="contactPersonName"
                  className="form-control"
                  defaultValue="MR. SUNIL KUMAR"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Contact No.</label>
                <input
                  type="text"
                  name="contactPersonNumber"
                  className="form-control"
                  defaultValue="7987459327"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">BASIC DETAILS</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Application/s Name/s</label>
                <input
                  type="text"
                  name="applicantNames"
                  className="form-control"
                  defaultValue="MR. RAJESH KUMAR"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Type of property</label>
                <input
                  type="text"
                  name="propertyType"
                  className="form-control"
                  defaultValue="RESIDNETIAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Current Usage</label>
                <input
                  type="text"
                  name="currentUsage"
                  className="form-control"
                  defaultValue="UNDER CONST"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Address at site</label>
                <textarea
                  name="siteAddress"
                  className="form-control"
                  rows="3"
                  defaultValue="UNDER CONST RESIDENTIAL HOUSE ON PLOT NO. 217, PART OF KH NO. 173/1, 174/1, STUATED AT SHETAL DEEP ORAM PIPALITA GALUU, PH NO. 03, WARD NO 24, MANDDEEP THISIL GOUHARGANI DIST RABEN MP-462046"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Address as per document</label>
                <textarea
                  name="documentAddress"
                  className="form-control"
                  rows="3"
                  defaultValue="UNDER CONST RESIDENTIAL HOUSE ON PLOT NO. 217, PART OF KH NO. 173/1, 174/1, STUATED AT SHETAL DEEP ORAM PIPALITA GALUU, PH NO. 03, WARD NO 24, MANDDEEP THISIL GOUHARGANI DIST RABEN MP-462046"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Has the valuation done valuation of this property before this? If yes, when/or whom?</label>
                <input
                  type="text"
                  name="previousValuation"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">SOURQUISIONS & LOCALITY DETAILS</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Approved Usage of Property</label>
                <input
                  type="text"
                  name="approvedUsage"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Class of Locality</label>
                <input
                  type="text"
                  name="localityClass"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Site is (Dev, Under Dev)</label>
                <input
                  type="text"
                  name="siteDevelopment"
                  className="form-control"
                  defaultValue="DEV"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Proximity to civic amenities/public transport</label>
                <select
                  name="proximityAmenities"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                >
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </Col>
              <Col md={6}>
                <label className="form-label">Railway Station</label>
                <input
                  type="text"
                  name="railwayStationDistance"
                  className="form-control"
                  defaultValue="5 KM"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Bus Stop</label>
                <input
                  type="text"
                  name="busStopDistance"
                  className="form-control"
                  defaultValue="2KM"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Close Vicinity/Landmark</label>
                <input
                  type="text"
                  name="landmark"
                  className="form-control"
                  defaultValue="NEAR ORIENTAL PUBLIC SCHOOL"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Distance from City Centre</label>
                <input
                  type="text"
                  name="cityCentreDistance"
                  className="form-control"
                  defaultValue="1 KM"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Condition and width of approach Road</label>
                <select
                  name="approachRoad"
                  className="form-control"
                  defaultValue="More than 10 ft"
                  onChange={handleChange}
                >
                  <option value="More than 10 ft">More than 10 ft</option>
                  <option value="Less than 10 ft">Less than 10 ft</option>
                </select>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalAppraisalReport;