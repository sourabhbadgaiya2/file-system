import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Individual = () => {
  return (
    <div className="container my-4 p-4 bg-white shadow rounded">
      {/* Header */}
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5 fw-semibold">Valuation</h2>
      </div>

      {/* Individual Property */}
      <div className="text-center">
        <span className="text-danger fw-semibold fs-5 border border-secondary px-4 py-1 rounded-pill">
          Individual Property
        </span>
      </div>

      {/* Table Section */}
      <div className="table-responsive mt-4">
        <table className="table table-bordered">
          <thead className="table-light text-center">
            <tr>
              <th>Property Type</th>
              <th>Area (sqft/sqmt)</th>
              <th>Rate (sqft/sqmt)</th>
              <th>Depreciation (%)</th>
              <th>Amount (in Rs.)</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {[
              { type: "Land Value", area: "1981", rate: "0", depreciation: "0", amount: "0" },
              { type: "Building Value after Depreciation", area: "0", rate: "0", depreciation: "0", amount: "0" },
              { type: "Extension / Improvement", area: "0", rate: "0", depreciation: "0", amount: "0" },
            ].map((item, index) => (
              <tr key={index}>
                <td>{item.type}</td>
                <td>{item.area}</td>
                <td>{item.rate}</td>
                <td>{item.depreciation}</td>
                <td>{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Amenities Section */}
      <div className="mt-4 border-top pt-4">
        <div className="text-center">
          <span className="text-danger fw-semibold fs-5 border border-secondary px-4 py-1 rounded-pill">
            Amenities
          </span>
        </div>
        <div className="mt-4 d-flex justify-content-between">
          <div>
            <p className="text-secondary">Amenities Available</p>
            <p className="fw-semibold">Na</p>
          </div>
          <div>
            <p className="text-secondary">Details on Interiors</p>
            <p className="fw-semibold">Na</p>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-between">
          <div>
            <p className="text-secondary">Amenities Value</p>
            <p className="fw-semibold">0</p>
          </div>
          <div>
            <p className="text-secondary">Fixed Interiors Value</p>
            <p className="fw-semibold">0</p>
          </div>
        </div>
      </div>

      {/* Car Park Section */}
      <div className="mt-4 border-top pt-4">
        <div className="text-center">
          <span className="text-danger fw-semibold fs-5 border border-secondary px-4 py-1 rounded-pill">
            Car Park
          </span>
        </div>

        <div className="mt-4 d-flex justify-content-between">
          <div>
            <p className="text-secondary">No of Car Parks</p>
            <p className="fw-semibold">--</p>
          </div>
          <div>
            <p className="text-secondary">Value of Car Park</p>
            <p className="fw-semibold">--</p>
          </div>
          <div>
            <p className="text-secondary">Total Value of Car Parks</p>
            <p className="fw-semibold">--</p>
          </div>
          <div>
            <p className="text-secondary">Total Realisable Value (in Amt.)</p>
            <p className="fw-semibold">₹0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
