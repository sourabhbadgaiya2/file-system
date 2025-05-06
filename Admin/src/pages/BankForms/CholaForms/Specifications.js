import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PropertyDetailsForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [propertyData, setPropertyData] = useState({
        totalFloors: 2,
        noOfUnits: 1,
        totalMarketValue: 2580000,
        fsuFar: 2,
        achieved: 2,
        distress: 80,
        distressValue: 2064000,
        carpetArea: 980,
        carpetAreaInSqMtr: 89.283,
        areaType: [
            { type: 'Land', plan: 600, site: 600, rate: 1500, valuationPlan: 800000, valuationMarket: 900000 },
            { type: 'Ground floor', plan: 600, site: 600, rate: 1400, valuationPlan: 840000, valuationMarket: 840000 },
            { type: 'Floor 1', plan: 600, site: 600, rate: 1400, valuationPlan: 840000, valuationMarket: 840000 },
        ],
        builtUpArea: 1200,
        guidelineValue: 474,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPropertyData({ ...propertyData, [name]: value });
    };

    const handleAreaTypeChange = (index, field, value) => {
        const updatedAreaType = [...propertyData.areaType];
        updatedAreaType[index] = { ...updatedAreaType[index], [field]: value };
        setPropertyData({ ...propertyData, areaType: updatedAreaType });
    };

    return (
        <div className="container mt-4">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <div
                        className="p-3 border rounded"
                        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="d-flex justify-content-between align-items-center text-white">
                            <h4 className="m-0">Conditions</h4>
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
                    <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <div className="area-type">
                                <h5>Area Type</h5>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Area Type</th>
                                            <th>As per Plan (In SqFt)</th>
                                            <th>As per Site (In SqFt)</th>
                                            <th>Rate Per Sq/Ft</th>
                                            <th>Valuation as per Plan</th>
                                            <th>Valuation as per Site Market value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {propertyData.areaType.map((area, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <input
                                                        type="text"
                                                        value={area.type}
                                                        onChange={(e) => handleAreaTypeChange(index, 'type', e.target.value)}
                                                        className="form-control"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={area.plan}
                                                        onChange={(e) => handleAreaTypeChange(index, 'plan', e.target.value)}
                                                        className="form-control"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={area.site}
                                                        onChange={(e) => handleAreaTypeChange(index, 'site', e.target.value)}
                                                        className="form-control"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={area.rate}
                                                        onChange={(e) => handleAreaTypeChange(index, 'rate', e.target.value)}
                                                        className="form-control"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={area.valuationPlan}
                                                        onChange={(e) => handleAreaTypeChange(index, 'valuationPlan', e.target.value)}
                                                        className="form-control"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={area.valuationMarket}
                                                        onChange={(e) => handleAreaTypeChange(index, 'valuationMarket', e.target.value)}
                                                        className="form-control"
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan="6">Built up Area: {propertyData.builtUpArea}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-4">
                                    <label>Total No of Floors</label>
                                    <input type="number" name="totalFloors" value={propertyData.totalFloors} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <label>No.of Units</label>
                                    <input type="number" name="noOfUnits" value={propertyData.noOfUnits} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <label>Total Market Value</label>
                                    <input type="number" name="totalMarketValue" value={propertyData.totalMarketValue} onChange={handleChange} className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label>FSU/FAR</label>
                                    <input type="number" name="fsuFar" value={propertyData.fsuFar} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label>Achieved</label>
                                    <input type="number" name="achieved" value={propertyData.achieved} onChange={handleChange} className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <h5>AMENITIES</h5>
                                    <input type="text" placeholder="Amount 1" className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label>Distressed Value (In %)</label>
                                    <input type="number" name="distress" value={propertyData.distress} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label>Distress Value</label>
                                    <input type="number" name="distressValue" value={propertyData.distressValue} onChange={handleChange} className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <label>Carpet Area (sq feet)</label>
                                    <input type="number" name="carpetArea" value={propertyData.carpetArea} onChange={handleChange} className="form-control" />
                                </div>
                                <div className="col-md-6">
                                    <label>Carpet Area (sq meter)</label>
                                    <input type="number" name="carpetAreaInSqMtr" value={propertyData.carpetAreaInSqMtr} onChange={handleChange} className="form-control" />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-12">
                                    <h5>RENTAL DETAILS</h5>
                                    <textarea placeholder="Gross Rent Received For Similar Properties In Locality" className="form-control"></textarea>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end">
              <button style={{background:"#30384B"}} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsForm;