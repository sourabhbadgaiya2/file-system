import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const RemarksForm = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [formData, setFormData] = useState({
    nfsaCheckRequired: "",
    generalObservations: "",
    raleReferences: "",
    needsFunction: "",
    documentName: "",
    documentReference: "",
    documentDate: "",
    documentAuthority: "",
    personName: "",
    siteVisits: "1",
    personRole: "Self",
    evaluationMode: "",
    personContact: "+91",
    rejectionReason: "",
    verifiedBy: "BHART SHARHA",
    verificationType: "External",
    visitDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    
    // Sending form data to the API using Axios
    try {
      const response = await axios.post("http://localhost:5000/api/remarks-from", formData);
      console.log("Form submitted successfully:", response.data);
      setIsEditOpen(false);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#98291E", cursor: "pointer" }}
        onClick={() => setIsEditOpen(!isEditOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Remarks</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditOpen(!isEditOpen);
            }}
          >
            {isEditOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isEditOpen && (
        <div className="border rounded p-3 mt-2 bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">
                NFSA/Auberance Checks Required Based On Observations
              </label>
              <input
                type="text"
                className="form-control border-0 border-bottom"
                name="nfsaCheckRequired"
                value={formData.nfsaCheckRequired}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">General Observations*</label>
              <textarea
                className="form-control border-0 border-bottom"
                rows={3}
                maxLength={2000}
                name="generalObservations"
                value={formData.generalObservations}
                onChange={handleChange}
                placeholder="0/2000"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Rale References</label>
              <textarea
                className="form-control border-0 border-bottom"
                rows={3}
                maxLength={2000}
                name="raleReferences"
                value={formData.raleReferences}
                onChange={handleChange}
                placeholder="0/2000"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">
                In The Property related to the Needs Function?
              </label>
              <div className="d-flex gap-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="needsFunction"
                    value="Yes"
                    checked={formData.needsFunction === "Yes"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="needsFunction"
                    value="No"
                    checked={formData.needsFunction === "No"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">No</label>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Document Vertical</label>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Document Name</th>
                      <th>Document References</th>
                      <th>Document Date</th>
                      <th>Authority</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control border-0 border-bottom"
                          name="documentName"
                          value={formData.documentName}
                          onChange={handleChange}
                          placeholder="DD/MM/YYYY"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control border-0 border-bottom"
                          name="documentReference"
                          value={formData.documentReference}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control border-0 border-bottom"
                          name="documentDate"
                          value={formData.documentDate}
                          onChange={handleChange}
                          placeholder="DD/MM/YYYY"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control border-0 border-bottom"
                          name="documentAuthority"
                          value={formData.documentAuthority}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <button type="button" className="btn btn-link p-0">Add Note</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Name of The Person held At Site</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="personName"
                  value={formData.personName}
                  onChange={handleChange}
                  placeholder="LANGIAN CHOUNAN"
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-bold">No of Site Visits *</label>
                <select
                  className="form-select border-0 border-bottom"
                  name="siteVisits"
                  value={formData.siteVisits}
                  onChange={handleChange}
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-bold">Role of The Person held at Site</label>
                <select
                  className="form-select border-0 border-bottom"
                  name="personRole"
                  value={formData.personRole}
                  onChange={handleChange}
                >
                  <option value="Self">Self</option>
                  <option value="Agent">Agent</option>
                  <option value="Relative">Relative</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Evaluation Mode</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="evaluationMode"
                  value={formData.evaluationMode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Contact No. of The Person held At Site</label>
                <div className="input-group">
                  <span className="input-group-text border-0 border-bottom">+91</span>
                  <input
                    type="text"
                    className="form-control border-0 border-bottom"
                    name="personContact"
                    value={formData.personContact.replace('+91', '')}
                    onChange={(e) => handleChange({
                      target: {
                        name: "personContact",
                        value: `+91${e.target.value}`
                      }
                    })}
                    placeholder="469758283"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Reason for rejecting the report *</label>
              <input
                type="text"
                className="form-control border-0 border-bottom"
                name="rejectionReason"
                value={formData.rejectionReason}
                onChange={handleChange}
              />
            </div>

            <hr className="my-4" />

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Verified By *</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="verifiedBy"
                  value={formData.verifiedBy}
                  onChange={handleChange}
                  placeholder="BHART SHARHA"
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-bold">Verification Type</label>
                <select
                  className="form-select border-0 border-bottom"
                  name="verificationType"
                  value={formData.verificationType}
                  onChange={handleChange}
                >
                  <option value="External">External</option>
                  <option value="Internal">Internal</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-bold">Date Of Site Visit *</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleChange}
                  placeholder="DD/MM/YYYY"
                />
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button style={{ background:"#98291E"}} type="submit" className="btn btn-success">
                submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default RemarksForm;
