import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const BasicDetails = ({ onDataChange }) => {
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
          <h4 className="m-0">BASIC DETAILS</h4>
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
                <label className="form-label">Branch Name:</label>
                <input
                  type="text"
                  name="branchName"
                  className="form-control"
                  defaultValue="BHOPAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Valuer Name:</label>
                <input
                  type="text"
                  name="valuerName"
                  className="form-control"
                  defaultValue="Unique Engineering and Associate"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Type of Case:</label>
                <input
                  type="text"
                  name="typeOfCase"
                  className="form-control"
                  defaultValue="Valuation Report"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Lan No:</label>
                <input
                  type="text"
                  name="lanNo"
                  className="form-control"
                  defaultValue="210225257489700"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Date of Visit:</label>
                <input
                  type="date"
                  name="dateOfVisit"
                  className="form-control"
                  defaultValue="09.03.2021"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Date of Report:</label>
                <input
                  type="date"
                  name="dateOfReport"
                  className="form-control"
                  defaultValue="09.03.2021"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Contacted Person for property inspection (Name/Mobile):</label>
                <input
                  type="text"
                  name="contactedPerson"
                  className="form-control"
                  defaultValue="MR. DILIP MEHRA CONT NO 6266737358"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Applicant's Details</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Applicant's Name/s:</label>
                <input
                  type="text"
                  name="applicantsName"
                  className="form-control"
                  defaultValue="BHAVAR LAL MEHRA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Property Owner:</label>
                <input
                  type="text"
                  name="propertyOwner"
                  className="form-control"
                  defaultValue="MR. BHAVARLAL S/O DEVILAL JI MEHRA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Name of document holder:</label>
                <input
                  type="text"
                  name="documentHolder"
                  className="form-control"
                  defaultValue="MR. BHAVARLAL S/O DEVILAL JI MEHRA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Originally type of property:</label>
                <input
                  type="text"
                  name="originalPropertyType"
                  className="form-control"
                  defaultValue="Residential"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Current Usage:</label>
                <input
                  type="text"
                  name="currentUsage"
                  className="form-control"
                  defaultValue="Residential"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Address as per request:</label>
                <textarea
                  name="addressAsPerRequest"
                  className="form-control"
                  rows="3"
                  defaultValue="RESIDENTIAL HOUSE OF KH NO 180 H.NO. 72 PH NO 05 VILLAGE KURANA TESLI HUZURI DIST BHOPAL MP 462030"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Address at site:</label>
                <textarea
                  name="addressAtSite"
                  className="form-control"
                  rows="3"
                  defaultValue="RESIDENTIAL HOUSE OF KH NO 180 H.NO. 72 PH NO 05 VILLAGE KURANA TESLI HUZURI DIST BHOPAL MP 462030"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Address as per document:</label>
                <textarea
                  name="addressAsPerDocument"
                  className="form-control"
                  rows="3"
                  defaultValue="RESIDENTIAL HOUSE OF KH NO 180 H.NO. 72 PH NO 05 VILLAGE KURANA TESLI HUZURI DIST BHOPAL MP 462030"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Pin code of the property:</label>
                <input
                  type="text"
                  name="pinCode"
                  className="form-control"
                  defaultValue="462030"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Latitude:</label>
                <input
                  type="text"
                  name="latitude"
                  className="form-control"
                  defaultValue="23.330544"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Longitude:</label>
                <input
                  type="text"
                  name="longitude"
                  className="form-control"
                  defaultValue="77.31751"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Main Locality of the Property:</label>
                <input
                  type="text"
                  name="mainLocality"
                  className="form-control"
                  defaultValue="Middle Class"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Has the evaluator done valuation of this property before this? If yes, when, for whom?</label>
                <input
                  type="text"
                  name="previousValuation"
                  className="form-control"
                  defaultValue="No"
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

export default BasicDetails;