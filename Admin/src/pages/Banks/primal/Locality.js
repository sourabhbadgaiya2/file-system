import React from "react";

const Locality = () => {
  return (
    <div className="container  mt-4 p-4 bg-white shadow-lg rounded-lg">
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5">Surrounding & Locality Details</h2>
      </div>
      
      <div className="row g-3 text-sm">
        <div className="col-md-6 col-lg-3">
          <h6 className="text-prima">Location Type</h6>
          <p className="fw-semibold">Residential</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-primary">Class of Locality</h6>
          <p className="fw-semibold">MIG</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-primary">Proximity to civic amenities</h6>
          <p className="fw-semibold">1 Kilometers</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-primary">Railway Station</h6>
          <p className="fw-semibold">18 Kilometers</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-primary">Bus Stop</h6>
          <p className="fw-semibold">19 Kilometers</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-primary">Type of Road</h6>
          <p className="fw-semibold">Mudroad</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-primary">Legal approach to the property as per documents</h6>
          <p className="fw-semibold">Clear</p>
        </div>
        <div className="col-md-6 col-lg-3">
          <h6 className="text-primary">Physical approach to the property as per site visit</h6>
          <p className="fw-semibold">Clear</p>
        </div>
      </div>
    </div>
  );
};

export default Locality;
