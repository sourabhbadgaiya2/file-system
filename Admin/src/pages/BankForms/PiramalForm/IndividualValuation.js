import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const IndividualValuation = () => {
  const [isOpen, setIsOpen] = useState(false); // Accordion Toggle State
  const [formData, setFormData] = useState({
    caseType: "",
    houseDeliveryAgency: "",
    valuerVisit: "",
    valuationReportStatus: "",
    scopeOfValuation: "",
    contactPersonName: "",
    contactPersonNumber: "",
    relationshipWithApplicant: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Reset form fields after submission
    setFormData({
      caseType: "",
      houseDeliveryAgency: "",
      valuerVisit: "",
      valuationReportStatus: "",
      scopeOfValuation: "",
      contactPersonName: "",
      contactPersonNumber: "",
      relationshipWithApplicant: "",
    });
  };

  return (
    <div className="container mt-5">
      {/* Accordion Header with Edit Button */}
      <div
        className="d-flex justify-content-between align-items-center  text-white p-3 rounded"
        style={{ cursor: "pointer",    backgroundColor: "#365069" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">Individual Valuation Form</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      {/* Bootstrap Accordion (Show/Hide on Click) */}
      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="valuationAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "Case Type", name: "caseType" },
                { label: "House Delivery Agency", name: "houseDeliveryAgency" },
                { label: "Valuation Report Status", name: "valuationReportStatus" },
                { label: "Scope of Valuation", name: "scopeOfValuation" },
                { label: "Contact Person Name (Broker or Applicant)", name: "contactPersonName" },
                { label: "Contact Person Number", name: "contactPersonNumber" },
                { label: "Relationship with Applicant", name: "relationshipWithApplicant" },
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

              {/* Yes/No Select Dropdown for Valuer Visit */}
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Valuer visited this property any other FI:
                </label>
                <select
                  name="valuerVisit"
                  value={formData.valuerVisit}
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

export default IndividualValuation;
