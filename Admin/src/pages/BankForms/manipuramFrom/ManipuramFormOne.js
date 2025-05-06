import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ManipuramFormOne = ({ onDataChange }) => {
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
          <h4 className="m-0">MANIPURAM FORM ONE</h4>
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
                <label className="form-label">Valuer Name:</label>
                <input
                  type="text"
                  name="valuerName"
                  className="form-control"
                  defaultValue="Unique Engineering & Associate"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Case Ref. No:</label>
                <input
                  type="text"
                  name="caseRefNo"
                  className="form-control"
                  defaultValue="APP00550131"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Date of Visit:</label>
                <input
                  type="date"
                  name="dateOfVisit"
                  className="form-control"
                  defaultValue="06.03.2021"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Date of Report:</label>
                <input
                  type="date"
                  name="dateOfReport"
                  className="form-control"
                  defaultValue="13.02.2025"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Contacted Person for property inspection</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  name="contactPersonName"
                  className="form-control"
                  defaultValue="Mrs. Jyoti Bai Rajput"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Mobile:</label>
                <input
                  type="text"
                  name="contactPersonMobile"
                  className="form-control"
                  defaultValue="Mrs. Jyoti Bai Rajput"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Basic Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Applicant's Name/s:</label>
                <input
                  type="text"
                  name="applicantsName"
                  className="form-control"
                  defaultValue="Mr. Jitendra Singh S/O Mr. Raghuveer Singh"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Owner:</label>
                <input
                  type="text"
                  name="owner"
                  className="form-control"
                  defaultValue="Mr. Jitendra Singh S/O Mr. Raghuveer Singh"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Document Produced:</label>
                <input
                  type="text"
                  name="documentProduced"
                  className="form-control"
                  defaultValue="PATTA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Type of Property:</label>
                <input
                  type="text"
                  name="propertyType"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Holding Type:</label>
                <input
                  type="text"
                  name="holdingType"
                  className="form-control"
                  defaultValue="Free Hold"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property Usage:</label>
                <input
                  type="text"
                  name="propertyUsage"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Usage Authorized:</label>
                <input
                  type="text"
                  name="usageAuthorized"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Any Usage Restriction of Land?</label>
                <input
                  type="text"
                  name="usageRestriction"
                  className="form-control"
                  defaultValue="No"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Occupancy Status:</label>
                <input
                  type="text"
                  name="occupancyStatus"
                  className="form-control"
                  defaultValue="OCCUPIED"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Measurement of the Property:</label>
                <textarea
                  name="measurement"
                  className="form-control"
                  rows="3"
                  defaultValue="Land area: 2607 sqft. And Built up Area: 840 sqft."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Distance of the Property from the Financing Branch:</label>
                <textarea
                  name="distanceFromBranch"
                  className="form-control"
                  rows="3"
                  defaultValue="FROM MAIN ROAD LESS THAN 200 MT"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Address as per document:</label>
                <textarea
                  name="addressAsPerDocument"
                  className="form-control"
                  rows="3"
                  defaultValue="PROPERTY AT PART OF KHASRA NO.219 IS SITUATED AT GRAM-RICHPH NO.04WARD NO.09,TESHL-SEON MALWADIST-NARMADAPURAM(MP)-461223 PROPERTY IS LAND PART OF KHASRA NO.219 IS SITUATED AT GRAM-RICHPH NO.04WARD NO.09,TESHL-SEON MALWADIST-NARMADAPURAM(MP)-461223"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Land Mark:</label>
                <input
                  type="text"
                  name="landMark"
                  className="form-control"
                  defaultValue="NEAR Hanuman Temple"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Location of the Property:</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  defaultValue="RURAL"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Site Boundaries</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">East:</label>
                <input
                  type="text"
                  name="eastBoundary"
                  className="form-control"
                  defaultValue="PROPERTY OF LAKHAN LAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">West:</label>
                <input
                  type="text"
                  name="westBoundary"
                  className="form-control"
                  defaultValue="PROPERTY OF KUWARI SINGH"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">North:</label>
                <input
                  type="text"
                  name="northBoundary"
                  className="form-control"
                  defaultValue="BHILAT BABA ROAD"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">South:</label>
                <input
                  type="text"
                  name="southBoundary"
                  className="form-control"
                  defaultValue="PROPERTY OF KAMAL KISHORE"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Accessibility</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Connectivity:</label>
                <input
                  type="text"
                  name="connectivity"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Site Access:</label>
                <input
                  type="text"
                  name="siteAccess"
                  className="form-control"
                  defaultValue="Average"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Proximity to Amenities:</label>
                <input
                  type="text"
                  name="proximityToAmenities"
                  className="form-control"
                  defaultValue="UNDER DEV"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Distance from City Centre:</label>
                <input
                  type="text"
                  name="distanceFromCityCentre"
                  className="form-control"
                  defaultValue="02 kms to 03 kms"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Type & Width of Road:</label>
                <input
                  type="text"
                  name="roadTypeWidth"
                  className="form-control"
                  defaultValue="Approx. 15 Feet road physically existing"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Comments on the Property:</label>
                <textarea
                  name="commentsOnProperty"
                  className="form-control"
                  rows="3"
                  defaultValue="Marketability of the property is GOOD"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Within Municipal Limits:</label>
                <input
                  type="text"
                  name="withinMunicipalLimits"
                  className="form-control"
                  defaultValue="GP"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Municipal Details</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Sanction Plan Provided:</label>
                <input
                  type="text"
                  name="sanctionPlan"
                  className="form-control"
                  defaultValue="No"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Date of Sanction:</label>
                <input
                  type="text"
                  name="dateOfSanction"
                  className="form-control"
                  defaultValue="Not produced"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Sanctioned Area:</label>
                <input
                  type="text"
                  name="sanctionedArea"
                  className="form-control"
                  defaultValue="Not produced"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Municipal Compliance:</label>
                <input
                  type="text"
                  name="municipalCompliance"
                  className="form-control"
                  defaultValue="Not produced"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Technical Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Current Age of the Property:</label>
                <input
                  type="text"
                  name="currentAgeOfProperty"
                  className="form-control"
                  defaultValue="4"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Estimated Residual Age:</label>
                <input
                  type="text"
                  name="estimatedResidualAge"
                  className="form-control"
                  defaultValue="56"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Construction Type:</label>
                <input
                  type="text"
                  name="constructionType"
                  className="form-control"
                  defaultValue="RCC FINISHED"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">No of Floors:</label>
                <input
                  type="text"
                  name="noOfFloors"
                  className="form-control"
                  defaultValue="GF"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Total Land Area in sqft:</label>
                <input
                  type="text"
                  name="totalLandArea"
                  className="form-control"
                  defaultValue="2607"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Total Built up Area in sqft (Actual):</label>
                <input
                  type="text"
                  name="totalBuiltUpArea"
                  className="form-control"
                  defaultValue="840"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Total Floor Area in sqft:</label>
                <input
                  type="text"
                  name="totalFloorArea"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">If under Construction, % Completion:</label>
                <input
                  type="text"
                  name="completionPercentage"
                  className="form-control"
                  defaultValue="95%"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Independent Access:</label>
                <input
                  type="text"
                  name="independentAccess"
                  className="form-control"
                  defaultValue="4"
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

export default ManipuramFormOne;