import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ValuationForm = () => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  const [valuationMethodology, setValuationMethodology] = useState("saleComparison");

  const [landData, setLandData] = useState({
    area: 1275,
    ratePerSqFt: 0,
    amount: 0,
  });

  const [unitValueData, setUnitValueData] = useState([
    {
      floorDescription: "",
      shortCode: "",
      carpetAreaSqFt: 0,
      saleableAreaSqFt: 0,
      ratePerSqFt: 0,
      amount: 0,
    },
  ]);

  const [totalAppraisedValue, setTotalAppraisedValue] = useState(0);
  const [roundOffTotal, setRoundOffTotal] = useState(0);

  const [governmentRatesData, setGovernmentRatesData] = useState({
    landRate: 0,
    landArea: 0,
    landAmount: 0,
    constructionRate: 0,
    constructionArea: 0,
    constructionAmount: 0,
  });

  const [constructionDetails, setConstructionDetails] = useState({
    constructionAreaSqFt: 0,
    approvedCoverageSqFt: 0,
    costOfConstruction: 0,
  });

  const handleLandChange = (e) => {
    const { name, value } = e.target;
    setLandData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUnitValueChange = (index, e) => {
    const { name, value } = e.target;
    const updatedUnitValueData = [...unitValueData];
    updatedUnitValueData[index] = { ...updatedUnitValueData[index], [name]: value };
    setUnitValueData(updatedUnitValueData);
  };

  const handleGovRatesChange = (e) => {
    const { name, value } = e.target;
    setGovernmentRatesData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConstructionChange = (e) => {
    const { name, value } = e.target;
    setConstructionDetails((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleValuationMethodologyChange = (e) => {
    setValuationMethodology(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      valuation: {
        valuationMethodology,
        landData,
        unitValueData,
        totalAppraisedValue,
        roundOffTotal,
        governmentRatesData,
        constructionDetails,
      },
    };

    try {
      const response = await axios.post("http://localhost:5000/api/valuation-from", payload);
      console.log("Data submitted successfully:", response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#98291E", cursor: "pointer" }}
        onClick={() => setIsEditOpen(!isEditOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Valuation Methodology</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsEditOpen(!isEditOpen);
            }}
          >
            {isEditOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isEditOpen && (
        <div className="border rounded p-3 mt-2 bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Valuation Methodology</label>
              <select className="form-select" value={valuationMethodology} onChange={handleValuationMethodologyChange}>
                <option value="saleComparison">Sale Comparison</option>
                <option value="incomeApproach">Income Approach</option>
                <option value="costApproach">Cost Approach</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Land/Existing Structure Value</label>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Area (Sq.Ft)</th>
                      <th>Rate Per Sq.Ft (₹)</th>
                      <th>Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Plot Area (Sq.Ft)</td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={landData.area}
                          onChange={handleLandChange}
                          name="area"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={landData.ratePerSqFt}
                          onChange={handleLandChange}
                          name="ratePerSqFt"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={landData.amount}
                          onChange={handleLandChange}
                          name="amount"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Unit Value Data</label>
              {unitValueData.map((unit, index) => (
                <div key={index} className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Floor Description</th>
                        <th>Short Code</th>
                        <th>Carpet Area (Sq.Ft)</th>
                        <th>Saleable Area (Sq.Ft)</th>
                        <th>Rate Per Sq.Ft (₹)</th>
                        <th>Amount (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={unit.floorDescription}
                            onChange={(e) => handleUnitValueChange(index, e)}
                            name="floorDescription"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            value={unit.shortCode}
                            onChange={(e) => handleUnitValueChange(index, e)}
                            name="shortCode"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={unit.carpetAreaSqFt}
                            onChange={(e) => handleUnitValueChange(index, e)}
                            name="carpetAreaSqFt"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={unit.saleableAreaSqFt}
                            onChange={(e) => handleUnitValueChange(index, e)}
                            name="saleableAreaSqFt"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={unit.ratePerSqFt}
                            onChange={(e) => handleUnitValueChange(index, e)}
                            name="ratePerSqFt"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            value={unit.amount}
                            onChange={(e) => handleUnitValueChange(index, e)}
                            name="amount"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Total Appraised Value"
                value={totalAppraisedValue}
                onChange={(e) => setTotalAppraisedValue(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Round Off Total"
                value={roundOffTotal}
                onChange={(e) => setRoundOffTotal(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Valuation As Per Government Rates</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="buildingType"
                  id="commercial"
                />
                <label className="form-check-label" htmlFor="commercial">
                  Commercial
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="buildingType"
                  id="residential"
                  checked
                />
                <label className="form-check-label" htmlFor="residential">
                  Residential
                </label>
              </div>
            </div>

            <div className="mb-3">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Area (Sq.Ft)</th>
                      <th>Rate Per Sq.Ft (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Land/BU/SBU"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={governmentRatesData.landArea}
                          onChange={handleGovRatesChange}
                          name="landArea"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={governmentRatesData.landRate}
                          onChange={handleGovRatesChange}
                          name="landRate"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Construction"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={governmentRatesData.constructionArea}
                          onChange={handleGovRatesChange}
                          name="constructionArea"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className="form-control"
                          value={governmentRatesData.constructionRate}
                          onChange={handleGovRatesChange}
                          name="constructionRate"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Total Government Rates Value"
                value={governmentRatesData.landAmount + governmentRatesData.constructionAmount}
                readOnly
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Construction Details"
                value={constructionDetails.costOfConstruction}
                onChange={handleConstructionChange}
                name="costOfConstruction"
              />
            </div>

            <div className="d-flex justify-content-end">
              <button style={{ background: "#98291E" }} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ValuationForm;
