import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const SurroundingDetails = ({ onDataChange }) => {
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
          <h4 className="m-0">SURROUNDING & LOCALITY DETAILS</h4>
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
              <Col md={6}>
                <label className="form-label">Type:</label>
                <input
                  type="text"
                  name="type"
                  className="form-control"
                  defaultValue="Residential"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Locality:</label>
                <input
                  type="text"
                  name="locality"
                  className="form-control"
                  defaultValue="Low"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Site is (Dev, Under Dev):</label>
                <input
                  type="text"
                  name="siteDevelopment"
                  className="form-control"
                  defaultValue="Under Developed"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Proximity to civic amenities/public transport:</label>
                <input
                  type="text"
                  name="proximityToAmenities"
                  className="form-control"
                  defaultValue="2-5 Km."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Railway Station:</label>
                <input
                  type="text"
                  name="railwayStation"
                  className="form-control"
                  defaultValue="10 TO 15 Km."
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Bust Stop:</label>
                <input
                  type="text"
                  name="busStop"
                  className="form-control"
                  defaultValue="3-4 Km."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Close Vicinity/Landmark:</label>
                <input
                  type="text"
                  name="closeVicinity"
                  className="form-control"
                  defaultValue="NEAR RAM TEMPLE"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Distance from City Center:</label>
                <input
                  type="text"
                  name="distanceFromCityCenter"
                  className="form-control"
                  defaultValue="15 Kms"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Condition and approx width of approach road to reach the property:</label>
                <input
                  type="text"
                  name="roadCondition"
                  className="form-control"
                  defaultValue="Average"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Physical approach to the property as per site visit (Clear / Not Clear):</label>
                <input
                  type="text"
                  name="physicalApproach"
                  className="form-control"
                  defaultValue="CLEAR"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Legal approach to the property as per documents (Clear / Not Clear):</label>
                <input
                  type="text"
                  name="legalApproach"
                  className="form-control"
                  defaultValue="CLEAR"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Any other features like board of other financier indicating mortgage, notice of Court/any authority which may effect the security:</label>
                <input
                  type="text"
                  name="otherFeatures"
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

export default SurroundingDetails;