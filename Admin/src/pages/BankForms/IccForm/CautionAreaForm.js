import React, { useState } from "react"
import Axios from "axios" // Axios import
import "bootstrap/dist/css/bootstrap.min.css"

const CautionAreaForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    anyChemicalHazard: false,
    nearCrematorium: false,
    probableRoadExtension: false,
    statutoryNoticesOnProperty: false,
    communityDominated: false,
    nearGarbageDump: false,
    propertyAccessIssues: false,
    underHighTensionLine: false,
    floodProne: false,
    nearNalla: false,
    propertyIsLandLocked: false,
    landReservation: false,
    nearToRailTrack: false,
    slumArea: false,
  })

  const handleChange = e => {
    const { name, checked } = e.target
    setFormData(prevData => ({ ...prevData, [name]: checked }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      // API request to send form data to the backend
      const response = await Axios.post(
        "http://localhost:5000/api/caution-from",
        formData,
      )
      console.log("Submitted Data:", formData)
      console.log("Backend Response:", response.data)
    } catch (error) {
      console.error("Error sending data to backend:", error)
    }
  }

  const cautionFields = [
    { name: "anyChemicalHazard", label: "Any Chemical Hazard" },
    { name: "nearCrematorium", label: "Near Crematorium" },
    { name: "probableRoadExtension", label: "Probable Road Extension" },
    {
      name: "statutoryNoticesOnProperty",
      label: "Statutory Notices On Property",
    },
    { name: "communityDominated", label: "Community Dominated" },
    { name: "nearGarbageDump", label: "Near Garbage Dump" },
    { name: "propertyAccessIssues", label: "Property Access Issues" },
    { name: "underHighTensionLine", label: "Under High Tension Line" },
    { name: "floodProne", label: "Flood Prone" },
    { name: "nearNalla", label: "Near Nalla" },
    { name: "propertyIsLandLocked", label: "Property Is Land Locked" },
    { name: "landReservation", label: "Land Reservation" },
    { name: "nearToRailTrack", label: "Near To Rail Track" },
    { name: "slumArea", label: "Slum Area" },
  ]

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#98291E", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Caution Area</h4>
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
            <div className="mb-3">
              <label className="form-label fw-bold"> Caution Factors</label>
              <div className="row">
                {cautionFields.map((item, index) => (
                  <div key={index} className="col-md-3 mb-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name={item.name}
                        checked={formData[item.name]}
                        onChange={handleChange}
                        id={item.name}
                      />
                      <label
                        className="form-check-label ms-1"
                        htmlFor={item.name}
                      >
                        {item.label}
                      </label>
                    </div>
                  </div>
                ))}
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

export default CautionAreaForm
