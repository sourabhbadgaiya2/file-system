import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Building = () => {
  return (
    <div className="container  my-4 p-4 bg-white shadow rounded">
      {/* Header */}
      <div className="border-bottom pb-3 mb-4">
        <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
          <h2 className="h5 fw-semibold">Building Details</h2>
        </div>
      </div>

      {/* Data Grid */}
      <div className="row text-sm">
        <div className="col-md-6 col-lg-3 mb-3">
          <p className="text-secondary">No. of Blocks/Wings</p>
          <p className="fw-semibold">0</p>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <p className="text-secondary">No. of Lifts</p>
          <p className="fw-semibold">0</p>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <p className="text-secondary">Age of Building (in years)</p>
          <p className="fw-semibold">0</p>
        </div>
        <div className="col-md-6 col-lg-3 mb-3">
          <p className="text-secondary">Residual life of Building (in years)</p>
          <p className="fw-semibold">60</p>
        </div>
      </div>

      {/* Second Row in One Line */}
      <div className="row text-sm mt-3 align-items-center">
        <div className="col-auto">
          <p className="text-secondary mb-0">Unit Configuration:</p>
          <p className="fw-semibold d-inline">Na</p>
        </div>
        <div className="col-auto">
          <p className="text-secondary mb-0">Floors Approved/Sanctioned:</p>
          <p className="fw-semibold d-inline">
            0 Basement + Ground + 0 Podium + 0 Habitable Floors
          </p>
        </div>
        <div className="col-auto">
          <p className="text-secondary mb-0">Floors Proposed:</p>
          <p className="fw-semibold d-inline">
            0 Basement + Ground + 0 Podium + 0 Habitable Floors
          </p>
        </div>
        <div className="col-auto">
          <p className="text-secondary mb-0">Floors at Site:</p>
          <p className="fw-semibold d-inline">
            0 Basement + Ground + 0 Podium + 0 Habitable Floors
          </p>
        </div>
      </div>
    </div>
  );
};

export default Building;
