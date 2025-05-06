import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "bootstrap/dist/css/bootstrap.min.css";

const BoundariesForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    propertyAge: "",
    residualAge: "",
    internalMaintenance: "",
    externalMaintenance: "",
    eastDocument: "COLONY ROAD",
    eastSiteVisit: "COLONY ROAD",
    eastDimensions: "",
    westDocument: "PLOT NO. B-1",
    westSiteVisit: "OPEN PLOT",
    westDimensions: "",
    northDocument: "PLOT NO. B-41",
    northSiteVisit: "HOUSE OF ANILCII",
    northDimensions: "",
    southDocument: "COLONY ROAD",
    southSiteVisit: "COLONY ROAD",
    southDimensions: "",
    irregularShape: "No",
    notDemented: "No",
    boundariesMatching: "No",
    remarks: ""
  });

  // Handle change in input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert specific fields to Boolean
    const updatedFormData = {
      ...formData,
      boundariesMatching: formData.boundariesMatching === "Yes", // Boolean for boundariesMatching
      irregularShape: formData.irregularShape === "Yes", // Boolean for irregularShape
      notDemented: formData.notDemented === "Yes", // Boolean for notDemented
    };

    try {
      const response = await axios.post("http://localhost:5000/api/maintenance-from", updatedFormData);
      console.log(response); // handle response
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    }
  };

  // Render boundary section for each direction (East, West, North, South)
  const renderBoundarySection = (direction, title) => (
    <div className="col-md-3 border p-3 rounded">
      <h5 className="mb-3">{title}</h5>
      <div className="mb-2 border-bottom pb-2">
        <label className="form-label fw-semibold">As Per Document *</label>
        <input
          type="text"
          name={`${direction}Document`}
          value={formData[`${direction}Document`]}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-2 border-bottom pb-2">
        <label className="form-label fw-semibold">As Per Site Visit *</label>
        <input
          type="text"
          name={`${direction}SiteVisit`}
          value={formData[`${direction}SiteVisit`]}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-2 border-bottom pb-2">
        <label className="form-label fw-semibold">Linear Dimensions(ft)</label>
        <input
          type="text"
          name={`${direction}Dimensions`}
          value={formData[`${direction}Dimensions`]}
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <div
        className="d-flex justify-content-between align-items-center text-white p-3 rounded"
        style={{ cursor: "pointer", backgroundColor: "#98291E" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="m-0">Boundaries</h4>
        <button className="btn btn-light btn-sm">{isOpen ? "Close" : "Edit"}</button>
      </div>

      <div className={`accordion mt-3 ${isOpen ? "" : "d-none"}`}>
        <div className="accordion-item">
          <div className="accordion-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                {renderBoundarySection("east", "East")}
                {renderBoundarySection("west", "West")}
                {renderBoundarySection("north", "North")}
                {renderBoundarySection("south", "South")}
              </div>

              {/* New Fields for Property Age, Residual Age, etc. */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Property Age (yrs)</label>
                <input
                  type="number"
                  name="propertyAge"
                  value={formData.propertyAge}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Residual Age (yrs)</label>
                <input
                  type="number"
                  name="residualAge"
                  value={formData.residualAge}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Internal Maintenance</label>
                <input
                  type="text"
                  name="internalMaintenance"
                  value={formData.internalMaintenance}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">External Maintenance</label>
                <input
                  type="text"
                  name="externalMaintenance"
                  value={formData.externalMaintenance}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              {/* Other Radio Buttons */}
              <div className="border-top pt-3 mt-4 d-flex justify-content-between">
                <div>
                  <label className="form-label fw-semibold">Capture Plot Sketch For Irregular Shape Plots</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="irregularShape"
                      value="Yes"
                      checked={formData.irregularShape === "Yes"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="irregularShape"
                      value="No"
                      checked={formData.irregularShape === "No"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
                <div>
                  <label className="form-label fw-semibold">Not Demented</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="notDemented"
                      value="Yes"
                      checked={formData.notDemented === "Yes"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="notDemented"
                      value="No"
                      checked={formData.notDemented === "No"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
                <div>
                  <label className="form-label fw-semibold">Boundaries Are Matching</label>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="boundariesMatching"
                      value="Yes"
                      checked={formData.boundariesMatching === "Yes"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">Yes</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="boundariesMatching"
                      value="No"
                      checked={formData.boundariesMatching === "No"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">No</label>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button style={{ background: "#98291E" }} type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoundariesForm;
