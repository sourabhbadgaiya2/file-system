import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ValuationDetailsForm = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [amenities, setAmenities] = useState([
    { description: '', areaQuantity: '', unit: '', amount: '' },
    { description: '', areaQuantity: '', unit: '', amount: '' },
    { description: '', areaQuantity: '', unit: '', amount: '' },
    { description: '', areaQuantity: '', unit: '', amount: '' },
    { description: '', areaQuantity: '', unit: '', amount: '' },
    { description: '', areaQuantity: '', unit: '', amount: '' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange(prev => ({ ...prev, [name]: value }));
  };

  const handleAmenityChange = (index, field, value) => {
    const updatedAmenities = [...amenities];
    updatedAmenities[index][field] = value;
    setAmenities(updatedAmenities);
    onDataChange(prev => ({ ...prev, amenities: updatedAmenities }));
  };

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">VALUATION DETAILS</h4>
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
            <h5 className="mb-3">VALUATION CALCULATION</h5>
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Area Type</label>
                <input
                  type="text"
                  name="areaType"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">A) Area Valuation (Plot Area)</label>
                <input
                  type="text"
                  name="areaValuation"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">B) Construction Cost (Construction Area)</label>
                <input
                  type="text"
                  name="constructionCost"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">C) Extension/Improvement Estimate</label>
                <input
                  type="text"
                  name="extensionEstimate"
                  className="form-control"
                  defaultValue="RS."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">D) AMENITIES</h5>
            {amenities.map((amenity, index) => (
              <Row key={index} className="mb-3">
                <Col md={1}>
                  <label className="form-label">{index + 1}</label>
                </Col>
                <Col md={3}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={amenity.description}
                    onChange={(e) => handleAmenityChange(index, 'description', e.target.value)}
                  />
                </Col>
                <Col md={2}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Area/Quantity"
                    value={amenity.areaQuantity}
                    onChange={(e) => handleAmenityChange(index, 'areaQuantity', e.target.value)}
                  />
                </Col>
                <Col md={2}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Unit"
                    value={amenity.unit}
                    onChange={(e) => handleAmenityChange(index, 'unit', e.target.value)}
                  />
                </Col>
                <Col md={2}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Amount"
                    value={amenity.amount}
                    onChange={(e) => handleAmenityChange(index, 'amount', e.target.value)}
                  />
                </Col>
              </Row>
            ))}

            <Row className="mb-3">
              <Col md={3} className="offset-md-4">
                <label className="form-label">TOTAL AMENITIES COST (D)</label>
                <input
                  type="text"
                  name="totalAmenitiesCost"
                  className="form-control"
                  defaultValue="RS."
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">TOTAL FAIR MARKET VALUE (A+B+C+D)</h5>
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">% Variance (Total Fair Market Value to Govt Value)</label>
                <input
                  type="text"
                  name="variancePercentage"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Distress Value of the Property (Rs.)</label>
                <input
                  type="text"
                  name="distressValue"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Rental Value of the Property (Per Month)</label>
                <input
                  type="text"
                  name="rentalValue"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">FLOOR DETAILS</h5>
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">No of Basement(s)</label>
                <input
                  type="text"
                  name="noOfBasements"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">No of Ground/Parking/Stilt</label>
                <input
                  type="text"
                  name="noOfGroundFloors"
                  className="form-control"
                  defaultValue="1"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Podium(s)</label>
                <input
                  type="text"
                  name="noOfPodiums"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">No of Upper Floor(s)</label>
                <input
                  type="text"
                  name="noOfUpperFloors"
                  className="form-control"
                  defaultValue="1"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Total No. of Floor(s)</label>
                <input
                  type="text"
                  name="totalNoOfFloors"
                  className="form-control"
                  defaultValue="0"
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

export default ValuationDetailsForm;