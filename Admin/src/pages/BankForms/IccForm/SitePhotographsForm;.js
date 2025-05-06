import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate a unique formId

const SitePhotographsForm = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [formId, setFormId] = useState(""); // State to store formId

  // Generate a unique formId using uuid
  useEffect(() => {
    const generatedFormId = uuidv4();  // Generate unique ID for the form
    setFormId(generatedFormId);  // Set it in the state
  }, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setPhotos(prev => [...prev, ...files]);
  };

  const removePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if formId is available
    if (!formId) {
      alert("Form ID is required.");
      return;
    }

    const formData = new FormData();
    
    // Append files to formData
    photos.forEach((file) => {
      formData.append("imageFile", file);
    });

    // Append formId to formData
    formData.append("formId", formId);

    try {
      // Post data to the backend API
      const response = await axios.post("http://localhost:5000/api/upload-from", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle success
      console.log("Server Response:", response.data);
      alert("Photos uploaded successfully!");
      setPhotos([]); // Clear the photos after upload
      setIsEditOpen(false); // Close edit mode
    } catch (error) {
      // Handle errors
      console.error("Error uploading photos:", error);
      alert("Error uploading photos.");
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
          <h4 className="m-0">Site Photographs</h4>
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
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Please upload site photographs (interior and exterior) *
              </label>

              {/* Single Photo Upload Input */}
              <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
              </div>

              {/* Photo Thumbnails */}
              <div className="row">
                {photos.map((file, index) => (
                  <div key={index} className="col-md-3 mb-3">
                    <div className="card h-100">
                      <div className="card-img-top" style={{ height: "150px", overflow: "hidden" }}>
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Photo ${index + 1}`}
                          className="img-fluid h-100 w-100 object-fit-cover"
                        />
                      </div>
                      <div className="card-body p-2">
                        <small className="text-muted d-block text-truncate">{file.name}</small>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm mt-2 w-100"
                          onClick={() => removePhoto(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="alert alert-info">
                <small>
                  * Please upload clear photographs of all sides of the property and interior spaces.
                </small>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              <button style={{ background: "#98291E" }} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SitePhotographsForm;
