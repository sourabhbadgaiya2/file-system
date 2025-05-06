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
            <h5 className="mt-4 mb-3">Occupancy</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Occupied Since:</label>
                <input
                  type="text"
                  name="occupiedSince"
                  className="form-control"
                  defaultValue="2003"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Occupied:</label>
                <input
                  type="text"
                  name="occupied"
                  className="form-control"
                  defaultValue="Occupied"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Occupied By:</label>
                <input
                  type="text"
                  name="occupiedBy"
                  className="form-control"
                  defaultValue="RADHIKA STEELS"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Property Demarcated:</label>
                <input
                  type="text"
                  name="propertyDemarcated"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Project Category:</label>
                <input
                  type="text"
                  name="projectCategory"
                  className="form-control"
                  defaultValue="Not Applicable"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Flat Configuration:</label>
                <input
                  type="text"
                  name="flatConfiguration"
                  className="form-control"
                  defaultValue="Not Applicable"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Flat Type:</label>
                <input
                  type="text"
                  name="flatType"
                  className="form-control"
                  defaultValue="Not Applicable"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property Holding:</label>
                <input
                  type="text"
                  name="propertyHolding"
                  className="form-control"
                  defaultValue="Leasehold"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Property Identification:</label>
                <input
                  type="text"
                  name="propertyIdentification"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Type of Structure:</label>
                <input
                  type="text"
                  name="typeOfStructure"
                  className="form-control"
                  defaultValue="Fully Steel"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Area of Plot:</label>
                <input
                  type="text"
                  name="areaOfPlot"
                  className="form-control"
                  defaultValue="7,280"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Lift Facility:</label>
                <input
                  type="text"
                  name="liftFacility"
                  className="form-control"
                  defaultValue="No"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Total No of Floors:</label>
                <input
                  type="text"
                  name="totalNoOfFloors"
                  className="form-control"
                  defaultValue="G.F."
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Amenities:</label>
                <input
                  type="text"
                  name="amenities"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Marketability:</label>
                <input
                  type="text"
                  name="marketability"
                  className="form-control"
                  defaultValue="Average"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">View of the Property:</label>
                <input
                  type="text"
                  name="viewOfTheProperty"
                  className="form-control"
                  defaultValue="Normal View / Not Applicable"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Quality of Construction:</label>
                <input
                  type="text"
                  name="qualityOfConstruction"
                  className="form-control"
                  defaultValue="Class B"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Shape of the Property:</label>
                <input
                  type="text"
                  name="shapeOfTheProperty"
                  className="form-control"
                  defaultValue="Regular"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Exteriors of the Property:</label>
                <input
                  type="text"
                  name="exteriorsOfTheProperty"
                  className="form-control"
                  defaultValue="Average"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Age of the Property:</label>
                <input
                  type="text"
                  name="ageOfTheProperty"
                  className="form-control"
                  defaultValue="2"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Maintenance of the Property:</label>
                <input
                  type="text"
                  name="maintenanceOfTheProperty"
                  className="form-control"
                  defaultValue="Good"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Unit Details:</label>
                <input
                  type="text"
                  name="unitDetails"
                  className="form-control"
                  defaultValue="Ground Floor: 2, Bedroom: 1"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Residual Age:</label>
                <input
                  type="text"
                  name="residualAge"
                  className="form-control"
                  defaultValue="58"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Documentation Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Sale Deed:</label>
                <input
                  type="text"
                  name="saleDeed"
                  className="form-control"
                  defaultValue="Fully Available"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Sanctioned Plan:</label>
                <input
                  type="text"
                  name="sanctionedPlan"
                  className="form-control"
                  defaultValue="Not Available"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">CC/OC:</label>
                <input
                  type="text"
                  name="ccOc"
                  className="form-control"
                  defaultValue="Not Available"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Agreement to Sale:</label>
                <input
                  type="text"
                  name="agreementToSale"
                  className="form-control"
                  defaultValue="Not Available"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Mutation:</label>
                <input
                  type="text"
                  name="mutation"
                  className="form-control"
                  defaultValue="Details"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Tax:</label>
                <input
                  type="text"
                  name="tax"
                  className="form-control"
                  defaultValue="Details"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Electricity Bill:</label>
                <input
                  type="text"
                  name="electricityBill"
                  className="form-control"
                  defaultValue="Not Applicable"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Conversion:</label>
                <input
                  type="text"
                  name="conversion"
                  className="form-control"
                  defaultValue="Not Applicable"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Set Back in Case of L+B:</label>
                <input
                  type="text"
                  name="setBack"
                  className="form-control"
                  defaultValue="As per Plan"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Front Side (L):</label>
                <input
                  type="text"
                  name="frontSide"
                  className="form-control"
                  defaultValue="As per Site"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Side (R):</label>
                <input
                  type="text"
                  name="side"
                  className="form-control"
                  defaultValue="As per Site"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Back:</label>
                <input
                  type="text"
                  name="back"
                  className="form-control"
                  defaultValue="As per Site"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Deviations:</label>
                <input
                  type="text"
                  name="deviations"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Remarks:</label>
                <input
                  type="text"
                  name="remarks"
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

export default PropertyDetails;