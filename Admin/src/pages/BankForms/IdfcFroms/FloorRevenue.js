import React, { useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const FloorRevenue  = ({ onDataChange }) => {
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
          <h4 className="m-0">PROPERTY VALUATION DETAILS</h4>
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
            <h5 className="mb-3">Floor Wise Area (in sq. ft.)</h5>
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Carpet Area As Measured (sq. ft)</label>
                <input
                  type="text"
                  name="carpetAreaMeasured"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Carpet Area As Agreement (sq. ft)</label>
                <input
                  type="text"
                  name="carpetAreaAgreement"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Carpet Area As Per App (sq. ft)</label>
                <input
                  type="text"
                  name="carpetAreaApp"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Area Considered For Valuation (sq. ft)</label>
                <input
                  type="text"
                  name="areaForValuation"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Loading</label>
                <input
                  type="text"
                  name="loading"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Super Area (sq. ft)</label>
                <input
                  type="text"
                  name="superArea"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Rate (per sq ft)</label>
                <input
                  type="text"
                  name="ratePerSqft"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Value by Comparison Method (₹)</label>
                <input
                  type="text"
                  name="comparisonValue"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Current government approved rate as per ready reckoner</label>
                <input
                  type="text"
                  name="govtApprovedRate"
                  className="form-control"
                  defaultValue="₹/-FRS-SQFT"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">VALUATION</h5>
            <Table bordered className="mb-3">
              <thead>
                <tr>
                  <th>Description of Constructed Area and Rates</th>
                  <th>Area (Sq.ft.)</th>
                  <th>Rate (Sq.ft.)</th>
                  <th>Amount (in ₹)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" name="description1" className="form-control" defaultValue="Land" onChange={handleChange} /></td>
                  <td><input type="text" name="area1" className="form-control" defaultValue="480" onChange={handleChange} /></td>
                  <td><input type="text" name="rate1" className="form-control" defaultValue="900" onChange={handleChange} /></td>
                  <td><input type="text" name="amount1" className="form-control" defaultValue="432000" onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td><input type="text" name="description2" className="form-control" defaultValue="Construction Area / Saleable area/ Super Built up area (P&CPCS16)" onChange={handleChange} /></td>
                  <td><input type="text" name="area2" className="form-control" defaultValue="338" onChange={handleChange} /></td>
                  <td><input type="text" name="rate2" className="form-control" defaultValue="1200" onChange={handleChange} /></td>
                  <td><input type="text" name="amount2" className="form-control" defaultValue="403200" onChange={handleChange} /></td>
                </tr>
              </tbody>
            </Table>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Total Value by Land & Building Method (₹) or comparison method</label>
                <input
                  type="text"
                  name="totalValue"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Construction Details</h5>
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Stage of construction</label>
                <input
                  type="text"
                  name="constructionStage"
                  className="form-control"
                  defaultValue="COMPLETE"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">%</label>
                <input
                  type="text"
                  name="constructionPercentage"
                  className="form-control"
                  defaultValue="30%"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Status</label>
                <input
                  type="text"
                  name="constructionStatus"
                  className="form-control"
                  defaultValue="RECOMMENDED"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">%</label>
                <input
                  type="text"
                  name="recommendedPercentage"
                  className="form-control"
                  defaultValue="40%"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Recommended Construction Value</label>
                <input
                  type="text"
                  name="recommendedConstructionValue"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Value of Extra Amenities</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">No of Car Parking</label>
                <input
                  type="text"
                  name="carParkingCount"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Rate per Parking</label>
                <input
                  type="text"
                  name="carParkingRate"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Value of Car Parking</label>
                <input
                  type="text"
                  name="carParkingValue"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Total Amenities Charges</label>
                <input
                  type="text"
                  name="totalAmenitiesCharges"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Total Market Value of Property (A+B) (in ₹)</label>
                <input
                  type="text"
                  name="totalMarketValue"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Forced Sale Value</label>
                <input
                  type="text"
                  name="forcedSaleValue"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Re-construction Cost (for Property Insurance)</label>
                <input
                  type="text"
                  name="reconstructionCost"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Approx. Rentals in case of 100% complete property</label>
                <input
                  type="text"
                  name="approxRentals"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Details from Online Land Revenue Records</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Online Record Found</label>
                <select
                  name="onlineRecordFound"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  <option value="Not applicable">Not applicable</option>
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Nature of Land specified in records</label>
                <select
                  name="landNature"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="Agriculture">Agriculture</option>
                  <option value="Non-Agriculture">Non-Agriculture</option>
                  <option value="Others">Others (please specify)</option>
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Ownership Details as per records</label>
                <input
                  type="text"
                  name="ownershipDetails"
                  className="form-control"
                  defaultValue="Name of Owner - MULTIPLE ERASSEA FOUND"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Property area Details mentioned in records</label>
                <input
                  type="text"
                  name="propertyAreaDetails"
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

export default FloorRevenue;