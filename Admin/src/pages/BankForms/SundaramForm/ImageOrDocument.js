import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Image, ButtonGroup, Form } from 'react-bootstrap';

const UploadAndDocuments = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [uploadedImages, setUploadedImages] = useState({
    'Front Elevation': [],
    'Door / Plot No': [],
    'Road View': [],
    'Hall': [],
    'Kitchen': [],
    'Bed Room': [],
    'Toilet': [],
    'Others': []
  });
  const [uploadedDocuments, setUploadedDocuments] = useState({
    'Title Deed': [],
    'Tax Receipt': [],
    'Ownership Proof': []
  });

  const handleImageUpload = (category, files) => {
    const newFiles = Array.from(files);
    setUploadedImages((prev) => ({
      ...prev,
      [category]: [...prev[category], ...newFiles]
    }));
  };

  const handleDocumentUpload = (docType, files) => {
    const newFiles = Array.from(files);
    setUploadedDocuments((prev) => ({
      ...prev,
      [docType]: [...prev[docType], ...newFiles]
    }));
  };

  const renderImageSection = (images) => (
    Object.entries(images).map(([label, files], index) => (
      <div key={index} className="mb-4">
        <h6>{label}</h6>
        <Form.Group>
          <Form.Control
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleImageUpload(label, e.target.files)}
          />
        </Form.Group>
        <Row>
          {files.map((file, i) => (
            <Col key={i} xs={6} md={3} lg={2} className="mb-3">
              <Image src={URL.createObjectURL(file)} thumbnail style={{ height: '100px', objectFit: 'cover' }} />
            </Col>
          ))}
        </Row>
      </div>
    ))
  );

  const renderDocumentSection = (documents) => (
    Object.entries(documents).map(([label, files], index) => (
      <div key={index} className="mb-4">
        <h6>{label}</h6>
        <Form.Group>
          <Form.Control
            type="file"
            multiple
            accept=".pdf,.docx,.txt"
            onChange={(e) => handleDocumentUpload(label, e.target.files)}
          />
        </Form.Group>
        <Row>
          {files.map((file, i) => (
            <Col key={i} xs={6} md={3} lg={2} className="mb-3">
              <div className="small text-truncate">{file.name}</div>
            </Col>
          ))}
        </Row>
      </div>
    ))
  );

  return (
    <div className="container py-4">
      <ButtonGroup className="mb-4">
        <Button 
          variant={activeTab === 'images' ? 'primary' : 'outline-primary'} 
          onClick={() => setActiveTab('images')}
        >
          Image Upload
        </Button>
        <Button 
          variant={activeTab === 'documents' ? 'primary' : 'outline-primary'} 
          onClick={() => setActiveTab('documents')}
        >
          Property Documents Upload
        </Button>
      </ButtonGroup>

      {/* Render content based on the active tab */}
      {activeTab === 'images' && renderImageSection(uploadedImages)}

      {activeTab === 'documents' && renderDocumentSection(uploadedDocuments)}
    </div>
  );
};

export default UploadAndDocuments;
