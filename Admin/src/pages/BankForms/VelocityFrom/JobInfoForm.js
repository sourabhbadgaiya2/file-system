import React, { useState } from "react";

const JobInfoForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const [formData, setFormData] = useState({
    estimatedHours: "",
    assignTo: "",
    assignForm: "",
    reportTemplate: "",
    jobCreatedOn: "",
    estimatedTime: "",
    urgentCompletedBy: "",
    jobCompletedDate: "",
    status: "",
    contactPerson: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    const newState = !isOpen;
    setIsOpen(newState);
    setIsEditable(newState); // open kare to editable bhi ho
  };

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#16828E", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Job & Property Access Details</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={handleEditClick}
          >
            {isOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="p-3 border border-top-0 rounded-bottom">
          <div className="row">
            {/* Job Details */}
            <div className="col-md-6 mb-3">
              <label>Estimated Completion (Hours)</label>
              <input
                type="number"
                className="form-control"
                name="estimatedHours"
                value={formData.estimatedHours}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Assign To</label>
              <select
                className="form-control"
                name="assignTo"
                value={formData.assignTo}
                onChange={handleChange}
                disabled={!isEditable}
              >
                <option value="">Select</option>
                <option value="UEAA">
                  Unique Engineering and Associate Bhopal
                </option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>Assign Form</label>
              <select
                className="form-control"
                name="assignForm"
                value={formData.assignForm}
                onChange={handleChange}
                disabled={!isEditable}
              >
                <option value="">Select</option>
                <option value="Fincorp Final_New">Fincorp Final_New</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>Report Template</label>
              <select
                className="form-control"
                name="reportTemplate"
                value={formData.reportTemplate}
                onChange={handleChange}
                disabled={!isEditable}
              >
                <option value="">Select</option>
                <option value="v1.1 Fincorp Report Template">
                  v1.1 Fincorp Report Template
                </option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label>Job Created on</label>
              <input
                type="datetime-local"
                className="form-control"
                name="jobCreatedOn"
                value={formData.jobCreatedOn}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Estimated Completion Time</label>
              <input
                type="datetime-local"
                className="form-control"
                name="estimatedTime"
                value={formData.estimatedTime}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Urgent Completed By</label>
              <input
                type="text"
                className="form-control"
                name="urgentCompletedBy"
                value={formData.urgentCompletedBy}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Job Completed Date</label>
              <input
                type="datetime-local"
                className="form-control"
                name="jobCompletedDate"
                value={formData.jobCompletedDate}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Status</label>
              <select
                className="form-control"
                name="status"
                value={formData.status}
                onChange={handleChange}
                disabled={!isEditable}
              >
                <option value="">Select</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>

            {/* Property Access Details */}
            <div className="col-md-6 mb-3">
              <label>Contact Person</label>
              <input
                type="text"
                className="form-control"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Phone/Mobile No.</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditable}
              />
            </div>
          </div>
        </div>
      )}
        <button style={{background: "#16828E"}} type="submit" className="btn btn-primary mt-3">
            Save
          </button>
    </div>
  );
};

export default JobInfoForm;
