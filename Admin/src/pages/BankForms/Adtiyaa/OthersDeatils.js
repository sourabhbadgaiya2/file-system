import React, { useState } from 'react';

const OtherDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize state with all the fields
  const [formData, setFormData] = useState({
    frontAsPerPlan: 'M',
    frontActual: '0 R',
    frontDeviation: '',
    frontRemarks: '',
    side1AsPerPlan: 'M',
    side1Actual: '0 R',
    side1Deviation: 'Usage Deviation',
    side1Remarks: '',
    side2AsPerPlan: 'M',
    side2Actual: '0 R',
    side2Deviation: '',
    side2Remarks: '',
    rearAsPerPlan: 'M',
    rearActual: '0 R',
    rearDeviation: '',
    rearRemarks: '',
    totalValue: 2000000,
    distressValue: 16800000,
    insuranceValue: '',
    governmentValue: '',
    percentageCompletion: '100%',
    percentageRecommendation: '100%',
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
          <h4 className="m-0">Other Details</h4>
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
            <h5 className="mb-3">Setbacks</h5>
            <div className="row mb-3">
              <div className="col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Direction</th>
                      <th>As per plan/Bye laws</th>
                      <th>Actual at site</th>
                      <th>Deviation</th>
                      <th>Remarks, if any</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Front</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="frontAsPerPlan"
                          value={formData.frontAsPerPlan}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="frontActual"
                          value={formData.frontActual}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="frontDeviation"
                          value={formData.frontDeviation}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="frontRemarks"
                          value={formData.frontRemarks}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Side1 (Left)</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="side1AsPerPlan"
                          value={formData.side1AsPerPlan}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="side1Actual"
                          value={formData.side1Actual}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="side1Deviation"
                          value={formData.side1Deviation}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="side1Remarks"
                          value={formData.side1Remarks}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Side2 (Right)</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="side2AsPerPlan"
                          value={formData.side2AsPerPlan}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="side2Actual"
                          value={formData.side2Actual}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="side2Deviation"
                          value={formData.side2Deviation}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="side2Remarks"
                          value={formData.side2Remarks}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Rear</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="rearAsPerPlan"
                          value={formData.rearAsPerPlan}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="rearActual"
                          value={formData.rearActual}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="rearDeviation"
                          value={formData.rearDeviation}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="rearRemarks"
                          value={formData.rearRemarks}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Total Value</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="totalValue"
                    value={formData.totalValue}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Distress Value (80%)</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="distressValue"
                    value={formData.distressValue}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Insurance Value</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="insuranceValue"
                    value={formData.insuranceValue}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Government Value</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    name="governmentValue"
                    value={formData.governmentValue}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label className="form-label">Percentage Completion</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="percentageCompletion"
                    value={formData.percentageCompletion}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="mb-3">
                  <label className="form-label">Percentage Recommendation</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="percentageRecommendation"
                    value={formData.percentageRecommendation}
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

export default OtherDetails;