import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const TechnicalDocumentsForm = ({ onDataChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [documents, setDocuments] = useState([
    { name: 'APPROVED LAYOUT PLAN', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'APPROVED FLOOR PLAN', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'CONSTRUCTION PERMISSION / BUILDING', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'BUILDING COMPLETION CERTIFICATE / OCCUPATION PERMISSION / USE PERMISSION / POSSESSION CERTIFICATE', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'NON AGRICULTURAL PERMISSION / LAND CONVERSION / DIVERSION ORDER', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'LOCATION SKETCH / CERTIFICATE', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'PROPERTY TAX RECEIPTS', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'AUTHORITY TAX RECEIPTS', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'CONSTRUCTION ESTIMATE FROM REGISTERED ENGINEER / ARCHITECT', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'IMPROVEMENT / EXTENSION ESTIMATE FROM REGISTERED ENGINEER / ARCHITECT', recdType: '', refNo: '', refDate: '', approvalDetails: '' },
    { name: 'REMARKS ON DOCUMENTS VERIFIED', recdType: '', refNo: '', refDate: '', approvalDetails: '' }
  ]);

  const handleDocumentChange = (index, field, value) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index][field] = value;
    setDocuments(updatedDocuments);
    onDataChange(prev => ({ ...prev, documents: updatedDocuments }));
  };

  return (
    <div className="accordion-item mb-4">
      <div
        className="accordion-header p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">TECHNICAL DOCUMENTS DETAILS</h4>
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
            <h5 className="mb-3">DOCUMENT VERIFICATION DETAILS</h5>
            
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>DOCUMENT NAME</th>
                    <th>RECD TYPE</th>
                    <th>REF NO.</th>
                    <th>REF DATE</th>
                    <th>DETAILS OF APPROVAL</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, index) => (
                    <tr key={index}>
                      <td>{doc.name}</td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={doc.recdType}
                          onChange={(e) => handleDocumentChange(index, 'recdType', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={doc.refNo}
                          onChange={(e) => handleDocumentChange(index, 'refNo', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="date"
                          className="form-control"
                          value={doc.refDate}
                          onChange={(e) => handleDocumentChange(index, 'refDate', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="form-control"
                          value={doc.approvalDetails}
                          onChange={(e) => handleDocumentChange(index, 'approvalDetails', e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnicalDocumentsForm;