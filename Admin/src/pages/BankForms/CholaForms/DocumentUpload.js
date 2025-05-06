import React, { useState } from 'react';

const DocumentUpload = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [documents, setDocuments] = useState([
    { name: 'APPROVED LAYOUT PLAN', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
    { name: 'APPROVED FLOOR PLAN', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
    { name: 'CONSTRUCTION PERMISSION / BUILDING PERMISSION / CONVERGENCENT CERTIFICATE', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
    { name: 'BUILDING COMPETITION CERTIFICATE / OCCUPATION PERMISSION / USE PERMISSION / POSSESSION CERTIFICATE', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
    { name: 'NON-ADRICULTURAL PERMISSION / LAND CONVERSION / DIVERSION ORDER', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
    { name: 'LOCATION SKETCH/ CERTIFICATE', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
    { name: 'AGREEMENT FOR SALE / SALE DEED', type: 'Copy', refNo: 'NPG868602K4A1W782', refDate: 'IB/UI/2024', approvalDetails: 'SALE DEED' },
    { name: 'PRUDERITY TAX RECEIPTS', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
    { name: 'AUTHORITY ALLOTMENT LETTER', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
    { name: 'CONSTRUCTION ESTIMATE FROM REGISTERED ENRINEERARCHITECT', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
    { name: 'INPROVEMENT/CXTEASION ESTIMATE FROM REGISTERED ENRINEERARCHITECT', type: 'Original', refNo: 'ID/MMYYYYY', refDate: '', approvalDetails: '' },
  ]);

  const [selectedDocument, setSelectedDocument] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDocumentChange = (index, field, value) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index][field] = value;
    setDocuments(updatedDocuments);
  };

  const handleFileUpload = (e) => {
    setUploadedFile(e.target.files[0]);
  };

  return (
    <div className="container  mt-4 mb-2">
      {/* Header with toggle functionality */}
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#30384B", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Technical Documents Details</h4>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={e => {
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
          >
            {isOpen ? "Close" : "Edit"}
          </button>
        </div>
      </div>

      {/* Collapsible content */}
      {isOpen && (
        <div className="border p-3 mt-2">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Document Name *</th>
                  <th>DOCUMENT TYPE *</th>
                  <th>REF NO</th>
                  <th>REF DATE</th>
                  <th>Details of the Approval</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={index}>
                    <td>{doc.name}</td>
                    <td>
                      <select 
                        className="form-select form-select-sm"
                        value={doc.type}
                        onChange={(e) => handleDocumentChange(index, 'type', e.target.value)}
                      >
                        <option value="Original">Original</option>
                        <option value="Copy">Copy</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={doc.refNo}
                        onChange={(e) => handleDocumentChange(index, 'refNo', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={doc.refDate}
                        onChange={(e) => handleDocumentChange(index, 'refDate', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        value={doc.approvalDetails}
                        onChange={(e) => handleDocumentChange(index, 'approvalDetails', e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h5>Upload Document</h5>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Select Document Name *</label>
                  <select 
                    className="form-select"
                    value={selectedDocument}
                    onChange={(e) => setSelectedDocument(e.target.value)}
                  >
                    <option value="">-</option>
                    {documents.map((doc, index) => (
                      <option key={index} value={doc.name}>{doc.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">Upload</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      )}
       <div className="d-flex justify-content-end">
              <button style={{background:"#30384B"}} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
    </div>
  );
};

export default DocumentUpload;