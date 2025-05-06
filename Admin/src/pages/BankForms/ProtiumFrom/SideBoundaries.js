import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const SideBoundaries = ({ onDataChange }) => {
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
          <h4 className="m-0">SIDE BOUNDARIES</h4>
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
            <h5 className="mt-4 mb-3">Boundary Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">East:</label>
                <input
                  type="text"
                  name="east"
                  className="form-control"
                  defaultValue="SHOP NO. 03-A"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">West:</label>
                <input
                  type="text"
                  name="west"
                  className="form-control"
                  defaultValue="CORRIDOR"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">North:</label>
                <input
                  type="text"
                  name="north"
                  className="form-control"
                  defaultValue="CORRIDOR"
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
                  defaultValue="SHOP NO. 05"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Boundaries are matching:</label>
                <select
                  name="boundariesMatching"
                  className="form-select"
                  onChange={handleChange}
                  defaultValue="No"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Property identified through:</label>
                <select
                  name="propertyIdentified"
                  className="form-select"
                  onChange={handleChange}
                  defaultValue="No"
                >
                  <option value="Yes">Yes / No</option>
                </select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Plot Demarcated at site:</label>
                <select
                  name="plotDemarcated"
                  className="form-select"
                  onChange={handleChange}
                  defaultValue="No"
                >
                  <option value="Yes">Yes / No</option>
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Amenities:</label>
                <input
                  type="text"
                  name="amenities"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Dimensions</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">E:</label>
                <input
                  type="text"
                  name="dimensionE"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">N:</label>
                <input
                  type="text"
                  name="dimensionN"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">W:</label>
                <input
                  type="text"
                  name="dimensionW"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">S:</label>
                <input
                  type="text"
                  name="dimensionS"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Total Plot Area (IN SQFT):</label>
                <input
                  type="text"
                  name="totalPlotArea"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Reduction Area (IN SQFT):</label>
                <input
                  type="text"
                  name="reductionArea"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Total Area (IN SQFT):</label>
                <input
                  type="text"
                  name="totalArea"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Land / Plot Area</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Land / Plot Area (Doc):</label>
                <input
                  type="text"
                  name="landPlotAreaDoc"
                  className="form-control"
                  defaultValue="300 Sq Ft"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Land / Plot Area (Plan) IN SQFT:</label>
                <input
                  type="text"
                  name="landPlotAreaPlan"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Land / Plot Area (Site) IN SQFT:</label>
                <input
                  type="text"
                  name="landPlotAreaSite"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Built up Area</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Built up Area (As per Plan) IN SQFT:</label>
                <input
                  type="text"
                  name="builtUpAreaPlan"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Built up area (Actual) IN SQFT:</label>
                <input
                  type="text"
                  name="builtUpAreaActual"
                  className="form-control"
                  defaultValue="300"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Floor Details</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">First Floor:</label>
                <input
                  type="text"
                  name="firstFloor"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Structural Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Type of Structure:</label>
                <input
                  type="text"
                  name="typeOfStructure"
                  className="form-control"
                  defaultValue="RCC / Load Bearing/ Stone Slab/ Tin Sheet/ Temporary"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">No. of wings:</label>
                <input
                  type="text"
                  name="noOfWings"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">No. of Units on each floor:</label>
                <input
                  type="text"
                  name="noOfUnitsPerFloor"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Quality of construction:</label>
                <input
                  type="text"
                  name="qualityOfConstruction"
                  className="form-control"
                  defaultValue="GOOD"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Structural Observation:</label>
                <select
                  name="structuralObservation"
                  className="form-select"
                  onChange={handleChange}
                  defaultValue="Yes"
                >
                  <option value="Yes">YES / No</option>
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Configuration:</label>
                <input
                  type="text"
                  name="configuration"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Interiors</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Flooring & finishing:</label>
                <input
                  type="text"
                  name="flooringFinishing"
                  className="form-control"
                  defaultValue="GOOD"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Roofing and terracing:</label>
                <input
                  type="text"
                  name="roofingTerracing"
                  className="form-control"
                  defaultValue="GOOD"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Quality of fixtures & settings:</label>
                <input
                  type="text"
                  name="qualityFixturesSettings"
                  className="form-control"
                  defaultValue="GOOD"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Doors & Windows:</label>
                <input
                  type="text"
                  name="doorsWindows"
                  className="form-control"
                  defaultValue="YES"
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

export default SideBoundaries;