import React, { useState, useEffect } from 'react';

const BasicDetails = ({ initialData = {}, onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localData, setLocalData] = useState({
    valuerName: '',
    clientName: '',
    initiationDate: '',
    vertical: '',
    visitDate: '',
    caseReferenceNumber: '',
    propertyOwners: ''
  });

  useEffect(() => {
    if (initialData) {
      setLocalData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...localData, [name]: value };
    setLocalData(updatedData);
    if (onDataChange) {
      onDataChange(updatedData); // 🔥 direct updatedData bhej rahe hain
    }
  };

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Basic Details</h4>
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
                  <label className="form-label">Name of the Valuer</label>
                  <input
                    type="text"
                    className="form-control"
                    name="valuerName"
                    value={localData.valuerName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Name of the Client</label>
                  <input
                    type="text"
                    className="form-control"
                    name="clientName"
                    value={localData.clientName}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Initiation Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="initiationDate"
                    value={localData.initiationDate?.substr(0, 10) || ''}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Vertical</label>
                  <input
                    type="text"
                    className="form-control"
                    name="vertical"
                    value={localData.vertical}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <label className="form-label">Visit Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="visitDate"
                    value={localData.visitDate?.substr(0, 10) || ''}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Case Reference Number</label>
              <input
                type="text"
                className="form-control"
                name="caseReferenceNumber"
                value={localData.caseReferenceNumber}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Name of the Property Owner(s)</label>
              <textarea
                className="form-control"
                name="propertyOwners"
                value={localData.propertyOwners}
                onChange={handleChange}
                rows="3"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicDetails;
