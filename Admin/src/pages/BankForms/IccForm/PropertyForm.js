import React, { useState } from "react"
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"

const PropertyForm = () => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [formData, setFormData] = useState({
    pincode: "453115",
    state: "Madhya Pradesh",
    city: "Indore",
    district: "Indore",
    locality: "NA",
    streetName: "NA",
    landmark: "NA",
    plotNo: "B-42",
    propertyType: "Residential",
    unitType: "Plot",
    revenueRecordType:
      "PLOT NO. B-42 FAMOUS VILLA VILLAGE TAKHEDI, TEHSIL DEPALPUR, DIST. INDORE",
    sanctionUsage: "Residential",
    actualUsage: "Residential",
    plotArea: 1275,
    propertyJurisdiction: "Gram Panchayat",
    sanctionAuthorityName: "GP",
    societyRegistered: false,
    uniquePropertyID: "01000",
    propertyEntranceFacing: "East",
    affFlag: false,
    propertyTransactionType: "Resale (Others)",
    countOfProperties: 1,
    doorPhotoWithNamePlate: false,
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:5000/api/form-submit ",
        formData,
      )
      console.log("Data sent successfully:", response.data)
      setIsEditOpen(false)
    } catch (error) {
      console.error("Error sending data:", error)
    }
  }

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#98291E", cursor: "pointer" }}
        onClick={() => setIsEditOpen(!isEditOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Property Details</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={e => {
              e.stopPropagation()
              setIsEditOpen(!isEditOpen)
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
                <label className="form-label fw-semibold">Pincode:</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">State:</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">City:</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">District:</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Locality:</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="locality"
                  value={formData.locality}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Street Name & No.:
                </label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="streetName"
                  value={formData.streetName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Landmark:</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Plot No.:</label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="plotNo"
                  value={formData.plotNo}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Property Type:</label>
                <select
                  className="form-control border-0 border-bottom"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                >
                  <option value="Non Residential">Non Residential</option>
                  <option value="Residential">Residential</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Unit Type:</label>
                <select
                  className="form-control border-0 border-bottom"
                  name="unitType"
                  value={formData.unitType}
                  onChange={handleChange}
                >
                  <option value="Plot">Plot</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-12">
                <label className="form-label fw-semibold">
                  Revenue Record Type & Number:
                </label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="revenueRecordType"
                  value={formData.revenueRecordType}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Sanction Usage:
                </label>
                <select
                  className="form-control border-0 border-bottom"
                  name="sanctionUsage"
                  value={formData.sanctionUsage}
                  onChange={handleChange}
                >
                  <option value="Residential">Residential</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Actual Usage:</label>
                <select
                  className="form-control border-0 border-bottom"
                  name="actualUsage"
                  value={formData.actualUsage}
                  onChange={handleChange}
                >
                  <option value="Residential">Residential</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Plot Area (Sqft):
                </label>
                <input
                  type="number"
                  className="form-control border-0 border-bottom"
                  name="plotArea"
                  value={formData.plotArea}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Property Jurisdiction:
                </label>
                <select
                  className="form-control border-0 border-bottom"
                  name="propertyJurisdiction"
                  value={formData.propertyJurisdiction}
                  onChange={handleChange}
                >
                  <option value="Gram Panchayat">Gram Panchayat</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Sanction Authority Name:
                </label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="sanctionAuthorityName"
                  value={formData.sanctionAuthorityName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Society Registered:
                </label>
                <select
                  className="form-control border-0 border-bottom"
                  name="societyRegistered"
                  value={formData.societyRegistered}
                  onChange={handleChange}
                >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Unique Property ID:
                </label>
                <input
                  type="text"
                  className="form-control border-0 border-bottom"
                  name="uniquePropertyID"
                  value={formData.uniquePropertyID}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Property Entrance Facing:
                </label>
                <select
                  className="form-control border-0 border-bottom"
                  name="propertyEntranceFacing"
                  value={formData.propertyEntranceFacing}
                  onChange={handleChange}
                >
                  <option value="East">East</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">AFF Flag:</label>
                <select
                  className="form-control border-0 border-bottom"
                  name="affFlag"
                  value={formData.affFlag}
                  onChange={handleChange}
                >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Property Transaction Type:
                </label>
                <select
                  className="form-control border-0 border-bottom"
                  name="propertyTransactionType"
                  value={formData.propertyTransactionType}
                  onChange={handleChange}
                >
                  <option value="Resale (Others)">Resale (Others)</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Count Of Properties:
                </label>
                <input
                  type="number"
                  className="form-control border-0 border-bottom"
                  name="countOfProperties"
                  value={formData.countOfProperties}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Door Photo With Name Plate:
                </label>
                <select
                  className="form-control border-0 border-bottom"
                  name="doorPhotoWithNamePlate"
                  value={formData.doorPhotoWithNamePlate}
                  onChange={handleChange}
                >
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
            </div>

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

export default PropertyForm
