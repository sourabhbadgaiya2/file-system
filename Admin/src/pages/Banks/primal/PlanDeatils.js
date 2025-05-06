import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PlanDetails = () => {
  return (
    <div className="container my-4 p-4 bg-white shadow-lg rounded">
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5 text-start">Sanction Plan Approval & Other Document Details</h2>
      </div>
      <div className="row g-3 text-sm">
        <div className="col-md-6 col-lg-3">
          <h6 className="text-text-muted">Usage as per CDP/Master plan</h6>
          <p className="fw-bold">Residential</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Usage approved as per Plan / Provided Documents</h6>
          <p className="fw-bold">Residential</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Current Usage</h6>
          <p className="fw-bold">Residential</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Property coming under which limits</h6>
          <p className="fw-bold">GP Limits</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Plot within Municipal limit</h6>
          <p className="fw-bold">No</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Whether property under demolition list as per authority</h6>
          <p className="fw-bold">No</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Plan approved by</h6>
          <p className="fw-bold">Na</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Plan Details (Numbers & Date)</h6>
          <p className="fw-bold">Na</p>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;