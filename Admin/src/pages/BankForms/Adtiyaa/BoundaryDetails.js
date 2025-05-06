import React, { useState } from 'react';

const BoundaryDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize state with all the fields
  const [formData, setFormData] = useState({
    northAsPerDocs: 'HIMALAY RESIDENCY AND COLONY',
    southAsPerDocs: 'ROAD',
    eastAsPerDocs: 'REMAINING LAND PART OF SELIER/ REMAINING LAND PART OF SELIER',
    westAsPerDocs: 'PLOT NO.05/ OTHER PLOT',
    northActual: 'HIMALAY COLONY',
    southActual: 'ROAD',
    eastActual: 'OPEN PLOT',
    westActual: 'OPEN PLOT',
    northBoundaryMatching: '',
    southBoundaryMatching: '',
    eastBoundaryMatching: 'NO',
    westBoundaryMatching: '',
    northRemarks: '',
    southRemarks: '',
    eastRemarks: '',
    westRemarks: '',
    additionalRemarks: `1. GIVEN XEROX COPY OF TWO SALE DEED IN FAVOUR OF 1) MR.CHOGMAL PATIDAR S.O LT.MR.RA.JARA PATIDAR, 2) MR.AMAN PATIDAR S/O MR.SANTOSH PATIDAR, 3) MR.ANMOJ. PATIDAR S/O MR.SANTOSH PATIDAR.

2. DURING PROPERTY VISIT MR. AMAN JI WAS MET AT THE PROPERTY HE IS CUSTOMER HIS CONTACT NO. 7049804167JIT WAS CLEARLY EXPLAINED TO HIM/HER THAT THE PROPERTY VISIT IS BEING DONE FOR VALUATION PURPOSE IN RELATION WITH LOAN PROPOSAL.

3. RATE HAS BEEN CONFIRM FROM LOCAL MARKET ENQUIRY.

4. PROPERTY IS SITUATED AT SURROUNDING AREA OF LOCALITY IS RESIDENTIAL ZONING.

5. AT SITE PROPERTY IS G+2 RESIDENTIAL HOUSE WHICH IS OCCUPIED BY OWNER

6. OBTAIN T AND CP LAYOUT PLAN MEMO NO. BPULP 8567/JPO4/29 ON DATED 15.03.2022 PROPERTY IS IDENTIFIED BY T AND CP LAYOUT 7.AS PER SITE BUILT UP AREA OF GF IS 2600 SOFT, FF IS 2600 SOFT, SF IS 800 SOFT. TOTAL BUILT UP AREA OF G+2 IS 6000 SOFT.

8. AS PER BOTH DEED AND AT SITE LAND AREA OF THE PROPERTY IS 5000 SOFT.

9. BUILDING PERMISSION AND MAP NOT OBTAIN. SAME IS REQUIRED.

10. LATEST PTR REQUIRED.

11. AS PER DEED LAND USES IS RESIDENTIAL.

12. BUILT-UP IS TAKEN ACTUAL AT SITE`,
    engineerName: 'ER.ARBAZ',
    propertyPhotos: 'Subject Property',
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
          <h4 className="m-0">Boundary Details</h4>
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
            <h5 className="mb-3">Boundary Detailing</h5>
            <div className="row mb-3">
              <div className="col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Detailing</th>
                      <th>North</th>
                      <th>South</th>
                      <th>East</th>
                      <th>West</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>As per docs.</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="northAsPerDocs"
                          value={formData.northAsPerDocs}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="southAsPerDocs"
                          value={formData.southAsPerDocs}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="eastAsPerDocs"
                          value={formData.eastAsPerDocs}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="westAsPerDocs"
                          value={formData.westAsPerDocs}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>As per Actual</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="northActual"
                          value={formData.northActual}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="southActual"
                          value={formData.southActual}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="eastActual"
                          value={formData.eastActual}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="westActual"
                          value={formData.westActual}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Boundary Matching</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="northBoundaryMatching"
                          value={formData.northBoundaryMatching}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="southBoundaryMatching"
                          value={formData.southBoundaryMatching}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="eastBoundaryMatching"
                          value={formData.eastBoundaryMatching}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="westBoundaryMatching"
                          value={formData.westBoundaryMatching}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Remarks:</td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="northRemarks"
                          value={formData.northRemarks}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="southRemarks"
                          value={formData.southRemarks}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="eastRemarks"
                          value={formData.eastRemarks}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <input 
                          type="text" 
                          className="form-control" 
                          name="westRemarks"
                          value={formData.westRemarks}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Additional Remarks</label>
              <textarea 
                className="form-control" 
                name="additionalRemarks"
                rows="8"
                value={formData.additionalRemarks}
                onChange={handleChange}
              />
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Name of the Engineer visited</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="engineerName"
                    value={formData.engineerName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">PHOTOGRAPHS OF PROPERTY</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="propertyPhotos"
                    value={formData.propertyPhotos}
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

export default BoundaryDetails;