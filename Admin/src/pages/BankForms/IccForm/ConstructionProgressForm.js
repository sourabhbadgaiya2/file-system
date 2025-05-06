import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; // Axios import for API call

const ConstructionProgressForm = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [formData, setFormData] = useState({
    typeOfStructure: "Load Bearing",
    structureConfiguration: "G + 1",
    resolutionAmenities: 100,
    recommendationAmenities: 100,
    amenityCompletion: 100,
    amenityRecommendation: 100,
    structureCompletion: 100,
    structureRecommendation: 100,
    recommendedValue: 33000000,
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API request to send form data
      const response = await axios.post('http://localhost:5000/api/construction-from', formData);

      // Handle success response
      console.log('Response from server:', response.data);

      // Show success message to user
      alert('Form submitted successfully!');

      // After submission, form is closed
      setIsEditOpen(false);

      // Optional: Reset the form data after submission
      // setFormData({
      //   typeOfStructure: "Load Bearing",
      //   structureConfiguration: "G + 1",
      //   resolutionAmenities: 100,
      //   recommendationAmenities: 100,
      //   amenityCompletion: 100,
      //   amenityRecommendation: 100,
      //   structureCompletion: 100,
      //   structureRecommendation: 100,
      //   recommendedValue: 33000000,
      //   comments: ""
      // });
    } catch (error) {
      // Handle error response
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
          <h4 className="m-0">Construction Progress Details</h4>
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
                <label className="form-label">Type of Structure:</label>
                <select
                  className="form-select"
                  name="typeOfStructure"
                  value={formData.typeOfStructure}
                  onChange={handleChange}
                >
                  <option value="Load Bearing">Load Bearing</option>
                  <option value="RCC Frame">RCC Frame</option>
                  <option value="Steel Frame">Steel Frame</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Structure Configuration:</label>
                <select
                  className="form-select"
                  name="structureConfiguration"
                  value={formData.structureConfiguration}
                  onChange={handleChange}
                >
                  <option value="G">Ground Floor</option>
                  <option value="G + 1">Ground + 1</option>
                  <option value="G + 2">Ground + 2</option>
                  <option value="G + 3">Ground + 3</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Resolution Amenities (%):</label>
                <input
                  type="number"
                  className="form-control"
                  name="resolutionAmenities"
                  value={formData.resolutionAmenities}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Recommendation Amenities (%):</label>
                <input
                  type="number"
                  className="form-control"
                  name="recommendationAmenities"
                  value={formData.recommendationAmenities}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Amenity Completion (%):</label>
                <input
                  type="number"
                  className="form-control"
                  name="amenityCompletion"
                  value={formData.amenityCompletion}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Amenity Recommendation (%):</label>
                <input
                  type="number"
                  className="form-control"
                  name="amenityRecommendation"
                  value={formData.amenityRecommendation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Structure Completion (%):</label>
                <input
                  type="number"
                  className="form-control"
                  name="structureCompletion"
                  value={formData.structureCompletion}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Structure Recommendation (%):</label>
                <input
                  type="number"
                  className="form-control"
                  name="structureRecommendation"
                  value={formData.structureRecommendation}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Recommended Value:</label>
              <div className="input-group">
                <span className="input-group-text">¥</span>
                <input
                  type="number"
                  className="form-control"
                  name="recommendedValue"
                  value={formData.recommendedValue}
                  onChange={handleChange}
                />
              </div>
              <div className="form-text">
                {new Intl.NumberFormat('en-IN').format(formData.recommendedValue)} (Thirty Three Lakh Rupees Only)
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Comments on Construction:</label>
              <textarea
                className="form-control"
                rows="3"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Please enter your remarks here..."
              ></textarea>
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

export default ConstructionProgressForm;
