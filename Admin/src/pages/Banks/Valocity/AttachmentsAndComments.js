import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash, FaEdit, FaEye } from 'react-icons/fa';

const AttachmentsAndComments = () => {
  const [showAttachments, setShowAttachments] = useState(true);
  const [showComments, setShowComments] = useState(true);
  const [attachments, setAttachments] = useState([
    {
      id: 1,
      name: 'REGISTRY.pdf',
      type: 'Other',
      fileUrl: '/files/REGISTRY.pdf', // <-- Change this to actual file URL from form/backend
      selected: false,
    },
  ]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newAttachment = {
        id: Date.now(),
        name: file.name,
        type: 'Other',
        fileUrl: URL.createObjectURL(file), // For previewing locally
        selected: false,
      };
      setAttachments([...attachments, newAttachment]);
    }
  };

  const toggleSelect = (id) => {
    setAttachments(prev =>
      prev.map(att =>
        att.id === id ? { ...att, selected: !att.selected } : att
      )
    );
  };

  const deleteSelected = () => {
    setAttachments(prev => prev.filter(att => !att.selected));
  };

  const editFile = (id) => {
    document.getElementById(`edit-input-${id}`).click();
  };

  const handleEditUpload = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      setAttachments(prev =>
        prev.map(att =>
          att.id === id
            ? {
                ...att,
                name: file.name,
                fileUrl: URL.createObjectURL(file),
              }
            : att
        )
      );
    }
  };

  return (
    <div className="container mt-4">
      {/* Attachments */}
      <div className="card shadow-sm mb-3">
        <div
          className="card-header d-flex justify-content-between align-items-center cursor-pointer"
          style={{ cursor: 'pointer' }}
          onClick={() => setShowAttachments(!showAttachments)}
        >
          <h6 style={{ color: '#007b8f' }}   className="mb-0 fw-semibold ">Attachments</h6>
          <span>{showAttachments ? '▼' : '►'}</span>
        </div>
        {showAttachments && (
          <div className="card-body">
            <table className="table table-bordered">
              <thead className="table-info">
                <tr>
                  <th>Select</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {attachments.map((file) => (
                  <tr key={file.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={file.selected}
                        onChange={() => toggleSelect(file.id)}
                      />
                    </td>
                    <td>{file.name}</td>
                    <td>{file.type}</td>
                    <td className="d-flex gap-2">
                      <a
                        href={file.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-outline-primary"
                      >
                        <FaEye />
                      </a>
                      <button
                        className="btn btn-sm btn-outline-warning"
                        onClick={() => editFile(file.id)}
                      >
                        <FaEdit />
                      </button>
                      <input
                        id={`edit-input-${file.id}`}
                        type="file"
                        className="d-none"
                        onChange={(e) => handleEditUpload(e, file.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex align-items-center gap-2">
              <input
                type="file"
                className="form-control"
                onChange={handleFileChange}
              />
              <button className="btn btn-danger" onClick={deleteSelected}>
                <FaTrash /> Delete Selected
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Comments */}
      <div className="card shadow-sm">
        <div
          className="card-header d-flex justify-content-between align-items-center cursor-pointer"
          style={{ cursor: 'pointer' }}
          onClick={() => setShowComments(!showComments)}
        >
          <h6 style={{ color: '#007b8f' }}   className="mb-0 fw-semibold ">Comments</h6>
          <span>{showComments ? '▼' : '►'}</span>
        </div>
        {showComments && (
          <div className="card-body">
            <textarea
              className="form-control mb-2"
              placeholder="Add a new comment..."
              rows={2}
            />
            <button className="btn btn-secondary float-end">Post</button>

            <div className="alert alert-light border mt-5">
              <p className="mb-1">
                The property type determined during valuation differs from the property type set in the order.
              </p>
              <small className="text-muted">
                On Mar 22, 2025 3:40 PM by <strong>Unique Engineering and Associate Bhopal</strong>
              </small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttachmentsAndComments;
