import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NdmaParameters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    natureOfBuilding: "",
    typeOfStructure: "",
    functionOfUse: "",
    heightOfBuilding: "",
    typeOfFoundation: "",
    horizontalFloorType: "",
    concreteGrade: "",
    steelGrade: "",
    seismicZone: "",
    soilSlopeLandslide: "",
    floodProneArea: "",
    urbanFloods: "",
    environmentExposure: "",
    tsunami: "",
    windCyclones: "",
    coastalRegulatoryZone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted NDMA Data:", formData);
  };

  return (
    <div className="container mt-4">
      <div 
        className="d-flex justify-content-between align-items-center text-white p-3 rounded"
        style={{ cursor: "pointer",  backgroundColor: "#365069" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">NDMA Parameters</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="ndmaAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "Nature of Building/Wing/ Tower", name: "natureOfBuilding" },
                { label: "Type of Structure", name: "typeOfStructure" },
                { label: "Function of Use", name: "functionOfUse" },
                { label: "Height of Building above ground level", name: "heightOfBuilding" },
                { label: "Type of Foundation", name: "typeOfFoundation" },
                { label: "Horizontal Floor type", name: "horizontalFloorType" },
                { label: "Concrete Grade", name: "concreteGrade" },
                { label: "Steel Grade", name: "steelGrade" },
                { label: "Seismic Zone", name: "seismicZone" },
                { label: "Soil slope vulnerable to landslide", name: "soilSlopeLandslide" },
                // { label: "Flood prone area", name: "floodProneArea" },
                { label: "Urban Floods", name: "urbanFloods" },
                { label: "Environment Exposure Condition", name: "environmentExposure" },
                // { label: "Tsunami", name: "tsunami" },
                { label: "Wind/Cyclones", name: "windCyclones" },
                { label: "Coastal Regulatory Zone", name: "coastalRegulatoryZone" },
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
                <label className="form-label fw-semibold">flood Prone Area:</label>
                <select
                  name="underDemolitionList"
                  value={formData.floodProneArea}
                  onChange={handleChange}
                    className="form-select"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">tsunami:</label>
                <select
                  name="underDemolitionList"
                  value={formData.tsunami}
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

export default NdmaParameters;
