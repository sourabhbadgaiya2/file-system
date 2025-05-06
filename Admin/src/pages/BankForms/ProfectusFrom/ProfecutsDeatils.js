import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ProfecutsDeatils = ({ onDataChange }) => {
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
          <h4 className="m-0">PROBABLE CAPITAL VALUATION REPORT</h4>
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
            <h5 className="mt-4 mb-3">Basic Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Name of the Client:</label>
                <input
                  type="text"
                  name="clientName"
                  className="form-control"
                  defaultValue="GAURAV KUMAR GUPTA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Initiation Date:</label>
                <input
                  type="date"
                  name="initiationDate"
                  className="form-control"
                  defaultValue="20.02.2025"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Visit Date:</label>
                <input
                  type="date"
                  name="visitDate"
                  className="form-control"
                  defaultValue="20.02.2025"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Case Reference Number:</label>
                <input
                  type="text"
                  name="caseReferenceNumber"
                  className="form-control"
                  defaultValue="PLPIBH00077735"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Report Date:</label>
                <input
                  type="date"
                  name="reportDate"
                  className="form-control"
                  defaultValue="20.02.2025"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Name of the Property Owner:</label>
                <input
                  type="text"
                  name="propertyOwnerName"
                  className="form-control"
                  defaultValue="M/S RADHIKA STEELS (PROPERTY NAME: SHRI GAURAV GUPTA S/O RAJESH BABU GUPTA)"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Location Details</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Property Address As Per TRF:</label>
                <textarea
                  name="propertyAddressAsPerTRF"
                  className="form-control"
                  rows="3"
                  defaultValue="PROPERTY AT PLOT NO.62 IS SITUATED AT SECTOR-F, INDUSTRIAL AREA, GOVINDPURA,BHOPAL,TESHIL-HUZURI,DIST-BHOPAL,MP,462023"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Property Address As Per Visit:</label>
                <textarea
                  name="propertyAddressAsPerVisit"
                  className="form-control"
                  rows="3"
                  defaultValue="PROPERTY AT PLOT NO.62 IS SITUATED AT SECTOR-F, INDUSTRIAL AREA, GOVINDPURA,BHOPAL,TESHIL-HUZURI,DIST-BHOPAL,MP,462023"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Property Address As Per Legal Documents:</label>
                <textarea
                  name="propertyAddressAsPerLegalDocuments"
                  className="form-control"
                  rows="3"
                  defaultValue="PROPERTY AT PLOT NO.62 IS SITUATED AT SECTOR-F, INDUSTRIAL AREA, GOVINDPURA,BHOPAL,TESHIL-HUZURI,DIST-BHOPAL,MP,462023"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Main Locality:</label>
                <input
                  type="text"
                  name="mainLocality"
                  className="form-control"
                  defaultValue="GOVINDPURA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Micro Location:</label>
                <input
                  type="text"
                  name="microLocation"
                  className="form-control"
                  defaultValue="SECTOR-F"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Latitude:</label>
                <input
                  type="text"
                  name="latitude"
                  className="form-control"
                  defaultValue="23.264111"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Sub Locality:</label>
                <input
                  type="text"
                  name="subLocality"
                  className="form-control"
                  defaultValue="INDUSTRIAL AREA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Landmark:</label>
                <input
                  type="text"
                  name="landmark"
                  className="form-control"
                  defaultValue="NEAR ANAND ICE CREAM BHOPAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Longitude:</label>
                <input
                  type="text"
                  name="longitude"
                  className="form-control"
                  defaultValue="777.444278"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Has the Evaluator Done Valuation for this property before? If yes, when, for whom?</label>
                <input
                  type="text"
                  name="hasEvaluatorDoneValuationBefore"
                  className="form-control"
                  defaultValue="Yes"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">If yes, when:</label>
                <input
                  type="date"
                  name="valuationDate"
                  className="form-control"
                  defaultValue="10.07.2024"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Property Type</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Property Type:</label>
                <input
                  type="text"
                  name="propertyType"
                  className="form-control"
                  defaultValue="Industrial"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property Sub Type:</label>
                <input
                  type="text"
                  name="propertySubType"
                  className="form-control"
                  defaultValue="Factory"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Locality:</label>
                <input
                  type="text"
                  name="locality"
                  className="form-control"
                  defaultValue="Developing"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Occupancy Level of the Surrounding</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Property Falling Within:</label>
                <input
                  type="text"
                  name="propertyFallingWithin"
                  className="form-control"
                  defaultValue="Low Population Density"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Condition of the Site of the Property</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Condition of the Site of the Property:</label>
                <input
                  type="text"
                  name="conditionOfSite"
                  className="form-control"
                  defaultValue="Under Developed"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Distances</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Distance to Railway Station:</label>
                <input
                  type="text"
                  name="distanceToRailwayStation"
                  className="form-control"
                  defaultValue="5 KM"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Distance to Bus Stop:</label>
                <input
                  type="text"
                  name="distanceToBusStop"
                  className="form-control"
                  defaultValue="5 KM"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Distance of Plot From Main Road:</label>
                <input
                  type="text"
                  name="distanceFromMainRoad"
                  className="form-control"
                  defaultValue="above 500 m"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Distance from City Center:</label>
                <input
                  type="text"
                  name="distanceFromCityCenter"
                  className="form-control"
                  defaultValue="5 KM"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Distance from Branch:</label>
                <input
                  type="text"
                  name="distanceFromBranch"
                  className="form-control"
                  defaultValue="5 KM"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Dimensions of the Property</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Width of the Approach Road:</label>
                <input
                  type="text"
                  name="widthOfApproachRoad"
                  className="form-control"
                  defaultValue="Width 10 to 20ft"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Depth in Feet:</label>
                <input
                  type="text"
                  name="depthInFeet"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Physical and Legal Approach to the Property</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Physical Approach to the Property:</label>
                <input
                  type="text"
                  name="physicalApproachToProperty"
                  className="form-control"
                  defaultValue="Clear"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Legal Approach to the Property:</label>
                <input
                  type="text"
                  name="legalApproachToProperty"
                  className="form-control"
                  defaultValue="Clear"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Any other features</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Any other features like board of other financier indicating mortgage, notice of Court/any authority which may affect the security:</label>
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

export default ProfecutsDeatils;