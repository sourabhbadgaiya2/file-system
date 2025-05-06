import React, { useState } from 'react';

const RemarksFrom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    connectionName: '',
    landRate: '',
    technicallyAcceptable: null,
    demolitionRisk: null,
    constructedAsPerLaw: null,
    lastBillDate: '',
    deviationObserved: null,
    natureOfDeviation: null,
    marketability: null,
    remarks: '',
    declaration: {
      inspectionDate: '08.04.2025',
      noInterest: false,
      informationCorrect: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleOptionSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDeclarationChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      declaration: {
        ...prev.declaration,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <div className=" container  mt-4 mb-4">
      {/* Header with toggle functionality */}
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">ELECTRICITY DETAILS</h4>
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

      {/* Collapsible content */}
      {isOpen && (
        <form onSubmit={handleSubmit} className="border p-3 mt-2">
          {/* Connection Details */}
          <div className="mb-3">
            <label className="form-label">Connection in the name of</label>
            <input
              type="text"
              className="form-control"
              name="connectionName"
              value={formData.connectionName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Land Rate given for the property in the same locality in Last 3 Months</label>
            <input
              type="text"
              className="form-control"
              name="landRate"
              value={formData.landRate}
              onChange={handleChange}
              required
            />
          </div>

          {/* Technically Acceptable */}
          <div className="mb-3">
            <label className="form-label d-block">TECHNICALLY ACCEPTABLE? *</label>
            <div className="d-flex gap-2">
              <button
                type="button"
                className={`btn ${formData.technicallyAcceptable === 'YES' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.technicallyAcceptable === 'YES' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('technicallyAcceptable', 'YES')}
              >
                YES
              </button>
              <button
                type="button"
                className={`btn ${formData.technicallyAcceptable === 'NO' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.technicallyAcceptable === 'NO' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('technicallyAcceptable', 'NO')}
              >
                NO
              </button>
            </div>
          </div>

          {/* Risk of Demolition */}
          <div className="mb-3">
            <label className="form-label d-block">RISK of Demolition: *</label>
            <div className="d-flex gap-2">
              <button
                type="button"
                className={`btn ${formData.demolitionRisk === 'HIGH' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.demolitionRisk === 'HIGH' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('demolitionRisk', 'HIGH')}
              >
                HIGH
              </button>
              <button
                type="button"
                className={`btn ${formData.demolitionRisk === 'MEDIUM' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.demolitionRisk === 'MEDIUM' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('demolitionRisk', 'MEDIUM')}
              >
                MEDIUM
              </button>
              <button
                type="button"
                className={`btn ${formData.demolitionRisk === 'LOW' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.demolitionRisk === 'LOW' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('demolitionRisk', 'LOW')}
              >
                LOW
              </button>
            </div>
          </div>

          {/* Building Constructed as per Law */}
          <div className="mb-3">
            <label className="form-label d-block">WHEN the Building constructed as per Law *</label>
            <div className="d-flex gap-2">
              <button
                type="button"
                className={`btn ${formData.constructedAsPerLaw === 'YES' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.constructedAsPerLaw === 'YES' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('constructedAsPerLaw', 'YES')}
              >
                YES
              </button>
              <button
                type="button"
                className={`btn ${formData.constructedAsPerLaw === 'NO' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.constructedAsPerLaw === 'NO' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('constructedAsPerLaw', 'NO')}
              >
                NO
              </button>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Last bill date available</label>
            <input
              type="date"
              className="form-control"
              name="lastBillDate"
              value={formData.lastBillDate}
              onChange={handleChange}
              required
            />
          </div>

          <hr className="my-4" />

          {/* Deviation Section */}
          <div className="mb-3">
            <label className="form-label d-block">Waistion/Deviation Observed if any *</label>
            <div className="d-flex gap-2">
              <button
                type="button"
                className={`btn ${formData.deviationObserved === 'YES' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.deviationObserved === 'YES' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('deviationObserved', 'YES')}
              >
                YES
              </button>
              <button
                type="button"
                className={`btn ${formData.deviationObserved === 'NO' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.deviationObserved === 'NO' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('deviationObserved', 'NO')}
              >
                NO
              </button>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Nature of Deviation: *</label>
            <div className="d-flex gap-2">
              <button
                type="button"
                className={`btn ${formData.natureOfDeviation === 'HIGH' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.natureOfDeviation === 'HIGH' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('natureOfDeviation', 'HIGH')}
              >
                HIGH
              </button>
              <button
                type="button"
                className={`btn ${formData.natureOfDeviation === 'MEDIUM' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.natureOfDeviation === 'MEDIUM' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('natureOfDeviation', 'MEDIUM')}
              >
                MEDIUM
              </button>
              <button
                type="button"
                className={`btn ${formData.natureOfDeviation === 'LOW' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.natureOfDeviation === 'LOW' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('natureOfDeviation', 'LOW')}
              >
                LOW
              </button>
            </div>
          </div>

          <hr className="my-4" />

          {/* Marketability Section */}
          <div className="mb-3">
            <label className="form-label d-block">MARKETABILITY OF PROPERTY *</label>
            <div className="d-flex flex-wrap gap-2">
              <button
                type="button"
                className={`btn ${formData.marketability === 'POOR' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.marketability === 'POOR' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('marketability', 'POOR')}
              >
                POOR
              </button>
              <button
                type="button"
                className={`btn ${formData.marketability === 'AVERAGE' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.marketability === 'AVERAGE' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('marketability', 'AVERAGE')}
              >
                AVERAGE
              </button>
              <button
                type="button"
                className={`btn ${formData.marketability === 'GOOD' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.marketability === 'GOOD' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('marketability', 'GOOD')}
              >
                GOOD
              </button>
              <button
                type="button"
                className={`btn ${formData.marketability === 'EXCELLENT' ? '' : 'btn-outline-primary'}`}
                style={{ backgroundColor: formData.marketability === 'EXCELLENT' ? '#56B0C6' : '' }}
                onClick={() => handleOptionSelect('marketability', 'EXCELLENT')}
              >
                EXCELLENT
              </button>
            </div>
          </div>

          {/* Remarks */}
          <div className="mb-3">
            <label className="form-label">Remarks on Property</label>
            <textarea
              className="form-control"
              name="remarks"
              rows="5"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="1. GIVEN COPY OF SALE DEED IN FAVOUR OF SHY, HANTA TYAGI W/O NR, DEEPAK TYAGI, 2. DURING PROPERTY VISIT DEEPAK TYAGI WAS NET AT THE PROPERTY HE IS CUSTOMER CONTACT NO. 985602635 IF WAS CLEARLY EXPLAINED TO HIM THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN-PROPOSAL. 3. RATE HAS BEEN CONFIRMED FROM MARKET ENQUIRY. 4. PROPERTY IS SITUATED AT SUBORDINING AREA OF RESIDENTIAL"
              required
            />
          </div>

          <hr className="my-4" />

          {/* Declaration */}
          <div className="mb-3">
            <h5>DECLARATION</h5>
            <p>I/We hereby Confirm and declares as that :</p>
            
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                name="noInterest"
                id="noInterest"
                checked={formData.declaration.noInterest}
                onChange={handleDeclarationChange}
                required
              />
              <label className="form-check-label" htmlFor="noInterest">
                1. The property was inspected by AHEL_IND on {formData.declaration.inspectionDate}
              </label>
            </div>
            
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                name="noInterest"
                id="noInterest2"
                checked={formData.declaration.noInterest}
                onChange={handleDeclarationChange}
                required
              />
              <label className="form-check-label" htmlFor="noInterest2">
                2. I/We have no direct or indirect interest in the property valued.
              </label>
            </div>
            
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="informationCorrect"
                id="informationCorrect"
                checked={formData.declaration.informationCorrect}
                onChange={handleDeclarationChange}
                required
              />
              <label className="form-check-label" htmlFor="informationCorrect">
                3. The information furnished above are true and correct to my/our best of knowledge:
              </label>
            </div>

            <div className="border p-3 bg-light">
              <small>
                <p>DISCLAIMERS:</p>
                <p>I / we are merely acting in the capacity of a valuer and does not undertake any responsibility for aspects other than valuation of property as mentioned in the report. All assistance is provided on a best effort basis only. The valuation report are based on the location of the property, infrastructure available, overall development of the vicinity and prevailing market rates for similar properties and on the facts and confirmation provided obtained by us. We will not provide any professional advice and or any other party on our behalf as an date of assessment; we represents that we will complete report with accuracy in all respects. The Report contains our representations or warranties of any liability. We ensure appropriate exercise on due diligence with respect to the property, including approval status, legal and tax diligence, prior to taking of any decision and also Compliance with statutory requirements applicable for construction is not our responsibility for any uncertain actions, or the construction activity. I / we does not have any role in construction and pricing of the project / Property, I/we not undertake any investigation into the title of the property and the valuation in make on the presumption that the property possesses a good and marketable future free from encumbrances. The contents of this Report are strictly reviewed and sole responsible on us and are intended for the exclusive use of our Client HA Cholamandalam Investment and Finance Company Limited. This document may not be altered in any way, transmitted, copied or distributed, in part or in whole, to any other person or to the notice of reproducible in any form, without prior written consent from Cholamandalam Investment and Finance Company Limited. Cholamandalam Investment and Finance Company Limited accepts no responsibility or liability to any third party for whose or any part of the Report. Cholamandalam Investment and Finance Company Limited specifically excludes from any liability with respect to any losses due to any act or omission of the developer or any other third party and any consequences thereto in any total aggregate liability for any reason, whatsoever, shall not be liable for any direct or indirect or consequential losses which arise out of or in connection with services (Report) provided under this engagement by us. This is to certify that the said report don't issued by us through online platform of Cholamandalam Investment and Finance Company Limited hence, signature is not required.</p>
              </small>
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-end">
              <button style={{background:"#30384B"}} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
        </form>
      )}
    </div>
  );
};

export default RemarksFrom;