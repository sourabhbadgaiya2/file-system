import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const OtherValue = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    guidelineValue: "",
    forcedSaleValue: "",
    reconstructionCost: "",
    approxRentals: "",
    riskOfDemolition: "",
    offsetProjections: "",
    extraCoverage: "",
    habitation: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setFormData({
      guidelineValue: "",
      forcedSaleValue: "",
      reconstructionCost: "",
      approxRentals: "",
      riskOfDemolition: "",
      offsetProjections: "",
      extraCoverage: "",
      habitation: ""
    });
  };

  return (
    <div className="container mt-5">
      <div
        className="d-flex justify-content-between align-items-center text-white p-3 rounded"
        style={{ cursor: "pointer",  backgroundColor: "#365069" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">Other Value References</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="otherValueReferencesAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "Guideline Value of The Property", name: "guidelineValue" },
                { label: "Forced Sale Value / Distressed rate", name: "forcedSaleValue" },
                { label: "Re-construction cost", name: "reconstructionCost" },
                { label: "Approx. Rentals in case of 100% complete property", name: "approxRentals" },
                { label: "Risk of Demolition based on Techno-legal aspect/ Building Quality", name: "riskOfDemolition" },
                { label: "Offset/Projections", name: "offsetProjections" },
                { label: "Extra Coverage", name: "extraCoverage" },
                { label: "Habitation", name: "habitation" }
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

export default OtherValue;
