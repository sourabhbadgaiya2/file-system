import React from "react";

const LandDetails = () => {
  return (
    <div className="container my-4 p-4 bg-white shadow rounded">
      {/* Photographs Section */}
      <div>
        <h2 className="h5 fw-semibold mb-4">Photographs</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1590733839006-d7b9006c2e98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhbmR8ZW58MHwwfDB8fHww"
              alt="Person standing on land"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1629016429417-0a01981c3cb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbmR8ZW58MHwwfDB8fHww"
              alt="Land view"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1572109646045-7cce4196cfd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbmR8ZW58MHwwfDB8fHww"
              alt="Distant land view"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      {/* Master Plan Section */}
      <div className="mt-4">
        <div className="border p-3 rounded bg-light text-center">
          <p className="mb-0">No master plan uploaded.</p>
        </div>
      </div>

      {/* Upload Support Documents Section */}
      <div className="mt-3">
        <div className="border p-3 rounded bg-light text-center">
          <p className="mb-0">No documents uploaded.</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 d-flex justify-content-end gap-2">
        <button className="btn btn-secondary">Re-Assign</button>
        <button className="btn btn-primary">Preview the PDF</button>
        <button className="btn btn-dark">Upload the Signed & Stamped Copy</button>
        <button className="btn btn-danger">Sign with auto sign and stamp</button>
      </div>
    </div>
  );
};

export default LandDetails;
