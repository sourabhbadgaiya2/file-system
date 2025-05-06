import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LocationForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    propertyOwner: "",
    surveyNo: "",
    suffixName: "",
    suffixContactNo: "",
    doorNo: "",
    projectName: "",
    colonyStreetLocality: "",
    landmark: "",
    pincode: "",
    city: "",
    district: "",
    villageBoundariesMatching: "",
    village: "",
    taluk: "",
    propertyWithin: "",
    boundariesMatching: "",
    saleInLast3Years: "",
    addressLine1: "",
    addressLine2: "",
    latitude: "",
    longitude: "",
    distanceFromCity: "",
    nearestBranch: "",
    eastBoundaryOC: "",
    southBoundaryOC: "",
    westBoundaryOC: "",
    northBoundaryOC: "",
    eastBoundaryActual: "",
    southBoundaryActual: "",
    westBoundaryActual: "",
    northBoundaryActual: "",
    eastDimensionOC: "",
    southDimensionOC: "",
    westDimensionOC: "",
    northDimensionOC: "",
    eastDimensionActual: "",
    southDimensionActual: "",
    westDimensionActual: "",
    northDimensionActual: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  // Custom toggle button handler
  const handleToggle = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
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
        <div className="border rounded p-3 mt-2 bg-white">
          <form onSubmit={handleSubmit}>
            {/* Property Owner Section */}
            <div className="mb-4">
              <h5 className="mb-3">PROPERTY DETAILS AS PER SITE</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Property Owner / Seller Name *</label>
                  <input
                    type="text"
                    name="propertyOwner"
                    value={formData.propertyOwner}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Survey No *</label>
                  <input
                    type="text"
                    name="surveyNo"
                    value={formData.surveyNo}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Suffix Name</label>
                  <input
                    type="text"
                    name="suffixName"
                    value={formData.suffixName}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Suffix Contact No</label>
                  <input
                    type="text"
                    name="suffixContactNo"
                    value={formData.suffixContactNo}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="mb-4">
              <h5 className="mb-3">ADDRESS AS PER SITE</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Door No / Plot No</label>
                  <input
                    type="text"
                    name="doorNo"
                    value={formData.doorNo}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Project Name</label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Colony / Street / Locality *</label>
                  <input
                    type="text"
                    name="colonyStreetLocality"
                    value={formData.colonyStreetLocality}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Landmark</label>
                  <input
                    type="text"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">District</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">Village Boundaries Matching</label>
                  <input
                    type="text"
                    name="villageBoundariesMatching"
                    value={formData.villageBoundariesMatching}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">Village</label>
                  <input
                    type="text"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">Taluk</label>
                  <input
                    type="text"
                    name="taluk"
                    value={formData.taluk}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
              </div>

              {/* RURAL/URBAN and Boundaries Matching Section */}
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Is this Property within?</label>
                  <div className="d-flex gap-1">
                    <button
                      type="button"
                      className={`btn ${formData.propertyWithin === "RURAL" ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleToggle("propertyWithin", "RURAL")}
                    >
                      RURAL
                    </button>
                    <button
                      type="button"
                      className={`btn ${formData.propertyWithin === "URBAN" ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleToggle("propertyWithin", "URBAN")}
                    >
                      URBAN
                    </button>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Whether Boundaries Matching *</label>
                  <div className="d-flex gap-1">
                    <button
                      type="button"
                      className={`btn ${formData.boundariesMatching === "YES" ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleToggle("boundariesMatching", "YES")}
                    >
                      YES
                    </button>
                    <button
                      type="button"
                      className={`btn ${formData.boundariesMatching === "NO" ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleToggle("boundariesMatching", "NO")}
                    >
                      NO
                    </button>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Sale in this Property within 3 Years</label>
                  <div className="d-flex gap-1">
                    <button
                      type="button"
                      className={`btn ${formData.saleInLast3Years === "YES" ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleToggle("saleInLast3Years", "YES")}
                    >
                      YES
                    </button>
                    <button
                      type="button"
                      className={`btn ${formData.saleInLast3Years === "NO" ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => handleToggle("saleInLast3Years", "NO")}
                    >
                      NO
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Address as per Document Section */}
            <div className="mb-4">
              <h5 className="mb-3">ADDRESS AS PER DOCUMENT</h5>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Address Line 1*</label>
                  <input
                    type="text"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Address Line 2</label>
                  <input
                    type="text"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">LATITUDE</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="latitude"
                      value={formData.latitude}
                      onChange={handleChange}
                      className="form-control border-0 border-bottom"
                      placeholder="23.39k4u"
                    />
                    <button className="btn btn-outline-secondary" type="button">
                      Capture
                    </button>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">LONGITUDE</label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="longitude"
                      value={formData.longitude}
                      onChange={handleChange}
                      className="form-control border-0 border-bottom"
                      placeholder="77.38k5k6"
                    />
                    <button className="btn btn-outline-secondary" type="button">
                      Capture
                    </button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Distance from City (km) *</label>
                  <input
                    type="text"
                    name="distanceFromCity"
                    value={formData.distanceFromCity}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">Nearest branch</label>
                  <input
                    type="text"
                    name="nearestBranch"
                    value={formData.nearestBranch}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                  />
                </div>
              </div>
            </div>

            {/* Boundaries Section */}
            <div className="mb-4">
              <h5 className="mb-3">Boundaries</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6>Boundaries as per Document</h6>
                  <div className="row">
                    {["eastBoundaryOC", "southBoundaryOC", "westBoundaryOC", "northBoundaryOC"].map((field, index) => (
                      <div className="col-12 mb-2" key={field}>
                        <div className="input-group">
                          <span className="input-group-text">
                            {["East", "South", "West", "North"][index]}
                          </span>
                          <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="form-control border-0 border-bottom"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <h6>Boundaries as per Actual Site</h6>
                  <div className="row">
                    {["eastBoundaryActual", "southBoundaryActual", "westBoundaryActual", "northBoundaryActual"].map((field, index) => (
                      <div className="col-12 mb-2" key={field}>
                        <div className="input-group">
                          <span className="input-group-text">
                            {["East", "South", "West", "North"][index]}
                          </span>
                          <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="form-control border-0 border-bottom"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Dimensions Section */}
            <div className="mb-4">
              <h5 className="mb-3">Dimensions of the site</h5>
              <div className="row">
                <div className="col-md-6">
                  <h6>Dimensions as per Document</h6>
                  <div className="row">
                    {["eastDimensionOC", "southDimensionOC", "westDimensionOC", "northDimensionOC"].map((field, index) => (
                      <div className="col-12 mb-2" key={field}>
                        <div className="input-group">
                          <span className="input-group-text">
                            {["East", "South", "West", "North"][index]}
                          </span>
                          <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="form-control border-0 border-bottom"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <h6>Dimensions as per Actual</h6>
                  <div className="row">
                    {["eastDimensionActual", "southDimensionActual", "westDimensionActual", "northDimensionActual"].map((field, index) => (
                      <div className="col-12 mb-2" key={field}>
                        <div className="input-group">
                          <span className="input-group-text">
                            {["East", "South", "West", "North"][index]}
                          </span>
                          <input
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleChange}
                            className="form-control border-0 border-bottom"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-end">
              <button style={{background:"#30384B"}} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LocationForm;