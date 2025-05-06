import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Value = () => {
  return (
    <div className="container my-4 p-4 bg-white shadow rounded">
      {/* Header */}
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5 fw-semibold">Other Value References</h2>
      </div>

      {/* First Row */}
      <div className="row text-sm">
        <div className="col-md-3">
          <p className="text-secondary">Guideline Value of The Property</p>
          <p className="fw-semibold">₹ 614</p>
        </div>
        <div className="col-md-3">
          <p className="text-secondary">Forced Sale Value / Distressed rate</p>
          <p className="fw-semibold">₹ 0</p>
        </div>
        <div className="col-md-3">
          <p className="text-secondary">Re-construction cost</p>
          <p className="fw-semibold">₹ 0</p>
        </div>
        <div className="col-md-3">
          <p className="text-secondary">Approx. Rentals in case of 100% complete property</p>
          <p className="fw-semibold">₹ 0</p>
        </div>
      </div>
      
      {/* Second Row */}
      <div className="row text-sm mt-4">
        <div className="col-md-3">
          <p className="text-secondary">Risk of Demolition based on Techno-legal aspect/ Building Quality</p>
          <p className="fw-semibold">Low</p>
        </div>
        <div className="col-md-3">
          <p className="text-secondary">Offset/Projections</p>
          <p className="fw-semibold">Within Norms</p>
        </div>
        <div className="col-md-3">
          <p className="text-secondary">Extra Coverage</p>
          <p className="fw-semibold">Less than 25%</p>
        </div>
        <div className="col-md-3">
          <p className="text-secondary">Habitation</p>
          <p className="fw-semibold">Low</p>
        </div>
      </div>
    </div>
  );
};

export default Value;
