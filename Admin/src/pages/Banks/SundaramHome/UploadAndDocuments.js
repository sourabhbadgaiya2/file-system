import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Image, ButtonGroup } from 'react-bootstrap';

const UploadAndDocuments = () => {
  const [activeTab, setActiveTab] = useState('images');

  const imagePath = 'https://images.unsplash.com/photo-1742943892627-f7e4ddf91224?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8';

  const imageData = {
    images: {
      'Front Elevation': [imagePath, imagePath],
      'Door / Plot No': [imagePath],
      'Road View': [imagePath, imagePath],
      Hall: [imagePath, imagePath],
      Kitchen: [imagePath],
      'Bed Room': [imagePath, imagePath],
      Toilet: [imagePath, imagePath],
      Others: [imagePath, imagePath]
    },
    documents: {
      'Title Deed': [imagePath],
      'Tax Receipt': [imagePath, imagePath],
      'Ownership Proof': [imagePath]
    }
  };

  const renderSection = (data) => (
    Object.entries(data).map(([label, images], index) => (
      <div key={index} className="mb-4">
        <h6>{label}</h6>
        <Row>
          {images.map((src, i) => (
            <Col key={i} xs={6} md={3} lg={2} className="mb-3">
              <Image src={src} thumbnail style={{ height: '100px', objectFit: 'cover' }} />
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

      {activeTab === 'images' && renderSection(imageData.images)}
      {activeTab === 'documents' && renderSection(imageData.documents)}
    </div>
  );
};

export default UploadAndDocuments;
