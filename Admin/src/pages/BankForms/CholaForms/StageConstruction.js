import React, { useState } from 'react';

const StageConstruction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    percentageCompleted: 100,
    surroundingDevelopment: 40,
    plinth: false,
    rccAboveGround: false,
    brickwork: false,
    internalPlaster: false,
    externalPlaster: false,
    flooring: false,
    plumbingElectricWork: false,
    doorWindowPaint: false,
    finishingPossession: false,
    totalCompletion: false,
    remarks: '',
    propertyImage: null,
    map: null,
    plan: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  return (
    <div className=" container   mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">TRANCHE 1</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={e => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border p-3 mt-2">
          <div className="mb-3">
            <label className="form-label">Percentage of property completed*</label>
            <input
              type="number"
              className="form-control"
              name="percentageCompleted"
              value={formData.percentageCompleted}
              onChange={handleChange}
              min="0"
              max="100"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Surrounding development details required in % *</label>
            <input
              type="number"
              className="form-control"
              name="surroundingDevelopment"
              value={formData.surroundingDevelopment}
              onChange={handleChange}
              min="0"
              max="100"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">ACTIVITY COMPLETED</label>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="plinth"
                    checked={formData.plinth}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">PLINTH</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="rccAboveGround"
                    checked={formData.rccAboveGround}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">R.C.C. ABOVE GROUND</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="brickwork"
                    checked={formData.brickwork}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">BRICKWORK</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="internalPlaster"
                    checked={formData.internalPlaster}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">INTERNAL PLASTER</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="externalPlaster"
                    checked={formData.externalPlaster}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">EXTERNAL PLASTER</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="flooring"
                    checked={formData.flooring}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">FLOORING</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="plumbingElectricWork"
                    checked={formData.plumbingElectricWork}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">PLUMBING & ELECTRIC WORK</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="doorWindowPaint"
                    checked={formData.doorWindowPaint}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">DOOR, WINDOW AND PAINT</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="finishingPossession"
                    checked={formData.finishingPossession}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">FINISHING AND POSSESSION</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="totalCompletion"
                    checked={formData.totalCompletion}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">TOTAL COMPLETION</label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Remarks</label>
            <textarea
              className="form-control"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Property image and Guideline value upload document *</label>
            <div className="input-group mb-2">
              <input
                type="file"
                className="form-control"
                name="propertyImage"
                onChange={handleChange}
              />
              {formData.propertyImage && (
                <button className="btn btn-outline-secondary" type="button">
                  Preview
                </button>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Map</label>
            <div className="input-group mb-2">
              <input
                type="file"
                className="form-control"
                name="map"
                onChange={handleChange}
              />
              {formData.map && (
                <button className="btn btn-outline-secondary" type="button">
                  Preview
                </button>
              )}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Plan</label>
            <div className="input-group mb-2">
              <input
                type="file"
                className="form-control"
                name="plan"
                onChange={handleChange}
              />
              {formData.plan && (
                <button className="btn btn-outline-secondary" type="button">
                  Preview
                </button>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-end">
              <button style={{background:"#30384B"}} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default StageConstruction;