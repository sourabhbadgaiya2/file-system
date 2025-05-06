import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AreaDetails = () => {
  return (
    <div className="container my-4 p-4 bg-white shadow rounded">
      {/* Header */}
      <div className="border-bottom pb-3 mb-4">
        <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
          <h2 className="h5 fw-semibold">Area Details</h2>
        </div>
      </div>

      {/* Type of Property */}
      <div className="mb-4">
        <p className="text-secondary">Type of Property</p>
        <p className="fw-semibold">Individual Property</p>
      </div>

      {/* Table Section */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="table-light text-center">
            <tr>
              <th>Floor</th>
              <th>Sanctioned Area / Permissible</th>
              <th>Actual Area</th>
              <th>Final Area Considered</th>
              <th>Overall BUA Division wrt Permissible Area</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {[
              "Basement Floor",
              "Stilt Floor",
              "Ground Floor",
              "First Floor",
              "Second Floor",
              "Third Floor",
              "Fourth Floor",
              "Sixth Floor",
            ].map((floor, index) => (
              <tr key={index}>
                <td>{floor}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{index === 7 ? "Enter OverAll BUA" : "0"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quality of Construction */}
      <div className="mt-4 border-top pt-4">
        <div className="text-center">
          <span className="text-danger fw-semibold fs-5 border border-secondary px-4 py-1 rounded-pill">
            Quality of Construction
          </span>
        </div>
        <div className="mt-4 d-flex justify-content-between text-sm">
          <div>
            <p className="text-secondary">Exteriors</p>
            <p className="fw-semibold">Non Satisfactory</p>
          </div>
          <div>
            <p className="text-secondary">Interiors</p>
            <p className="fw-semibold">Non Satisfactory</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDetails;
