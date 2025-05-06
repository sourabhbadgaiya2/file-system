import React, { useState } from 'react';

const StageConstructionForm = ({ onDataChange }) => {
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
          <h4 className="m-0">Stage of Construction</h4>
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
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Description of Structure (RCC/Load Bearing/Mix)</th>
                    <th>Description of Stage</th>
                    <th>% Completed</th>
                    <th>% Recommended</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input 
                        type="text" 
                        name="structureDescription" 
                        className="form-control"
                        defaultValue="RCC"
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        name="stageDescription" 
                        className="form-control"
                        defaultValue="FINISHING WORK PENDING"
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        name="percentCompleted" 
                        className="form-control"
                        defaultValue="95%"
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        name="percentRecommended" 
                        className="form-control"
                        defaultValue="100%"
                        onChange={handleChange}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row mt-3">
              <div className="col-md-6 mb-3">
                <label className="form-label">Reference Type</label>
                <input 
                  type="text" 
                  name="referenceType" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Reference Name</label>
                <input 
                  type="text" 
                  name="referenceName" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Broker/Builder/Colonizer/Neighbour/Shop Owner/Valuer</label>
                <input 
                  type="text" 
                  name="referenceCategory" 
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Reference Contact Number</label>
                <input 
                  type="text" 
                  name="referenceContact" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Valuation Result</label>
                <select 
                  name="valuationResult" 
                  className="form-control"
                  defaultValue="Positive"
                  onChange={handleChange}
                >
                  <option value="Positive">Positive</option>
                  <option value="Negative">Negative</option>
                  <option value="Neutral">Neutral</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Fair Rental Value</label>
                <input 
                  type="text" 
                  name="fairRentalValue" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Remarks</label>
              <textarea 
                name="remarks" 
                className="form-control"
                rows="4"
                defaultValue={`1. GIVEN XEROX COPY OF SALE DEED IN FAVOUR OF MR. MOHD AAMIR S/O MR. MO. IMAM KHAN
2. DURING PROPERTY VISIT MR. AMIR WAS MET AT THE PROPERTY WHO IS COSTUMER. IT WAS CLEARLY EXPLAINED TO HIM/HER THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.
3. RATE HAS BEEN CONFIRM FROM LOCAL MARKET ENQUIRY.
4. PROPERTY SITUATED IN SURROUNDING LOCALITY IS RESIDENTIAL.
5. PROPERTY IS OF RESIDENTIAL HOUSE WHICH VACANT AND FINISHING WORK IS PENDING.
6. PROPERTY IS IDENTIFIED BY COMMON FOUR SIDE BOUNDARIES OF DEED AND LOCAL ENQUIRY.
7. AS PER DEED ALSO AREA IS 600 SQFT.
8. ACTUAL BUILT-UP AREA OF THE GF IS 600 SQFT. BUILT-UP AREA IS CONSIDERED AS PER PERMISSIBLE FSI 0.625.
9. OBTAINED COPY OF APPROVED MAP FOR G+2, PERMISSION NO. 0445/1757/2022 ON DATE 14/06/2022.
10. BUILT-UP VALUE IS CONSIDERED AS PER PRESENT CONDITION OF THE WORK`}
                onChange={handleChange}
              />
            </div>

            <div className="row mt-3">
              <div className="col-md-6 mb-3">
                <label className="form-label">Inspection Date</label>
                <input 
                  type="date" 
                  name="inspectionDate" 
                  className="form-control"
                  defaultValue="2025-02-12"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Place</label>
                <input 
                  type="text" 
                  name="place" 
                  className="form-control"
                  defaultValue="BHOPAL"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Customer Name</label>
                <input 
                  type="text" 
                  name="customerName" 
                  className="form-control"
                  defaultValue="MR. MOHD AAMIR"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Application Number</label>
                <input 
                  type="text" 
                  name="applicationNumber" 
                  className="form-control"
                  defaultValue=""
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Address of Property</label>
                <textarea 
                  name="propertyAddress" 
                  className="form-control"
                  rows="2"
                  defaultValue="PROPERTY AT PLOT NO. 67, PART OF KH. NO. 61/2, G3, 64,65,67,68,69, KUTTER NAGAR NEAR BY LODHI NAGAR, WARD NO.73 GRAM BHAMPUR TEHSIL HUIZUR, DIST BHOPAL"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Geo Coordinates</label>
              <div className="row">
                <div className="col-md-6">
                  <input 
                    type="text" 
                    name="latitude" 
                    className="form-control"
                    defaultValue="23.2948"
                    onChange={handleChange}
                    placeholder="Latitude"
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="text" 
                    name="longitude" 
                    className="form-control"
                    defaultValue="77.425164"
                    onChange={handleChange}
                    placeholder="Longitude"
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

export default StageConstructionForm;