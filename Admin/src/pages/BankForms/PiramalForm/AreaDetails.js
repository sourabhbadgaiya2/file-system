import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AreaDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    typeOfProperty: "",
    sanctionedArea: "",
    actualArea: "",
    finalAreaConsidered: "",
    overallBUA: ""
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
        style={{ cursor: "pointer", backgroundColor: "#365069" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">Area Details</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="areaDetailsAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "Type of Property", name: "typeOfProperty" },
                { label: "Sanctioned Area / Permissible", name: "sanctionedArea" },
                { label: "Actual Area", name: "actualArea" },
                { label: "Final Area Considered", name: "finalAreaConsidered" },
                { label: "Overall BUA Division wrt Permissible Area", name: "overallBUA" },
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

export default AreaDetails;
