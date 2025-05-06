import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Boundaries = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    east: "",
    west: "",
    north: "",
    south: "",
    boundariesMatching: "",
    remarks: "",
    propertyIdentifiedThrough: "",
    propertyDemarcated: "",
    demarcationType: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Data save होने के बाद form clear होगा
    setFormData({
      east: "",
      west: "",
      north: "",
      south: "",
      boundariesMatching: "",
      remarks: "",
      propertyIdentifiedThrough: "",
      propertyDemarcated: "",
      demarcationType: "",
    });
  };

  return (
    <div className="container mt-5">
      <div 
        className="d-flex justify-content-between align-items-center  text-white p-3 rounded"
        style={{ cursor: "pointer",  backgroundColor: "#365069" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">Boundaries Information</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="boundariesAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "East", name: "east" },
                { label: "West", name: "west" },
                { label: "North", name: "north" },
                { label: "South", name: "south" },
                { label: "Remarks if any", name: "remarks" },
                { label: "Property Identified Through", name: "propertyIdentifiedThrough" },
                { label: "If demarcated, type", name: "demarcationType" },
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

              {/* Boundaries Matching - Yes/No Select Option */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Boundaries Matching:</label>
                <select
                  name="boundariesMatching"
                  value={formData.boundariesMatching}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Property Demarcated - Yes/No Select Option */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Property Demarcated:</label>
                <select
                  name="propertyDemarcated"
                  value={formData.propertyDemarcated}
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

export default Boundaries;
