import React, { useState } from 'react';

const PropertyAndDocumentDetails = ({ onDataChange }) => {
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
          <h4 className="m-0">Property & Document Details</h4>
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
            <h5 className="mb-3">PROPERTY DETAILS</h5>
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">Address of Property</label>
                  <textarea
                    className="form-control"
                    name="propertyAddress"
                    rows="3"
                    defaultValue="PROPERTY AT PLOT NO. 67, PART OF KH. NO. 61/2, 63, 64,65,67,68,69, KUTTER NAGAR NEAR BY LODHI NAGAR, WARD NO.73 GRAM BHANPUR TEHSIL HUZUR, DIST BHOPAL"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Legal Address (Survey No./FP No./Khasra No./Plot No)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="legalAddress"
                    defaultValue="67"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="pinCode"
                    defaultValue="462037"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Nearby landmark</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nearbyLandmark"
                    defaultValue="NEAR BY MASJID BILAL"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Latitude & Longitude</label>
                  <input
                    type="text"
                    className="form-control"
                    name="coordinates"
                    defaultValue="23.294491 77.425164"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Seismic Zone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="seismicZone"
                    defaultValue="III"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <h5 className="mb-3 mt-4">DOCUMENT DETAILS</h5>
            <div className="row">
              <div className="col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Document Type</th>
                      <th>Provided (Y/N)</th>
                      <th>Approving Authority</th>
                      <th>Approval Number & Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Layout Plan</td>
                      <td>
                        <select
                          className="form-select"
                          name="layoutPlanProvided"
                          onChange={handleChange}
                        >
                          <option value="NA">NA</option>
                          <option value="Y">Y</option>
                          <option value="N">N</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="layoutPlanAuthority"
                          defaultValue="NA"
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="layoutPlanApproval"
                          defaultValue="NA"
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Building Plan</td>
                      <td>
                        <select
                          className="form-select"
                          name="buildingPlanProvided"
                          onChange={handleChange}
                        >
                          <option value="YES">YES</option>
                          <option value="NO">NO</option>
                          <option value="NA">NA</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="buildingPlanAuthority"
                          defaultValue="NAGAR NIGAM BHOPAL"
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="buildingPlanApproval"
                          defaultValue="0465/1767/2022"
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Construction Permission</td>
                      <td>
                        <select
                          className="form-select"
                          name="constructionPermissionProvided"
                          onChange={handleChange}
                        >
                          <option value="NA">NA</option>
                          <option value="Y">Y</option>
                          <option value="N">N</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="constructionPermissionAuthority"
                          defaultValue="NA"
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          name="constructionPermissionApproval"
                          defaultValue="NA"
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">RERA Applicable (Y/N)</label>
                  <select
                    className="form-select"
                    name="reraApplicable"
                    onChange={handleChange}
                  >
                    <option value="NA">NA</option>
                    <option value="Y">Y</option>
                    <option value="N">N</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">RERA Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="reraNumber"
                    defaultValue="NA"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Stage of Construction as per RERA Website</label>
                  <input
                    type="text"
                    className="form-control"
                    name="reraConstructionStage"
                    defaultValue="NA"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Property Category (A Katha/B Katha/Panchayat/Laal Dara etc.)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="propertyCategory"
                    defaultValue="NA"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">List of Documents studied</label>
                  <input
                    type="text"
                    className="form-control"
                    name="documentsStudied"
                    defaultValue="SALE DEED"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Other Document Provided</label>
                  <input
                    type="text"
                    className="form-control"
                    name="otherDocuments"
                    defaultValue="NA"
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

export default PropertyAndDocumentDetails;