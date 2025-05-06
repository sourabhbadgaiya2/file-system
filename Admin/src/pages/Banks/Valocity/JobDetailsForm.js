import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const JobDetailsForm = () => {
  return (
    <div className="container mt-4">
      {/* Job Details */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <h5 style={{ color: '#007b8f' }}  className="mb-3  fw-semibold">Job Details</h5>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Estimated Completion (Hours)<span className="text-danger">*</span></label>
            <div className="col-md-8">
              <input type="number" className="form-control bg-white" defaultValue="48" />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Assign To<span className="text-danger">*</span></label>
            <div className="col-md-8">
              <select className="form-select bg-white">
                <option>Unique Engineering and Associate Bhopal (Valuer Admin) (bhopal@ueaa.co.in)</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Assign Form<span className="text-danger">*</span></label>
            <div className="col-md-8">
              <select className="form-select bg-white">
                <option>Fincorp Final_New</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Report Template<span className="text-danger">*</span></label>
            <div className="col-md-8">
              <select className="form-select bg-white">
                <option>v1.1 Fincorp Report Template</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Job Created on</label>
            <div className="col-md-8">
              <input type="text" className="form-control bg-white" defaultValue="20/03/2025 11:53:36" readOnly />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Estimated Completion Time<span className="text-danger">*</span></label>
            <div className="col-md-8">
              <input type="text" className="form-control bg-white" defaultValue="24/03/2025 11:53:35" readOnly />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Urgent Completed By</label>
            <div className="col-md-8">
              <input type="text" className="form-control bg-white" readOnly />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Job Completed Date</label>
            <div className="col-md-8">
              <input type="text" className="form-control bg-white" defaultValue="22/03/2025 15:40:33" readOnly />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Status<span className="text-danger">*</span></label>
            <div className="col-md-8">
              <select className="form-select bg-white">
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Property Access Details */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 style={{ color: '#007b8f' }}   className="mb-3  fw-semibold">Property Access Details</h5>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Contact Person</label>
            <div className="col-md-8">
              <input type="text" className="form-control bg-white" defaultValue="MOHAMMED" readOnly />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-md-4 col-form-label text-muted small">Phone/Mobile No.</label>
            <div className="col-md-8">
              <input type="text" className="form-control bg-white" defaultValue="9301901900" readOnly />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsForm;
