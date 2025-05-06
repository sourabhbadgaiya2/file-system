import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const PropertyDetails = ({ onDataChange }) => {
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
          <h4 className="m-0">PROPERTY DETAILS</h4>
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
            <h5 className="mb-3">Occupant Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Occupant Status</label>
                <select
                  name="occupantStatus"
                  className="form-control"
                  defaultValue="VACANT"
                  onChange={handleChange}
                >
                  <option value="VACANT">VACANT</option>
                  <option value="OCCUPIED">OCCUPIED</option>
                </select>
              </Col>
              <Col md={4}>
                <label className="form-label">Name of Occupant</label>
                <input
                  type="text"
                  name="occupantName"
                  className="form-control"
                  defaultValue="CPER FLOT"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Relation with applicant</label>
                <input
                  type="text"
                  name="occupantRelation"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Building Details</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Property Demarcation</label>
                <input
                  type="text"
                  name="propertyDemarcation"
                  className="form-control"
                  defaultValue="MR. SUNL KUMAR, CONT NO – 7897499327"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Property Identified through</label>
                <input
                  type="text"
                  name="propertyIdentifiedThrough"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Type of structure</label>
                <input
                  type="text"
                  name="structureType"
                  className="form-control"
                  defaultValue="RCC (PROPOSED)"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Long/First Area</label>
                <input
                  type="text"
                  name="longFirstArea"
                  className="form-control"
                  defaultValue="480"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">No of Block/Hiring</label>
                <input
                  type="text"
                  name="blockHiringCount"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">No of Units per floor</label>
                <input
                  type="text"
                  name="unitsPerFloor"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">No. of Floors</label>
                <input
                  type="text"
                  name="floorsCount"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">No. of Units in each wing</label>
                <input
                  type="text"
                  name="unitsPerWing"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Unit Details</h5>
            <Row className="mb-3">
              <Col md={4}>
                <label className="form-label">Located on Floor No.</label>
                <input
                  type="text"
                  name="floorNumber"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">No. of rooms</label>
                <input
                  type="text"
                  name="roomsCount"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={4}>
                <label className="form-label">Carpet Area</label>
                <input
                  type="text"
                  name="carpetArea"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Super Built-up</label>
                <input
                  type="text"
                  name="superBuiltUp"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Construction Details</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Quality of Construction: Exteriors</label>
                <input
                  type="text"
                  name="constructionQuality"
                  className="form-control"
                  defaultValue="AVERAGE"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Age of the property</label>
                <input
                  type="text"
                  name="propertyAge"
                  className="form-control"
                  defaultValue="0"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Residual life</label>
                <input
                  type="text"
                  name="residualLife"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">SANCTION PLAN APPROVAL & OTHER DOCUMENTS DETAILS</h5>
            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Constructed plans verified with approval no</label>
                <input
                  type="text"
                  name="planApprovalNo"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Construction as per approved plan</label>
                <input
                  type="text"
                  name="constructionAsPerPlan"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Construction permission</label>
                <input
                  type="text"
                  name="constructionPermission"
                  className="form-control"
                  defaultValue="NA"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Number and Date</label>
                <input
                  type="text"
                  name="permissionNumberDate"
                  className="form-control"
                  defaultValue="LA"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Ownership type</label>
                <input
                  type="text"
                  name="ownershipType"
                  className="form-control"
                  defaultValue="Localized Of Freehold"
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <label className="form-label">Property documents verified</label>
                <input
                  type="text"
                  name="documentsVerified"
                  className="form-control"
                  defaultValue="SAE DIED"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Is the property within Municipal Limits</label>
                <select
                  name="withinMunicipalLimits"
                  className="form-control"
                  onChange={handleChange}
                >
                  <option value="YES">YES</option>
                  <option value="NO">NO</option>
                </select>
              </Col>
              <Col md={6}>
                <label className="form-label">Permissible usage as per master plan</label>
                <input
                  type="text"
                  name="permissibleUsage"
                  className="form-control"
                  defaultValue="RESIDENTIAL"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <h5 className="mt-4 mb-3">Plan/Bye Laws Compliance</h5>
            <table className="table table-bordered mb-3">
              <thead>
                <tr>
                  <th>As per plan/ Bye laws</th>
                  <th>Attend at site</th>
                  <th>Floor No</th>
                  <th>As per plan/ bye laws</th>
                  <th>Attend at site</th>
                  <th>Deviation / Violations</th>
                  <th>Remarks, if any</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="text" name="planByeLaws1" className="form-control" defaultValue="MA" onChange={handleChange} /></td>
                  <td><input type="text" name="attendSite1" className="form-control" defaultValue="NA" onChange={handleChange} /></td>
                  <td><input type="text" name="floorNo1" className="form-control" defaultValue="0" onChange={handleChange} /></td>
                  <td><input type="text" name="planByeLaws2" className="form-control" onChange={handleChange} /></td>
                  <td><input type="text" name="attendSite2" className="form-control" onChange={handleChange} /></td>
                  <td><input type="text" name="deviation1" className="form-control" onChange={handleChange} /></td>
                  <td><input type="text" name="remarks1" className="form-control" onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td><input type="text" name="planByeLaws3" className="form-control" defaultValue="NO" onChange={handleChange} /></td>
                  <td><input type="text" name="attendSite3" className="form-control" onChange={handleChange} /></td>
                  <td><input type="text" name="floorNo2" className="form-control" onChange={handleChange} /></td>
                  <td><input type="text" name="planByeLaws4" className="form-control" onChange={handleChange} /></td>
                  <td><input type="text" name="attendSite4" className="form-control" onChange={handleChange} /></td>
                  <td><input type="text" name="deviation2" className="form-control" onChange={handleChange} /></td>
                  <td><input type="text" name="remarks2" className="form-control" onChange={handleChange} /></td>
                </tr>
              </tbody>
            </table>

            <h5 className="mt-4 mb-3">Description risk (if any to be highlighted)</h5>
            <Row className="mb-3">
              <Col md={12}>
                <textarea
                  name="riskDescription"
                  className="form-control"
                  rows="3"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <label className="form-label">Floor Wise Area (in sq. fts.)</label>
                <input
                  type="text"
                  name="floorWiseArea"
                  className="form-control"
                  onChange={handleChange}
                />
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;