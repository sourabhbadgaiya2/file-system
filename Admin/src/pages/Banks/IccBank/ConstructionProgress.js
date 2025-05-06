import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios";

const ConstructionProgress = () => {
  const [constructionData, setConstructionData] = useState({});
  const [loading, setLoading] = useState(true);  // To handle the loading state
  const [error, setError] = useState(null);  // To handle any API errors

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get-construction ");
        setConstructionData(response.data);  // Set the data in state
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("There was an error fetching the construction progress data.");
      } finally {
        setLoading(false);  // Stop the loading state
      }
    };

    fetchData();
  }, []);

  // Check for loading or error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mb-4" style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", background: "#f9f9f9" }}>
      <div className="p-4">
        <h4 style={{ color: "#AC2321" }}>Construction Progress Details</h4>
        <Row>
          <Col md={3}><strong>Type Of Structure: *</strong><br />{constructionData.typeOfStructure || 'N/A'}</Col>
          <Col md={3}><strong>Structure Configuration:</strong><br />{constructionData.structureConfiguration || 'N/A'}</Col>
          <Col md={3}><strong>Stage Of Completion Amenities (%):</strong><br />{constructionData.stageOfCompletion || 'N/A'}</Col>
          <Col md={3}><strong>Stage Of Recommendation Amenities (%):</strong>{constructionData.stageOfRecommendation || 'N/A'}</Col>
        </Row>

        <Card className="mt-4 p-3" style={{ backgroundColor: "#f1f1f1", border: "2px solid #ddd" }}>
          <h5>Stage of Amenity</h5>
          <Row className="mt-1">
            <Col md={6}><strong>% Completion:</strong> {constructionData.amenityCompletion || 'N/A'}</Col>
            <Col md={6}><strong>% Recommendation:</strong> {constructionData.amenityRecommendation || 'N/A'}</Col>
          </Row>
          <Row className="mt-5">
            <h5 className="mb-2">Stage of Structure</h5>
            <Col md={6}><strong>% Completion:</strong> {constructionData.structureCompletion || 'N/A'}</Col>
            <Col md={6}><strong>% Recommendation:</strong> {constructionData.structureRecommendation || 'N/A'}</Col>
          </Row>
        </Card>

        <Card className="mt-3 p-3">
          <strong>Recommended Value:</strong> ₹{constructionData.recommendedValue || '0'} ({constructionData.recommendedValueWords || 'N/A'})
        </Card>

        <h4 style={{ color: "#AC2321" }} className="mt-4">Comments on Construction</h4>
        <Form.Control as="textarea" placeholder="Please enter your remarks here..." maxLength="1000" defaultValue={constructionData.comments || ''} />
        
        <div className="text-end mt-3">
          <Button variant="primary">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default ConstructionProgress;
