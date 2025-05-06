import React, { useState } from 'react';

const OccupancyDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Occupancy & Violations Details</h4>
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
        <div className="accordion-body p-3 border rounded mt-2" style={{ backgroundColor: "#f8f9fa" }}>
          <div className="card-body">

            {/* OCCUPANCY DETAILS - SUBJECT UNIT */}
            <h5 className="mb-3">Occupancy Details - Subject Unit</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Status of Occupancy</label>
                <input 
                  type="text" 
                  name="statusOfOccupancy" 
                  className="form-control"
                  defaultValue="VACANT"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Occupied By</label>
                <input 
                  type="text" 
                  name="occupiedBy" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Relationship of Occupant with Customer</label>
                <input 
                  type="text" 
                  name="occupantRelationship" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Occupied Since</label>
                <input 
                  type="text" 
                  name="occupiedSince" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* OCCUPANCY DETAILS - SUBJECT SCHEME */}
            <h5 className="mb-3">Occupancy Details - Subject Scheme</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">No. of Units Occupied in Particular Scheme</label>
                <input 
                  type="text" 
                  name="unitsOccupiedInScheme" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Percentage of Occupancy in Particular Scheme</label>
                <input 
                  type="text" 
                  name="occupancyPercentageInScheme" 
                  className="form-control"
                  defaultValue="80%"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">Percentage of Habitation in Particular Area (1 Kms)</label>
                <input 
                  type="text" 
                  name="habitationPercentage" 
                  className="form-control"
                  defaultValue="85%"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* VIOLATIONS OBSERVED */}
            <h5 className="mb-3">Violations Observed If Any</h5>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Is there encroachment of land (Y/N)</label>
                <input 
                  type="text" 
                  name="encroachment" 
                  className="form-control"
                  defaultValue="NO"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Area of Encroachment</label>
                <input 
                  type="text" 
                  name="encroachmentArea" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Any Deviation in Structure</label>
                <input 
                  type="text" 
                  name="structureDeviation" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Risk of Demolition/Sealing (Nil/Low/Medium/High)</label>
                <input 
                  type="text" 
                  name="riskLevel" 
                  className="form-control"
                  defaultValue="LOW"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-12 mb-3">
                <label className="form-label">If plans not available then is the structure confirming to local byelaws</label>
                <input 
                  type="text" 
                  name="structureConfirmingByelaws" 
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default OccupancyDetails;
