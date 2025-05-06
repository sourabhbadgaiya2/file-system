import React, { useState } from 'react';

const PhysicalDetails = ({ onDataChange }) => {
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
          <h4 className="m-0">Physical Details</h4>
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

            {/* Four Boundaries */}
            <h5>Four Boundaries of Property</h5>
            {['East', 'West', 'North', 'South'].map((dir) => (
              <div className="row" key={dir}>
                <div className="col-md-4">
                  <label className="form-label">{dir} - As per deed</label>
                  <input type="text" className="form-control" name={`deed_${dir}`} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">{dir} - As per Plan</label>
                  <input type="text" className="form-control" name={`plan_${dir}`} onChange={handleChange} />
                </div>
                <div className="col-md-4">
                  <label className="form-label">{dir} - Actual at site</label>
                  <input type="text" className="form-control" name={`actual_${dir}`} onChange={handleChange} />
                </div>
              </div>
            ))}

            <div className="row mt-3">
              <div className="col-md-6">
                <label className="form-label">Boundaries Matching</label>
                <select className="form-select" name="boundariesMatching" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label">Construction as per Approved Plan</label>
                <input type="text" className="form-control" name="constructionPlan" onChange={handleChange} />
              </div>
            </div>

            <hr />
            <h5>Plot Details</h5>
            <div className="row">
              <div className="col-md-4">
                <label className="form-label">Plot Area as per Measurement</label>
                <input type="text" className="form-control" name="plotArea" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Plot Demarcated at Site</label>
                <select className="form-select" name="demarcatedSite" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Land Use (As per master plan)</label>
                <input type="text" className="form-control" name="landUse" onChange={handleChange} />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-4">
                <label className="form-label">Electricity, Water, Drainage Present (Y/N)</label>
                <select className="form-select" name="basicUtilities" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Type of Locality</label>
                <input type="text" className="form-control" name="localityType" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Class of Locality</label>
                <select className="form-select" name="localityClass" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="High">High</option>
                  <option value="Middle">Middle</option>
                  <option value="Low">Low</option>
                  <option value="Slum">Slum</option>
                </select>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-4">
                <label className="form-label">Is Community Dominated Area</label>
                <select className="form-select" name="communityDominated" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Width of Public Road (ft)</label>
                <input type="text" className="form-control" name="publicRoadWidth" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Property Easily Located</label>
                <select className="form-select" name="easilyLocated" onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </div>
            </div>

            <div className="mb-3 mt-3">
              <label className="form-label">If No, Mention Reasons</label>
              <input type="text" className="form-control" name="notLocatedReason" onChange={handleChange} />
            </div>

            <hr />
            <h5>Property Location & Type</h5>
            <div className="row">
              <div className="col-md-4">
                <label className="form-label">Under Authority</label>
                <input type="text" className="form-control" name="authority" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Location Code</label>
                <input type="text" className="form-control" name="locationCode" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Distance from Branch (KM)</label>
                <input type="text" className="form-control" name="branchDistance" onChange={handleChange} />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label className="form-label">Type on Verification</label>
                <input type="text" className="form-control" name="typeVerified" onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Type on Documents</label>
                <input type="text" className="form-control" name="typeDocuments" onChange={handleChange} />
              </div>
            </div>

            <hr />
            <h5>Unit Details</h5>
            <div className="row">
              <div className="col-md-3">
                <label className="form-label">Unit</label>
                <input type="text" className="form-control" name="unitDetail" onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <label className="form-label">No. of Rooms</label>
                <input type="text" className="form-control" name="rooms" onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <label className="form-label">No. of Kitchens</label>
                <input type="text" className="form-control" name="kitchens" onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <label className="form-label">No. of Bathrooms</label>
                <input type="text" className="form-control" name="bathrooms" onChange={handleChange} />
              </div>
            </div>

            <hr />
            <h5>Structure & Condition</h5>
            <div className="row">
              <div className="col-md-4">
                <label className="form-label">Structure</label>
                <input type="text" className="form-control" name="structureType" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Interior Quality</label>
                <input type="text" className="form-control" name="interiorQuality" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Exterior Quality</label>
                <input type="text" className="form-control" name="exteriorQuality" onChange={handleChange} />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-4">
                <label className="form-label">Maintenance Level</label>
                <input type="text" className="form-control" name="maintenanceLevel" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Roof Type</label>
                <input type="text" className="form-control" name="roofType" onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Wall Quality</label>
                <input type="text" className="form-control" name="wallQuality" onChange={handleChange} />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-6">
                <label className="form-label">Age of Property (Years)</label>
                <input type="number" className="form-control" name="ageOfProperty" onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label">Residual Age of Property (Years)</label>
                <input type="number" className="form-control" name="residualAge" onChange={handleChange} />
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default PhysicalDetails;
