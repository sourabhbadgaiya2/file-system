import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const CharacteristicProperty = () => {
  const data = {
    development: "Average Developing",
    surroundingUsage: [
      { name: "Agricultural", selected: false },
      { name: "Commercial", selected: false },
      { name: "Dry Vacant Land", selected: false },
      { name: "Industrial", selected: false },
      { name: "Institutional", selected: false },
      { name: "Logistic", selected: false },
      { name: "Residential", selected: true },
      { name: "Residential Cum Commercial", selected: false },
      { name: "Warehouse", selected: false },
    ],
    localityClassification: "High Class",
    facilities: [
      { name: "Electrical Line", selected: true },
      { name: "Gated Communities", selected: false },
      { name: "Road", selected: true },
      { name: "Street Light", selected: true },
      { name: "Telephone Line", selected: false },
    ],
    waterSupply: [
      { name: "Bore Well", selected: true },
      { name: "Local Body Water Connection", selected: false },
      { name: "Open Well", selected: false },
      { name: "Over Head Tank", selected: false },
      { name: "Under Ground Sump", selected: false },
    ],
    sanitarySystem: [
      { name: "Septic Tank", selected: true },
      { name: "Sewage Treatment Plant", selected: false },
      { name: "Under Ground Sewage System", selected: true },
    ],
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">Characteristics of Property</h2>

      {/* Development(Locality) */}
      <div className="mb-3">
        <label className="form-label fw-bold">Development (Locality) *</label>
        <div className="border p-2 bg-light rounded">
          {data?.development || "N/A"}
        </div>
      </div>

      {/* Usage of Surrounding Property */}
      <div className="mb-3">
        <label className="form-label fw-bold">
          Usage of Surrounding Property *
        </label>
        <div className="d-flex flex-wrap gap-2">
          {data?.surroundingUsage?.map((item, index) => (
            <span
              key={index}
              className={`badge px-3 py-2 ${
                item.selected ? "bg-primary text-white" : "bg-light text-muted"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Classification of Locality */}
      <div className="mb-3">
        <label className="form-label fw-bold">
          Classification of Locality *
        </label>
        <div className="border p-2 bg-light rounded">
          {data?.localityClassification || "N/A"}
        </div>
      </div>

      {/* Facility Available */}
      <div className="mb-3">
        <label className="form-label fw-bold">Facility Available *</label>
        <div className="d-flex flex-wrap gap-2">
          {data?.facilities?.map((item, index) => (
            <span
              key={index}
              className={`badge px-3 py-2 ${
                item.selected ? "bg-primary text-white" : "bg-light text-muted"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Water Supply */}
      <div className="mb-3">
        <label className="form-label fw-bold">Water Supply</label>
        <div className="d-flex flex-wrap gap-2">
          {data?.waterSupply?.map((item, index) => (
            <span
              key={index}
              className={`badge px-3 py-2 ${
                item.selected ? "bg-primary text-white" : "bg-light text-muted"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Sanitary System */}
      <div className="mb-3">
        <label className="form-label fw-bold">Sanitary System</label>
        <div className="d-flex flex-wrap gap-2">
          {data?.sanitarySystem?.map((item, index) => (
            <span
              key={index}
              className={`badge px-3 py-2 ${
                item.selected ? "bg-primary text-white" : "bg-light text-muted"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CharacteristicProperty
