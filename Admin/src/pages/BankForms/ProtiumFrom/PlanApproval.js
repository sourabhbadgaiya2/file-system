import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const PlanApproval = ({ onDataChange }) => {
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
          <h4 className="m-0">PLAN APPROVAL DETAILS</h4>
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
            <h5 className="mt-4 mb-3">Plan Approval Details</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Construction as per approved /sanctioned plans:</label>
                <select
                  name="constructionAsPerApproved"
                  className="form-select"
                  onChange={handleChange}
                  defaultValue="Yes"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </Col>
              <Col md={6}>
                <label className="form-label">Details of approved plan with approval no & date:</label>
                <input
                  type="text"
                  name="approvedPlanDetails"
                  className="form-control"
                  defaultValue="NOT OBTAIN"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Construction permission Number and date:</label>
                <input
                  type="text"
                  name="constructionPermission"
                  className="form-control"
                  defaultValue="NOT OBTAIN"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Violations Observed if Any or is there any risk of Demolition in case of Violation:</label>
                <input
                  type="text"
                  name="violationsObserved"
                  className="form-control"
                  defaultValue="LOW/MEDIUM/HIGH"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">If plans not available, then is the structure confirming to the local:</label>
                <select
                  name="structureConfirmingLocal"
                  className="form-select"
                  onChange={handleChange}
                  defaultValue="Yes"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Floor Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Floor:</label>
                <input
                  type="text"
                  name="floor"
                  className="form-control"
                  defaultValue="G+3"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">As Per Approval Plan:</label>
                <input
                  type="text"
                  name="asPerApprovalPlan"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Deviation Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Deviation in Sqft:</label>
                <input
                  type="text"
                  name="deviationSqft"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">At Site:</label>
                <input
                  type="text"
                  name="deviationAtSite"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Deviation in %:</label>
                <input
                  type="text"
                  name="deviationPercentage"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Self Construction case</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Architect certified estimate available or not:</label>
                <input
                  type="text"
                  name="architectCertifiedEstimate"
                  className="form-control"
                  defaultValue="NOT OBTAIN"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Construction Amount certified:</label>
                <input
                  type="text"
                  name="constructionAmountCertified"
                  className="form-control"
                  defaultValue="NOT OBTAIN"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Fair Market Value</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Floor:</label>
                <input
                  type="text"
                  name="fairMarketValueFloor"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">As Per Actual:</label>
                <input
                  type="text"
                  name="fairMarketValueActual"
                  className="form-control"
                  defaultValue="300"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">As Per Plan:</label>
                <input
                  type="text"
                  name="fairMarketValuePlan"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Final Area in SQFT Considered for Valuation:</label>
                <input
                  type="text"
                  name="finalAreaForValuation"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Land Area and Value</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Land Area (IN SQFT):</label>
                <input
                  type="text"
                  name="landArea"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Rate (IN RS.):</label>
                <input
                  type="text"
                  name="rate"
                  className="form-control"
                  defaultValue="300"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Land Value (IN RS.):</label>
                <input
                  type="text"
                  name="landValue"
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

export default PlanApproval;