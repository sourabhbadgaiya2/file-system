import React, { useState } from 'react';

const CustomerDetails = ({ onDataChange }) => {
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
          <h4 className="m-0">Customer Details</h4>
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
            <div className="row mb-3">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Product</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="product"
                    defaultValue="LAP/MSE LAP/HOME LOAN BT/ HL/STL - NEW FIXED"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Branch</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="branch"
                    defaultValue="BHOPAL"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Date of Report</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    name="reportDate"
                    defaultValue="2025-02-12"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <h5 className="mb-3">CUSTOMER DETAILS</h5>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Application Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="applicationNumber"
                    defaultValue="L0000018458"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Reference Number</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="referenceNumber"
                    defaultValue="NA"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Customer Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="customerName"
                    defaultValue="MR, MO AAMIR"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Current Property Owner Name (as per document)</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="propertyOwnerName"
                    defaultValue="MO AAMIR S/O MR. MO. IMAM KHAN"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Co-applicant Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="coApplicantDetails"
                    defaultValue="MRS, IRAM MIRZA"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Proposed Owner/s</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="proposedOwners"
                    defaultValue="NA"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Date & Time of Inspection</label>
                  <input 
                    type="datetime-local" 
                    className="form-control" 
                    name="inspectionDateTime"
                    defaultValue="2025-02-12T00:00"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Visit Done By</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="visitDoneBy"
                    defaultValue="MR. BHAGWAT"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Case Type</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="caseType"
                    defaultValue="STL - NEW FIXED"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Person met at site</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="personMetAtSite"
                    defaultValue="MR, MO AAMIR"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Relationship with customer</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="relationshipWithCustomer"
                    defaultValue="SELF"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Contact Number of person met at site</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="contactNumber"
                    defaultValue="(973742877), 8224038590"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;