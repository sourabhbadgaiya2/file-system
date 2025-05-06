import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const PropertyDetails = ({ onDataChange }) => {
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
          <h4 className="m-0">PROPERTY DETAILS</h4>
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
            <h5 className="mt-4 mb-3">Occupant</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Vacant/Occupied:</label>
                <input
                  type="text"
                  name="vacantOccupied"
                  className="form-control"
                  defaultValue="Occupied"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Name of Occupant:</label>
                <input
                  type="text"
                  name="nameOfOccupant"
                  className="form-control"
                  defaultValue="SELF"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Relation with applicant:</label>
                <input
                  type="text"
                  name="relationWithApplicant"
                  className="form-control"
                  defaultValue="SELF"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Property Demarcation (Yes/No):</label>
                <input
                  type="text"
                  name="propertyDemarcation"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property Identified (Yes/No):</label>
                <input
                  type="text"
                  name="propertyIdentified"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property Identified through (Yes/No):</label>
                <input
                  type="text"
                  name="propertyIdentifiedThrough"
                  className="form-control"
                  defaultValue="CUSTOMER AND FOUR SIDE BOUNDARY"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Building details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Type of structure:</label>
                <input
                  type="text"
                  name="typeOfStructure"
                  className="form-control"
                  defaultValue="RCC"
                  onChange={handleChange}
                />
              </Col>
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
              <Col md={4}>
                <label className="form-label">No of Blocks if applicable:</label>
                <input
                  type="text"
                  name="noOfBlocks"
                  className="form-control"
                  defaultValue="Na"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">No of Units on floor:</label>
                <input
                  type="text"
                  name="noOfUnitsOnFloor"
                  className="form-control"
                  defaultValue="Na"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">No. of Floors:</label>
                <input
                  type="text"
                  name="noOfFloors"
                  className="form-control"
                  defaultValue="GROUND FLOOR+FF U/C"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">No. of Lifts:</label>
                <input
                  type="text"
                  name="noOfLifts"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Amenities Available (e.g. Swimming Pool, Club House, etc.):</label>
                <input
                  type="text"
                  name="amenitiesAvailable"
                  className="form-control"
                  defaultValue="Na"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Delivery Agency (Public Sector Agency, Co-operative Society, Pvt. Builders, Self-Construction etc.):</label>
                <input
                  type="text"
                  name="deliveryAgency"
                  className="form-control"
                  defaultValue="Internal Road"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Unit details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Property located on Floor Number:</label>
                <input
                  type="text"
                  name="propertyFloorNumber"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">No. of rooms:</label>
                <input
                  type="text"
                  name="noOfRooms"
                  className="form-control"
                  defaultValue="GF-2R+1K"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Applicable area as per measurement:</label>
                <input
                  type="text"
                  name="applicableArea"
                  className="form-control"
                  defaultValue="900"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Remarks on view from property (Park/ Main Road/Other Building/sea etc.):</label>
                <input
                  type="text"
                  name="remarksOnView"
                  className="form-control"
                  defaultValue="Internal Road"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Quality of construction (Good/Avg/Bad):</label>
                <input
                  type="text"
                  name="qualityOfConstruction"
                  className="form-control"
                  defaultValue="GOOD"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Exteriors:</label>
                <input
                  type="text"
                  name="exteriors"
                  className="form-control"
                  defaultValue="GOOD"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Interiors:</label>
                <input
                  type="text"
                  name="interiors"
                  className="form-control"
                  defaultValue="GOOD"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Age of the property considering max age of property as 60 yrs:</label>
                <input
                  type="text"
                  name="ageOfProperty"
                  className="form-control"
                  defaultValue="14"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Residual life considering max age of property as 50 yrs:</label>
                <input
                  type="text"
                  name="residualLife"
                  className="form-control"
                  defaultValue="36"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Sanction Plan Approval & Other Documents Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Sanctioned plans verified with approval no:</label>
                <input
                  type="text"
                  name="sanctionedPlans"
                  className="form-control"
                  defaultValue="NOT PROVIDED"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Ownership type (leasehold/ Freehold):</label>
                <input
                  type="text"
                  name="ownershipType"
                  className="form-control"
                  defaultValue="Freehold"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property documents verified:</label>
                <input
                  type="text"
                  name="propertyDocumentsVerified"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Is the property within Municipal Limits:</label>
                <input
                  type="text"
                  name="propertyWithinMunicipalLimits"
                  className="form-control"
                  defaultValue="NO (G.P)"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Permissible usage allow as per master plan:</label>
                <input
                  type="text"
                  name="permissibleUsage"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Whether property under demolition list as per authority (Y/N):</label>
                <input
                  type="text"
                  name="propertyUnderDemolition"
                  className="form-control"
                  defaultValue="Not to our knowledge"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Floor Wise Area (in Sqft.)</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Basement Floor:</label>
                <input
                  type="text"
                  name="basementFloor"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">First Floor:</label>
                <input
                  type="text"
                  name="firstFloor"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Second Floor:</label>
                <input
                  type="text"
                  name="secondFloor"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Third Floor:</label>
                <input
                  type="text"
                  name="thirdFloor"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Fourth Floor:</label>
                <input
                  type="text"
                  name="fourthFloor"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Ground Floor:</label>
                <input
                  type="text"
                  name="groundFloor"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Sanctioned/ Permissible/ area:</label>
                <input
                  type="text"
                  name="sanctionedPermissibleArea"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Total Constructed in Sqft:</label>
                <input
                  type="text"
                  name="totalConstructed"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Deviation:</label>
                <input
                  type="text"
                  name="deviation"
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

export default PropertyDetails;