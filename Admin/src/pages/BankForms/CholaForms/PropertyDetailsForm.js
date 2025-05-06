import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const PropertyDetailsForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    authorityLimit: "MUNICIPAL CORPORATION",
    approvingAuthority: "NAGAR NIGAM",
    basementApplicable: "",
    occupiedBy: "",
    sellerName: "SYNTHAPITAL TYAGI WO HR DE DEEPAK",
    personMustAtSite: "",
    approachRoad: "20 FT WBM ROAD",
    liftBackground: "",
    residualAge: "57",
    propertyAge: "3",
    refinanceAge: "36",
    latestSaleDeedRegistrationDate: "",
    levelType: "RESIDENTIAL",
    propertyUnitType: "G+ RESI HOUSE",
    isReraApproved: "",
    structureType: "STANDALONE",
    briefOnConditions: "G+ RESI HOUSE",
    propertyUsage: "",
    amenities: [
      { distance: "", name: "" },
      { distance: "1-3 KM", name: "BUS STOP" },
      { distance: "", name: "" },
      { distance: "3-5 KM", name: "CHITRANSH PUBLIC HR. SEC SCHOOL" },
      { distance: "> 5 KM", name: "BHOPAL JN" },
    ],
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAmenityChange = (index, field, value) => {
    const updatedAmenities = [...formData.amenities]
    updatedAmenities[index] = { ...updatedAmenities[index], [field]: value }
    setFormData({ ...formData, amenities: updatedAmenities })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("Submitted Data:", formData)
  }

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Conditions</h4>
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
            {/* Authority Section */}
            <div className="mb-4">
              <h5 className="fw-bold">Authority Details *</h5>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">Authority Limit</label>
                  <input
                    type="text"
                    name="authorityLimit"
                    value={formData.authorityLimit}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="MUNICIPAL CORPORATION"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">
                    Approving Authority
                  </label>
                  <input
                    type="text"
                    name="approvingAuthority"
                    value={formData.approvingAuthority}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="NAGAR NIGAM"
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label fw-bold">
                    Basement Applicable
                  </label>
                  <div className="d-flex gap-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="basementApplicable"
                        value="YES"
                        checked={formData.basementApplicable === "YES"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">YES</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="basementApplicable"
                        value="NO"
                        checked={formData.basementApplicable === "NO"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">NO</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Occupied By Section */}
            <div className="mb-4">
              <h5 className="fw-bold">Occupied by</h5>
              <div className="d-flex flex-wrap gap-4">
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="occupiedBy"
                      value="TENANT"
                      checked={formData.occupiedBy === "TENANT"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">TENANT</label>
                  </div>
                  <div className="form-check ms-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="occupiedBy"
                      value="SELLER_OCCUPIED"
                      checked={formData.occupiedBy === "SELLER_OCCUPIED"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">SELF-OCCUPIED</label>
                  </div>
                  <div className="form-check ms-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="occupiedBy"
                      value="VACANT"
                      checked={formData.occupiedBy === "VACANT"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">VACANT</label>
                  </div>
                </div>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="occupiedBy"
                      value="NA"
                      checked={formData.occupiedBy === "NA"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">NA</label>
                  </div>
                  <div className="form-check ms-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="occupiedBy"
                      value="SELLER_TENANT"
                      checked={formData.occupiedBy === "SELLER_TENANT"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label">SELF + TENANT</label>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Details */}
            <div className="mb-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">
                    Seller Name/Owner Name *
                  </label>
                  <input
                    type="text"
                    name="sellerName"
                    value={formData.sellerName}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="SYNTHAPITAL TYAGI WO HR DE DEEPAK"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">
                    Person must at Site *
                  </label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="personMustAtSite"
                        value="YES"
                        checked={formData.personMustAtSite === "YES"}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label">YES</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="personMustAtSite"
                        value="NO"
                        checked={formData.personMustAtSite === "NO"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">NO</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">
                    Conditions to Approach Route *
                  </label>
                  <input
                    type="text"
                    name="approachRoad"
                    value={formData.approachRoad}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="20 FT WBM ROAD"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">
                    Lift/Background *
                  </label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="liftBackground"
                        value="YES"
                        checked={formData.liftBackground === "YES"}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label">YES</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="liftBackground"
                        value="NO"
                        checked={formData.liftBackground === "NO"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">NO</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Age Section */}
            <div className="mb-4">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">
                    Residual Age of the Property *
                  </label>
                  <input
                    type="number"
                    name="residualAge"
                    value={formData.residualAge}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="57"
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">
                    Age of the Property *
                  </label>
                  <input
                    type="number"
                    name="propertyAge"
                    value={formData.propertyAge}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="3"
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">
                    Age of Refinance Property
                  </label>
                  <input
                    type="number"
                    name="refinanceAge"
                    value={formData.refinanceAge}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="36"
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">
                    Latest Sale Deed Registration Date
                  </label>
                  <input
                    type="text"
                    name="latestSaleDeedRegistrationDate"
                    value={formData.latestSaleDeedRegistrationDate}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            {/* Property Type Section */}
            <div className="mb-4">
              <div className="row">
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">Level Type *</label>
                  <input
                    type="text"
                    name="levelType"
                    value={formData.levelType}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="RESIDENTIAL"
                    required
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">
                    Property / Omitting unit type
                  </label>
                  <input
                    type="text"
                    name="propertyUnitType"
                    value={formData.propertyUnitType}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="G+ RESI HOUSE"
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">Structure Type *</label>
                  <select
                    name="structureType"
                    value={formData.structureType}
                    onChange={handleChange}
                    className="form-select border-0 border-bottom"
                    required
                  >
                    <option value="">Select</option>
                    <option value="STANDALONE">STANDALONE</option>
                    <option value="MULTISTOREY">MULTISTOREY</option>
                  </select>
                </div>
                <div className="col-md-3 mb-3">
                  <label className="form-label fw-bold">
                    Is Property RERA Approved *
                  </label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="isReraApproved"
                        value="YES"
                        checked={formData.isReraApproved === "YES"}
                        onChange={handleChange}
                        required
                      />
                      <label className="form-check-label">YES</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="isReraApproved"
                        value="NO"
                        checked={formData.isReraApproved === "NO"}
                        onChange={handleChange}
                      />
                      <label className="form-check-label">NO</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Brief on Conditions */}
            <div className="mb-4">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">
                    Brief On Conditions
                  </label>
                  <input
                    type="text"
                    name="briefOnConditions"
                    value={formData.briefOnConditions}
                    onChange={handleChange}
                    className="form-control border-0 border-bottom"
                    placeholder="G+ RESI HOUSE"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-bold">
                    Usage of Property *
                  </label>
                  <select
                    name="propertyUsage"
                    value={formData.propertyUsage}
                    onChange={handleChange}
                    className="form-select border-0 border-bottom"
                    required
                  >
                    <option value="">Select</option>
                    <option value="RESIDENTIAL">RESIDENTIAL</option>
                    <option value="COMMERCIAL">COMMERCIAL</option>
                    <option value="MIXED_USAGE">MIXED USAGE</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Amenities Table */}
            <div className="mb-4">
              <h5 className="fw-bold mb-3">SURROUNDING EXTERNAL AMENITIES</h5>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>S.NO</th>
                      <th>PREMISES LIST</th>
                      <th>APPROX. DIST. FROM PROPERTY</th>
                      <th>NAME OF THE PREMISES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.amenities.map((amenity, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {
                            [
                              "NEAREST HIGHWAY/MAJOR ROAD",
                              "NEAREST BUS STOP",
                              "NEAREST HOSPITAL",
                              "NEAREST SCHOOL/COLLEGE",
                              "NEAREST RAILWAY STATION",
                            ][index]
                          }
                        </td>
                        <td>
                          <input
                            type="text"
                            value={amenity.distance}
                            onChange={e =>
                              handleAmenityChange(
                                index,
                                "distance",
                                e.target.value,
                              )
                            }
                            className="form-control border-0"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            value={amenity.name}
                            onChange={e =>
                              handleAmenityChange(index, "name", e.target.value)
                            }
                            className="form-control border-0"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
  )
}
export default PropertyDetailsForm
