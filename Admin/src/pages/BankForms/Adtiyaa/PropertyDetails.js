import React, { useState } from 'react';

const PropertyDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize state with all the fields
  const [formData, setFormData] = useState({
    occupancy: 'Occupied',
    occupiedBy: '',
    occupiedSince: '',
    occupantName: 'AMAN PATIDAR',
    propertyDemarcated: 'Yes',
    propertyIdentification: 'YES',
    identificationThrough: 'LOCAL ENQUIRY',
    projectCategory: 'Not Applicable',
    flatType: 'Normal',
    flatConfiguration: 'NA',
    propertyHolding: 'Freehold',
    typeOfStructure: 'RCC',
    plotArea: '5000 SQFT',
    totalFloors: 'G+2',
    liftFacility: 'YES',
    amenities: 'NA',
    marketability: 'Average',
    propertyView: 'NORMAL',
    parkingFacility: 'YES',
    parkingType: 'Open CP',
    constructionQuality: 'Class A',
    propertyShape: 'Regular',
    propertyPlacement: 'NE Facing Corner Plot',
    propertyExteriors: 'Average',
    propertyInteriors: 'Average',
    propertyAge: 1,
    residualAge: 59,
    ageSource: 'COSTUMER',
    propertyMaintenance: 'Average',
    cautiousLocation: 'NA',
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
          <h4 className="m-0">Property Details</h4>
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
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Occupancy</label>
                  <select 
                    className="form-select" 
                    name="occupancy"
                    value={formData.occupancy}
                    onChange={handleChange}
                  >
                    <option value="Occupied">Occupied</option>
                    <option value="Vacant">Vacant</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Occupied By</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="occupiedBy"
                    value={formData.occupiedBy}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Occupied Since</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="occupiedSince"
                    value={formData.occupiedSince}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Name of the Occupant</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="occupantName"
                    value={formData.occupantName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Property Demarcated</label>
                  <select 
                    className="form-select" 
                    name="propertyDemarcated"
                    value={formData.propertyDemarcated}
                    onChange={handleChange}
                  >
                    <option value="Yes">Yes</option>
                    <option value="Partially">Partially</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Property Identification</label>
                  <select 
                    className="form-select" 
                    name="propertyIdentification"
                    value={formData.propertyIdentification}
                    onChange={handleChange}
                  >
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Identification through</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="identificationThrough"
                    value={formData.identificationThrough}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Project Category</label>
                  <select 
                    className="form-select" 
                    name="projectCategory"
                    value={formData.projectCategory}
                    onChange={handleChange}
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="A+">A+</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Flat Type</label>
                  <select 
                    className="form-select" 
                    name="flatType"
                    value={formData.flatType}
                    onChange={handleChange}
                  >
                    <option value="Normal">Normal</option>
                    <option value="Duplex">Duplex</option>
                    <option value="Not applicable">Not applicable</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Flat Configuration</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="flatConfiguration"
                    value={formData.flatConfiguration}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Property Holding</label>
                  <select 
                    className="form-select" 
                    name="propertyHolding"
                    value={formData.propertyHolding}
                    onChange={handleChange}
                  >
                    <option value="Freehold">Freehold</option>
                    <option value="Leasehold">Leasehold</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Type of Structure</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="typeOfStructure"
                    value={formData.typeOfStructure}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Area of PLOT</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="plotArea"
                    value={formData.plotArea}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Total No of Floors</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="totalFloors"
                    value={formData.totalFloors}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Lift Facility</label>
                  <select 
                    className="form-select" 
                    name="liftFacility"
                    value={formData.liftFacility}
                    onChange={handleChange}
                  >
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Amenities</label>
                  <select 
                    className="form-select" 
                    name="amenities"
                    value={formData.amenities}
                    onChange={handleChange}
                  >
                    <option value="Average">Average</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Low">Low</option>
                    <option value="NA">NA</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Marketability</label>
                  <select 
                    className="form-select" 
                    name="marketability"
                    value={formData.marketability}
                    onChange={handleChange}
                  >
                    <option value="Average">Average</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">View of the Property</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="propertyView"
                    value={formData.propertyView}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Parking Facility</label>
                  <select 
                    className="form-select" 
                    name="parkingFacility"
                    value={formData.parkingFacility}
                    onChange={handleChange}
                  >
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Type of Parking</label>
                  <select 
                    className="form-select" 
                    name="parkingType"
                    value={formData.parkingType}
                    onChange={handleChange}
                  >
                    <option value="Open CP">Open CP</option>
                    <option value="Dependent CP">Dependent CP</option>
                    <option value="Covered CP">Covered CP</option>
                    <option value="Mechanical CP">Mechanical CP</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Quality of Construction</label>
                  <select 
                    className="form-select" 
                    name="constructionQuality"
                    value={formData.constructionQuality}
                    onChange={handleChange}
                  >
                    <option value="Class A">Class A</option>
                    <option value="Class B">Class B</option>
                    <option value="Class C">Class C</option>
                    <option value="Class D">Class D</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Shape of the Property</label>
                  <select 
                    className="form-select" 
                    name="propertyShape"
                    value={formData.propertyShape}
                    onChange={handleChange}
                  >
                    <option value="Regular">Regular</option>
                    <option value="Irregular">Irregular</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Placement of the Property</label>
                  <select 
                    className="form-select" 
                    name="propertyPlacement"
                    value={formData.propertyPlacement}
                    onChange={handleChange}
                  >
                    <option value="NE Facing Corner Plot">NE Facing Corner Plot</option>
                    <option value="Corner Plot">Corner Plot</option>
                    <option value="Intermittent Property">Intermittent Property</option>
                    <option value="South Facing">South Facing</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Exteriors of the Property</label>
                  <select 
                    className="form-select" 
                    name="propertyExteriors"
                    value={formData.propertyExteriors}
                    onChange={handleChange}
                  >
                    <option value="Average">Average</option>
                    <option value="Poor">Poor</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Interiors of the Property</label>
                  <select 
                    className="form-select" 
                    name="propertyInteriors"
                    value={formData.propertyInteriors}
                    onChange={handleChange}
                  >
                    <option value="Average">Average</option>
                    <option value="Poor">Poor</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Age of the Property</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="propertyAge"
                    value={formData.propertyAge}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Residual Age</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="residualAge"
                    value={formData.residualAge}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Source of age of Property</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="ageSource"
                    value={formData.ageSource}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Maintenance of the Property</label>
                  <select 
                    className="form-select" 
                    name="propertyMaintenance"
                    value={formData.propertyMaintenance}
                    onChange={handleChange}
                  >
                    <option value="Average">Average</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Cautious Location</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="cautiousLocation"
                    value={formData.cautiousLocation}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;