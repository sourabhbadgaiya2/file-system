import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SurroundingLocality = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    locationType: "",
    classOfLocality: "",
    proximityToCivicAmenities: "",
    railwayStation: "",
    busStop: "",
    typeOfRoad: "",
    legalApproach: "",
    physicalApproach: "",
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
        <h4 className="m-0">Surrounding & Locality Details</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="localityAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "Location Type", name: "locationType" },
                { label: "Class of Locality", name: "classOfLocality" },
                { label: "Proximity to Civic Amenities (Km)", name: "proximityToCivicAmenities" },
                { label: "Railway Station (Km)", name: "railwayStation" },
                { label: "Bus Stop (Km)", name: "busStop" },
                { label: "Type of Road", name: "typeOfRoad" },
                { label: "Legal Approach to the Property", name: "legalApproach" },
                { label: "Physical Approach to the Property", name: "physicalApproach" },
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

export default SurroundingLocality;
