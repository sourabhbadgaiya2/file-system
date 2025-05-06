import React from "react";

const PropertyDetails = () => {
  return (
    <div className="container my-4 p-4 bg-white shadow-lg rounded-lg">
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5">Property Details</h2>
      </div>
      
      {/* Occupant Details Section */}
      <div className="p-4 mb-4">
        <div className="text-center">
          <span className="text-danger rounded-pill fw-semibold border border-secondary px-4 py-1">
            Quality of Construction
          </span>
        </div>
        <div className="row g-3 text-sm mt-3">
          <div className="col-md-3">
            <p className="text-muted">Occupancy of the Property</p>
            <p className="fw-bold">Vacant</p>
          </div>
          <div className="col-md-3">
            <p className="text-muted">Multi Tenanted Property</p>
            <p className="fw-bold">No</p>
          </div>
          <div className="col-md-3">
            <p className="text-muted">Number of Tenants</p>
            <p className="fw-bold">Not applicable</p>
          </div>
          <div className="col-md-3">
            <p className="text-muted">If Vacant, since how long</p>
            <p className="fw-bold">0 Year</p>
          </div>
          <div className="col-md-6">
            <p className="text-muted">Reason for being vacant as per local enquiry</p>
            <p className="fw-bold">Na</p>
          </div>
        </div>
      </div>

      {/* Land Details Section */}
      <div className="p-4">
        <div className="text-center">
          <span className="text-danger rounded-pill fw-semibold border border-secondary px-4 py-1">
            Land Details
          </span>
        </div>
        <div className="row g-3 text-sm mt-3">
          <div className="col-md-3">
            <p className="text-muted">Land/Plot Area as per plan</p>
            <p className="fw-bold">0 sq. ft.</p>
          </div>
          <div className="col-md-3">
            <p className="text-muted">Land/Plot Area as per title documents</p>
            <p className="fw-bold">1981 sq. ft.</p>
          </div>
          <div className="col-md-3">
            <p className="text-muted">Land/Plot Area as per site</p>
            <p className="fw-bold">1981 sq. ft.</p>
          </div>
          <div className="col-md-3">
            <p className="text-muted">Residential Area</p>
            <p className="fw-bold">0 sq. ft.</p>
          </div>
          <div className="col-md-3">
            <p className="text-muted">Commercial Area</p>
            <p className="fw-bold">0 sq. ft.</p>
          </div>
          <div className="col-md-3">
            <p className="text-muted">Type of plot (in case of plot)</p>
            <p className="fw-bold">Intermediate Plot</p>
          </div>
          <div className="col-md-6">
            <p className="text-muted">Final Land area / UDS considered for valuation</p>
            <p className="fw-bold">1981 sq. ft.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
