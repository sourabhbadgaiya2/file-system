import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const RemarksProperty = ({ onDataChange }) => {
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
          <h4 className="m-0">REMARKS ON PROPERTY</h4>
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
                <label className="form-label">Property Technically Acceptable</label>
                <div className="d-flex align-items-center">
                  <span className="me-3">7</span>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="propertyAcceptable"
                      id="propertyAcceptableYes"
                      value="YES"
                      defaultChecked
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="propertyAcceptableYes">YES</label>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <label className="form-label">Marketability of Property</label>
                <input
                  type="text"
                  name="marketability"
                  className="form-control"
                  defaultValue="GOOD"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">REMARKS</h5>
            <Row className="mb-3">
              <Col md={12}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="outsideVisitDone"
                    id="outsideVisitDone"
                    defaultChecked
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="outsideVisitDone">
                    THIS MAP CASE, ONLY OUTSIDE VISIT IS DONE.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="dataProvided"
                    id="dataProvided"
                    defaultChecked
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="dataProvided">
                    ALL DATA TACKLES PROVIDED BY SAME.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="propertyIdentified"
                    id="propertyIdentified"
                    defaultChecked
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="propertyIdentified">
                    PROPERTY IS IDENTIFIED BY PRESTTY ADDRESS AND UNIT NO.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="rateConfirmed"
                    id="rateConfirmed"
                    defaultChecked
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="rateConfirmed">
                    RATE HAS BEEN CONFIRM FROM MARKET ENQUIRY.
                  </label>
                </div>
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">TSR DEVIATION</h5>
            <Row className="mb-3">
              <Col md={12}>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>SR. NO.</th>
                      <th>DEVIATIONS IN THE PROPERTY / DOCUMENTS AVAILABLE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <input
                          type="text"
                          name="deviation1"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">TSR CONDITION</h5>
            <Row className="mb-3">
              <Col md={12}>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>SR. NO.</th>
                      <th>TSR CONDITIONS FOR COMPLIANCE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <input
                          type="text"
                          name="condition1"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">TSR PREPARED BY</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">TSR Prepared By</label>
                <input
                  type="text"
                  name="tsrPreparedBy"
                  className="form-control"
                  defaultValue="UNIQUE ENGO & ASSOCIATES"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">TSR Submitted To</label>
                <input
                  type="text"
                  name="tsrSubmittedTo"
                  className="form-control"
                  defaultValue="PIRAMAL HOUSING FINANCE"
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">TSR Prepared On Date</label>
                <input
                  type="date"
                  name="tsrPreparedDate"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">TSR Submitted On Date</label>
                <input
                  type="date"
                  name="tsrSubmittedDate"
                  className="form-control"
                  defaultValue="2023-09-14"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Location Maps - Photographs</h5>
            <Row className="mb-3">
              <Col md={12}>
                <input
                  type="file"
                  name="locationPhotos"
                  className="form-control"
                  onChange={handleChange}
                  multiple
                />
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemarksProperty;