import React, { useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';

const NdpAndSiteDetails = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    natureOfBuilding: '',
    functionOfUse: '',
    typeOfFoundation: '',
    concreteGrade: '',
    seismicZone: '',
    floodProneArea: '',
    environmentExposureCondition: '',
    windCyclones: '',
    nomeParameters: '',
    heightOfBuilding: '',
    horizontalFloorType: '',
    steelGrade: '',
    soilSlope: '',
    urbanFloods: '',
    tsunami: '',
    coastalRegulatoryZone: '',
    siteInvestigation: Array(9).fill({ completion: '', remarks: '' })
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (onDataChange) onDataChange({ ...formData, [name]: value });
  };

  const handleSiteInvestigationChange = (index, field, value) => {
    const updatedSiteInvestigation = [...formData.siteInvestigation];
    updatedSiteInvestigation[index] = { 
      ...updatedSiteInvestigation[index], 
      [field]: value 
    };
    setFormData(prev => ({ ...prev, siteInvestigation: updatedSiteInvestigation }));
    if (onDataChange) onDataChange({ ...formData, siteInvestigation: updatedSiteInvestigation });
  };

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">NDP AND SITE DETAILS</h4>
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
            <h5 className="mb-3">BUILDING DETAILS</h5>
            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Nature of Building/Wing/Tower</th>
                  <th>Stored alone Structure/slab building</th>
                  <th>NOME PARAMETERS</th>
                  <th>RCC Framed / Load Bearing / Steel / Composite/TEEN SHED</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select 
                      name="natureOfBuilding" 
                      className="form-control" 
                      value={formData.natureOfBuilding}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </td>
                  <td>
                    <select 
                      name="storedAloneStructure" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      name="nomeParameters" 
                      className="form-control" 
                      value={formData.nomeParameters}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select 
                      name="structureType" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="RCC Framed">RCC Framed</option>
                      <option value="Load Bearing">Load Bearing</option>
                      <option value="Steel">Steel</option>
                      <option value="Composite">Composite</option>
                      <option value="TEEN SHED">TEEN SHED</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Function of Use</th>
                  <th>Residential / Non-Residential / Critical Lifeline (Infrastructure/ development)</th>
                  <th>Height of Building above ground level</th>
                  <th>Less than 15m tall / between 15m to 45m / above 45m</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select 
                      name="functionOfUse" 
                      className="form-control" 
                      value={formData.functionOfUse}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Residential">Residential</option>
                      <option value="Non-Residential">Non-Residential</option>
                      <option value="Critical Lifeline">Critical Lifeline (Infrastructure/development)</option>
                    </select>
                  </td>
                  <td>
                    <select 
                      name="useCategory" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Residential">Residential</option>
                      <option value="Non-Residential">Non-Residential</option>
                      <option value="Critical Lifeline">Critical Lifeline</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      name="heightOfBuilding" 
                      className="form-control" 
                      value={formData.heightOfBuilding}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select 
                      name="heightCategory" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Less than 15m">Less than 15m tall</option>
                      <option value="15m to 45m">between 15m to 45m</option>
                      <option value="Above 45m">above 45m</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Type of foundation</th>
                  <th>Independent / Interconnected / Ref. / File / Not able to assess since completed property</th>
                  <th>Horizontal floor type</th>
                  <th>Beams and slabs / waffles / ribbed floors / first slab with drops</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select 
                      name="typeOfFoundation" 
                      className="form-control" 
                      value={formData.typeOfFoundation}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Independent">Independent</option>
                      <option value="Interconnected">Interconnected</option>
                      <option value="Ref.">Ref.</option>
                      <option value="File">File</option>
                      <option value="Not able to assess">Not able to assess since completed property</option>
                    </select>
                  </td>
                  <td>
                    <select 
                      name="foundationType" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Independent">Independent</option>
                      <option value="Interconnected">Interconnected</option>
                      <option value="Ref.">Ref.</option>
                      <option value="File">File</option>
                      <option value="Not able to assess">Not able to assess</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      name="horizontalFloorType" 
                      className="form-control" 
                      value={formData.horizontalFloorType}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select 
                      name="floorType" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Beams and slabs">Beams and slabs</option>
                      <option value="Waffles">waffles</option>
                      <option value="Ribbed floors">ribbed floors</option>
                      <option value="First slab with drops">first slab with drops</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Concrete Grade</th>
                  <th>M2S/ M3D / M4D / M4S / Not able to assess since completed property</th>
                  <th>Steel Grade</th>
                  <th>FF 450 / FF 500 / Not able to assess since completed property</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select 
                      name="concreteGrade" 
                      className="form-control" 
                      value={formData.concreteGrade}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="M2S">M2S</option>
                      <option value="M3D">M3D</option>
                      <option value="M4D">M4D</option>
                      <option value="M4S">M4S</option>
                      <option value="Not able to assess">Not able to assess since completed property</option>
                    </select>
                  </td>
                  <td>
                    <select 
                      name="concreteGradeDetail" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="M2S">M2S</option>
                      <option value="M3D">M3D</option>
                      <option value="M4D">M4D</option>
                      <option value="M4S">M4S</option>
                      <option value="Not able to assess">Not able to assess</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      name="steelGrade" 
                      className="form-control" 
                      value={formData.steelGrade}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select 
                      name="steelGradeDetail" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="FF 450">FF 450</option>
                      <option value="FF 500">FF 500</option>
                      <option value="Not able to assess">Not able to assess since completed property</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Seismic Zone</th>
                  <th>Zone II/ III / IV/ V</th>
                  <th>Soil Slope vunnetable to landslide</th>
                  <th>Very High Hazard zone/ High Hazard Zone/ Moderately High Hazard Zone/ Low Hazard Zone/ Very low Hazard zone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select 
                      name="seismicZone" 
                      className="form-control" 
                      value={formData.seismicZone}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Zone II">Zone II</option>
                      <option value="Zone III">Zone III</option>
                      <option value="Zone IV">Zone IV</option>
                      <option value="Zone V">Zone V</option>
                    </select>
                  </td>
                  <td>
                    <select 
                      name="seismicZoneDetail" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Zone II">Zone II</option>
                      <option value="Zone III">Zone III</option>
                      <option value="Zone IV">Zone IV</option>
                      <option value="Zone V">Zone V</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      name="soilSlope" 
                      className="form-control" 
                      value={formData.soilSlope}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select 
                      name="hazardZone" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Very High Hazard zone">Very High Hazard zone</option>
                      <option value="High Hazard Zone">High Hazard Zone</option>
                      <option value="Moderately High Hazard Zone">Moderately High Hazard Zone</option>
                      <option value="Low Hazard Zone">Low Hazard Zone</option>
                      <option value="Very low Hazard zone">Very low Hazard zone</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Flood prone Area</th>
                  <th>V/N</th>
                  <th>urban floods</th>
                  <th>Upstream/ Downstream</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select 
                      name="floodProneArea" 
                      className="form-control" 
                      value={formData.floodProneArea}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Yes">V</option>
                      <option value="No">N</option>
                    </select>
                  </td>
                  <td>
                    <select 
                      name="floodProne" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="V">V</option>
                      <option value="N">N</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      name="urbanFloods" 
                      className="form-control" 
                      value={formData.urbanFloods}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select 
                      name="floodDirection" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Upstream">Upstream</option>
                      <option value="Downstream">Downstream</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Environment Exposure Condition</th>
                  <th>MIB / Moderate/ Severe/ Very severe/ Extreme</th>
                  <th>Tsunami</th>
                  <th>V/N</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select 
                      name="environmentExposureCondition" 
                      className="form-control" 
                      value={formData.environmentExposureCondition}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="MIB">MIB</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Severe">Severe</option>
                      <option value="Very severe">Very severe</option>
                      <option value="Extreme">Extreme</option>
                    </select>
                  </td>
                  <td>
                    <select 
                      name="exposureCondition" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="MIB">MIB</option>
                      <option value="Moderate">Moderate</option>
                      <option value="Severe">Severe</option>
                      <option value="Very severe">Very severe</option>
                      <option value="Extreme">Extreme</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      name="tsunami" 
                      className="form-control" 
                      value={formData.tsunami}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select 
                      name="tsunamiProne" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="V">V</option>
                      <option value="N">N</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>Wind/Cyclones</th>
                  <th>Very High Damage risk Zone A/ Very High Damage risk Zone B/ Very High Damage Risk Zone C/ Moderate Damage Risk Zone D/ Moderate Damage Risk Zone E/ Low Damage Risk Zone</th>
                  <th>Coastal Regulatory Zone</th>
                  <th>CRZ I/ CRZ II/ CRZ III/ CRZ IV/NA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select 
                      name="windCyclones" 
                      className="form-control" 
                      value={formData.windCyclones}
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Very High Damage risk Zone A">Very High Damage risk Zone A</option>
                      <option value="Very High Damage risk Zone B">Very High Damage risk Zone B</option>
                      <option value="Very High Damage Risk Zone C">Very High Damage Risk Zone C</option>
                      <option value="Moderate Damage Risk Zone D">Moderate Damage Risk Zone D</option>
                      <option value="Moderate Damage Risk Zone E">Moderate Damage Risk Zone E</option>
                      <option value="Low Damage Risk Zone">Low Damage Risk Zone</option>
                    </select>
                  </td>
                  <td>
                    <select 
                      name="windRiskZone" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="Zone A">Very High Damage risk Zone A</option>
                      <option value="Zone B">Very High Damage risk Zone B</option>
                      <option value="Zone C">Very High Damage Risk Zone C</option>
                      <option value="Zone D">Moderate Damage Risk Zone D</option>
                      <option value="Zone E">Moderate Damage Risk Zone E</option>
                      <option value="Low Risk">Low Damage Risk Zone</option>
                    </select>
                  </td>
                  <td>
                    <input 
                      type="text" 
                      name="coastalRegulatoryZone" 
                      className="form-control" 
                      value={formData.coastalRegulatoryZone}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <select 
                      name="crzType" 
                      className="form-control" 
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option value="CRZ I">CRZ I</option>
                      <option value="CRZ II">CRZ II</option>
                      <option value="CRZ III">CRZ III</option>
                      <option value="CRZ IV">CRZ IV</option>
                      <option value="NA">NA</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>

            <h5 className="mt-4 mb-3">SITE INVESTIGATION</h5>
            <Table bordered responsive className="mb-4">
              <thead>
                <tr>
                  <th>SR. NO.</th>
                  <th>ACTIVITY</th>
                  <th>ALLOTED % FOR ACTIVITY</th>
                  <th>PRESENT COMPLETION (%)</th>
                  <th>REMARKS ON PROGRESS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, activity: "PLINTH", allotted: "20.00%" },
                  { id: 2, activity: "R.C.C. BOYE GROUND", allotted: "40.00%" },
                  { id: 3, activity: "BRICK WORK", allotted: "10%" },
                  { id: 4, activity: "INTERNAL PLASTER", allotted: "5.00%" },
                  { id: 5, activity: "EXTERNAL PLASTER", allotted: "5.00%" },
                  { id: 6, activity: "FLOORING", allotted: "5.00%" },
                  { id: 7, activity: "PLUMBING & ELECTRIFIC WORK", allotted: "5.00%" },
                  { id: 8, activity: "DOOR, WINDOW & PAINT", allotted: "5.00%" },
                  { id: 9, activity: "FINISHING & POSSESSION", allotted: "5.00%" },
                ].map((item, index) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.activity}</td>
                    <td>{item.allotted}</td>
                    <td>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={formData.siteInvestigation[index]?.completion || ''}
                        onChange={(e) => handleSiteInvestigationChange(index, 'completion', e.target.value)}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={formData.siteInvestigation[index]?.remarks || ''}
                        onChange={(e) => handleSiteInvestigationChange(index, 'remarks', e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="2">TOTAL COMPLETION (%)</td>
                  <td>100.00%</td>
                  <td>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={formData.siteInvestigation.reduce((sum, item) => sum + (parseFloat(item.completion) || 0), 0)}
                      readOnly
                    />
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default NdpAndSiteDetails;