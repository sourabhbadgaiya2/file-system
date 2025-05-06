import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const images = Array(20).fill({
  src: "https://images.unsplash.com/photo-1722080767284-55b5038409a1?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URLs
  name: "WhatsAppImage20250323at22..."
});

const SitePhotographs = () => {
  return (
    <div className="mb-4" style={{   border: "1px solid #ddd", padding: "20px", borderRadius: "10px", background: "#f9f9f9" }}>

    <div className="p-4">
      <h4 style={{ color: "#d9534f" }}>Site Photographs</h4>
      <p>Please upload site photographs, interior and exterior photographs *</p>
      <Row>
        {images.map((img, index) => (
          <Col key={index} md={3} className="mb-3">
            <Card className="p-2">
              <Card.Img 
                variant="top" 
                src={img.src} 
                alt={`Site Image ${index + 1}`} 
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Text style={{ fontSize: "12px" }}>{img.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </div>
  );
};

export default SitePhotographs;