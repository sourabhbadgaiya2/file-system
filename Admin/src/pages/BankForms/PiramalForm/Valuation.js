import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Valuation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    landValueArea: "1981",
    landValueRate: "0",
    landValueDepreciation: "0",
    landValueAmount: "0",
    buildingValueArea: "0",
    buildingValueRate: "0",
    buildingValueDepreciation: "0",
    buildingValueAmount: "0",
    improvementArea: "0",
    improvementRate: "0",
    improvementDepreciation: "0",
    improvementAmount: "0",
    amenitiesAvailable: "Na",
    detailsOnInteriors: "Na",
    amenitiesValue: "0",
    fixedInteriorsValue: "0",
    noOfCarParks: "--",
    valueOfCarPark: "--",
    totalValueOfCarParks: "--",
    totalRealisableValue: "₹0"
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
        style={{ cursor: "pointer",  backgroundColor: "#365069"  }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">Valuation</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="valuationAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "Land Value Area (sqft/sqmt)", name: "landValueArea" },
                { label: "Land Value Rate (sqft/sqmt)", name: "landValueRate" },
                { label: "Land Value Depreciation (%)", name: "landValueDepreciation" },
                { label: "Land Value Amount (in Rs.)", name: "landValueAmount" },
                { label: "Building Value after Depreciation Area", name: "buildingValueArea" },
                { label: "Building Value Rate", name: "buildingValueRate" },
                { label: "Building Value Depreciation", name: "buildingValueDepreciation" },
                { label: "Building Value Amount", name: "buildingValueAmount" },
                { label: "Extension / Improvement Area", name: "improvementArea" },
                { label: "Extension / Improvement Rate", name: "improvementRate" },
                { label: "Extension / Improvement Depreciation", name: "improvementDepreciation" },
                { label: "Extension / Improvement Amount", name: "improvementAmount" },
                { label: "Amenities Available", name: "amenitiesAvailable" },
                { label: "Details on Interiors", name: "detailsOnInteriors" },
                { label: "Amenities Value", name: "amenitiesValue" },
                { label: "Fixed Interiors Value", name: "fixedInteriorsValue" },
                { label: "No of Car Parks", name: "noOfCarParks" },
                { label: "Value of Car Park", name: "valueOfCarPark" },
                { label: "Total Value of Car Parks", name: "totalValueOfCarParks" },
                { label: "Total Realisable Value (in Amt.)", name: "totalRealisableValue" }
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

export default Valuation;
