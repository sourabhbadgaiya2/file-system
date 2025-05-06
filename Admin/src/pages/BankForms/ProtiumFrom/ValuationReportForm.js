import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const ValuationForm = ({ onDataChange }) => {
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
          <h4 className="m-0">PROPERTY VALUATION FORM</h4>
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
        <Form className="accordion-body p-3 border rounded mt-2" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="card-body">
            <h5 className="mt-4 mb-3">A. GENERAL DETAILS</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Lead ID / LAN NO.:</label>
                <input
                  type="text"
                  name="leadId"
                  className="form-control"
                  defaultValue="A068301-LAP"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Valuer Name:</label>
                <input
                  type="text"
                  name="valuerName"
                  className="form-control"
                  defaultValue="UNIQUE ENGINEERING & ASSOCIATES"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Date:</label>
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  defaultValue="16.05.2023"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Name of Applicant:</label>
                <input
                  type="text"
                  name="nameOfApplicant"
                  className="form-control"
                  defaultValue="AB COLLECTION"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Name of Property Owner:</label>
                <textarea
                  name="nameOfPropertyOwner"
                  className="form-control"
                  rows="3"
                  defaultValue="COMMERCIAL SHOP NO. 03(CORNER), SITUATED AT FIRST FLOOR OF BUILDING KNOWN AS KRISHNA COMPLEX, AT PART OF KHASRA NO. 493/1/1/2, PH NO. 33, VILLAGE-NEIBAD, WARD NO. 26, VIKASHKHAND-PHANDA THESIL-HUZURI, DIST.-BHOPAL (MP)-"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Property Address as per site:</label>
                <textarea
                  name="propertyAddressSite"
                  className="form-control"
                  rows="3"
                  defaultValue="COMMERCIAL SHOP NO. 03(CORNER), SITUATED AT FIRST FLOOR OF BUILDING KNOWN AS KRISHNA COMPLEX, AT PART OF KHASRA NO. 493/1/1/2, PH NO. 33, VILLAGE-NEIBAD, WARD NO. 26, VIKASHKHAND-PHANDA THESIL-HUZURI, DIST.-BHOPAL (MP)-"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Legal address of property:</label>
                <textarea
                  name="legalAddress"
                  className="form-control"
                  rows="3"
                  defaultValue="COMMERCIAL SHOP NO. 03(CORNER), SITUATED AT FIRST FLOOR OF BUILDING KNOWN AS KRISHNA COMPLEX, AT PART OF KHASRA NO. 493/1/1/2, PH NO. 33, VILLAGE-NEIBAD, WARD NO. 26, VIKASHKHAND-PHANDA THESIL-HUZURI, DIST.-BHOPAL (MP)-"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Contact No. of the Owner:</label>
                <input
                  type="text"
                  name="contactNoOfOwner"
                  className="form-control"
                  defaultValue="7869416171"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Landmark:</label>
                <input
                  type="text"
                  name="landmark"
                  className="form-control"
                  defaultValue="NEAR RAMI LAXSHMI BAI SHOPPING COMPLEX"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Date of technical visit:</label>
                <input
                  type="date"
                  name="dateOfTechnicalVisit"
                  className="form-control"
                  defaultValue="16.05.2023"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property Usage:</label>
                <select
                  name="propertyUsage"
                  className="form-control"
                  onChange={handleChange}
                  defaultValue="COMMERCIAL"
                >
                  <option value="COMMERCIAL">COMMERCIAL</option>
                  <option value="RESIDENTIAL">RESIDENTIAL</option>
                  <option value="INDUSTRIAL">INDUSTRIAL</option>
                  <option value="LAND">LAND</option>
                  <option value="VACANT">VACANT</option>
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Occupancy:</label>
                <select
                  name="occupancy"
                  className="form-control"
                  onChange={handleChange}
                  defaultValue="COMMERCIAL"
                >
                  <option value="COMMERCIAL">COMMERCIAL</option>
                  <option value="RESIDENTIAL">RESIDENTIAL</option>
                  <option value="INDUSTRIAL">INDUSTRIAL</option>
                  <option value="VACANT">VACANT</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Habitation:</label>
                <input
                  type="text"
                  name="habitation"
                  className="form-control"
                  defaultValue="COMMERCIAL"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">B. SURROUNDING LOCALITY DETAILS</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Ward No/ Municipal land No:</label>
                <input
                  type="text"
                  name="wardNo"
                  className="form-control"
                  defaultValue="WARD NO. 26"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Type of locality:</label>
                <input
                  type="text"
                  name="typeOfLocality"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Distance From City Centre:</label>
                <input
                  type="text"
                  name="distanceFromCityCentre"
                  className="form-control"
                  defaultValue="14 KM"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Site Access:</label>
                <input
                  type="text"
                  name="siteAccess"
                  className="form-control"
                  defaultValue="CLEAR"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Corporation limit:</label>
                <input
                  type="text"
                  name="corporationLimit"
                  className="form-control"
                  defaultValue="18-20 KM"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Panchayat Union:</label>
                <input
                  type="text"
                  name="panchayatUnion"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-control">Conditions of Approach Road:</label>
                <input
                  type="text"
                  name="conditionsOfApproachRoad"
                  className="form-control"
                  defaultValue="Good/Bad"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">C. PROPERTY DETAILS (Proposed)</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">No of Floors:</label>
                <input
                  type="text"
                  name="noOfFloors"
                  className="form-control"
                  defaultValue="3"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Floor Wise Usage:</label>
                <input
                  type="text"
                  name="floorWiseUsage"
                  className="form-control"
                  defaultValue="B+G+2"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Age of the property:</label>
                <input
                  type="text"
                  name="ageOfTheProperty"
                  className="form-control"
                  defaultValue="57"
                  onChange={handleChange}
                />
              </Col>
            </Row>

          </div>
        </Form>
      )}
    </div>
  );
};

export default ValuationForm;