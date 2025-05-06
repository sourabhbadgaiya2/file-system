import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

const DistanceRangeProperty = () => {
  const [distanceData, setDistanceData] = useState({});
  const [loading, setLoading] = useState(true);  // To handle loading state
  const [error, setError] = useState(null);  // To handle errors

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get-Distance"); // Replace with your API endpoint
        setDistanceData(response.data);  // Set the fetched data into state
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("There was an error fetching the distance range data.");
      } finally {
        setLoading(false);  // Stop loading after the data is fetched
      }
    };

    fetchData();
  }, []);

  // Show loading or error message if applicable
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mb-4" style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", background: "#f9f9f9" }}>
      <div className="p-4">
        <h4 style={{ color: " #AC2321 " }}>Distance Range of the Property</h4>
        <Row>
          <Col md={3}><p><strong>Distance From CPC (kms): <br /></strong> {distanceData.distanceFromCPC || 'N/A'}</p></Col>
          <Col md={3}><p><strong>Distance From City Center (kms): <br /></strong> {distanceData.distanceFromCityCenter || 'N/A'}</p></Col>
          <Col md={3}><p><strong>Distance From ICICI Bank Sourcing Branch (kms): </strong> {distanceData.distanceFromBank || 'N/A'}</p></Col>
          <Col md={3}><p><strong>Latitude: <br /></strong> {distanceData.latitude || 'N/A'}</p></Col>
        </Row>
        <Row>
          <Col md={3}><p><strong>Longitude:</strong> {distanceData.longitude || 'N/A'}</p></Col>
          <Col md={3}><p><strong>One Way Distance From Operating Location (kms):</strong> {distanceData.oneWayDistance || 'N/A'}</p></Col>
        </Row>
        
        <h4 className="mt-4">Location Map</h4>
        <Card className="p-3">
          <iframe
            title="Google Map"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps?q=${distanceData.latitude},${distanceData.longitude}&z=15&output=embed`}
            allowFullScreen
          ></iframe>
        </Card>
        
        <div className="text-end mt-3">
          <Button variant="primary">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default DistanceRangeProperty;
