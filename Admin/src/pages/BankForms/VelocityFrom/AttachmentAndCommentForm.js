import React, { useState } from "react";

const AttachmentAndCommentForm = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(null);
  const [attachments, setAttachments] = useState([
    { name: "REGISTRY.pdf", type: "Other" },
  ]);
  const [comments, setComments] = useState([
    {
      text: "The property type determined during valuation differs from the property type set in the order.",
      author: "Unique Engineering and Associate Bhopal",
      date: "Mar 22, 2025 3:40 PM",
    },
  ]);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setAttachments([
        ...attachments,
        { name: uploadedFile.name, type: "Other" },
      ]);
    }
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([
        ...comments,
        {
          text: comment,
          author: "Unique Engineering and Associate Bhopal",
          date: new Date().toLocaleString(),
        },
      ]);
      setComment("");
    }
  };

  const handleDelete = (index) => {
    const updated = attachments.filter((_, i) => i !== index);
    setAttachments(updated);
  };

  return (
    <div className="container mt-4">
      <div
        className="p-3 border rounded"
        style={{ backgroundColor: "#16828E", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="d-flex justify-content-between align-items-center text-white">
          <h4 className="m-0">Attachments & Comments</h4>
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
        <div className="border p-3">
          <h5>Attachments</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {attachments.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <input type="file" onChange={handleFileUpload} className="form-control w-50 mb-3" />

          <h5>Comments</h5>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Add a new comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button style={{background: "#16828E"}}  className="btn btn-primary mt-2" onClick={handleCommentSubmit}>
            Save
            </button>
            
          </div>

          {comments.map((cmt, idx) => (
            <div key={idx} className="border rounded p-2 mb-2">
              <p className="mb-1">{cmt.text}</p>
              <small className="text-muted">
                On {cmt.date} by <strong>{cmt.author}</strong>
              </small>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default AttachmentAndCommentForm;
