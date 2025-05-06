import React, { useState } from "react";

const JobDetailsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    bankName: "",
    bankRefNo: "",
    businessDivision: "",
    internalRef: "",
    applicantName: "",
    applicationRef: "",
    transactionType: "",
    contactPerson: "",
    contactMobile: "",
    contactEmail: "",
    loanPurpose: "",
    propertyType: "",
    valuationType: "",
    specialInstructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // API call yaha se kar sakte ho
  };

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#16828E", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Location</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isOpen && (
        <form className="border p-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Bank Name/Ref</label>
              <input
                type="text"
                className="form-control"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Bank Ref No</label>
              <input
                type="text"
                className="form-control"
                name="bankRefNo"
                value={formData.bankRefNo}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Business Division</label>
              <input
                type="text"
                className="form-control"
                name="businessDivision"
                value={formData.businessDivision}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Internal Reference</label>
              <input
                type="text"
                className="form-control"
                name="internalRef"
                value={formData.internalRef}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Applicant Name</label>
              <input
                type="text"
                className="form-control"
                name="applicantName"
                value={formData.applicantName}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Application Reference</label>
              <input
                type="text"
                className="form-control"
                name="applicationRef"
                value={formData.applicationRef}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Transaction Type</label>
              <input
                type="text"
                className="form-control"
                name="transactionType"
                value={formData.transactionType}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Bank Contact Person</label>
              <input
                type="text"
                className="form-control"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Contact Person Mobile</label>
              <input
                type="text"
                className="form-control"
                name="contactMobile"
                value={formData.contactMobile}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Contact Person Email</label>
              <input
                type="email"
                className="form-control"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Loan Purpose</label>
              <textarea
                className="form-control"
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Property Type</label>
              <input
                type="text"
                className="form-control"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Valuation Type</label>
              <input
                type="text"
                className="form-control"
                name="valuationType"
                value={formData.valuationType}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label>Any Special Instructions</label>
              <textarea
                className="form-control"
                name="specialInstructions"
                value={formData.specialInstructions}
                onChange={handleChange}
              />
            </div>
          </div>

          <button style={{background: "#16828E"}} type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default JobDetailsForm;
