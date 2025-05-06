import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const CautionArea = () => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // API call inside useEffect
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/get-caution");
        setFormData(response.data);  // API से जो data आएगा उसे set कर देंगे
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const defaultData = {
    chemicalHazard: true,
    nearCrematorium: true,
    roadExtension: false,
    statutoryNotices: true,
    communityDominated: false,
    garbageDump: true,
    accessIssues: false,
    highTensionLine: true,
    floodProne: true,
    nearNalla: false,
    landLocked: true,
    landReservation: false,
    railTrack: true,
    slumArea: true,
  };

  const finalData = { ...defaultData, ...formData };

  const fieldLabels = {
    chemicalHazard: "Any Chemical Hazard",
    nearCrematorium: "Near Crematorium",
    roadExtension: "Probable Road Extension",
    statutoryNotices: "Statutory Notices On Property",
    communityDominated: "Community Dominated",
    garbageDump: "Near Garbage Dump",
    accessIssues: "Property Access Issues",
    highTensionLine: "Under High Tension Line",
    floodProne: "Flood Prone",
    nearNalla: "Near Nalla",
    landLocked: "Property Is Land Locked",
    landReservation: "Land Reservation",
    railTrack: "Near To Rail Track",
    slumArea: "Slum Area",
  };

  const activeFields = Object.keys(finalData).filter(key => finalData[key]);

  return (
    <div className="mb-4 col-md-12" style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px", background: "#f9f9f9" }}>
      <div className="p-4">
        <h4 style={{ color: "#AC2321" }}>Caution Area</h4>
        
        <Row>
          {activeFields.map((key, index) => (
            <Col key={index} md={3}>
              <p>{fieldLabels[key]}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CautionArea;
