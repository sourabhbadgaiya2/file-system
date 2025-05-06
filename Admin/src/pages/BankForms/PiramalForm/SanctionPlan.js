import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SanctionPlan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    usageAsPerMasterPlan: "",
    usageApprovedAsPerPlan: "",
    currentUsage: "",
    propertyLimits: "",
    plotWithinMunicipalLimit: "",
    underDemolitionList: "",
    planApprovedBy: "",
    planDetails: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Data save होने के बाद form clear होगा
    setFormData({
      usageAsPerMasterPlan: "",
      usageApprovedAsPerPlan: "",
      currentUsage: "",
      propertyLimits: "",
      plotWithinMunicipalLimit: "",
      underDemolitionList: "",
      planApprovedBy: "",
      planDetails: "",
    });
  };

  return (
    <div className="container mt-5">
      <div 
        className="d-flex justify-content-between align-items-center text-white p-3 rounded"
        style={{ cursor: "pointer",  backgroundColor: "#365069" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">Sanction Plan Approval & Other Document Details</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="sanctionPlanAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "Usage as per CDP/Master Plan", name: "usageAsPerMasterPlan" },
                { label: "Usage Approved as per Plan", name: "usageApprovedAsPerPlan" },
                { label: "Current Usage", name: "currentUsage" },
                { label: "Property Coming Under Which Limits", name: "propertyLimits" },
                { label: "Plan Approved By", name: "planApprovedBy" },
                { label: "Plan Details (Numbers & Date)", name: "planDetails" },
              ].map((field, index) => (
                <div className="mb-3" key={index}>
                  <label className="form-label fw-semibold">{field.label}:</label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={`Enter ${field.label}`}
                  />
                </div>
              ))}

              {/* Plot Within Municipal Limit - Yes/No Select Option */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Plot Within Municipal Limit:</label>
                <select
                  name="plotWithinMunicipalLimit"
                  value={formData.plotWithinMunicipalLimit}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Under Demolition List - Yes/No Select Option */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Under Demolition List:</label>
                <select
                  name="underDemolitionList"
                  value={formData.underDemolitionList}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <button style={{  backgroundColor: "#365069"}} type="submit" className="btn btn-success  fw-bold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SanctionPlan;
