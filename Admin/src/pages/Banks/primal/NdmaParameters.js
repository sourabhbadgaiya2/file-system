import React from "react";

const NdmaParameters = () => {
  return (
    <div className="container mt-4 p-4 bg-white shadow-lg rounded-lg">
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5">NDMA Parameters</h2>
      </div>
      
      <div className="row g-3 text-sm">
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Nature of Building/Wing/ Tower</h6>
          <p className="fw-semibold">Not Applicable</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Type of Structure</h6>
          <p className="fw-semibold">RCC Framed</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Function of Use</h6>
          <p className="fw-semibold">Residential</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Height of Building above ground level</h6>
          <p className="fw-semibold">Not Applicable</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Type of Foundation</h6>
          <p className="fw-semibold">Not able to assess since completed property</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Horizontal Floor type</h6>
          <p className="fw-semibold">Not Applicable</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Concrete Grade</h6>
          <p className="fw-semibold">Not able to assess since completed property</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Steel Grade</h6>
          <p className="fw-semibold">Not able to assess since completed property</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Seismic Zone</h6>
          <p className="fw-semibold">Zone III</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Soil slope vulnerable to landslide</h6>
          <p className="fw-semibold">Very low Hazard zone</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Flood prone area</h6>
          <p className="fw-semibold">No</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Urban Floods</h6>
          <p className="fw-semibold">Upstream</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Environment Exposure Condition</h6>
          <p className="fw-semibold">Mild</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Tsunami</h6>
          <p className="fw-semibold">No</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Wind/Cyclones</h6>
          <p className="fw-semibold">Low Damage Risk Zone</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-muted">Coastal Regulatory Zone</h6>
          <p className="fw-semibold">CRZ IV</p>
        </div>
      </div>
    </div>
  );
};

export default NdmaParameters;