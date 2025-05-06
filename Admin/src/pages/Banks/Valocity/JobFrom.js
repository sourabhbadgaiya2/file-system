import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobForm = () => {
  return (
    <div className="container mt-4">
      {/* Address Section */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h6   className=" mb-2">Order Address</h6>
          <h5  style={{ color: '#007b8f' }}   className=" fw-semibold">
            GRAM AMADARI PH NO 04 DEWANGANG TEHSIL RAISEN
          </h5>
        </div>
      </div>

      {/* Header with Buttons */}
      <div className="d-flex justify-content-between align-items-center px-3 py-2 rounded-top" style={{ backgroundColor: '#007b8f', color: '#fff' }}>
        <strong>Edit Job VL3-ZX23-VXL</strong>
        <div>
          <button className="btn btn-success btn-sm me-2">Proceed</button>
          <button className="btn btn-secondary btn-sm me-2">Cancel</button>
          <button className="btn btn-primary btn-sm">Save</button>
        </div>
      </div>

      {/* Form Section */}
      <div className="card rounded-top-0 shadow-sm">
        <div className="card-body bg-light">
          {/* Row 1 */}
          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Bank Name/Ref</label>
            <div className="col-md-8">
              <input className="form-control bg-white" defaultValue="Hero Fincorp" />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Bank Ref No</label>
            <div className="col-md-8">
              <input className="form-control bg-white" disabled />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Business Division</label>
            <div className="col-md-8">
              <input className="form-control bg-white" defaultValue="Loan Against Property (LAP)" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Internal Reference</label>
            <div className="col-md-8">
              <input className="form-control bg-white" disabled />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Applicant Name</label>
            <div className="col-md-8">
              <input className="form-control bg-white" defaultValue="BOMBAY CHICKEN SHOP" />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Application Reference</label>
            <div className="col-md-8">
              <input className="form-control bg-white" defaultValue="BOMBAY CHICKEN SHOP" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Apf/Aps By Bank</label>
            <div className="col-md-8">
              <input className="form-control bg-white" />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Transaction Type</label>
            <div className="col-md-8">
              <select className="form-select bg-white">
                <option>New – Other Primary</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Bank contact person</label>
            <div className="col-md-8">
              <input className="form-control bg-white" defaultValue="Samruddhi Gamare" />
            </div>
          </div>

          {/* Row 4 */}
          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Bank contact person mobile</label>
            <div className="col-md-8">
              <input className="form-control bg-white" disabled />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Bank contact person email</label>
            <div className="col-md-8">
              <input className="form-control bg-white" defaultValue="samruddhi.gamare@herofincorp.biz" />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Loan Purposes</label>
            <div className="col-md-8">
              <textarea className="form-control bg-white"></textarea>
            </div>
          </div>

          {/* Row 5 */}
          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Property Type <span className="text-danger">*</span></label>
            <div className="col-md-8">
              <select className="form-select bg-white">
                <option>Plot</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Valuation Type</label>
            <div className="col-md-8">
              <input className="form-control bg-white" defaultValue="Full Valuation" />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Any special Instructions</label>
            <div className="col-md-8">
              <textarea className="form-control bg-white"></textarea>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobForm;
