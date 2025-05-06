import React from 'react';

const RequestForm = ({ onDataChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="border p-3 rounded" style={{ backgroundColor: "#fff8ec" }}>
      <h5 className="fw-bold text-dark mb-3">
        "RESALE FIRST" Request ID: <span style={{ color: "maroon" }}>HRQ-25-57269</span>
      </h5>

      <div className="row">
        {/* First Row */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Status</label>
          <input type="text" className="form-control" name="status" onChange={handleChange} defaultValue="Work in progress" />
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Type</label>
          <input type="text" className="form-control" name="type" onChange={handleChange} defaultValue="Individual Technical Request" />
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Technical Admin</label>
          <input type="text" className="form-control" name="technicalAdmin" onChange={handleChange} defaultValue="SWARNIM RAYAL" />
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Date of Request</label>
          <input type="text" className="form-control" name="dateOfRequest" onChange={handleChange} defaultValue="10/APR/2025 03:28:51 PM" />
        </div>

        {/* Second Row */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Channel</label>
          <input type="text" className="form-control" name="channel" onChange={handleChange} defaultValue="LOS_CHANNEL" />
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Branch</label>
          <input type="text" className="form-control" name="branch" onChange={handleChange} defaultValue="(10816) DEHRADUN SOUTH" />
        </div>

        {/* Section Heading */}
        <div className="col-12 mt-3 mb-2">
          <h5 className="text-center fw-bold text-danger border-top pt-3">Customer Details</h5>
        </div>

        {/* Customer Details Row */}
        <div className="col-md-3 mb-3">
          <label className="form-label">Application No.</label>
          <input type="text" className="form-control" name="applicationNo" onChange={handleChange} defaultValue="77000019932" />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Customer Name</label>
          <input type="text" className="form-control" name="customerName" onChange={handleChange} defaultValue="NARAYAN KHARKA CHHETRI" />
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Product Type</label>
          <input type="text" className="form-control" name="productType" onChange={handleChange} defaultValue="NON HOME LOAN" />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Business Group</label>
          <input type="text" className="form-control" name="businessGroup" onChange={handleChange} defaultValue="HFCMORTGAGES" />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Request For</label>
          <input type="text" className="form-control" name="requestFor" onChange={handleChange} defaultValue="HFC" />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Select Product</label>
          <select className="form-control" name="products" onChange={handleChange} defaultValue="">
            <option value="">Select Product</option>
            <option value="APNA GHAR - BALANCE TRANSFER + TOP-UP">APNA GHAR - BALANCE TRANSFER + TOP-UP</option>
            <option value="APNA GHAR - DREAMZ- BALANCE TRANSFER + TOP-UP">APNA GHAR - DREAMZ- BALANCE TRANSFER + TOP-UP</option>
            <option value="APNA GHAR - DREAMZ- HOME LOAN - DA RESALE">APNA GHAR - DREAMZ- HOME LOAN - DA RESALE</option>
            <option value="APNA GHAR - DREAMZ- HOME LOAN - DEVELOPMENT AUTHORITY">APNA GHAR - DREAMZ- HOME LOAN - DEVELOPMENT AUTHORITY</option>
            <option value="APNA GHAR - DREAMZ- HOME LOAN-BUILDER PURCHASE">APNA GHAR - DREAMZ- HOME LOAN-BUILDER PURCHASE</option>
            <option value="APNA GHAR - DREAMZ- IMPROVEMENT">APNA GHAR - DREAMZ- IMPROVEMENT</option>
            <option value="APNA GHAR - DREAMZ- LAND LOAN-RESIDENTIAL">APNA GHAR - DREAMZ- LAND LOAN-RESIDENTIAL</option>
            <option value="APNA GHAR - DREAMZ- LAP-COMMERCIAL PROPERTY">APNA GHAR - DREAMZ- LAP-COMMERCIAL PROPERTY</option>
            <option value="APNA GHAR - DREAMZ- LAP-PLOT">APNA GHAR - DREAMZ- LAP-PLOT</option>
            <option value="APNA GHAR - DREAMZ- LAP-RESIDENTIAL PROPERTY">APNA GHAR - DREAMZ- LAP-RESIDENTIAL PROPERTY</option>
            <option value="APNA GHAR - DREAMZ- NON RESIDENTIAL PREMISES">APNA GHAR - DREAMZ- NON RESIDENTIAL PREMISES</option>
            <option value="APNA GHAR - DREAMZ- PLOT + CONSTRUCTION">APNA GHAR - DREAMZ- PLOT + CONSTRUCTION</option>
            <option value="APNA GHAR - DREAMZ- PRADHAN MANTRI AWAS YOJNA - RESALE BUILDER">APNA GHAR - DREAMZ- PRADHAN MANTRI AWAS YOJNA - RESALE BUILDER</option>
            <option value="APNA GHAR - DREAMZ- SELF CONSTRUCTION">APNA GHAR - DREAMZ- SELF CONSTRUCTION</option>
            <option value="APNA GHAR - DREAMZ- TOP UP">APNA GHAR - DREAMZ- TOP UP</option>
            <option value="APNA GHAR - HL + CONSTRUCTION">APNA GHAR - HL + CONSTRUCTION</option>
            <option value="APNA GHAR - HOME LOAN - DA RESALE">APNA GHAR - HOME LOAN - DA RESALE</option>
            <option value="APNA GHAR - HOME LOAN - DEVELOPMENT AUTHORITY">APNA GHAR - HOME LOAN - DEVELOPMENT AUTHORITY</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
