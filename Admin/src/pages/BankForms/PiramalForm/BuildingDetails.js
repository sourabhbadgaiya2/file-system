import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BuildingDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    numberOfBlocks: "",
    numberOfLifts: "",
    ageOfBuilding: "",
    residualLife: "",
    unitConfiguration: "",
    floorsApproved: "",
    floorsProposed: "",
    floorsAtSite: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Building Details:", formData);
  };

  return (
    <div className="container mt-4">
      <div 
        className="d-flex justify-content-between align-items-center text-white p-3 rounded"
        style={{ cursor: "pointer",  backgroundColor: "#365069"  }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">Building Details</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="buildingDetailsAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "No. of Blocks/Wings", name: "numberOfBlocks" },
                { label: "No. of Lifts", name: "numberOfLifts" },
                { label: "Age of Building (in years)", name: "ageOfBuilding" },
                { label: "Residual life of Building (in years)", name: "residualLife" },
                { label: "Unit Configuration", name: "unitConfiguration" },
                { label: "Floors Approved/Sanctioned", name: "floorsApproved" },
                { label: "Floors Proposed", name: "floorsProposed" },
                { label: "Floors at Site", name: "floorsAtSite" },
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

export default BuildingDetails;
