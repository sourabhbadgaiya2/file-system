import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Construction = () => {
  return (
    <div className="container my-4 p-4 bg-white shadow rounded">
      {/* Header */}
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5 fw-semibold">Stage Of Construction</h2>
      </div>

      {/* Grid Layout */}
      <div className="row text-sm">
        <div className="col-md-3">
          <p className="text-secondary">Construction Progress</p>
          <p className="fw-semibold text-primary">Stalled</p>
        </div>
        <div className="col-md-3">
          <p className="text-secondary">% Progress</p>
          <p className="fw-semibold">0</p>
        </div>
        <div className="col-md-3">
          <p className="text-secondary">% Recommended</p>
          <p className="fw-semibold">0</p>
        </div>
        <div className="col-md-3">
          <p className="text-secondary">Present Realisable Value based on Construction Stage</p>
          <p className="fw-semibold">₹0</p>
        </div>
      </div>

      {/* Descriptive Section */}
      <div className="mt-4">
        <p className="text-secondary fw-semibold">Stage of Construction (Descriptive)</p>
        <p className="fs-5 fw-bold">OPEN LAND</p>
      </div>
    </div>
  );
};

export default Construction;
