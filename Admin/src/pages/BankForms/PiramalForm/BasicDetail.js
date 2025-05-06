import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BasicDetail = () => {
  const [isOpen, setIsOpen] = useState(false); // Toggle State for Accordion
  const [formData, setFormData] = useState({
    applicantName: "",
    propertyCategory: "",
    propertySubCategory: "",
    greenHousing: "",
    certificationType: "",
    address: "",
    flatNo: "",
    floorWing: "",
    buildingName: "",
    khasraNumber: "",
    streetName: "",
    landmark: "",
    village: "",
    city: "",
    district: "",
    pincode: "",
    state: "",
    country: "",
    latitude: "",
    longitude: "",
    addressMatching: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    // Form data clear after submit
    setFormData({
      applicantName: "",
      propertyCategory: "",
      propertySubCategory: "",
      greenHousing: "",
      certificationType: "",
      address: "",
      flatNo: "",
      floorWing: "",
      buildingName: "",
      khasraNumber: "",
      streetName: "",
      landmark: "",
      village: "",
      city: "",
      district: "",
      pincode: "",
      state: "",
      country: "",
      latitude: "",
      longitude: "",
      addressMatching: "",
    });
  };

  return (
    <div className="container mt-5">
      {/* Header + Edit Button */}
      <div 
        className="d-flex justify-content-between align-items-center  text-white p-3 rounded"
        style={{ cursor: "pointer",  backgroundColor: "#365069" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0"> Address Form</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      {/* Form Accordion */}
      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`} id="addressAccordion">
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              {[
                { label: "Applicant’s Name / Owner Name", name: "applicantName" },
                { label: "Property Category", name: "propertyCategory" },
                { label: "Property Sub-Category", name: "propertySubCategory" },
                { label: "Type and Level of Certification", name: "certificationType" },
                { label: "Address as per Provided Documents", name: "address" },
                { label: "Flat No/Block No/Shop No", name: "flatNo" },
                { label: "Floor Number & Wing Name", name: "floorWing" },
                { label: "Building/House/Shop Name", name: "buildingName" },
                { label: "CTS/Survey/Khasra Number", name: "khasraNumber" },
                { label: "Street Name", name: "streetName" },
                { label: "Landmark", name: "landmark" },
                { label: "Village/Location", name: "village" },
                { label: "City/Taluka/Town", name: "city" },
                { label: "District", name: "district" },
                { label: "Pincode", name: "pincode" },
                { label: "State", name: "state" },
                { label: "Country", name: "country" },
                { label: "Latitude", name: "latitude" },
                { label: "Longitude", name: "longitude" },
              ].map((field, index) => (
                <div className="mb-3" key={index}>
                  <label className="form-label fw-semibold">{field.label}:</label>
                  <input
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={`Enter ${field.label}`}
                  />
                </div>
              ))}

              {/* Yes/No Select Dropdown for "If Green Housing" */}
              <div className="mb-3">
                <label className="form-label fw-semibold">If Green Housing:</label>
                <select
                  name="greenHousing"
                  value={formData.greenHousing}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {/* Yes/No Select Dropdown for "Address Matching" */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Address Matching:</label>
                <select
                  name="addressMatching"
                  value={formData.addressMatching}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <button style={{  backgroundColor: "#365069"}} type="submit" className="btn btn-success  fw-bold">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetail;
