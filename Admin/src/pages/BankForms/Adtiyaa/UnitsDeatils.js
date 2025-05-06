import React, { useState } from 'react';

const UnitDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize state with all the fields
  const [formData, setFormData] = useState({
    groundFloorDetails: '2R+2H+IK+3LB',
    firstFloorDetails: '4R+IH+4LB',
    secondFloorDetails: 'IH',
    saleDeed: 'Fully Available',
    saleDeedDetails: 'NA',
    sanctionedPlan: 'Fully Available',
    sanctionedPlanDetails: 'NA',
    ccOc: 'Fully Available',
    ccOcDetails: 'NA',
    agreementToSale: 'Fully Available',
    agreementToSaleDetails: 'NA',
    mutationPossession: 'Fully Available',
    mutationPossessionDetails: 'NA',
    taxReceipt: 'Fully Available',
    taxReceiptDetails: 'NA',
    electricityBill: 'Fully Available',
    electricityBillDetails: 'NA',
    conversion: 'Fully Available',
    conversionDetails: 'NA',
    groundFloorArea: 2600,
    groundFloorPlanMatch: 'Yes',
    groundFloorDeviations: '',
    groundFloorRemarks: '',
    firstFloorArea: 2600,
    firstFloorPlanMatch: 'Yes',
    firstFloorDeviations: '',
    firstFloorRemarks: '',
    secondFloorArea: 800,
    secondFloorPlanMatch: '',
    secondFloorDeviations: '',
    secondFloorRemarks: '',
    totalArea: 6000,
    totalPlanMatch: 'Yes',
    totalDeviations: '',
    totalRemarks: '',
    plotAreaDeed: 5000,
    plotRateDeed: 2400,
    plotValueDeed: 12000000,
    plotAreaPhysical: 5000,
    plotRatePhysical: 2400,
    plotValuePhysical: 12000000,
    carpetAreaPlan: 0,
    carpetRatePlan: 0,
    carpetValuePlan: 0,
    carpetAreaMeasurement: 0,
    carpetRateMeasurement: 0,
    carpetValueMeasurement: 0,
    builtUpAreaNorms: 0,
    builtUpRateNorms: 0,
    builtUpValueNorms: 0,
    builtUpAreaMeasurement: 6000,
    builtUpRateMeasurement: 1500,
    builtUpValueMeasurement: 9000000,
    superBuiltUpArea: 0,
    superBuiltUpRate: 0,
    superBuiltUpValue: 0,
    carParkArea: 0,
    carParkRate: 0,
    carParkValue: 0,
    amenitiesArea: 0,
    amenitiesRate: 0,
    amenitiesValue: 0,
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
          <h4 className="m-0">Unit Details</h4>
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
            <h5 className="mb-3">Accommodation/Unit Details</h5>
            
            <div className="row mb-3">
              <div className="col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Building</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ground Floor</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="groundFloorDetails"
                          value={formData.groundFloorDetails}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>FIRST FLOOR</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="firstFloorDetails"
                          value={formData.firstFloorDetails}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>SECOND FLOOR</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="secondFloorDetails"
                          value={formData.secondFloorDetails}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h5 className="mb-3">Document Availability</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Sale Deed/Allotment Letter</label>
                  <select 
                    className="form-select" 
                    name="saleDeed"
                    value={formData.saleDeed}
                    onChange={handleChange}
                  >
                    <option value="Fully Available">Fully Available</option>
                    <option value="Partially Available">Partially Available</option>
                    <option value="Not Available">Not Available</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="saleDeedDetails"
                    value={formData.saleDeedDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Sanctioned Plan</label>
                  <select 
                    className="form-select" 
                    name="sanctionedPlan"
                    value={formData.sanctionedPlan}
                    onChange={handleChange}
                  >
                    <option value="Fully Available">Fully Available</option>
                    <option value="Partially Available">Partially Available</option>
                    <option value="Not Available">Not Available</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="sanctionedPlanDetails"
                    value={formData.sanctionedPlanDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">CC/OC</label>
                  <select 
                    className="form-select" 
                    name="ccOc"
                    value={formData.ccOc}
                    onChange={handleChange}
                  >
                    <option value="Fully Available">Fully Available</option>
                    <option value="Partially Available">Partially Available</option>
                    <option value="Not Available">Not Available</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="ccOcDetails"
                    value={formData.ccOcDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Agreement to Sale</label>
                  <select 
                    className="form-select" 
                    name="agreementToSale"
                    value={formData.agreementToSale}
                    onChange={handleChange}
                  >
                    <option value="Fully Available">Fully Available</option>
                    <option value="Partially Available">Partially Available</option>
                    <option value="Not Available">Not Available</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="agreementToSaleDetails"
                    value={formData.agreementToSaleDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Mutation/Possession Letter</label>
                  <select 
                    className="form-select" 
                    name="mutationPossession"
                    value={formData.mutationPossession}
                    onChange={handleChange}
                  >
                    <option value="Fully Available">Fully Available</option>
                    <option value="Partially Available">Partially Available</option>
                    <option value="Not Available">Not Available</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="mutationPossessionDetails"
                    value={formData.mutationPossessionDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Tax Receipt</label>
                  <select 
                    className="form-select" 
                    name="taxReceipt"
                    value={formData.taxReceipt}
                    onChange={handleChange}
                  >
                    <option value="Fully Available">Fully Available</option>
                    <option value="Partially Available">Partially Available</option>
                    <option value="Not Available">Not Available</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="taxReceiptDetails"
                    value={formData.taxReceiptDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Electricity Bill</label>
                  <select 
                    className="form-select" 
                    name="electricityBill"
                    value={formData.electricityBill}
                    onChange={handleChange}
                  >
                    <option value="Fully Available">Fully Available</option>
                    <option value="Partially Available">Partially Available</option>
                    <option value="Not Available">Not Available</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="electricityBillDetails"
                    value={formData.electricityBillDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Conversion</label>
                  <select 
                    className="form-select" 
                    name="conversion"
                    value={formData.conversion}
                    onChange={handleChange}
                  >
                    <option value="Fully Available">Fully Available</option>
                    <option value="Partially Available">Partially Available</option>
                    <option value="Not Available">Not Available</option>
                    <option value="Not Applicable">Not Applicable</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Details</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="conversionDetails"
                    value={formData.conversionDetails}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <h5 className="mb-3 mt-4">Built Up Area</h5>
            <div className="row mb-3">
              <div className="col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Floor</th>
                      <th>As per Site</th>
                      <th>As per Plan/FAR</th>
                      <th>Deviations</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ground Floor</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="groundFloorArea"
                          value={formData.groundFloorArea}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <select 
                          className="form-select" 
                          name="groundFloorPlanMatch"
                          value={formData.groundFloorPlanMatch}
                          onChange={handleChange}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="groundFloorDeviations"
                          value={formData.groundFloorDeviations}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="groundFloorRemarks"
                          value={formData.groundFloorRemarks}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>FIRST FLOOR</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="firstFloorArea"
                          value={formData.firstFloorArea}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <select 
                          className="form-select" 
                          name="firstFloorPlanMatch"
                          value={formData.firstFloorPlanMatch}
                          onChange={handleChange}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="firstFloorDeviations"
                          value={formData.firstFloorDeviations}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="firstFloorRemarks"
                          value={formData.firstFloorRemarks}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>SECOND FLOOR</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="secondFloorArea"
                          value={formData.secondFloorArea}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="secondFloorPlanMatch"
                          value={formData.secondFloorPlanMatch}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="secondFloorDeviations"
                          value={formData.secondFloorDeviations}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="secondFloorRemarks"
                          value={formData.secondFloorRemarks}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="totalArea"
                          value={formData.totalArea}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <select 
                          className="form-select" 
                          name="totalPlanMatch"
                          value={formData.totalPlanMatch}
                          onChange={handleChange}
                        >
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="totalDeviations"
                          value={formData.totalDeviations}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="totalRemarks"
                          value={formData.totalRemarks}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h5 className="mb-3">Detailing</h5>
            <div className="row mb-3">
              <div className="col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Area in Sqft</th>
                      <th>Rate per Sqft</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Plot Area (in Deed)</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="plotAreaDeed"
                          value={formData.plotAreaDeed}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="plotRateDeed"
                          value={formData.plotRateDeed}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="plotValueDeed"
                          value={formData.plotValueDeed}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Plot Area (as per physical)</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="plotAreaPhysical"
                          value={formData.plotAreaPhysical}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="plotRatePhysical"
                          value={formData.plotRatePhysical}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="plotValuePhysical"
                          value={formData.plotValuePhysical}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Carpet Area (as per plan)</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="carpetAreaPlan"
                          value={formData.carpetAreaPlan}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="carpetRatePlan"
                          value={formData.carpetRatePlan}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="carpetValuePlan"
                          value={formData.carpetValuePlan}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Carpet Area (as per measurement)</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="carpetAreaMeasurement"
                          value={formData.carpetAreaMeasurement}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="carpetRateMeasurement"
                          value={formData.carpetRateMeasurement}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="carpetValueMeasurement"
                          value={formData.carpetValueMeasurement}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Built Up Area (as per Norms)</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="builtUpAreaNorms"
                          value={formData.builtUpAreaNorms}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="builtUpRateNorms"
                          value={formData.builtUpRateNorms}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="builtUpValueNorms"
                          value={formData.builtUpValueNorms}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Built Up Area (as per measurement)</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="builtUpAreaMeasurement"
                          value={formData.builtUpAreaMeasurement}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="builtUpRateMeasurement"
                          value={formData.builtUpRateMeasurement}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="builtUpValueMeasurement"
                          value={formData.builtUpValueMeasurement}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Super Built-Up Area</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="superBuiltUpArea"
                          value={formData.superBuiltUpArea}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="superBuiltUpRate"
                          value={formData.superBuiltUpRate}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="superBuiltUpValue"
                          value={formData.superBuiltUpValue}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Car Park</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="carParkArea"
                          value={formData.carParkArea}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="carParkRate"
                          value={formData.carParkRate}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="carParkValue"
                          value={formData.carParkValue}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Amenities</td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="amenitiesArea"
                          value={formData.amenitiesArea}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="amenitiesRate"
                          value={formData.amenitiesRate}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="number" 
                          className="form-control" 
                          name="amenitiesValue"
                          value={formData.amenitiesValue}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UnitDetails;