import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const AddressAndGeneralDetails = ({ onDataChange }) => {
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
          <h4 className="m-0">ADDRESS & GENERAL DETAILS</h4>
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
            <h5 className="mb-3">ADDRESS DETAILS</h5>
            <div className="mb-3 p-2 border rounded bg-light">
              <small className="text-muted">(NON EDITABLE, FILL DETAILED ADDRESS FROM BELOW)</small><br />
              <small className="text-muted">(PLEASE ENTER 'NA' WHEREVER NOT APPLICABLE IN ADDRESS FIELDS)</small>
            </div>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">House/Flat No.</label>
                <input
                  type="text"
                  name="houseFlatNo"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Floor No.</label>
                <input
                  type="text"
                  name="floorNo"
                  className="form-control"
                  defaultValue="NA" 
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Wing Name & No.</label>
                <input
                  type="text"
                  name="wingNameNo"
                  className="form-control"
                  defaultValue="MA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Building Name and Number</label>
                <input
                  type="text"
                  name="buildingNameNo"
                  className="form-control"
                  defaultValue="D"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Plot No.</label>
                <input
                  type="text"
                  name="plotNo"
                  className="form-control"
                  defaultValue="10 & 11"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Survey No.</label>
                <input
                  type="text"
                  name="surveyNo"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Street Name & No.</label>
                <input
                  type="text"
                  name="streetNameNo"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Stage/Sector/Ward No.</label>
                <input
                  type="text"
                  name="stageSectorWardNo"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Landmarks</label>
                <input
                  type="text"
                  name="landmarks"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Village/Location</label>
                <input
                  type="text"
                  name="villageLocation"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">City/Taluka/Town</label>
                <input
                  type="text"
                  name="cityTalukaTown"
                  className="form-control"
                  defaultValue="BHOPAL"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">District</label>
                <input
                  type="text"
                  name="district"
                  className="form-control"
                  defaultValue="BHOPAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">State</label>
                <input
                  type="text"
                  name="state"
                  className="form-control"
                  defaultValue="MADHYA PRADESH"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Country</label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  defaultValue="INDIA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Pin Code</label>
                <input
                  type="text"
                  name="pinCode"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Latitude & Longitude</label>
                <input
                  type="text"
                  name="latitudeLongitude"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property Located On</label>
                <input
                  type="text"
                  name="propertyLocatedOn"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Approach Road to Property</label>
                <input
                  type="text"
                  name="approachRoad"
                  className="form-control"
                  defaultValue="MORE THAN 10 FT"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">BOUNDARIES</h5>
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Directions</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="EAST"
                  readOnly
                />
              </Col>
              <Col md={3}>
                <label className="form-label">As Per Approved Plan</label>
                <input
                  type="text"
                  name="boundaryEastApproved"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">As Per Site Investigation</label>
                <input
                  type="text"
                  name="boundaryEastSite"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="WEST"
                  readOnly
                />
              </Col>
              <Col md={3}>
                <input
                  type="text"
                  name="boundaryWestApproved"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <input
                  type="text"
                  name="boundaryWestSite"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="NORTH"
                  readOnly
                />
              </Col>
              <Col md={3}>
                <input
                  type="text"
                  name="boundaryNorthApproved"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <input
                  type="text"
                  name="boundaryNorthSite"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="SOUTH"
                  readOnly
                />
              </Col>
              <Col md={3}>
                <input
                  type="text"
                  name="boundarySouthApproved"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <input
                  type="text"
                  name="boundarySouthSite"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">GENERAL DETAILS</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Municipal Limit</label>
                <input
                  type="text"
                  name="municipalLimit"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Municipal Authority (Name)</label>
                <input
                  type="text"
                  name="municipalAuthority"
                  className="form-control"
                  defaultValue="NAGAR NIGAM"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Year of Construction</label>
                <input
                  type="text"
                  name="yearOfConstruction"
                  className="form-control"
                  defaultValue="2010"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Seller Name</label>
                <input
                  type="text"
                  name="sellerName"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Occupancy Status</label>
                <input
                  type="text"
                  name="occupancyStatus"
                  className="form-control"
                  defaultValue="OCCUPIED"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Age of Property</label>
                <input
                  type="text"
                  name="ageOfProperty"
                  className="form-control"
                  defaultValue="13"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Occupant Name</label>
                <input
                  type="text"
                  name="occupantName"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property/Dwelling Unit Type</label>
                <input
                  type="text"
                  name="propertyType"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Residual Life of the Property</label>
                <input
                  type="text"
                  name="residualLife"
                  className="form-control"
                  defaultValue="47"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Property Furnished/Unfurnished</label>
                <input
                  type="text"
                  name="propertyFurnished"
                  className="form-control"
                  defaultValue="FURNISHED"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property Falling in Caution Area</label>
                <input
                  type="text"
                  name="cautionArea"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Reason for Caution</label>
                <input
                  type="text"
                  name="reasonForCaution"
                  className="form-control"
                  defaultValue="NA"
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

export default AddressAndGeneralDetails;