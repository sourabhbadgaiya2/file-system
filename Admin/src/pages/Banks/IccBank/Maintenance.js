import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form, Spinner } from "react-bootstrap";
import axios from "axios";

const PropertyMaintenance = () => {
  const [maintenanceData, setMaintenanceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaintenanceData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/form-mint"); // yaha apna API endpoint lagana
        setMaintenanceData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching maintenance data:", error);
        setLoading(false);
      }
    };

    fetchMaintenanceData();
  }, []);

  if (loading) {
    return <div className="text-center"><Spinner animation="border" variant="primary" /></div>;
  }

  if (!maintenanceData) {
    return <div className="text-center">No Maintenance Data Available</div>;
  }

  const boundaries = maintenanceData.boundaries || {};

  return (
    <div className="mb-4 col-md-12" style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", background: "#f9f9f9" }}>
      <div className="p-4">
        <h4 style={{ color: "#AC2321" }}>Property Maintenance</h4>
        <Row>
          <Col md={3}><Form.Label>Property Age(yrs) <br /> <p>{maintenanceData.propertyAge || "-"}</p> </Form.Label></Col>
          <Col md={3}><Form.Label>Residual Age(yrs)  <br /> <p>{maintenanceData.residualAge || "-"}</p> </Form.Label></Col>
          <Col md={3}><Form.Label>Internal Maintenance  <br /> <p>{maintenanceData.internalMaintenance || "-"}</p> </Form.Label></Col>
          <Col md={3}><Form.Label>External Maintenance <br /> <p>{maintenanceData.externalMaintenance || "-"}</p> </Form.Label></Col>
        </Row>

        <h4 style={{ color: "#AC2321" }} className="mt-4">Boundaries</h4>
        <Row>
          {["east", "west", "north", "south"].map((dir, idx) => (
            <Col md={3} key={idx}>
              <Card className="p-3 w-100">
                <h5 style={{ color: "#d9534f" }}>{dir.charAt(0).toUpperCase() + dir.slice(1)}</h5>
                <p><strong>As Per Document *</strong><br />{boundaries[dir]?.document || "-"}</p>
                <p><strong>As Per Site Visit *</strong><br />{boundaries[dir]?.siteVisit || "-"}</p>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-4">
          <Col md={4}><p><strong>Capture Plot Sketch For Irregular Shape Plots <br /></strong> {maintenanceData.capturePlotSketch ? "Yes" : "No"}</p></Col>
          <Col md={4}><p><strong>Plot Demarcated <br /></strong> {maintenanceData.plotDemarcated ? "Yes" : "No"}</p></Col>
          <Col md={4}><p><strong>Boundaries Are Matching <br /></strong> {maintenanceData.boundariesMatching ? "Yes" : "No"}</p></Col>
        </Row>

        <h4 style={{ color: "#AC2321" }} className="mt-4">Remarks</h4>
        <Form.Control as="textarea" value={maintenanceData.remarks || "-"} readOnly />

        <div className="text-end mt-3">
          <Button variant="primary">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyMaintenance;
