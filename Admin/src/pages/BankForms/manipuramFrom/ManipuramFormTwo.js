import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const ManipuramFormTwo = ({ onDataChange }) => {
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
          <h4 className="m-0">MANIPURAM FORM TWO</h4>
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
            <h5 className="mt-4 mb-3">Valuation by Adopting GLR (Guideline Rate)</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Land Component Area (sqft):</label>
                <input
                  type="text"
                  name="landComponentArea"
                  className="form-control"
                  defaultValue="2607"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Rate (sqft):</label>
                <input
                  type="text"
                  name="landComponentRate"
                  className="form-control"
                  defaultValue="65"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Land Component Value:</label>
                <input
                  type="text"
                  name="landComponentValue"
                  className="form-control"
                  defaultValue="169455"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Valuation by Adopting PMR (Prevailing Market Rate)</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Land Component Area (sqft):</label>
                <input
                  type="text"
                  name="landComponentPMARea"
                  className="form-control"
                  defaultValue="2607"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Rate (sqft):</label>
                <input
                  type="text"
                  name="landComponentPMRRate"
                  className="form-control"
                  defaultValue="150"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Land Component Value:</label>
                <input
                  type="text"
                  name="landComponentPMRValue"
                  className="form-control"
                  defaultValue="391050"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Construction Component Area (sqft):</label>
                <input
                  type="text"
                  name="constructionComponentArea"
                  className="form-control"
                  defaultValue="840"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Rate (sqft):</label>
                <input
                  type="text"
                  name="constructionComponentRate"
                  className="form-control"
                  defaultValue="1000"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Construction Component Value:</label>
                <input
                  type="text"
                  name="constructionComponentValue"
                  className="form-control"
                  defaultValue="840000"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Total Value (Rs.):</label>
                <input
                  type="text"
                  name="totalValue"
                  className="form-control"
                  defaultValue="1231050"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Distress Sale Value of the Property</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Value on Sale in a Forcible/Distressed Condition:</label>
                <input
                  type="text"
                  name="distressSaleValue"
                  className="form-control"
                  defaultValue="1046392.5"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Observations</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Observations:</label>
                <textarea
                  name="observations"
                  className="form-control"
                  rows="6"
                  defaultValue={[
                    "1. GIVEN XEROX COPY OF PATTA IN FAVOUR OF MR.HUKUM SINGH S/O MR.RAGHUNIVER SINGH.",
                    "2. DURING PROPERTY VISIT MR.HUKUM SINGH JI MET AT THE PROPERTY,HE IS CUSTOMER CONT NO.-9009149135.IT WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.",
                    "3. RATE HAS BEEN CONFIRM FROM MARKET ENQUIRY.",
                    "4. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS AGRICULTURAL CUM RESIDENTIAL ZONING.",
                    "5. AT SITE PROPERTY IS RCC+FINISHED STRUCTURED OF RESIDENTIAL HOUSE WHICH IS OCCUPIED BY OWNER.",
                    "6. PROPERTY IS IDENTIFIED BY FOUR SIDE BOUNDARIES OF PROVIDED PATTA AND LOCAL ENQUIRY.",
                    "7. AS PER SITE BUILT UP RCC IS 21 X 40 = 840 SQFT, RCC+FINISHED IS 21 X 13 = 273 SQFT, 11 X 13 = 385 SQFT. ONLY RCC BUILT-UP AREA IS CONSIDERED IN REPORT.",
                    "8. AS PER PATTA AND AS PER SITE LAND AREA IS 79 X 33 = 2607 SQFT.",
                    "9. OBTAINED COPY OF BUILDING PERMISSION ON DATE 11-02-2025 FOR RESIDENTIAL PURPOSE WHICH IS APPROVED BY GRAM PANCHAYAT RICHH."
                  ].join("\n")}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Valuation of Properties</h5>
            <Row className="mb-3">
              <Col md={12}>
                <label className="form-label">Property Description:</label>
                <textarea
                  name="propertyDescription"
                  className="form-control"
                  rows="3"
                  defaultValue="PROPERTY AT PART OF KHASRA NO.219 IS SITUATED AT GRAM-RICHPH NO.04,WARD NO.09,TESHL-SEON MALWADIST-NARMADAPURAM(MP)-461223"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
            <Col md={6}>
                <label className="form-label">NAME OF APPLICANT:</label>
                <input
                  type="text"
                  name="presentMarketValue"
                  className="form-control"
                  defaultValue="1231050"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Present Market Value:</label>
                <input
                  type="text"
                  name="presentMarketValue"
                  className="form-control"
                  defaultValue="MRS.JYOTI BAI RAJPUT"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Forced Sale Value:</label>
                <input
                  type="text"
                  name="forcedSaleValue"
                  className="form-control"
                  defaultValue="1046392.5"
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

export default ManipuramFormTwo;