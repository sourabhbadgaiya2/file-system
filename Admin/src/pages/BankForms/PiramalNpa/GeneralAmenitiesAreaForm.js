import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const GeneralAmenitiesAreaForm = ({ onDataChange }) => {
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
          <h4 className="m-0">GENERAL, AMENITIES & AREA DETAILS</h4>
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
            <h5 className="mb-3">GENERAL DETAILS</h5>
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Municipal Limit</label>
                <input
                  type="text"
                  name="municipalLimit"
                  className="form-control"
                  defaultValue="YES"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Municipal Authority (Name)</label>
                <input
                  type="text"
                  name="municipalAuthority"
                  className="form-control"
                  defaultValue="NAGAR NIGAM"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
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
              <Col md={3}>
                <label className="form-label">Occupancy Status</label>
                <input
                  type="text"
                  name="occupancyStatus"
                  className="form-control"
                  defaultValue="OCCUPIED"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Age of Property</label>
                <input
                  type="text"
                  name="ageOfProperty"
                  className="form-control"
                  defaultValue="13"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
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
              <Col md={3}>
                <label className="form-label">Property Furnished/Unfurnished</label>
                <input
                  type="text"
                  name="propertyFurnishing"
                  className="form-control"
                  defaultValue="FURNISHED"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">SURROUNDING EXTERNAL AMENITIES</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Nearest Bus Stop</label>
                <input
                  type="text"
                  name="nearestBusStop"
                  className="form-control"
                  defaultValue="2-5 KM (MISHROAD BUS STOP)"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Nearest Railway Station</label>
                <input
                  type="text"
                  name="nearestRailway"
                  className="form-control"
                  defaultValue="7.3 KM (RANKAMLAPATI RAILWAY STATION)"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Nearest Airport</label>
                <input
                  type="text"
                  name="nearestAirport"
                  className="form-control"
                  defaultValue="25 KM (RAJABHOU AIRPORT)"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Nearest School/College</label>
                <input
                  type="text"
                  name="nearestSchool"
                  className="form-control"
                  defaultValue="2-05 KM (RKDF INSTITUTE BHOPAL)"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Nearest Bank</label>
                <input
                  type="text"
                  name="nearestBank"
                  className="form-control"
                  defaultValue="2-3 KM (HDFC BANK)"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Nearest Highway/Major Road</label>
                <input
                  type="text"
                  name="nearestHighway"
                  className="form-control"
                  defaultValue="1-2 KM (HOSHANGABAD ROAD)"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Nearest Hospital</label>
                <input
                  type="text"
                  name="nearestHospital"
                  className="form-control"
                  defaultValue="0-1 KM (UBUNTU HART HOSPITAL)"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Nearest Multiplex/Mall/Market</label>
                <input
                  type="text"
                  name="nearestMall"
                  className="form-control"
                  defaultValue="2-5 KM (ASHIMA MALL)"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">AREA DETAILS</h5>
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Plot Area (sq. feet)</label>
                <input
                  type="text"
                  name="plotAreaSqFt"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Plot Area (sq. meter)</label>
                <input
                  type="text"
                  name="plotAreaSqMeter"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Construction Area (sq. feet)</label>
                <input
                  type="text"
                  name="constructionAreaSqFt"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Construction Area (sq. meter)</label>
                <input
                  type="text"
                  name="constructionAreaSqMeter"
                  className="form-control"
                  defaultValue="0.00"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Carpet Area (sq. meter)</label>
                <input
                  type="text"
                  name="carpetAreaSqMeter"
                  className="form-control"
                  defaultValue="0.00"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Built-up Area (sq. meter)</label>
                <input
                  type="text"
                  name="builtUpAreaSqMeter"
                  className="form-control"
                  defaultValue="0.00"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Sale Area (sq. feet)</label>
                <input
                  type="text"
                  name="saleAreaSqFt"
                  className="form-control"
                  defaultValue=""
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

export default GeneralAmenitiesAreaForm;