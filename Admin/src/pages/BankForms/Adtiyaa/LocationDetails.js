import React, { useState } from 'react';

const LocationDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize state with all the fields
  const [formData, setFormData] = useState({
    propertyAddressTRF: 'PROPERTY IS PLOT NO.05(PART-1) AND PLOT NO. 05, IS LAND PART OF KHASRA NO.79,80,81,82,83/10/I/K,(NEW KHASRA NO. 79/10/I/4(S),80,81,82,83/10/I/4), SITUATED AT GRAM-MISROD,WARD NO.52, TEHSIL-KOLAR,DIST-BHOPAL,MP,462047',
    propertyAddressVisit: 'PROPERTY IS PLOT NO.05(PART-1) AND PLOT NO. 05, IS LAND PART OF KHASRA NO.79,80,81,82,83/10/I/K,(NEW KHASRA NO. 79/10/I/4(S),80,81,82,83/10/I/4), SITUATED AT GRAM-MISROD,WARD NO.52, TEHSIL-KOLAR,DIST-BHOPAL,MP,462047',
    propertyAddressDocs: 'PROPERTY IS PLOT NO.05(PART-1) AND PLOT NO. 05, IS LAND PART OF KHASRA NO.79,80,81,82,83/10/I/K,(NEW KHASRA NO. 79/10/I/4(S),80,81,82,83/10/I/4), SITUATED AT GRAM-MISROD,WARD NO.52, TEHSIL-KOLAR,DIST-BHOPAL,MP,462047',
    mainLocality: 'MISROD',
    subLocality: 'MISROD ROAD',
    microLocation: 'CORAL WOODS',
    landmark: 'CORAL WOODS',
    latitude: '23.164204',
    longitude: '77.464502',
    propertyType: 'RESIDENTIAL',
    currentUsage: 'RESIDENTIAL',
    previousValuation: 'No',
    previousValuationDate: 'NA',
    propertySubType: 'HOUSE',
    locality: 'Well Developed',
    propertyFallingWithin: 'Municipal Corporation',
    occupancyLevel: 'Densely Populated',
    siteCondition: 'Well Developed',
    distanceRailway: '8 KM (RANKAMLAPATI Railway station)',
    distanceBusStop: '2 KM',
    distanceMainRoad: 'Not Applicable (Prop on Mid Road)',
    distanceCityCentre: '10 KMS',
    distanceABFLBranch: '10 KMS',
    approachRoadWidth: 'Width 20 to 40 ft.',
    propertyDimensions: 'NA',
    naField: 'NA',
    depthInFeet: 'NA',
    physicalApproach: 'Clear',
    legalApproach: 'Clear',
    otherFeatures: 'NO',
  });

  // Handle change in form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      onDataChange(updatedData);  // Pass the updated data to parent component
      return updatedData;
    });
  };

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Location Details</h4>
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
            <div className="mb-3">
              <label className="form-label">Property Address as Per TRF</label>
              <textarea
                className="form-control"
                name="propertyAddressTRF"
                value={formData.propertyAddressTRF}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Property Address as Per Visit</label>
              <textarea
                className="form-control"
                name="propertyAddressVisit"
                value={formData.propertyAddressVisit}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Property Address as Per Docs</label>
              <textarea
                className="form-control"
                name="propertyAddressDocs"
                value={formData.propertyAddressDocs}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Main Locality</label>
                  <input
                    type="text"
                    className="form-control"
                    name="mainLocality"
                    value={formData.mainLocality}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Sub Locality</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subLocality"
                    value={formData.subLocality}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Micro Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="microLocation"
                    value={formData.microLocation}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Landmark</label>
                  <input
                    type="text"
                    className="form-control"
                    name="landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Latitude</label>
                  <input
                    type="text"
                    className="form-control"
                    name="latitude"
                    value={formData.latitude}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Longitude</label>
                  <input
                    type="text"
                    className="form-control"
                    name="longitude"
                    value={formData.longitude}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Type of Property</label>
                  <select
                    className="form-select"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                  >
                    <option value="RESIDENTIAL">RESIDENTIAL</option>
                    <option value="COMMERCIAL">COMMERCIAL</option>
                    <option value="INDUSTRIAL">INDUSTRIAL</option>
                    <option value="INSTITUTIONAL">INSTITUTIONAL</option>
                    <option value="AGRICULTURE">AGRICULTURE</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Current Usage</label>
                  <select
                    className="form-select"
                    name="currentUsage"
                    value={formData.currentUsage}
                    onChange={handleChange}
                  >
                    <option value="RESIDENTIAL">RESIDENTIAL</option>
                    <option value="COMMERCIAL">COMMERCIAL</option>
                    <option value="INDUSTRIAL">INDUSTRIAL</option>
                    <option value="INSTITUTIONAL">INSTITUTIONAL</option>
                    <option value="AGRICULTURE">AGRICULTURE</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Previous Valuation Done?</label>
                  <select
                    className="form-select"
                    name="previousValuation"
                    value={formData.previousValuation}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">If yes, when</label>
                  <input
                    type="text"
                    className="form-control"
                    name="previousValuationDate"
                    value={formData.previousValuationDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Property Sub Type</label>
              <input
                type="text"
                className="form-control"
                name="propertySubType"
                value={formData.propertySubType}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Locality</label>
                  <select
                    className="form-select"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                  >
                    <option value="Well Developed">Well Developed</option>
                    <option value="Developing">Developing</option>
                    <option value="Under Develop">Under Develop</option>
                    <option value="Slum">Slum</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Property Falling Within</label>
                  <select
                    className="form-select"
                    name="propertyFallingWithin"
                    value={formData.propertyFallingWithin}
                    onChange={handleChange}
                  >
                    <option value="Municipal Corporation">Municipal Corporation</option>
                    <option value="Gram Panchayat">Gram Panchayat</option>
                    <option value="Town Planning Authority">Town Planning Authority</option>
                    <option value="Development Authority">Development Authority</option>
                    <option value="Municipality">Municipality</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Occupancy Level of the Surrounding</label>
              <select
                className="form-select"
                name="occupancyLevel"
                value={formData.occupancyLevel}
                onChange={handleChange}
              >
                <option value="Densely Populated">Densely Populated</option>
                <option value="Moderately Populated">Moderately Populated</option>
                <option value="Low Population density">Low Population density</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Condition of the Site of the Property</label>
              <select
                className="form-select"
                name="siteCondition"
                value={formData.siteCondition}
                onChange={handleChange}
              >
                <option value="Well Developed">Well Developed</option>
                <option value="Developing">Developing</option>
                <option value="Under Developed">Under Developed</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Distance to Railway/Metro Station</label>
              <input
                type="text"
                className="form-control"
                name="distanceRailway"
                value={formData.distanceRailway}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Distance to Bus Stop</label>
              <input
                type="text"
                className="form-control"
                name="distanceBusStop"
                value={formData.distanceBusStop}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Distance of Plot from Main Road</label>
              <select
                className="form-select"
                name="distanceMainRoad"
                value={formData.distanceMainRoad}
                onChange={handleChange}
              >
                <option value="Not Applicable (Prop on Mid Road)">Not Applicable (Prop on Mid Road)</option>
                <option value="Less than 200 m">Less than 200 m</option>
                <option value="200 to 500 m">200 to 500 m</option>
                <option value="above 500 m">above 500 m</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Distance from City Centre</label>
              <input
                type="text"
                className="form-control"
                name="distanceCityCentre"
                value={formData.distanceCityCentre}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Distance from ABFL Branch</label>
              <input
                type="text"
                className="form-control"
                name="distanceABFLBranch"
                value={formData.distanceABFLBranch}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Width of the Approach Road</label>
              <select
                className="form-select"
                name="approachRoadWidth"
                value={formData.approachRoadWidth}
                onChange={handleChange}
              >
                <option value="Width >40 ft.">Width 40 ft.</option>
                <option value="Width 20 to 40 ft.">Width 20 to 40 ft.</option>
                <option value="Clear width<10ft">Clear width 10ft</option>
                <option value="Mud Road">Mud Road</option>
                <option value="Illegal Road (Without document)">Illegal Road (Without document)</option>
              </select>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Dimensions of the Property</label>
                  <input
                    type="text"
                    className="form-control"
                    name="propertyDimensions"
                    value={formData.propertyDimensions}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">NA</label>
                  <input
                    type="text"
                    className="form-control"
                    name="naField"
                    value={formData.naField}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Depth in Feet</label>
                  <input
                    type="text"
                    className="form-control"
                    name="depthInFeet"
                    value={formData.depthInFeet}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Physical Approach to the Property</label>
                  <select
                    className="form-select"
                    name="physicalApproach"
                    value={formData.physicalApproach}
                    onChange={handleChange}
                  >
                    <option value="Clear">Clear</option>
                    <option value="Partially Clear">Partially Clear</option>
                    <option value="Not Clear">Not Clear</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Legal Approach to the Property</label>
                  <select
                    className="form-select"
                    name="legalApproach"
                    value={formData.legalApproach}
                    onChange={handleChange}
                  >
                    <option value="Clear">Clear</option>
                    <option value="Partially Clear">Partially Clear</option>
                    <option value="Not Clear">Not Clear</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Any other features like board of other financier indicating mortgage, notice of Court/any authority which may affect the security
              </label>
              <select
                className="form-select"
                name="otherFeatures"
                value={formData.otherFeatures}
                onChange={handleChange}
              >
                <option value="YES">YES</option>
                <option value="NO">NO</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDetails;