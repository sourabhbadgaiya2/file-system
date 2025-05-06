import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; // Axios import for API call

const DistanceRangeForm = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [formData, setFormData] = useState({
    distanceFromCPC: 120,
    longitude: 79.43277,
    distanceFromCityCenter: 2,
    distanceFromICICIBank: 120,
    latitude: 23.83895,
    oneWayDistance: 120
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API request to send the data
      const response = await axios.post('http://localhost:5000/api/distance-from', formData);

      // Success response
      console.log('Response from server:', response.data);

      // Show success message to user
      alert('Form submitted successfully!');

      // After submission, form ko close kar denge
      setIsEditOpen(false);
      
    } catch (error) {
      // Error handling
      console.error('Error while submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#98291E", cursor: "pointer" }}
        onClick={() => setIsEditOpen(!isEditOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Distance Range of the Property</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditOpen(!isEditOpen);
            }}
          >
            {isEditOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isEditOpen && (
        <div className="border rounded p-3 mt-2 bg-white">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Distance From CPC (km):</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control border-0 border-bottom"
                    name="distanceFromCPC"
                    value={formData.distanceFromCPC}
                    onChange={handleChange}
                  />
                  <span className="input-group-text border-0 border-bottom">km</span>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Longitude:</label>
                <input
                  type="number"
                  className="form-control border-0 border-bottom"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  step="0.00001"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Distance From City Center (km):</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control border-0 border-bottom"
                    name="distanceFromCityCenter"
                    value={formData.distanceFromCityCenter}
                    onChange={handleChange}
                  />
                  <span className="input-group-text border-0 border-bottom">km</span>
                </div>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Distance From ICICI Bank Sourcing Branch (km):</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control border-0 border-bottom"
                    name="distanceFromICICIBank"
                    value={formData.distanceFromICICIBank}
                    onChange={handleChange}
                  />
                  <span className="input-group-text border-0 border-bottom">km</span>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Latitude:</label>
                <input
                  type="number"
                  className="form-control border-0 border-bottom"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  step="0.00001"
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">One Way Distance From Operating Location (km):</label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control border-0 border-bottom"
                    name="oneWayDistance"
                    value={formData.oneWayDistance}
                    onChange={handleChange}
                  />
                  <span className="input-group-text border-0 border-bottom">km</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Location Map:</label>
              <div className="border p-2 text-center" style={{ height: "200px", backgroundColor: "#f8f9fa" }}>
                <p className="text-muted mt-4">Map visualization would appear here</p>
                <small className="text-muted">Latitude: {formData.latitude}, Longitude: {formData.longitude}</small>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button style={{ background:"#98291E"}} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default DistanceRangeForm;
