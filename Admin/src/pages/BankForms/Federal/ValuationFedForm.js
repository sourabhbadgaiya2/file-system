import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const ValuationFedForm = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={toggleOpen}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">7. VALUATION</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen();
            }}
          >
            {isOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="accordion-body p-3 border rounded mt-2" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="card-body">
            <Row className="mb-2">
              <Col md={4}><Form.Label>Land Area as per Plan</Form.Label></Col>
              <Col><Form.Control /></Col>
              <Col md={4}><Form.Label>Land Area as per Document (in sq.ft.)</Form.Label></Col>
              <Col><Form.Control defaultValue="600" /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Land Area as per Site (in sq.ft.)</Form.Label></Col>
              <Col><Form.Control defaultValue="600" /></Col>
              <Col md={4}><Form.Label>Land Rate (per sq.ft.)</Form.Label></Col>
              <Col><Form.Control defaultValue="1500" /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Land Value</Form.Label></Col>
              <Col><Form.Control defaultValue="900000" /></Col>
              <Col md={4}><Form.Label>FSI Considered for Valuation</Form.Label></Col>
              <Col><Form.Control defaultValue="0.63" /></Col>
            </Row>
            <hr />
            <Row className="mb-2">
              <Col md={4}><Form.Label>Type of Area</Form.Label></Col>
              <Col><Form.Control /></Col>
              <Col md={4}><Form.Label>Built Up Area</Form.Label></Col>
              <Col><Form.Control /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={2}><Form.Label>Floor</Form.Label></Col>
              <Col><Form.Control defaultValue="G.F" /></Col>
              <Col md={2}><Form.Label>Area (sq.ft.)</Form.Label></Col>
              <Col><Form.Control defaultValue="375" /></Col>
              <Col md={2}><Form.Label>Rate (per sq.ft.)</Form.Label></Col>
              <Col><Form.Control defaultValue="1200" /></Col>
              <Col md={2}><Form.Label>Amount (Rs)</Form.Label></Col>
              <Col><Form.Control defaultValue="450000" /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Total Existing Value of Property (Rs)</Form.Label></Col>
              <Col><Form.Control defaultValue="1350000" /></Col>
            </Row>
            <hr />
            <h6>To Be Filled ONLY For Construction & Improvement Cases</h6>
            <Row className="mb-2">
              <Col md={2}><Form.Label>Floor</Form.Label></Col>
              <Col><Form.Control /></Col>
              <Col md={2}><Form.Label>Area (sq.ft.)</Form.Label></Col>
              <Col><Form.Control /></Col>
              <Col md={2}><Form.Label>Rate (per sq.ft.)</Form.Label></Col>
              <Col><Form.Control /></Col>
              <Col md={2}><Form.Label>Amount (Rs)</Form.Label></Col>
              <Col><Form.Control /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Total (Proposed Construction)</Form.Label></Col>
              <Col><Form.Control /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Cost as per Estimate of Customer (Rs)</Form.Label></Col>
              <Col><Form.Control /></Col>
              <Col md={4}><Form.Label>Rate/Sqft as per Estimate</Form.Label></Col>
              <Col><Form.Control /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Expected Date of Completion</Form.Label></Col>
              <Col><Form.Control type="date" /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Material at Site (Yes/No)</Form.Label></Col>
              <Col><Form.Control /></Col>
              <Col md={4}><Form.Label>Description</Form.Label></Col>
              <Col><Form.Control /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={2}><Form.Label>Rs./sqft</Form.Label></Col>
              <Col><Form.Control /></Col>
              <Col md={2}><Form.Label>Qty.</Form.Label></Col>
              <Col><Form.Control /></Col>
              <Col md={2}><Form.Label>Total Value</Form.Label></Col>
              <Col><Form.Control /></Col>
            </Row>
            <hr />
            <h6>Value of Extra Amenities</h6>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Total Property Valuation (A+B+C) (Rs)</Form.Label></Col>
              <Col><Form.Control defaultValue="1350000" /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Valuation as per Govt. Guideline Rate</Form.Label></Col>
              <Col><Form.Control defaultValue="654" /></Col>
              <Col md={4}><Form.Label>Land Value as per Govt. Guideline Rate (Rs)</Form.Label></Col>
              <Col><Form.Control defaultValue="392400" /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Realizable Value (90% of Market Value)</Form.Label></Col>
              <Col><Form.Control defaultValue="1215000" /></Col>
            </Row>
            <Row className="mb-2">
              <Col md={4}><Form.Label>Distressed Value (80% of Market Value)</Form.Label></Col>
              <Col><Form.Control defaultValue="1080000" /></Col>
              <Col md={4}><Form.Label>Marketability</Form.Label></Col>
              <Col><Form.Control defaultValue="GOOD" /></Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default ValuationFedForm;