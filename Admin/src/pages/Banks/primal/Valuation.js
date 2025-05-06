import React from "react";

const Valuation = () => {
  return (
    <div className="container mt-4 p-4 bg-white shadow-lg rounded">
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5">Individual Valuation Report</h2>
      </div>
      <div className="row g-3 text-sm">
        <div className="col-md-4">
          <p className="text-muted">Case Type</p>
          <p className="fw-semibold">LAP</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">House Delivery Agency</p>
          <p className="fw-semibold">Self-Construction</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Valuer visited this property any other FI</p>
          <p className="fw-semibold">No</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Valuation Report Status</p>
          <p className="fw-semibold text-success">Positive</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Scope of Valuation</p>
          <p className="fw-semibold">FAIR MARKET VALUE</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Contact Person Name (Broker or Applicant)</p>
          <p className="fw-semibold">SMT Snehata Singh</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Contact Person Number</p>
          <p className="fw-semibold">7987468344</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Relationship with applicant</p>
          <p className="fw-semibold">SELF</p>
        </div>
      </div>
    </div>
  );
};

export default Valuation;
