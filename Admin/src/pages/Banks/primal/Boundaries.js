import React from "react";

const Boundaries = () => {
  return (
    <div className="container mt-4 p-4 bg-white shadow-lg rounded">
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5">Boundaries</h2>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th></th>
              <th>East</th>
              <th>West</th>
              <th>North</th>
              <th>South</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="fw-bold">As Per Deed</td>
              <td>GOVT. ROAD</td>
              <td>PLOT NO. 17</td>
              <td>PLOT NO. 07</td>
              <td>PLOT NO. 09</td>
            </tr>
            <tr>
              <td className="fw-bold">As Per Site</td>
              <td>BOUNDARY WALL THEN ROAD</td>
              <td>OPEN PLOT</td>
              <td>OPEN PLOT</td>
              <td>OPEN PLOT</td>
            </tr>
            <tr>
              <td className="fw-bold">As Per Plan</td>
              <td>Na</td>
              <td>Na</td>
              <td>Na</td>
              <td>Na</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row g-3 text-sm mt-4">
        <div className="col-md-6">
          <p className="text-muted">Boundaries Matching</p>
          <p className="fw-semibold">No</p>
        </div>
        <div className="col-md-6">
          <p className="text-muted">Remarks if any</p>
          <p className="fw-semibold">Na</p>
        </div>
        <div className="col-md-6">
          <p className="text-muted">Property Identified Through</p>
          <p className="fw-semibold">Local Sources</p>
        </div>
        <div className="col-md-6">
          <p className="text-muted">Property Demarcated</p>
          <p className="fw-semibold">Yes</p>
        </div>
        <div className="col-12">
          <p className="text-muted">If demarcated, type:</p>
          <p className="fw-semibold">Four side stone boundary</p>
        </div>
      </div>
    </div>
  );
};

export default Boundaries;
