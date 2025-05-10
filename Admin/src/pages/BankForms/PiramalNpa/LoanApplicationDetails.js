import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"

const LoanApplicationDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    onDataChange(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">LOAN APPLICATION DETAILS</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={e => {
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
          >
            {isOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="accordion-body p-3 border rounded mt-2"
          style={{ backgroundColor: "#f8f9fa" }}
        >
          <div className="card-body">
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Branch Name</label>
                <input
                  type="text"
                  name="branchName"
                  className="form-control"
                  defaultValue="BHOPAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Application No.</label>
                <input
                  type="text"
                  name="applicationNo"
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Customer No.</label>
                <input
                  type="text"
                  name="customerNo"
                  className="form-control"
                  defaultValue="NOT PROVIDED"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Application Status</label>
                <input
                  type="text"
                  name="applicationStatus"
                  className="form-control"
                  defaultValue="Sanctioned"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Applicant Name</label>
                <input
                  type="text"
                  name="applicantName"
                  className="form-control"
                  defaultValue="ANJANI BHATNAHGAR"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Product</label>
                <input
                  type="text"
                  name="product"
                  className="form-control"
                  defaultValue="OTA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Transaction Type</label>
                <input
                  type="text"
                  name="transactionType"
                  className="form-control"
                  defaultValue="NPA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Visit Done By</label>
                <input
                  type="text"
                  name="visitDoneBy"
                  className="form-control"
                  defaultValue="MOD. SARFARAZ"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Date of Visit</label>
                <input
                  type="date"
                  name="dateOfVisit"
                  className="form-control"
                  defaultValue="2023-09-14"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">VALUATION GUIDELINE</h5>
            <Row className="mb-3">
              <Col md={3}>
                <label className="form-label">Location Type</label>
                <input
                  type="text"
                  name="locationType"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Valuation Approaches</label>
                <input
                  type="text"
                  name="valuationApproaches"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={3}>
                <label className="form-label">Valuation Methodology</label>
                <input
                  type="text"
                  name="valuationMethodology"
                  className="form-control"
                  defaultValue="LAP - Residential"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoanApplicationDetails
