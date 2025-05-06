import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PropertyDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    qualityOfConstruction: "",
    occupancyOfProperty: "",
    multiTenantedProperty: "",
    numberOfTenants: "",
    vacantSince: "",
    reasonForVacant: "",
    landAreaAsPerPlan: "",
    landAreaAsPerTitle: "",
    landAreaAsPerSite: "",
    residentialArea: "",
    commercialArea: "",
    typeOfPlot: "",
    finalLandArea: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="container mt-5">
      <div 
        className="d-flex justify-content-between align-items-center text-white p-3 rounded"
        style={{ cursor: "pointer",  backgroundColor: "#365069" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">Property Details</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="propertyDetailsAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                // { label: "Quality of Construction", name: "qualityOfConstruction" },
                { label: "Occupancy of the Property", name: "occupancyOfProperty" },
                // { label: "Multi Tenanted Property", name: "multiTenantedProperty" },
                { label: "Number of Tenants", name: "numberOfTenants" },
                { label: "If Vacant, since how long", name: "vacantSince" },
                { label: "Reason for being vacant", name: "reasonForVacant" },
                { label: "Land/Plot Area as per plan", name: "landAreaAsPerPlan" },
                { label: "Land/Plot Area as per title documents", name: "landAreaAsPerTitle" },
                { label: "Land/Plot Area as per site", name: "landAreaAsPerSite" },
                { label: "Residential Area", name: "residentialArea" },
                { label: "Commercial Area", name: "commercialArea" },
                { label: "Type of Plot", name: "typeOfPlot" },
                { label: "Final Land area / UDS considered for valuation", name: "finalLandArea" },
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
              <div className="mb-3">
                <label className="form-label fw-semibold">multi Tenanted Property:</label>
                <select
                  name="plotWithinMunicipalLimit"
                  value={formData.multiTenantedProperty}
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

export default PropertyDetails;
