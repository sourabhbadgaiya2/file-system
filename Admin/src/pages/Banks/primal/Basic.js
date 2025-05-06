import React from "react";

const Basic = () => {
  return (
    <div className="container mt-2 p-4 bg-white shadow-lg rounded">
      <div style={{  backgroundColor: "#365069"}} className=" text-white p-3 rounded mb-4">
        <h2 className="h5">Basic Details</h2>
      </div>
      <div className="row g-3 text-sm">
        <div className="col-md-4">
          <p className="text-muted">Applicant’s Name / Owner Name</p>
          <p className="fw-semibold">Mrs. SNEHATA SINGH</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Property Category</p>
          <p className="fw-semibold">Specialized Property</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Property Sub-Category</p>
          <p className="fw-semibold">Plot (Plot LAP / Industrial Plot / Commercial Plot)</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">If Green Housing</p>
          <p className="fw-semibold">No</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Type and Level of Certification</p>
          <p className="fw-semibold">Not Applicable</p>
        </div>
        <div className="col-12">
          <p className="text-muted">Address as per Provided Documents</p>
          <p className="fw-semibold">
            PROPERTY IS PLOT NO. 08, AT PART OF KHASRA NO. 871/1, GRAM CHHAPRI, P.H.NO. 32, R.N.M RATIBAD, VIKASH KHAND
            FANDA, TEHSIL HUZUR, DIST. BHOPAL MP 462044
          </p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Flat No/Block No/Shop No</p>
          <p className="fw-semibold">Na</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Floor Number & Wing Name</p>
          <p className="fw-semibold">Na</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Building/House/Shop Name</p>
          <p className="fw-semibold">PLOT NO. 08</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">CTS/Survey/Khasra Number</p>
          <p className="fw-semibold">KHASRA NO. 871/1</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Street Name</p>
          <p className="fw-semibold">BHADBHADA ROAD</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Landmark</p>
          <p className="fw-semibold">JIND BABA MANDIR</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Village/Location</p>
          <p className="fw-semibold">CHHAPRI</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">City/Taluka/Town</p>
          <p className="fw-semibold">RATIBAD</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">District</p>
          <p className="fw-semibold">BHOPAL</p>
        </div>
      </div>
      <hr className="my-4 border-top" />
      <div className="row g-3 text-sm">
        <div className="col-md-4">
          <p className="text-muted">Pincode</p>
          <p className="fw-semibold">462044</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">State</p>
          <p className="fw-semibold">Madhya Pradesh</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Country</p>
          <p className="fw-semibold">India</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Latitude</p>
          <p className="fw-semibold">23.1640633</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Longitude</p>
          <p className="fw-semibold">77.31863</p>
        </div>
        <div className="col-md-4">
          <p className="text-muted">Address Matching</p>
          <p className="fw-semibold">Yes</p>
        </div>
      </div>
    </div>
  );
};

export default Basic;