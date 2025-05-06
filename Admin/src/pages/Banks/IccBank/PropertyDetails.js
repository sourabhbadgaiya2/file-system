import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const PropertyDetails = () => {
  const [propertyData, setPropertyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/form-data");
        const data = await response.json();
        console.log(data); // Check structure
        setPropertyData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  const d = propertyData.property;

  return (
    <div className="mb-4" style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", background: "#f9f9f9" }}>
      <h4 style={{ color: "#AC2321", marginBottom: "20px" }}>Property Details</h4>

      <Row>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Pincode<br /><p style={{ color: "#666" }}>{d.pincode}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>State<br /><p style={{ color: "#666" }}>{d.state}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>City<br /><p style={{ color: "#666" }}>{d.city}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>District<br /><p style={{ color: "#666" }}>{d.district}</p></Form.Label></Col>
      </Row>

      <Row className="mt-3">
        <Col md={3}><Form.Label style={{ color: "#333" }}>Locality<br /><p style={{ color: "#666" }}>{d.locality}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Street Name & No.<br /><p style={{ color: "#666" }}>{d.streetName}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Landmark<br /><p style={{ color: "#666" }}>{d.landmark}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Plot No.<br /><p style={{ color: "#666" }}>{d.plotNo}</p></Form.Label></Col>
      </Row>

      <Row className="mt-3">
        <Col md={3}><Form.Label style={{ color: "#333" }}>Property Type<br /><p style={{ color: "#666" }}>{d.propertyType}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Unit Type<br /><p style={{ color: "#666" }}>{d.unitType}</p></Form.Label></Col>
        <Col md={6}><Form.Label style={{ color: "#333" }}>Revenue Record Type & Number<br /><p style={{ color: "#666" }}>{d.revenueRecordTypeNumber}</p></Form.Label></Col>
      </Row>

      <Row className="mt-3">
        <Col md={3}><Form.Label style={{ color: "#333" }}>Sanction Usage<br /><p style={{ color: "#666" }}>{d.sanctionUsage}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Actual Usage<br /><p style={{ color: "#666" }}>{d.actualUsage}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Plot Area (Sqft)<br /><p style={{ color: "#666" }}>{d.plotArea}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Property Jurisdiction<br /><p style={{ color: "#666" }}>{d.propertyJurisdiction}</p></Form.Label></Col>
      </Row>

      <Row className="mt-3">
        <Col md={3}><Form.Label style={{ color: "#333" }}>Sanction Authority Name<br /><p style={{ color: "#666" }}>{d.sanctionAuthorityName}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Society Registered<br /><p style={{ color: "#666" }}>{d.societyRegistered}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Unique Property ID<br /><p style={{ color: "#666" }}>{d.uniquePropertyId}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Property Entrance Facing<br /><p style={{ color: "#666" }}>{d.propertyEntranceFacing}</p></Form.Label></Col>
      </Row>

      <Row className="mt-3">
        <Col md={3}><Form.Label style={{ color: "#333" }}>AFF Flag<br /><p style={{ color: "#666" }}>{d.affFlag}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Property Transaction Type<br /><p style={{ color: "#666" }}>{d.propertyTransactionType}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Count Of Properties<br /><p style={{ color: "#666" }}>{d.countOfProperties}</p></Form.Label></Col>
        <Col md={3}><Form.Label style={{ color: "#333" }}>Door Photo With Name Plate<br /><p style={{ color: "#666" }}>{d.doorPhotoWithNamePlate}</p></Form.Label></Col>
      </Row>
    </div>
  );
};

export default PropertyDetails;