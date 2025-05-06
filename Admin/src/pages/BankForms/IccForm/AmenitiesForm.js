import React, { useState, useEffect } from "react"
import Axios from "axios" // Axios import

const SurroundingAmenitiesForm = () => {
  const [formData, setFormData] = useState({
    airport: false,
    busStop: false,
    metroStation: false,
    railwayStation: false,
    rickshawStop: false,
    college: false,
    hospital: false,
    mail: false,
    placeOfWorship: false,
    school: false,
    superMarket: false,
    infraSurroundings: "",
    accessRoad: "",
    other: "",
    amenitiesImage: null,
  })

  const [isOpen, setIsOpen] = useState(false)

  // API call to send data to the backend
  const sendDataToBackend = async () => {
    try {
      const response = await Axios.post(
        "http://localhost:5000/api/amenities-from",
        formData,
      )
      console.log("Backend Response:", response.data)
    } catch (error) {
      console.error("Error sending data to backend:", error)
    }
  }

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked || e.target.value,
    })
  }

  const handleFileChange = e => {
    setFormData({ ...formData, amenitiesImage: e.target.files[0] })
  }

  const handleSubmit = e => {
    e.preventDefault()
    sendDataToBackend() // API call when the form is submitted
  }

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#98291E", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Surrounding Amenities</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={e => {
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
          >
            {isOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border rounded p-3 mt-2 bg-white">
          <form onSubmit={handleSubmit}>
            {/* Public Transport Section */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Public Transport in 1Km Vicinity
              </label>
              <div className="d-flex flex-wrap gap-3">
                {[
                  "airport",
                  "busStop",
                  "metroStation",
                  "railwayStation",
                  "rickshawStop",
                ].map((item, index) => (
                  <div className="form-check me-3" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={item}
                      checked={formData[item]}
                      onChange={handleChange}
                    />
                    <label className="form-check-label text-capitalize ms-1">
                      {item.replace(/([A-Z])/g, " $1")}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Amenities Section */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Other Amenities in 1Km Vicinity
              </label>
              <div className="d-flex flex-wrap gap-3">
                {[
                  "college",
                  "hospital",
                  "superMarket",
                  "mail",
                  "placeOfWorship",
                  "school",
                ].map((item, index) => (
                  <div className="form-check me-3" key={index}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={item}
                      checked={formData[item]}
                      onChange={handleChange}
                    />
                    <label className="form-check-label text-capitalize ms-1">
                      {item.replace(/([A-Z])/g, " $1")}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Infra Surroundings */}
            <div className="mb-3">
              <label className="form-label fw-bold">Infra Surroundings</label>
              <div className="d-flex gap-3">
                {["Developed", "Developing", "Under Developed"].map(
                  (option, index) => (
                    <div className="form-check" key={index}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="infraSurroundings"
                        value={option}
                        checked={formData.infraSurroundings === option}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">{option}</label>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Text Fields */}
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">
                  Width of Access Road(s):
                </label>
                <input
                  type="text"
                  name="accessRoad"
                  value={formData.accessRoad}
                  onChange={handleChange}
                  className="form-control border-0 border-bottom"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Any Other?</label>
                <input
                  type="text"
                  name="other"
                  value={formData.other}
                  onChange={handleChange}
                  className="form-control border-0 border-bottom"
                />
              </div>
            </div>

            {/* Amenities Image Upload */}
            <div className="mb-3">
              <label className="form-label fw-bold">
                Upload Amenities Image
              </label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
                className="form-control"
              />
              <small className="text-muted">JPEG, JPG, PNG (Max 500 KB)</small>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-end">
              <button
                style={{ background: "#98291E" }}
                type="submit"
                className="btn btn-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default SurroundingAmenitiesForm
